import YourPhotos from './YourPhotos';

import {
    useInfiniteQuery,
} from '@tanstack/react-query';
import { GlobalContext } from '../../Root';
import { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { client } from '../../app/api';
import { useInView } from 'react-intersection-observer';

const YourPhotosContainer = () => {
    const { key, face_id } = useParams();
    const globalContext = useContext(GlobalContext)
    const [enabledData, setEnabledData] = useState(true);
    const [refetchIsPending, setRefetchIsPending] = useState(false);

    const navigate = useNavigate();
    const { ref, inView } = useInView();

    const {
        data,
        status,
        isFetching,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ['yourPhotosData'],
        queryFn: async ({ pageParam }) => {
            const response = await client('/event-file/search-by-face', {
                params: {
                    face_id: face_id || key,
                    next_token: pageParam,
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            });

            setRefetchIsPending(false);

            return {
                data: response.data.files,
                nextToken: response.data.next_token
            };
        },
        enabled: enabledData,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        initialPageParam: null,
        getNextPageParam: (lastPage) => {
            return lastPage.nextToken;
        }
    });

    useEffect(() => {
        setRefetchIsPending(true);
        setEnabledData(false);
        
        setTimeout(() => {
            setEnabledData(true);
        }, 300);
    }, [key]);

    const onPhotoClick = photo => {
        navigate(`/your-gallery/photo/${face_id || key}/${photo.key}`);

        globalContext.scrollFn();
    };

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

  return (
    <YourPhotos reference={ref} data={data} onPhotoClick={onPhotoClick} status={status} refetchIsPending={refetchIsPending} isFetching={isFetching}/>
  )
};

export default YourPhotosContainer;

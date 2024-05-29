import YourPhotos from './YourPhotos';

import {
    useInfiniteQuery,
} from '@tanstack/react-query';
import { GlobalContext } from '../../Root';
import { useEffect, useRef, useContext } from 'react';
import { useParams, useNavigate, useLocation  } from 'react-router-dom';

import { client } from '../../app/api';
import { useInView } from 'react-intersection-observer';

const YourPhotosContainer = () => {
    const { key, face_id } = useParams();
    const location = useLocation();
    const prevKey = useRef(face_id);
    const prevLocation = useRef(location);
    const globalContext = useContext(GlobalContext)

    const navigate = useNavigate();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (prevKey.current !== face_id && (prevLocation.current.pathname !== location.pathname)) {
            window.location.reload();
        }
    }, [location, face_id, prevKey]);

    const {
        data,
        status,
        isFetching,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ['yourPhotosData'],
        queryFn: async ({ pageParam }) => {
            console.log(face_id);
            const response = await client('/event-file/search-by-face', {
                params: {
                    face_id: face_id || key,
                    next_token: pageParam,
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            })

            return {
                data: response.data.files,
                nextToken: response.data.next_token
            };
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        initialPageParam: null,
        getNextPageParam: (lastPage) => {
            return lastPage.nextToken;
        }
    });

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
    <YourPhotos reference={ref} data={data} onPhotoClick={onPhotoClick} status={status} isFetching={isFetching}/>
  )
};

export default YourPhotosContainer;

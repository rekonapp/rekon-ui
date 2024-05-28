import YourPhotos from './YourPhotos';

import {
    useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../../app/api';
import { useInView } from 'react-intersection-observer';

const YourPhotosContainer = () => {
    const { key } = useParams();
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
                    face_id: key,
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

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

  return (
    <YourPhotos reference={ref} data={data} status={status} isFetching={isFetching}/>
  )
};

export default YourPhotosContainer;

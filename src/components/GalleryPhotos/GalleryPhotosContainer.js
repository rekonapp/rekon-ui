import { useEffect } from 'react';
import { client } from '../../app/api';
import GalleryPhotos from './GalleryPhotos'

import {
    useInfiniteQuery,
} from '@tanstack/react-query';

import { useInView } from 'react-intersection-observer';

const GalleryPhotosContainer = () => {
    const { ref, inView } = useInView()
    const {
        data,
        status,
        isFetching,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ['data'],
        queryFn: async ({ pageParam }) => {
            if (!pageParam) {
                return;
            }

            const response = await client('/event-file', {
                params: {
                    page: pageParam,
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            })

            return {
                data: response.data
            };
        },
        refetchOnWindowFocus: false,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) {
                return undefined
            }

            return lastPageParam + 1;
        }
    });

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    return (
        <>
            <GalleryPhotos reference={ref} status={status} data={data} loadingPagination={isFetching}/>
        </>
    )
}

export default GalleryPhotosContainer

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
        queryKey: ['projects'],
        queryFn: async ({ pageParam }) => {
            const response = await client('/event-file', {
                params: {
                    page: pageParam,
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            })

            return {
                data: response.data,
                nextPage: response.data.length === 0 ? null : pageParam + 1,
            };
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage
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

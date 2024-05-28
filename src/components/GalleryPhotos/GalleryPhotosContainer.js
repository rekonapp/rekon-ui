import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { client } from '../../app/api';
import { GlobalContext } from '../../Root';
import GalleryPhotos from './GalleryPhotos';

import {
    useInfiniteQuery,
} from '@tanstack/react-query';

import { useInView } from 'react-intersection-observer';

const GalleryPhotosContainer = () => {
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext)
    const { ref, inView } = useInView();
    const onPhotoClick = photo => {
        navigate({
            pathname: `/event-gallery/photo/${photo.key}`,
        });

        globalContext.scrollFn();
    };

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
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.data.length === 0) {
                return undefined;
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
            <GalleryPhotos
                data={data}
                status={status}
                reference={ref}
                onPhotoClick={onPhotoClick}
                scrollReference={globalContext.scrollRef}
                loadingPagination={isFetching}
            />
        </>
    )
};

export default GalleryPhotosContainer

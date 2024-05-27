import PropTypes from 'prop-types';
import YourPhotos from './YourPhotos';

import {
    useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../../app/api';
import { useInView } from 'react-intersection-observer';

const YourPhotosContainer = ({
    scrollRef,
    onPhotoClick
}) => {
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
            if (!pageParam) {
                return;
            }

            const response = await client('/event-file/search-by-face', {
                params: {
                    face_id: key,
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
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.nextToken === null) {
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
    <YourPhotos ref={ref} data={data} status={status} isFetching={isFetching} scrollRef={scrollRef} onPhotoClick={onPhotoClick}/>
  )
};

YourPhotosContainer.propTypes = {
    scrollRef: PropTypes.object,
    onPhotoClick: PropTypes.func.isRequired
};

export default YourPhotosContainer

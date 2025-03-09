import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Root';
import { client } from '../../app/api';
import { useQuery } from '@tanstack/react-query';

const useEventGalleryContainer = () => {
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext)
    const onPhotoClick = photo => {
        navigate({
            pathname: `/event-gallery/photo/${photo.key}`,
        });

        globalContext.scrollFn();
    };

    const { data, status, isLoading: isFetching } = useQuery({
        queryKey: ['eventFiles'],
        queryFn: async () => {
            const response = await client('/event-file', {
                params: {
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            });

            return response.data;
        }
    });

    return {
        data,
        status,
        isFetching,
        onPhotoClick
    };
};

export default useEventGalleryContainer;

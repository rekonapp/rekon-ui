import { client } from '../../app/api';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

const useYourGalleryPhotoContainer = () => {
    const { key } = useParams();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);

                const response = await client(`/event-file/${key}`);

                setPhoto(response.data.file);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        loadData();
    }, [key]);

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

    const onPhotoClick = photo => {
        navigate({
            pathname: `/event-gallery/photo/${photo.key}`,
        });
    };

    return {
        key,
        photo,
        loading,
        onPhotoClick,
        data,
        status,
        isFetching
    }
}

export default useYourGalleryPhotoContainer;

import { client } from '../../app/api';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

const useYourGalleryPhotoContainer = () => {
    const { key, face_id } = useParams();
    const navigate = useNavigate();

    const { data: photo, refetch: refetchPhoto } = useQuery({
        queryKey: ['eventFiles', key],
        queryFn: async () => {
            const response = await client(`/event-file/${key}`);
            return response.data.file;
        }
    });

    const { data, isLoading: isFetching } = useQuery({
        queryKey: ['profileFiles', face_id],
        queryFn: async () => {
            const response = await client(`/event-file/profile/${face_id}`, {
                params: {
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            });
            return response.data.files;
        }
    });

    const onPhotoClick = photo => {
        navigate({
            pathname: `/your-gallery/photo/${face_id || key}/${photo.key}`,
        });

        refetchPhoto();
    };

    return {
        key,
        photo,
        loading: isFetching,
        onPhotoClick,
        data,
        isFetching
    }
}

export default useYourGalleryPhotoContainer;

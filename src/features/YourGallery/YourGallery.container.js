import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { client } from '../../app/api'; 
import { GlobalContext } from '../../Root';

const useYourGalleryContainer = () => {
    const { face_id, key } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const [url, setUrl] = useState(null);
    const [isConfirmationStep, setIsConfirmationStep] = useState(false);
    const globalContext = useContext(GlobalContext);
    
    // Safely access state properties with default values
    const { 
        is_confirmation_step = false, 
        url: profileUrlImage = null, 
    } = state || {};

    const {
        data,
        isLoading,
    } = useQuery({
        queryKey: ['event-file', key],
        queryFn: async () => {
            const response = await client(`/event-file/profile/${key}`, {
                params: {
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            });

            return response.data;
        },
        onSuccess: (data) => {
            if (data?.profile?.url) {
                setUrl(data.profile.url);
            }
        }
    });

    // Effect to handle confirmation step
    useEffect(() => {
        if (is_confirmation_step && profileUrlImage) {
            setUrl(profileUrlImage);
            setIsConfirmationStep(true);
        }

    }, [is_confirmation_step, profileUrlImage]);

    // Function to handle face confirmation
    const loadData = async () => {
        try {
            // Reset confirmation state
            setIsConfirmationStep(false);
        } catch (error) {
            console.error('Error confirming face:', error);
            globalContext.setGlobalLoading(false);
        }
    };

    const onPhotoClick = photo => {
        navigate(`/your-gallery/photo/${face_id || key}/${photo.key}`);

        globalContext.scrollFn();
    };

    return {
        key,
        url,
        onPhotoClick,
        isConfirmationStep,
        isLoading,
        photo: {
            url: data?.profile?.url,
            thumb_url: data?.profile?.thumb_url,
            key: key
        },
        onConfirmFaceClick: loadData,
        data: data?.files
    }
};

export default useYourGalleryContainer;
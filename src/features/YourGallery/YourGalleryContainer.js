import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import YourGallery from './YourGallery'
import { client } from '../../app/api'; 
import { GlobalContext } from '../../Root';
import GlobalLoader from '../../components/GlobalLoader';

const YourGalleryContainer = () => {
    const { key } = useParams();
    const { state } = useLocation();
    const [url, setUrl] = useState(null);
    const [isConfirmationStep, setIsConfirmationStep] = useState(false);
    const globalContext = useContext(GlobalContext);
    
    // Safely access state properties with default values
    const { 
        is_confirmation_step = false, 
        url: profileUrlImage = null, 
    } = state || {};

    const {
        isLoading,
    } = useQuery({
        queryKey: ['event-file', key],
        queryFn: async () => {
            const response = await client(`/event-file/profile/${key}`, {
                params: {
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            });
            return response;
        },
        enabled: !!key && !is_confirmation_step,
        onSuccess: (data) => {
            if (data && data.url) {
                setUrl(data.url);
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

    // Show global loader if global loading state is true
    if (globalContext.globalLoading) {
        return <GlobalLoader />;
    }

    return (
        <YourGallery 
            loading={isLoading} 
            url={url} 
            isConfirmationStep={isConfirmationStep} 
            profileUrlImage={profileUrlImage} 
            onConfirmFaceClick={loadData}
        />
    );
};

export default YourGalleryContainer;
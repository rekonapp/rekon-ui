import Actions from './Actions';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { GlobalContext } from '../../../Root';
import { openModal } from '../../../utils/modal';
import { client } from '../../../app/api'; 
import ModalUploadImageContainer from '../../../components/FloatingActions/ModalUploadImage/';
import { useEffect, useState, useContext } from 'react';

const ActionsContainer = () => {
    const [file, setFile] = useState(null);
    const globalContext = useContext(GlobalContext);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const onGalleryEventButtonClick = () => {
        navigate('/event-gallery');
    };

    const isMobileDevice = useMediaQuery('(max-width: 50em)');

    useEffect(() => {
        setIsMobile(isMobileDevice);
    }, [isMobileDevice])

    useEffect(() => {
        if (!file)  {
            return;
        }

        const uploadFile = async () => {
            try {
                globalContext.setGlobalLoading(true);
    
                const formData = new FormData();
                formData.append('file', file[0]);
                formData.append('event_key', globalContext.event_key);
    
                const response = await client('/event-file/search', {
                    method: 'POST',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                if (!response.data.profile) {
                    navigate('/your-gallery/not-found', { state: { data: { url: null } } });
    
                    globalContext.setGlobalLoading(false);
    
                    return;
                }
    
                navigate(`/your-gallery/${response.data.profile.face_id  || 'not-found'}`, {
                    replace: true,
                    state: {
                        is_confirmation_step: true,
                        url: response.data.profile.url,
                        face_id: response.data.profile.face_id
                    }
                });
    
                globalContext.setGlobalLoading(false);
            } catch (error) {
                globalContext.setGlobalLoading(false);
            }
        };

        uploadFile();
    }, [file, globalContext, navigate])

    const onFindMeClick = () => {
        if (isMobile) {
            return;
        }

        openModal({
            radius: 'lg',
            title: 'Envie uma foto com seu rosto e veja a magia!',
            children: <ModalUploadImageContainer/>
        })
    };
    
	return (
		<Actions
            setFile={setFile}
            isMobile={isMobile}
            onFindMeClick={onFindMeClick}
            onGalleryEventButtonClick={onGalleryEventButtonClick}
        />
	);
};

export default ActionsContainer;

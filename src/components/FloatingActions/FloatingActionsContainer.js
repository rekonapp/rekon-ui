import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

import { GlobalContext } from '../../Root';
import { openModal } from '../../utils/modal';
import FloatingActions from './FloatingActions';
import ModalUploadImageContainer from './ModalUploadImage/';

import { client } from '../../app/api'; 
import { useEffect, useState } from 'react';
import { exportBase64 } from '../../utils/file';

const FloatingActionsContainer = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const globalContext = useContext(GlobalContext);
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
                const base64 = await exportBase64(new Blob([file[0]]));
                
                globalContext.setGlobalLoading(true);
    
                const response = await client('/event-file/search', {
                    method: 'POST',
                    data: {
                        image: base64,
                        event_key: globalContext.event_key
                    }
                });
    
                if (!response.data) {
                    navigate('/your-gallery/not-found', { state: { data: { url: null } } });
    
                    globalContext.setGlobalLoading(false);
    
                    return;
                }
    
                navigate(`/your-gallery/${response.data.face_id || 'not-found'}`, { replace: true });

                globalContext.setGlobalLoading(false);
            } catch (error) {
                navigate('/your-gallery/not-found', { state: { data: { url: null } } });
                globalContext.setGlobalLoading(false);
            }
        };

        uploadFile();
    }, [file, globalContext, navigate])

    const onFindClick = () => {
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
        <FloatingActions
            setFile={setFile}
            isMobile={isMobile}
            onFindClick={onFindClick}
            onScrollClick={globalContext.scrollFn}
        />
	);
};

export default FloatingActionsContainer;

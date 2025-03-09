import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from '../../../Root';
import { closeModal } from '../../../utils/modal';
import ModalUploadImage from './ModalUploadImage';
import { client } from '../../../app/api'; 
import { notifications } from '@mantine/notifications';

const ModalUploadImageContainer = () => {
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext);

    const [file, setFile] = useState(null);
    const dropzoneControl = {
        onSuccess: async files => {
            setFile(files[0]);
        }
    };

    const onRejectFile = () => {
        notifications.show({
            color: 'red',
            title: 'Opa, temos um problema!',
            message: 'Não foi possível inserir o seu arquivo, verifique o tamanho ou tipo dele.'
        });
    };

    const onFindClick = async () => {
        try {
            closeModal();

            globalContext.setGlobalLoading(true);

            const formData = new FormData();
            formData.append('file', file);
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

    return (
        <ModalUploadImage onFindClick={onFindClick} onRejectFile={onRejectFile} file={file} dropzoneControl={dropzoneControl}/>
    )
}

export default ModalUploadImageContainer
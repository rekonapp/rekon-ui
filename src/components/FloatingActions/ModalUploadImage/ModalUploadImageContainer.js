import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from '../../../Root';
import { closeModal } from '../../../utils/modal';
import ModalUploadImage from './ModalUploadImage';
import { exportBase64 } from '../../../utils/file';
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
            const base64 = await exportBase64(new Blob([file]));

            closeModal();

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
            globalContext.setGlobalLoading(false);
        }
    };

    return (
        <ModalUploadImage onFindClick={onFindClick} onRejectFile={onRejectFile} file={file} dropzoneControl={dropzoneControl}/>
    )
}

export default ModalUploadImageContainer
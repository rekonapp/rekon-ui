import { useState, useContext } from 'react';
import { GlobalContext } from '../../../Root';
import { closeModal } from '../../../utils/modal';
import ModalUploadImage from './ModalUploadImage';
import { exportBase64 } from '../../../utils/file';
import { client } from '../../../app/api'; 

const ModalUploadImageContainer = () => {
    const globalContext = useContext(GlobalContext);

    const [file, setFile] = useState(null);
    const dropzoneControl = {
        onSuccess: async files => {
            setFile(files[0]);
        }
    };

    const onFindClick = async () => {
        try {
            const base64 = await exportBase64(new Blob([file]));

            closeModal();

            globalContext.setGlobalLoading(true);

            await client('/event-file/search', {
                method: 'POST',
                data: {
                    image: base64,
                    event_key: globalContext.event_key
                }
            });

            globalContext.setGlobalLoading(false);
        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    };

    return (
        <ModalUploadImage onFindClick={onFindClick} file={file} dropzoneControl={dropzoneControl}/>
    )
}

export default ModalUploadImageContainer
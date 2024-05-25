import { useState, useContext } from 'react';
import { GlobalContext } from '../../../Root';
import { closeModal } from '../../../utils/modal';
import ModalUploadImage from './ModalUploadImage';

const ModalUploadImageContainer = () => {
    const globalContext = useContext(GlobalContext);

    const [file, setFile] = useState(null);
    const dropzoneControl = {
        onSuccess: files => {
            setFile(files[0]);
        }
    };

    const onFindClick = () => {
        closeModal();

        globalContext.setGlobalLoading(true);

        setTimeout(() => {
            globalContext.setGlobalLoading(false);
        }, 3000);
    };

    return (
        <ModalUploadImage onFindClick={onFindClick} file={file} dropzoneControl={dropzoneControl}/>
    )
}

export default ModalUploadImageContainer
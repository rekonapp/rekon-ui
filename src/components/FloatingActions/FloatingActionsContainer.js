import { useContext } from 'react';
import { useMediaQuery } from '@mantine/hooks';

import { GlobalContext } from '../../Root';
import { openModal } from '../../utils/modal';
import FloatingActions from './FloatingActions';
import ModalUploadImageContainer from './ModalUploadImage/';

const FloatingActionsContainer = () => {
    const globalContext = useContext(GlobalContext);
    const isMobile = useMediaQuery('(max-width: 50em)');

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
            onFindClick={onFindClick}
            onScrollClick={globalContext.scrollFn}
        />
	);
};

export default FloatingActionsContainer;

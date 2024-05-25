import PropTypes from 'prop-types';
import { openModal } from '../../utils/modal';
import { useMediaQuery } from '@mantine/hooks';
import FloatingActions from './FloatingActions';
import ModalUploadImageContainer from './ModalUploadImage/';

const FloatingActionsContainer = ({
    scrollIntoView
}) => {
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
            onScrollClick={scrollIntoView}
        />
	);
};

FloatingActionsContainer.propTypes = {
    scrollIntoView: PropTypes.func.isRequired
}

export default FloatingActionsContainer;

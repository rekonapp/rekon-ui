import Actions from './Actions';
import { useNavigate } from 'react-router-dom';

const ActionsContainer = () => {
    const navigate = useNavigate();

    const onGalleryEventButtonClick = () => {
        navigate('/event-gallery');
    };
    
	return (
		<Actions
            onGalleryEventButtonClick={onGalleryEventButtonClick}
        />
	);
};

export default ActionsContainer;

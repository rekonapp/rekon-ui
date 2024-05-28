import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import YourPhoto from './YourPhoto';

const YourPhotoContainer = ({ imageUrl, imageKey }) => {
    const { key }  = useParams();

    return (
        <YourPhoto active={key === imageKey} imageUrl={imageUrl}/>
    )
}

YourPhotoContainer.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageKey: PropTypes.string.isRequired
};

export default YourPhotoContainer;

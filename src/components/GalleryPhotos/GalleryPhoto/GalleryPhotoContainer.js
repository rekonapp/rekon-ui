import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import GalleryPhoto from './GalleryPhoto';

const GalleryPhotoContainer = ({ imageUrl, imageKey }) => {
    const { key }  = useParams();

    return (
        <GalleryPhoto active={key === imageKey} imageUrl={imageUrl}/>
    )
}

GalleryPhotoContainer.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageKey: PropTypes.string.isRequired
};

export default GalleryPhotoContainer

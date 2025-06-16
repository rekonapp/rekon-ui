import PropTypes from 'prop-types';

import GalleryPhoto from './GalleryPhoto';

const GalleryPhotoContainer = ({ imageUrl, imageKey, activeImageKey }) => <GalleryPhoto active={activeImageKey === imageKey} imageUrl={imageUrl}/>

GalleryPhotoContainer.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageKey: PropTypes.string.isRequired,
    activeImageKey: PropTypes.string
};

export default GalleryPhotoContainer

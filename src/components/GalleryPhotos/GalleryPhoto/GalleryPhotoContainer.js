import PropTypes from 'prop-types';
import GalleryPhoto from './GalleryPhoto';

const GalleryPhotoContainer = ({ imageUrl }) => {
  return (
    <GalleryPhoto imageUrl={imageUrl}/>
  )
}

GalleryPhotoContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default GalleryPhotoContainer

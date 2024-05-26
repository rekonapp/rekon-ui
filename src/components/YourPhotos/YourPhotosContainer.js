import PropTypes from 'prop-types';
import YourPhotos from './YourPhotos';

const YourPhotosContainer = ({
    scrollRef,
    onPhotoClick
}) => {
  return (
    <YourPhotos scrollRef={scrollRef} onPhotoClick={onPhotoClick}/>
  )
};

YourPhotosContainer.propTypes = {
    scrollRef: PropTypes.object,
    onPhotoClick: PropTypes.func.isRequired
};

export default YourPhotosContainer

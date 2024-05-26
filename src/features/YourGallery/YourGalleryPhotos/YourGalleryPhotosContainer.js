import PropTypes from 'prop-types';
import YourGalleryPhotos from './YourGalleryPhotos';

const YourGalleryPhotosContainer = ({
    url,
    loading,
    scrollRef,
    onGalleryPhotosClick
}) => {
    return (
        <YourGalleryPhotos onGalleryPhotosClick={onGalleryPhotosClick} scrollRef={scrollRef} loading={loading} url={url}/>
    )
};

YourGalleryPhotosContainer.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    onGalleryPhotosClick: PropTypes.func.isRequired
}

export default YourGalleryPhotosContainer;
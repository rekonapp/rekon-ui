import PropTypes from 'prop-types';
import YourGalleryPhotos from './YourGalleryPhotos';

const YourGalleryPhotosContainer = ({
    url,
    loading,
    scrollRef
}) => {
    return (
        <YourGalleryPhotos scrollRef={scrollRef} loading={loading} url={url}/>
    )
};

YourGalleryPhotosContainer.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
    loading: PropTypes.bool.isRequired
}

export default YourGalleryPhotosContainer;
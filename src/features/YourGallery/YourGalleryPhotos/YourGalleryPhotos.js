import PropTypes from 'prop-types';
import GalleryPhotosContainer from '../../../components/GalleryPhotos/';
import YourPhotosContainer from '../../../components/YourPhotos/';

const YourGalleryPhotos = ({
    url,
    loading,
    scrollRef
}) => {
  return (
    !loading && (
        url && (
            <YourPhotosContainer scrollRef={scrollRef} onPhotoClick={() => {
                console.log('photo clicked');
            }}/>
        ) || (
            <GalleryPhotosContainer scrollRef={scrollRef} onPhotoClick={() => {
                console.log('photo clicked');
            }}/>
        )
    )
  )
}

YourGalleryPhotos.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
    loading: PropTypes.bool.isRequired
}

export default YourGalleryPhotos;

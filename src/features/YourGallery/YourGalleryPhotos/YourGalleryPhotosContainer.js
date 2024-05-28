import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../../../Root';
import YourGalleryPhotos from './YourGalleryPhotos';

const YourGalleryPhotosContainer = ({
    url,
    loading
}) => {
    const globalContext = useContext(GlobalContext);
    return (
        <YourGalleryPhotos scrollRef={globalContext.scrollRef} loading={loading} url={url}/>
    )
};

YourGalleryPhotosContainer.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
    loading: PropTypes.bool.isRequired
}

export default YourGalleryPhotosContainer;
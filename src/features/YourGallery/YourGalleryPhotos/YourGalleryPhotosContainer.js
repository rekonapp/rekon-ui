import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../../../Root';
import YourGalleryPhotos from './YourGalleryPhotos';

const YourGalleryPhotosContainer = ({
    url
}) => {
    const globalContext = useContext(GlobalContext);

    return (
        <YourGalleryPhotos scrollRef={globalContext.scrollRef} url={url}/>
    )
};

YourGalleryPhotosContainer.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
}

export default YourGalleryPhotosContainer;
import PropTypes from 'prop-types';
import GalleryPhoto from './GalleryPhoto';
import { useSelector } from 'react-redux';
import { getEventGalleryPhotoById } from '../../../reducers/entities/event-gallery';

const GalleryPhotoContainer = ({ id }) => {
    const galleryPhoto = useSelector(state => getEventGalleryPhotoById(state, id));
    
    return (
        <GalleryPhoto imageUrl={galleryPhoto.thumb_url}/>
    )
}

GalleryPhotoContainer.propTypes = {
  id: PropTypes.number.isRequired
};

export default GalleryPhotoContainer

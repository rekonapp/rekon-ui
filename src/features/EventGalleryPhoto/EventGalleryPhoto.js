import {
    Container
} from '@mantine/core';

import PropTypes from 'prop-types';
import PhotoContainer from '../../components/Photo/';
import FloatingMenuContainer from '../../components/FloatingMenu/';
import GalleryPhotosContainer from '../../components/GalleryPhotos/';
import FloatingActionsContainer from '../../components/FloatingActions/';

const EventGalleryPhoto = ({
    scrollRef,
    onPhotoClick,
    scrollIntoView,
}) => {
  return (
    <Container size='sm' pt='4rem'>
        <FloatingMenuContainer/>
        <PhotoContainer/>
        <GalleryPhotosContainer onPhotoClick={onPhotoClick} scrollRef={scrollRef}/>
        <FloatingActionsContainer scrollIntoView={scrollIntoView}/>
    </Container>
  )
};

EventGalleryPhoto.propTypes = {
    scrollRef: PropTypes.object.isRequired,
    scrollIntoView: PropTypes.func.isRequired,
    onPhotoClick: PropTypes.func.isRequired
};

export default EventGalleryPhoto;
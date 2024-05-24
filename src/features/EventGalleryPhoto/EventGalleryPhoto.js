import {
    Container
} from '@mantine/core';

import PhotoContainer from '../../components/Photo/';
import FloatingMenuContainer from '../../components/FloatingMenu/';
import GalleryPhotosContainer from '../../components/GalleryPhotos/';
import FloatingActionsContainer from '../../components/FloatingActions/';

const EventGalleryPhoto = () => {
  return (
    <Container size='sm' pt='4rem'>
        <FloatingMenuContainer/>
        <PhotoContainer/>
        <GalleryPhotosContainer/>
        <FloatingActionsContainer/>
    </Container>
  )
}

export default EventGalleryPhoto;
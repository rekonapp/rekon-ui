import {
    Container
} from '@mantine/core';

import FloatingMenuContainer from '../../components/FloatingMenu/';
import GalleryPhotosContainer from '../../components/GalleryPhotos/';
import FloatingActionsContainer from '../../components/FloatingActions/';
import Photo from '../../components/Photo/';
import useEventGalleryPhotoContainer from './EventGalleryPhoto.container';

const EventGalleryPhoto = () => {
    const { key, photo, loading, onPhotoClick, data, status, isFetching } = useEventGalleryPhotoContainer();

  return (
    <Container size='sm' pt='4rem'>
        <FloatingMenuContainer/>
        <Photo photo={photo} loading={loading} />
        <GalleryPhotosContainer onPhotoClick={onPhotoClick} data={data} status={status} isFetching={isFetching} activeImageKey={key}/>
        <FloatingActionsContainer/>
    </Container>
  )
};

export default EventGalleryPhoto;
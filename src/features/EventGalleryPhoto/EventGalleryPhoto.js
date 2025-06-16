import {
    Container
} from '@mantine/core';

import FloatingMenuContainer from '../../components/FloatingMenu/';
import GalleryPhotosContainer from '../../components/GalleryPhotos/';
import FloatingActionsContainer from '../../components/FloatingActions/';
import Photo from '../../components/Photo/';
import useEventGalleryPhotoContainer from './EventGalleryPhoto.container';
import { useContext } from 'react';
import { GlobalContext } from '../../Root';
import GlobalLoader from '../../components/GlobalLoader';

const EventGalleryPhoto = () => {
    const { key, photo, loading, onPhotoClick, data, status, isFetching } = useEventGalleryPhotoContainer();

    const globalContext = useContext(GlobalContext);

    if (globalContext.globalLoading) {
        return (
            <GlobalLoader/>
        )
    }

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
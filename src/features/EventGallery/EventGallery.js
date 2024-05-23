import GalleryTextContainer from './GalleryText/';
import FloatingMenuContainer from '../../components/FloatingMenu/';
import GalleryPhotosContainer from '../../components/GalleryPhotos/';

import {
    Container
} from '@mantine/core';

const EventGallery = () => {
    return (
        <Container size='sm' pt='4rem'>
            <FloatingMenuContainer/>
            <GalleryTextContainer />
            <GalleryPhotosContainer />
        </Container>
    )
};

export default EventGallery;

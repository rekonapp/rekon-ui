import PropTypes from 'prop-types';

import GalleryTextContainer from './GalleryText/';
import FloatingMenuContainer from '../../components/FloatingMenu/';
import GalleryPhotosContainer from '../../components/GalleryPhotos/';
import FloatingActionsContainer from '../../components/FloatingActions/';

import {
    Container
} from '@mantine/core';

const EventGallery = ({
    onPhotoClick,
    scrollRef,
    scrollIntoView
}) => {
    return (
        <Container size='sm' pt='4rem'>
            <FloatingMenuContainer/>
            <GalleryTextContainer />
            <GalleryPhotosContainer onPhotoClick={onPhotoClick} scrollRef={scrollRef}/>
            <FloatingActionsContainer scrollIntoView={scrollIntoView}/>
        </Container>
    )
};

EventGallery.propTypes = {
    scrollRef: PropTypes.object.isRequired,
    onPhotoClick: PropTypes.func.isRequired,
    scrollIntoView: PropTypes.func.isRequired
};

export default EventGallery;

import PropTypes from 'prop-types';

import GalleryTextContainer from './GalleryText/';
import FloatingMenuContainer from '../../components/FloatingMenu/';
import GalleryPhotosContainer from '../../components/GalleryPhotos/';
import FloatingActionsContainer from '../../components/FloatingActions/';

import {
    Container
} from '@mantine/core';

const EventGallery = ({
    scrollRef,
    scrollIntoView
}) => {
    return (
        <Container size='sm' pt='4rem'>
            <FloatingMenuContainer/>
            <GalleryTextContainer />
            <GalleryPhotosContainer scrollRef={scrollRef}/>
            <FloatingActionsContainer scrollIntoView={scrollIntoView}/>
        </Container>
    )
};

EventGallery.propTypes = {
    scrollRef: PropTypes.object.isRequired,
    scrollIntoView: PropTypes.func.isRequired
};

export default EventGallery;

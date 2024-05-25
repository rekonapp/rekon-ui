import EventGalleryPhoto from './EventGalleryPhoto';

import { useNavigate } from "react-router-dom";
import { useScrollIntoView } from '@mantine/hooks';
import { useEffect } from 'react';

const EventGalleryPhotoContainer = () => {
    const navigate = useNavigate();

    const { scrollIntoView, targetRef } = useScrollIntoView({
        duration: 200
    });

    const onPhotoClick = photo => {
        navigate({
            pathname: `/event-gallery/photo/${photo.key}`,
        });

        scrollIntoView();
    };

    useEffect(() => {
        scrollIntoView();
    });

    return (
        <EventGalleryPhoto scrollRef={targetRef} onPhotoClick={onPhotoClick} scrollIntoView={scrollIntoView}/>
    )
}

export default EventGalleryPhotoContainer;
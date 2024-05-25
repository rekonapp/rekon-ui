import EventGalleryPhoto from './EventGalleryPhoto';

import { GlobalContext } from '../../Root';
import { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useScrollIntoView } from '@mantine/hooks';
import GlobalLoader from '../../components/GlobalLoader';

const EventGalleryPhotoContainer = () => {
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext);

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
    
    if (globalContext.globalLoading) {
        return (
            <GlobalLoader/>
        )
    }

    return (
        <EventGalleryPhoto scrollRef={targetRef} onPhotoClick={onPhotoClick} scrollIntoView={scrollIntoView}/>
    )
}

export default EventGalleryPhotoContainer;
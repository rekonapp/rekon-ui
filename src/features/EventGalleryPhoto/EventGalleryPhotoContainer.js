import EventGalleryPhoto from './EventGalleryPhoto';

import { GlobalContext } from '../../Root';
import { useEffect, useContext } from 'react';
import GlobalLoader from '../../components/GlobalLoader';

const EventGalleryPhotoContainer = () => {
    const globalContext = useContext(GlobalContext);

    useEffect(() => {
        globalContext.scrollFn();
    });
    
    if (globalContext.globalLoading) {
        return (
            <GlobalLoader/>
        )
    }

    return (
        <EventGalleryPhoto/>
    )
}

export default EventGalleryPhotoContainer;
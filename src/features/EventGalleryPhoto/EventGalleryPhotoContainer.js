import EventGalleryPhoto from './EventGalleryPhoto';

import { useContext, useEffect } from 'react';
import GlobalLoader from '../../components/GlobalLoader';
import { GlobalContext } from '../../Root';

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
import { useContext } from 'react';
import EventGallery from './EventGallery';
import { GlobalContext } from '../../Root';
import GlobalLoader from '../../components/GlobalLoader';

const EventGalleryContainer = () => {
    const globalContext = useContext(GlobalContext);

    if (globalContext.globalLoading) {
        return (
            <GlobalLoader/>
        )
    }

	return (
		<EventGallery/>
	);
};

export default EventGalleryContainer;

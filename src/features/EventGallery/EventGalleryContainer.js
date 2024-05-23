import { useScrollIntoView } from '@mantine/hooks';
import EventGallery from './EventGallery';

const EventGalleryContainer = () => {
    const { scrollIntoView, targetRef } = useScrollIntoView({
        duration: 200
    });

	return (
		<EventGallery
            scrollRef={targetRef}
            scrollIntoView={scrollIntoView}
        />
	);
};

export default EventGalleryContainer;

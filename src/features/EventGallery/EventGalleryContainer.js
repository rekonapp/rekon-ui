import EventGallery from './EventGallery';
import { useScrollIntoView } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";

const EventGalleryContainer = () => {

    const navigate = useNavigate();

    const { scrollIntoView, targetRef } = useScrollIntoView({
        duration: 200
    });

    const onPhotoClick = photo => {
        navigate({
            pathname: `/event-gallery/photo/${photo.key}`,
        });
    };

	return (
		<EventGallery
        scrollRef={targetRef}
        onPhotoClick={onPhotoClick}
            scrollIntoView={scrollIntoView}
        />
	);
};

export default EventGalleryContainer;

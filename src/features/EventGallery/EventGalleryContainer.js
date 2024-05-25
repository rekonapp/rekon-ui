import { useContext } from 'react';
import EventGallery from './EventGallery';
import { GlobalContext } from '../../Root';
import { useNavigate } from "react-router-dom";
import GlobalLoader from '../../components/GlobalLoader';
import { useScrollIntoView } from '@mantine/hooks';

const EventGalleryContainer = () => {
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext);

    const { scrollIntoView, targetRef } = useScrollIntoView({
        duration: 200
    });

    const onPhotoClick = photo => {
        navigate({
            pathname: `/event-gallery/photo/${photo.key}`,
        });
    };

    if (globalContext.globalLoading) {
        return (
            <GlobalLoader/>
        )
    }

	return (
		<EventGallery
            scrollRef={targetRef}
            onPhotoClick={onPhotoClick}
            scrollIntoView={scrollIntoView}
        />
	);
};

export default EventGalleryContainer;

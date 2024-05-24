import { createBrowserRouter } from 'react-router-dom';

import HomeContainer from '../features/Home';
import EventGalleryContainer from '../features/EventGallery';
import EventGalleryPhotoContainer from '../features/EventGalleryPhoto';

export const createRouter = () => createBrowserRouter([{
	path: '/',
	element: <HomeContainer />
}, {
	path: '/event-gallery',
	element: <EventGalleryContainer />
}, {
	path: '/event-gallery/photo/:key',
	element: <EventGalleryPhotoContainer />
}], {
	basename: '/'
});

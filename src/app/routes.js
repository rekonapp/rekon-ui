import { createBrowserRouter } from 'react-router-dom';

import HomeContainer from '../features/Home';
import EventGalleryContainer from '../features/EventGallery';

export const createRouter = () => createBrowserRouter([{
	path: '/',
	element: <HomeContainer />
}, {
	path: '/event-gallery',
	element: <EventGalleryContainer />
}], {
	basename: '/'
});

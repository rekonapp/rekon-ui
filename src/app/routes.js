import { createBrowserRouter } from 'react-router-dom';

import HomeContainer from '../pages/Home';
import EventGalleryContainer from '../pages/EventGallery';

export const createRouter = () => createBrowserRouter([{
	path: '/',
	element: <HomeContainer />
}, {
	path: '/event-gallery',
	element: <EventGalleryContainer />
}], {
	basename: '/'
});

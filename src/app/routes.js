import { createBrowserRouter } from 'react-router-dom';

import HomeContainer from '../pages/Home';

export const createRouter = () => createBrowserRouter([{
	path: '/',
	element: <HomeContainer />
}], {
	basename: '/'
});

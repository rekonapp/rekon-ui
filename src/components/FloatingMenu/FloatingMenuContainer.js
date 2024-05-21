import FloatingMenu from './FloatingMenu';
import { useLocation, useNavigate } from 'react-router-dom';

const FloatingMenuContainer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const onReturnClick = () => {
        const mappedRoutes = {
            '/your-gallery-photo': '/your-gallery',
            '/event-gallery-photo': '/event-gallery',
            '/your-gallery': '/',
            '/event-gallery': '/'
        };

        return mappedRoutes[location.pathname] && navigate(mappedRoutes[location.pathname]);
    };

	return (
		<FloatingMenu onReturnClick={onReturnClick}/>
	);
};

export default FloatingMenuContainer;

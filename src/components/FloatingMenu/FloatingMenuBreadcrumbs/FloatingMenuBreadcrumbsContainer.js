import { startsWith } from 'lodash';
import { Button } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from './FloatingMenuBreadcrumbs.module.css';
import FloatingMenuBreadcrumbs from './FloatingMenuBreadcrumbs';

const FloatingMenuBreadcrumbsContainer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const mountBreadCrumbs = () => {
        const currentPath = location.pathname;

        const homeElement = {
            title: 'Home',
            redirect: '/',
            path: '/',
            show: true,
            disabled: currentPath !== '/'
        };
        
        const yourGalleryPhotoElement = {
            title: 'Foto',
            path: '/your-gallery-photo',
            show: currentPath === '/your-gallery-photo'
        };
        
        const eventGalleryPhotoElement = {
            title: 'Foto',
            path: `/event-gallery/photo/`,
            show: startsWith(currentPath, '/event-gallery/photo')
        };

        const yourGalleryElement = {
            title: 'Sua Galeria',
            redirect: '/your-gallery',
            path: '/your-gallery',
            show: ['/'].includes(currentPath) || startsWith(currentPath, '/your-gallery'),
        };
        
        const eventGalleryElement = {
            path: '/event-gallery',
            title: 'Galeria do Evento',
            redirect: '/event-gallery',
            disabled: currentPath !== '/event-gallery' ,
            show: ['/', '/event-gallery'].includes(currentPath) || startsWith(currentPath, '/event-gallery/photo')
         };
    
        const navigationItems = [
            homeElement,
            yourGalleryElement,
            eventGalleryElement,
            yourGalleryPhotoElement,
            eventGalleryPhotoElement
        ];
    
        return navigationItems.filter(item => item.show).map((item, index) => {
            return (
                <Button td='underline' color='dark' fw='400' className={classes.breadcrumbButton} variant="transparent" href={item.href} key={index} data-disabled={item.disabled} p={0} onClick={() => {
                    if (!item.redirect) {
                        return;
                    }
                    navigate(item.redirect);
                }}>
                    {item.title}
                </Button>
            );
        });
    };

	return (
		<FloatingMenuBreadcrumbs breadcrumbs={mountBreadCrumbs()}></FloatingMenuBreadcrumbs>
	);
};

export default FloatingMenuBreadcrumbsContainer;

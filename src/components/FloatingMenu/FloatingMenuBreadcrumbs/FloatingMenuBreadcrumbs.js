import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Button } from '@mantine/core';
import classes from './FloatingMenuBreadcrumbs.module.css';

const MountBreadCrumbs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const homeElement = { title: 'Home', redirect: '/', path: '/', show: true, disabled: currentPath !== '/' };
    const yourGalleryPhotoElement = { title: 'Foto', path: '/your-gallery-photo', show: currentPath === '/your-gallery-photo' };
    const eventGalleryPhotoElement = { title: 'Foto', path: '/event-gallery-photo', show: currentPath === '/event-gallery-photo' };
    const yourGalleryElement = { title: 'Sua Galeria', redirect: '/your-gallery', path: '/your-gallery', show: ['/', '/your-gallery'].includes(currentPath)  };
    const eventGalleryElement = { title: 'Galeria do Evento', redirect: '/event-gallery', path: '/event-gallery', show: ['/', '/event-gallery'].includes(currentPath)  };

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

const FloatingMenuBreadcrumbs = () => {
    const breadcrumbs = MountBreadCrumbs();

    return (
        <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
    )
}

export default FloatingMenuBreadcrumbs

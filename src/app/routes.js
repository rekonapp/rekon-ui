import { Routes, Route } from 'react-router-dom';

import HomeContainer from '../features/Home';
import YourGalleryContainer from '../features/YourGallery';
import EventGalleryContainer from '../features/EventGallery';
import EventGalleryPhotoContainer from '../features/EventGalleryPhoto';

const RouterContainer = () => {
    return (
        <Routes>
            <Route exact path='/' element={<HomeContainer />}/>
            <Route exact path='/event-gallery' element={<EventGalleryContainer />}/>
            <Route exact path='/event-gallery/photo/:key' element={<EventGalleryPhotoContainer />}/>
            <Route exact path='/your-gallery/:key?' element={<YourGalleryContainer />}/>
        </Routes>
    )
};

export default RouterContainer;
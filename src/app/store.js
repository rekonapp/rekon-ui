import { configureStore } from '@reduxjs/toolkit';
import eventGalleryPhotosReducer from '../reducers/entities/event-gallery';
import eventGalleryPhotosListReducer from '../features/EventGallery/EventGallery.state';

export default configureStore({
  reducer: {
    eventGalleryPhotoList: eventGalleryPhotosListReducer,
    entities: {
        eventGalleryPhotos: eventGalleryPhotosReducer
    }
  }
})
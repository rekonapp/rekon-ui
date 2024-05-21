import { configureStore, combineReducers } from '@reduxjs/toolkit';
import eventGalleryPhotosEntitiesSlice from '../reducers/entities/event-gallery';
import eventGalleryPhotosListReducer from '../components/GalleryPhotos/GalleryPhotos.state';

export default configureStore({
  reducer: {
    eventGalleryPhotosList: eventGalleryPhotosListReducer,
    entities: combineReducers({
        eventGalleryPhotos: eventGalleryPhotosEntitiesSlice
    })
  }
})
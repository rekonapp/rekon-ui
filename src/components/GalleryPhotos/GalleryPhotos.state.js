import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchEventGalleryPhotos } from '../../processes/event-gallery';

import { eventGalleryPhotosAdapter } from '../../reducers/entities/event-gallery';

const INITIAL_STATE = eventGalleryPhotosAdapter.getInitialState({
	ids: [],
	loading: null,
	page: 1,
});

export const eventGalleryPhotosSlice = createSlice({
    name: 'eventGalleryPhotosList',
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder
            .addCase(fetchEventGalleryPhotos.fulfilled, (state, action) => {
                eventGalleryPhotosAdapter.setAll(state, action.payload.data);
            })
            .addCase(fetchEventGalleryPhotos.pending, state => {
                state.loading = true;
            })
            .addMatcher(isAnyOf(
                fetchEventGalleryPhotos.fulfilled,
                fetchEventGalleryPhotos.rejected
            ), (state => {
                state.loading = null;
            }));
    }
})

export const getEventGalleryPhotosListState = state => {
    return state.eventGalleryPhotosList;
};

export default eventGalleryPhotosSlice.reducer;
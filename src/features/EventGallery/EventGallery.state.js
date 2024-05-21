import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchEventGalleryPhotos } from '../../processes/event-gallery';

import eventGalleryPhotosAdapter from '../../reducers/entities/event-gallery';

export const eventGalleryPhotosSlice = createSlice({
    name: 'eventGalleryPhotosList',
    initialState: {
        ids: [],
        loading: null,
        page: 1
    },
    extraReducers: builder => {
        builder
            .addCase(fetchEventGalleryPhotos.fulfilled, state => {
                eventGalleryPhotosAdapter.setMany(state, null || []);
            })
            .addMatcher(isAnyOf(
                fetchEventGalleryPhotos.fulfilled,
                fetchEventGalleryPhotos.rejected
            ), (state => {
                state.loading = null;
                state.refresh = null;
            }));
    }
})

export default eventGalleryPhotosSlice.reducer;
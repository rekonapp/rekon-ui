import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { fetchEventGalleryPhotos } from '../../processes/event-gallery';

export const eventGalleryPhotosAdapter = createEntityAdapter();

const initialState = eventGalleryPhotosAdapter.getInitialState();

const eventGalleryPhotosEntitiesSlice = createSlice({
	extraReducers: builder => {
		builder
			.addCase(fetchEventGalleryPhotos.fulfilled, (state, action) => {
				eventGalleryPhotosAdapter.setMany(state, action.payload.data || []);
			});
	},
	initialState,
	name: 'eventGalleryPhotos'
});

export const {
	selectById: getEventGalleryPhotoById
} = eventGalleryPhotosAdapter.getSelectors(state => {
    return state.entities?.eventGalleryPhotos;
});

export default eventGalleryPhotosEntitiesSlice.reducer;

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { fetchEventGalleryPhotos } from '../../processes/event-gallery';

export const customersEntitiesAdapter = createEntityAdapter();

const initialState = customersEntitiesAdapter.getInitialState();

const customersEntitiesSlice = createSlice({
	extraReducers: builder => {
		builder
			.addCase(fetchEventGalleryPhotos.fulfilled, (state, action) => {
				customersEntitiesAdapter.setMany(state, action.payload.data || []);
			});
	},
	initialState,
	name: 'eventGalleryPhotos'
});

// export const {
// 	selectById: getCustomerById
// } = customersEntitiesAdapter.getSelectors(state => state.entities?.customers);

export default customersEntitiesSlice.reducer;

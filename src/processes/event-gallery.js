import { client } from '../app/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEventGalleryPhotos = createAsyncThunk('event-gallery-photo', async ({ event_key }) => {
	const response = await client.get('/event-file', { params: { event_key } });

	return response;
});
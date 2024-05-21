import { client } from '../app/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEventGalleryPhotos = createAsyncThunk('event-gallery-photo/', async ({ eventKey }) => {
	const response = await client.get(`/event-file`, { event_key: eventKey });

	return response;
});
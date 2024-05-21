import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GalleryPhotos from './GalleryPhotos'

import { getEventGalleryPhotosListState } from './GalleryPhotos.state';
import { fetchEventGalleryPhotos } from '../../processes/event-gallery';

const GalleryPhotosContainer = () => {
    const {
        ids,
        page,
        loading
	} = useSelector(getEventGalleryPhotosListState);


    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(fetchEventGalleryPhotos({ event_key: import.meta.env.VITE_EVENT_KEY }));
	}, [dispatch]);

    return (
        <GalleryPhotos ids={ids} page={page} loading={loading} />
    )
}

export default GalleryPhotosContainer

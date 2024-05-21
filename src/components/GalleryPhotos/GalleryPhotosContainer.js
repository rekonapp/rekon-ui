import { client } from '../../app/api';
import { useEffect, useState } from 'react';
import GalleryPhotos from './GalleryPhotos'

const GalleryPhotosContainer = () => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loadingPagination, setLoadingPagination] = useState(false);

    const fetchImages = async () => {
        try {
            if (!hasMore) {
                return;
            }

            if (page === 1) {
                setLoading(true);
            } else {
                setLoadingPagination(true);
            }

            const response = await client('/event-file', {
                params: {
                    page,
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            });

            const newImages = response.data;

            if (newImages.length === 0) {
                setHasMore(false);
            }

            if (page === 1) {
                setLoading(false);
            } else {
                setLoadingPagination(false);
            }

            setImages([...images, ...newImages]);
        } catch (error) {
            setLoading(false);
        }
      };

      const handleScroll = () => {
        if (!loading && !loadingPagination && hasMore && (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight)) {
            setPage(prevPage => prevPage + 1);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [loading]);

    
      useEffect(() => {
        fetchImages();
      }, [page]);
    return (
        <GalleryPhotos loading={loading} images={images}/>
    )
}

export default GalleryPhotosContainer

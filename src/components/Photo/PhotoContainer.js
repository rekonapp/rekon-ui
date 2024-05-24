import Photo from './Photo';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { client } from '../../app/api';

const PhotoContainer = () => {
    const { key } = useParams();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reducedImage, setReducedImage] = useState(false);

    useEffect(() => {   
        const handleScroll = () => {
            if (window.scrollY <= 20) {
                setReducedImage(false);
                return;
            }

            setReducedImage(true);
        };
      
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {        
        const loadData = async () => {
            try {
                setLoading(true);
                
                const response = await client(`/event-file/${key}`);

                setPhoto(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        loadData();
    }, [key]);

    return (
        <Photo 
            photo={photo}
            loading={loading}
            reducedImage={reducedImage}
        />
    )
}

export default PhotoContainer

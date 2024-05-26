import { useScrollIntoView } from '@mantine/hooks';
import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import YourGallery from './YourGallery'
import { client } from '../../app/api'; 
import { GlobalContext } from '../../Root';
import GlobalLoader from '../../components/GlobalLoader';

const YourGalleryContainer = () => {
    const { key } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const { scrollIntoView, targetRef } = useScrollIntoView({
        duration: 200
    });

    useEffect(() => {        
        const loadData = async () => {
            try {
                if (!state || !state.data) {
                    setLoading(true)

                    const response = await client('/event-file/face', {
                        params: {
                            face_id: key,
                            event_key: import.meta.env.VITE_EVENT_KEY
                        }
                    });

                    setUrl(response.data.url)

                    setLoading(false)
                } else {
                    setUrl(state.data.url)
                }
            } catch (error) {
                setLoading(false)
            }
        };

        loadData();
    }, [key, state]);

    const onGalleryPhotosClick = photo => {
        navigate({
            pathname: `/event-gallery/photo/${photo.key}`,
        });

        scrollIntoView();
    };

    const globalContext = useContext(GlobalContext);

    if (globalContext.globalLoading) {
        return (
            <GlobalLoader/>
        )
    }

    return (
        <YourGallery onGalleryPhotosClick={onGalleryPhotosClick} scrollRef={targetRef} scrollIntoView={scrollIntoView} loading={loading} url={url}/>
    )
};

export default YourGalleryContainer
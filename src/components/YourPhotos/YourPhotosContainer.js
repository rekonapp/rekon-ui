import YourPhotos from './YourPhotos';

import { GlobalContext } from '../../Root';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { client } from '../../app/api';

const YourPhotosContainer = () => {
    const { key, face_id } = useParams();
    const globalContext = useContext(GlobalContext)
    const [enabledData, setEnabledData] = useState(true);

    const navigate = useNavigate();

    const {
        data,
        isFetching,
    } = useQuery({
        queryKey: ['yourPhotosData'],
        queryFn: async () => {
            const response = await client('/event-file/search-by-face', {
                params: {
                    face_id: face_id || key,
                    event_key: import.meta.env.VITE_EVENT_KEY
                }
            });

            return {
                data: response.data.files,
                nextToken: response.data.next_token
            };
        },
        enabled: enabledData,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        initialPageParam: null,
        getNextPageParam: (lastPage) => {
            return lastPage.nextToken;
        }
    });

    useEffect(() => {
        setEnabledData(false);
        
        setTimeout(() => {
            setEnabledData(true);
        }, 300);
    }, [key]);

    const onPhotoClick = photo => {
        navigate(`/your-gallery/photo/${face_id || key}/${photo.key}`);

        globalContext.scrollFn();
    };

  return (
    <YourPhotos data={data} onPhotoClick={onPhotoClick} isFetching={isFetching}/>
  )
};

export default YourPhotosContainer;

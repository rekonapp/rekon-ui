import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../app/api';
import Photo from './Photo';

const PhotoContainer = () => {
    const { key } = useParams();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reducedImage, setReducedImage] = useState(false);
    const [downloadLoading, setDownloadLoading] = useState(false);

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

	const downloadImage = photo => {
        setDownloadLoading(true);

		fetch(photo.url).then(image => {
			image.blob().then((imageBlog) => {
				const imageURL = URL.createObjectURL(imageBlog);
				const link = document.createElement('a');

				link.href = imageURL;
				link.download = `photo-${key}.jpg`;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}).finally(() => {
                setDownloadLoading(false);
            });
		}).catch(() => {
            setDownloadLoading(false);
        });
	};

    return (
        <Photo
            photo={photo?.file}
            loading={loading}
            reducedImage={reducedImage}
            downloadLoading={downloadLoading}
            onDownloadClick={downloadImage}
        />
    )
}

export default PhotoContainer

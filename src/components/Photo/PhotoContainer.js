import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../app/api';
import Photo from './Photo';

const PhotoContainer = () => {
    const { key } = useParams();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reducedImage, setReducedImage] = useState(false);
    const [innerWidth, setInnerWidth] = useState(0);
    const [downloadLoading, setDownloadLoading] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 70) {
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
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setInnerWidth]);

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
				link.download = `photo-${photo.key}.jpg`;
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
            photo={photo}
            loading={loading}
            downloadLoading={downloadLoading}
            onDownloadClick={downloadImage}
            reducedImage={reducedImage}
            innerWidth={innerWidth}
        />
    )
}

export default PhotoContainer

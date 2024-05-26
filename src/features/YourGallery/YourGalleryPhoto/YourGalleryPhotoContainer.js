import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import YourGalleryPhoto from './YourGalleryPhoto';

const YourGalleryPhotoContainer = ({
    url,
    loading
}) => {
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

    return (
        <YourGalleryPhoto reducedImage={reducedImage} loading={loading} url={url}/>
    )
};

YourGalleryPhotoContainer.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default YourGalleryPhotoContainer

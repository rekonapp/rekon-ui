import PropTypes from 'prop-types';
import { Container } from '@mantine/core';
import FloatingMenuContainer from '../../components/FloatingMenu/';
import FloatingActionsContainer from '../../components/FloatingActions/';
import YourGalleryTextContainer from './YourGalleryText/';
import YourGalleryPhotoContainer from './YourGalleryPhoto/';
import YourGalleryPhotosContainer from './YourGalleryPhotos/';

const YourGallery = ({
    url,
    loading,
}) => {
  return (
    <Container size='sm' pt='4rem'>
        <FloatingMenuContainer/>
        <YourGalleryPhotoContainer loading={loading} url={url}/>
        <YourGalleryTextContainer loading={loading} url={url} />
        <YourGalleryPhotosContainer url={url}/>
        <FloatingActionsContainer/>
    </Container>
  )
};

YourGallery.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}

export default YourGallery

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
    scrollRef,
    scrollIntoView
}) => {
  return (
    <Container size='sm' pt='4rem'>
        <FloatingMenuContainer/>
        <YourGalleryPhotoContainer loading={loading} url={url}/>
        <YourGalleryTextContainer loading={loading} url={url} />
        <YourGalleryPhotosContainer scrollRef={scrollRef} loading={loading} url={url}/>
        <FloatingActionsContainer scrollIntoView={scrollIntoView}/>
    </Container>
  )
};

YourGallery.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    scrollIntoView: PropTypes.func.isRequired
}

export default YourGallery

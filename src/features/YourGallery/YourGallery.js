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
    isConfirmationStep,
    profileUrlImage,
    onConfirmFaceClick
}) => {
  return (
    <Container size='sm' pt='4rem'>
        <FloatingMenuContainer/>
        <YourGalleryPhotoContainer loading={loading} url={url} isConfirmationStep={isConfirmationStep} profileUrlImage={profileUrlImage} onConfirmFaceClick={onConfirmFaceClick}/>
        <YourGalleryTextContainer loading={loading} url={url} isConfirmationStep={isConfirmationStep} onConfirmFaceClick={onConfirmFaceClick}/>
        {
            !isConfirmationStep && (
                <YourGalleryPhotosContainer url={url}/>
            )
        }
        <FloatingActionsContainer/>
    </Container>
  )
};

YourGallery.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    isConfirmationStep: PropTypes.bool,
    profileUrlImage: PropTypes.string,
    onConfirmFaceClick: PropTypes.func
}

export default YourGallery

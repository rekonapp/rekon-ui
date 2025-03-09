import PropTypes from 'prop-types';
import YourGalleryText from './YourGalleryText';

const YourGalleryTextContainer = ({
    url,
    loading,
    isConfirmationStep,
    onConfirmFaceClick
}) => {
  return (
    <YourGalleryText url={url} loading={loading} isConfirmationStep={isConfirmationStep} onConfirmFaceClick={onConfirmFaceClick}/>
  )
}

YourGalleryTextContainer.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    isConfirmationStep: PropTypes.bool,
    onConfirmFaceClick: PropTypes.func
}

export default YourGalleryTextContainer
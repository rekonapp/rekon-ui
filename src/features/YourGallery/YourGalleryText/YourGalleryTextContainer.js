import PropTypes from 'prop-types';
import YourGalleryText from './YourGalleryText';

const YourGalleryTextContainer = ({
    url,
    loading
}) => {
  return (
    <YourGalleryText url={url} loading={loading}/>
  )
}

YourGalleryTextContainer.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default YourGalleryTextContainer
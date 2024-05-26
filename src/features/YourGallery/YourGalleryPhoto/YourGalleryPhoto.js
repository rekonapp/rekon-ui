import {
    Box,
    Card,
    Center,
    Avatar,
    Loader
} from '@mantine/core';
import PropTypes from 'prop-types';
import classes from './YourGalleryPhoto.module.css';

const YourGalleryPhoto = ({
    url,
    loading,
    reducedImage
}) => {
  return (
    <Card my='3rem' withBorder className={classes.imageContainer} mt={ reducedImage ? '100px' : '32px' } h={reducedImage ? 176 : 200}>
        <Center h={reducedImage ? 176 : 200}>
            {
                loading && (
                    <Box w={reducedImage ? '120px' : '160px'} h={reducedImage ? '120px' : '160px'} className={classes.imageLoadingBox}>
                        <Center w={225} h={225}>
                            <Loader color='red.9'/>
                        </Center>
                    </Box>
                ) || (
                    <Box w={reducedImage ? '120px' : '160px'} h={reducedImage} className={classes.container}>
                        <Avatar w={reducedImage ? '120px' : '160px'} h={reducedImage ? '120px' : '160px'} color='gray.4' className={url && classes.image || classes.imageNotFound} src={url} />
                    </Box>
                )
            }
        </Center>
    </Card>
  )
};

YourGalleryPhoto.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    reducedImage: PropTypes.bool.isRequired
}

export default YourGalleryPhoto

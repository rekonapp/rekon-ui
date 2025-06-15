import {
    Box,
    Card,
    Center,
    Avatar,
    Loader
} from '@mantine/core';
import PropTypes from 'prop-types';
import classes from './YourGalleryPhoto.module.css';

const YourPhoto = ({
    url,
    loading,
    reducedImage
}) => {
  return (
    <Card my='3rem' withBorder className={classes.imageContainer} mt={ reducedImage ? '90px' : '32px' } h={reducedImage ? 176 : 200}>
        <Center h={reducedImage ? 176 : 200}>
            {
                loading && (
                    <Box w={reducedImage ? '120px' : '160px'} h={reducedImage ? '120px' : '160px'} className={classes.imageLoadingBox}>
                        <Center w='145px' h='145px'>
                            <Loader color='blue.7'/>
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

YourPhoto.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    reducedImage: PropTypes.bool.isRequired
}

export default YourPhoto;

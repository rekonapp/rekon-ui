import PropTypes from 'prop-types';
import {
    Grid,
    Skeleton
} from '@mantine/core';
import YourPhotosContainer from '../../../components/YourPhotos/';

const YourGalleryPhotos = ({
    url,
    scrollRef
}) => {
  return (
  <>
    {
        url ? (
            <YourPhotosContainer/>
        ) : (
            <Grid mt='xl' grow ref={scrollRef}>
                <Grid.Col span={{ base: 4 }}>
                    <Skeleton height={200} animate={false}/>
                </Grid.Col>
                <Grid.Col span={{ base: 4 }}>
                    <Skeleton height={200} animate={false}/>
                </Grid.Col>
                <Grid.Col span={{ base: 4 }}>
                    <Skeleton height={200} animate={false}/>
                </Grid.Col>
                <Grid.Col span={{ base: 4 }}>
                    <Skeleton height={170} animate={false}/>
                </Grid.Col>
                <Grid.Col span={{ base: 4 }}>
                    <Skeleton height={170} animate={false}/>
                </Grid.Col>
                <Grid.Col span={{ base: 4 }}>
                    <Skeleton height={170} animate={false}/>
                </Grid.Col>
            </Grid>
        )
    }
  </>
  )
}

YourGalleryPhotos.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
    loading: PropTypes.bool.isRequired
}

export default YourGalleryPhotos;

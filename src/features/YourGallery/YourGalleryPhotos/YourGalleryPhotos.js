import PropTypes from 'prop-types';
import {
    Grid,
    Skeleton
} from '@mantine/core';
import YourPhotosContainer from '../../../components/YourPhotos/';

const YourGalleryPhotos = ({
    url,
    loading,
    scrollRef
}) => {
  return (
  <>
    {
        !loading && (
            url ? (
                <>
                    <YourPhotosContainer scrollRef={scrollRef} onPhotoClick={() => {
                        console.log('photo clicked');
                    }}/>
                </>
            ) : (
                <Grid mt='xl' grow>
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
        )
    }
  </>
  )
}

YourGalleryPhotos.propTypes = {
    url: PropTypes.string,
    scrollRef: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    onGalleryPhotosClick: PropTypes.func.isRequired
}

export default YourGalleryPhotos;

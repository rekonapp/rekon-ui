import PropTypes from 'prop-types';
import {
    Grid,
    Skeleton
} from '@mantine/core';
import GalleryPhotoContainer from './GalleryPhoto';

const renderItem = id => {
    console.log(id);

    return (    
        <Grid.Col span={{ base: 6, sm: 6, md: 4 }} key={`PHOTO_${id}`}>
            <GalleryPhotoContainer id={id}/>
        </Grid.Col>
    )
};

const renderEmpty = () => {
    return (
        <Grid.Col span={12}>
            No photos found
        </Grid.Col>
    );
};

const GalleryPhotos = ({
    ids,
    page,
    loading,
}) => (
    <>
        {
            loading ? (
                <Grid mt='xl' grow>
                    <Grid.Col span={4}>
                         <Skeleton height={200} />
                    </Grid.Col>
                    <Grid.Col span={5}>
                         <Skeleton height={200} />
                    </Grid.Col>
                    <Grid.Col span={4}>
                         <Skeleton height={200} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                         <Skeleton height={200} />
                    </Grid.Col>
                    <Grid.Col span={3}>
                         <Skeleton height={200} />
                    </Grid.Col>
                </Grid>
            ) : (
                <Grid mt='xl'>
                    {ids.length ? ids.map(renderItem) : renderEmpty()}
                </Grid>
            )
        }
    </>
);

GalleryPhotos.propTypes = {
    ids: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    loading: PropTypes.bool,
};

export default GalleryPhotos

import PropTypes from 'prop-types';
import {
    Grid,
    Title,
    Center,
    Skeleton,
    Flex
} from '@mantine/core';

import { IconPhotoOff } from '@tabler/icons-react';
import GalleryPhotoContainer from './GalleryPhoto';

const renderItem = item => {
    return (    
        <Grid.Col span={{ base: 6, sm: 6, md: 4 }} key={`PHOTO_${item.id}`}>
            <GalleryPhotoContainer imageUrl={item.thumb_url}/>
        </Grid.Col>
    )
};

const renderEmpty = () => {
    return (
        <Grid.Col span={12} mt='xl'>
            <Center>
                <Flex direction='column' align='center'>
                    <IconPhotoOff width='40px' stroke={1.4}/>
                    <Title order={1} ta='center' fw='300'>
                        Não foi possível encontrar<br/> fotos para este evento
                    </Title>
                </Flex>
            </Center>
        </Grid.Col>
    );
};

const GalleryPhotos = ({
    images,
    loading,
    loadingPagination
}) => (
    <>
        {
            loading ? (
                <Grid mt='xl' grow>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={5}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={3}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                </Grid>
            ) : (
                <Grid mt='xl'>
                    {images?.length ? images.map(renderItem) : renderEmpty()}
                </Grid>
            )
        }
        {
            loadingPagination && (
                <Grid mt='xl' grow>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                </Grid>
            )
        }
    </>
);

GalleryPhotos.propTypes = {
    images: PropTypes.array,
    page: PropTypes.number,
    loading: PropTypes.bool,
    loadingPagination: PropTypes.bool
};

export default GalleryPhotos

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

const renderItem = (item, index, onPhotoClick, activeImageKey) => {
    return (
        <Grid.Col span={{ base: 6, sm: 6, md: 4 }} key={`PHOTO_${index}`} onClick={() => onPhotoClick(item)}>
            <GalleryPhotoContainer imageUrl={item.thumb_url} imageKey={item.key} activeImageKey={activeImageKey}/>
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
    onPhotoClick,
    data,
    isFetching,
    activeImageKey
}) => (
    <>
        {
            isFetching ? (
                <Grid mt='xl' grow>
                    <Grid.Col span={{ base: 6 }}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                    <Grid.Col span={{ base: 6 }}>
                         <Skeleton height={200} animate/>
                    </Grid.Col>
                </Grid>
            ) : (
                <Grid mt='xl' grow={isFetching} pb='100px'>
                    {data?.length && (data || [])?.map((item, index) => renderItem(item, index, onPhotoClick, activeImageKey)) || renderEmpty()}
                </Grid>
            )
        }
    </>
);

GalleryPhotos.propTypes = {
    onPhotoClick: PropTypes.func,
    data: PropTypes.array,
    isFetching: PropTypes.bool,
    activeImageKey: PropTypes.string
};

export default GalleryPhotos;

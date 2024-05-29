import {
    Box,
    Card,
    Image,
    Center,
    Overlay
} from '@mantine/core';

import PropTypes from 'prop-types';
import { useHover } from '@mantine/hooks';
import { IconEye } from '@tabler/icons-react';

import classes from './YourPhoto.module.css';

const YourPhoto = ({ active, imageUrl }) => {
    const { hovered, ref } = useHover();

    return (
        <>
            <Card className={active && classes.active} shadow="sm" padding="lg" radius="md" withBorder ref={ref}>
                <Card.Section>
                    <Image
                        src={imageUrl}
                        h={189}
                        className={classes.galleryImage}
                    />
                    {hovered ? (
                        <Overlay color="#000" backgroundOpacity={0.35} blur={3} style={{ cursor: 'pointer' }}>
                            <Center h={189}>
                                <Box c='white' ta='center'>
                                    <IconEye/><br/>
                                    Clique para ver
                                </Box>
                            </Center>
                        </Overlay>
                    ) : ''}
                </Card.Section>
            </Card>
        </>
    )
};

YourPhoto.propTypes = {
    active: PropTypes.bool,
    imageUrl: PropTypes.string.isRequired
};

export default YourPhoto

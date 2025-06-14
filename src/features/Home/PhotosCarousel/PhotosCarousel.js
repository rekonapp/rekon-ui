import { Grid, Paper, Image } from '@mantine/core';

import classes from './PhotosCarousel.module.css';
import carousel1 from '../../../assets/img/carousel-1.jpg';

const PhotosCarousel = () => {
    const imagesByIndex = {
        0: carousel1
    };

	return (
        <Grid grow gutter="sm">
            <Grid.Col lg="12">
                <Paper radius="md" mt={20}>
                    <Image className={classes.carouselImage} radius="md" src={imagesByIndex[0]}></Image>
                </Paper>
            </Grid.Col>
        </Grid>
	);
};

export default PhotosCarousel;

import { useRef } from 'react';
import { Grid, Paper, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import Autoplay from 'embla-carousel-autoplay';
import classes from './PhotosCarousel.module.css';
import carousel1 from '../../../assets/img/carousel-1.jpg';
import carousel2 from '../../../assets/img/carousel-2.jpg';
import carousel3 from '../../../assets/img/carousel-3.jpg';

const PhotosCarousel = () => {
    const imagesByIndex = {
        0: carousel1,
        1: carousel2,
        2: carousel3,
    };
    const autoplay = useRef(Autoplay({ delay: 2000 }));

	return (
        <Grid grow gutter="sm">
            <Grid.Col lg="12">
                <Paper radius="md">
                    <Carousel className={classes.carouselContainer} withControls={false} plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset}>
                        <Carousel.Slide radius="md">
                            <Image className={classes.carouselImage} radius="md" src={imagesByIndex[0]}></Image>
                        </Carousel.Slide>
                        <Carousel.Slide radius="md">
                            <Image className={classes.carouselImage} radius="md" src={imagesByIndex[1]}></Image>
                        </Carousel.Slide>
                        <Carousel.Slide radius="md">
                            <Image className={classes.carouselImage} radius="md" src={imagesByIndex[2]}></Image>
                        </Carousel.Slide>
                    </Carousel>
                </Paper>
            </Grid.Col>
        </Grid>
	);
};

export default PhotosCarousel;

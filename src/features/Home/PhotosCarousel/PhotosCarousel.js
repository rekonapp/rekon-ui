import { useRef } from 'react';
import { Grid, Paper, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import Autoplay from 'embla-carousel-autoplay';
import classes from './PhotosCarousel.module.css';

const PhotosCarousel = () => {
    const imagesByIndex = {
        0: "https://bucketrekon.s3.us-east-1.amazonaws.com/event-UMFN9TVGH9AQQ1NNO9T/main-event-files/file-thumb-41eeb4fb-cee9-4c2e-a693-d9c629bd6f41.jpg",
        1: "https://bucketrekon.s3.us-east-1.amazonaws.com/event-UMFN9TVGH9AQQ1NNO9T/main-event-files/file-thumb-433e1096-b856-4ccd-b46b-058cc6311956.jpg",
        2: "https://bucketrekon.s3.us-east-1.amazonaws.com/event-UMFN9TVGH9AQQ1NNO9T/main-event-files/file-thumb-3e766360-5c36-4565-ba84-c00d6cce4346.jpg",
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

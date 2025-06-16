import { useRef } from 'react';
import { Grid, Paper, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from './PhotosCarousel.module.css';

const PhotosCarousel = () => {
    const imagesByIndex = {
        0: 'https://bucketrekon.s3.us-east-1.amazonaws.com/event-TJA3SZSTLKFSXKPRNZE/event-assets/IMG-20250615-WA0070.jpg',
        1: 'https://bucketrekon.s3.us-east-1.amazonaws.com/event-TJA3SZSTLKFSXKPRNZE/event-assets/IMG-20250615-WA0060%281%29.jpg',
        2: 'https://bucketrekon.s3.us-east-1.amazonaws.com/event-TJA3SZSTLKFSXKPRNZE/event-assets/20250615_110134.jpg',
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

import { useRef } from 'react';
import { Grid, Paper, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import Autoplay from 'embla-carousel-autoplay';
import classes from './PhotosCarousel.module.css';

const PhotosCarousel = () => {
    const imagesByIndex = {
        0: "https://www.cnet.com/a/img/resize/76c825b09b4e3367d2a1e06321278e6403a4c60e/hub/2021/08/31/d56dec80-f6de-42ae-9e2a-dad48e1f3d13/gettyimages-1331974820.jpg?auto=webp&fit=crop&height=675&width=1200",
        1: "https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/timeline/2019-1.jpg",
        2: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/lollapalooza-2024-ingressos.jpg?w=1200&h=675&crop=1",
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

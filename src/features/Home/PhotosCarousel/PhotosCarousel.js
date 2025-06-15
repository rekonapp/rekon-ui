import { Grid, Paper, Image } from '@mantine/core';

import classes from './PhotosCarousel.module.css';

const PhotosCarousel = () => {
	return (
        <Grid grow gutter="sm">
            <Grid.Col lg="12">
                <Paper radius="md">
                    <Image className={classes.carouselImage} radius="md" src='https://bucketrekon.s3.us-east-1.amazonaws.com/event-TJA3SZSTLKFSXKPRNZE/event-assets/banner.jpeg'></Image>
                </Paper>
            </Grid.Col>
        </Grid>
	);
};

export default PhotosCarousel;

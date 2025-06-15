import {
    Grid,
    Paper,
    Image
} from '@mantine/core';

import classes from './Banner.module.css';

const Banner = () => {
	return (
		<Grid grow gutter="sm">
            <Grid.Col lg="12">
                <Paper className={classes.bannerContainer} radius="md" bg="white">
                    <Image className={classes.bannerImage} fit="contain" src="https://bucketrekon.s3.us-east-1.amazonaws.com/event-TJA3SZSTLKFSXKPRNZE/event-assets/top-banner.jpeg" alt="Banner" />
                </Paper>
            </Grid.Col>
		</Grid>
	);
};

export default Banner;

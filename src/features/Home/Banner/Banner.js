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
                <Paper className={classes.bannerContainer} radius="md" bg="violet.9">
                    <Image className={classes.bannerImage} fit="contain" src="https://bucketrekon.s3.us-east-1.amazonaws.com/event-3YX1AYQHCCJ8E2EY3AR/event-assets/BaileCharmeRec3Anos-Rekon-Desktop.png" alt="Banner" radius="md"/>
                </Paper>
            </Grid.Col>
		</Grid>
	);
};

export default Banner;

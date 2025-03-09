import {
    Grid,
    Paper,
    Image
} from '@mantine/core';
import bannerHome from '../../../assets/img/banner-home.jpg';

import classes from './Banner.module.css';

const Banner = () => {
	return (
		<Grid grow gutter="sm">
            <Grid.Col lg="12">
                <Paper className={classes.bannerContainer} radius="md" bg="red.9">
                    <Image className={classes.bannerImage} fit="contain" src={bannerHome} alt="Banner" />
                </Paper>
            </Grid.Col>
		</Grid>
	);
};

export default Banner;

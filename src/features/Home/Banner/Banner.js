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
                <Paper className={classes.bannerContainer} radius="md" bg="red.9">
                    <Image className={classes.bannerImage} fit="contain" src="https://storage.googleapis.com/portal-da-promo/L01_card_promocaobudweiser-melevalollapalooza-20231677620126368.webp" alt="Banner" />
                </Paper>
            </Grid.Col>
		</Grid>
	);
};

export default Banner;

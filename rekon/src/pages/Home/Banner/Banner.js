import {
    Grid,
    Paper,
    Image
} from '@mantine/core'

const Banner = () => {
	return (
		<Grid grow gutter="sm" mt="4rem">
            <Grid.Col lg="12">
                <Paper mah="232" radius="md" bg="red.9">
                    <Image mah="232" fit="contain" src="https://storage.googleapis.com/portal-da-promo/L01_card_promocaobudweiser-melevalollapalooza-20231677620126368.webp" alt="Banner" />
                </Paper>
            </Grid.Col>
		</Grid>
	);
};

export default Banner;

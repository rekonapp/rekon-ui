import BannerContainer from './Banner';
import CarouselContainer from './PhotosCarousel';
import { Container } from '@mantine/core';

const Home = () => (
    <Container size='sm'>
        <BannerContainer />
        <CarouselContainer />
    </Container>
);

export default Home;

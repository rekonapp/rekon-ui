import ActionsContainer from './Actions';
import BannerContainer from './Banner';
import CarouselContainer from './PhotosCarousel';
import { Container, Text } from '@mantine/core';

const Home = () => (
    <Container size='sm' pt='2rem'>
        <BannerContainer />
        <CarouselContainer />
        <Text size='32px' ta='center' mt='1rem' fw='300' c='red.9'>As fotos do rolê ficaram <br/> ótimas!</Text>
        <ActionsContainer />
    </Container>
);

export default Home;

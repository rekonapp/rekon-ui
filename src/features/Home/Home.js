import {
    Container,
    Flex,
    Text
} from '@mantine/core';
import ActionsContainer from './Actions';
import BannerContainer from './Banner';
import CarouselContainer from './PhotosCarousel';

const Home = () => (
    <Container size='sm' pt='2rem' h='100vh'>
        <Flex h='100vh' direction='column' justify='space-between'>
            <Flex direction='column'>
                <BannerContainer />
                <CarouselContainer />
            </Flex>
            <Text size='32px' ta='center' mt='1rem' fw='300' c='pink.9'>As fotos do rolê ficaram <br/> ótimas!</Text>
            <ActionsContainer />
        </Flex>
    </Container>
);

export default Home;

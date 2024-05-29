import ActionsContainer from './Actions';
import BannerContainer from './Banner';
import CarouselContainer from './PhotosCarousel';
import {
    Flex,
    Container,
    Text
} from '@mantine/core';

const Home = () => (
    <Container size='sm' pt='2rem' h='100vh'>
        <Flex h='100vh' direction='column' justify='space-between'>
            <Flex direction='column'>
                <BannerContainer />
                <CarouselContainer />
            </Flex>
            <Text size='32px' ta='center' mt='1rem' fw='300' c='red.9'>As fotos do rolê ficaram <br/> ótimas!</Text>
            
            <ActionsContainer />
        </Flex>
    </Container>
);

export default Home;

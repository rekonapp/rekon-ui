import MainImage from './components/MainImage/MainImage.jsx';
import LogosHeader from './components/LogosHeader/LogosHeader.jsx';
import RedirectActions from './components/RedirectActions/RedirectActions.jsx';
import { Container, Flex } from '@mantine/core';

const Home = () => {
  return (
    <Container h='100vh' miw='100vw' m='0' p='0'>
        <Flex direction='column' align='center' w='100%' h='100%' justify='space-between'>
            <LogosHeader/>
            <MainImage imageSource={'https://www.okayafrica.com/media-library/afrobeats-party.jpg?id=32063647&width=1200&height=600&coordinates=0%2C335%2C0%2C0'}/>
            <RedirectActions/>
        </Flex>
    </Container>
  )
}

export default Home

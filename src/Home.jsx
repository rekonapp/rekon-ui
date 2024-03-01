import MainImage from './components/MainImage/MainImage.jsx';
import RedirectActions from './components/RedirectActions/RedirectActions.jsx';
import { Text, Container, Flex, Box } from '@mantine/core';

const Home = () => {
  return (
    <Container h='100vh' miw='100vw' m='0' p='0'>
        <Flex direction='column' align='center' w='100%' h='100%' justify='space-between' mt='xl'>
            <MainImage height={232} width={390} imageSource={'https://www.papodebar.com/wp-content/uploads/2017/03/banner-Lollapalooza-Brasil-2017.jpg'}/>
            <Text size='32px' c='red.8'>As fotos do rolê <br/> ficaram ótimas! </Text>
            <MainImage height={208} width={390} imageSource={'https://www.okayafrica.com/media-library/afrobeats-party.jpg?id=32063647&width=1200&height=600&coordinates=0%2C335%2C0%2C0'}/>
            <RedirectActions/>
        </Flex>
    </Container>
  )
}

export default Home

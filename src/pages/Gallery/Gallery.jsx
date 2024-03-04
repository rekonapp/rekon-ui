import PropTypes from 'prop-types';
import { Container } from '@mantine/core';
import Navigation from '../../components/Navigation/Navigation';

const Gallery = () => {
  return (
    <Container h='100vh' miw='100vw' m='0' p='0'>
        <Navigation/>
    </Container>
  )
}

Gallery.propTypes = {
    mainColor: PropTypes.string
};

export default Gallery

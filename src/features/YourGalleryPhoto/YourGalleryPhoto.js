import { Container } from '@mantine/core';
import PhotoContainer from '../../components/Photo';
import FloatingMenuContainer from '../../components/FloatingMenu';
import FloatingActionsContainer from '../../components/FloatingActions';
import YourGalleryPhotosContainer from '../YourGallery/YourGalleryPhotos/';

const YourGalleryPhoto = () => {
  return (
    <Container size='sm' pt='4rem'>
        <FloatingMenuContainer/>
        <PhotoContainer/>
        <YourGalleryPhotosContainer url={'filled'}/>
        <FloatingActionsContainer/>
    </Container>
  )
}

export default YourGalleryPhoto
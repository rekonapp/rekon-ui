import { Title, Text } from "@mantine/core";
import GalleryPhotos from "../../components/GalleryPhotos/";
import FloatingMenuContainer from "../../components/FloatingMenu/";
import FloatingActionsContainer from "../../components/FloatingActions/";

import { Container } from "@mantine/core";
import useEventGalleryContainer from "./EventGallery.container";

const EventGallery = () => {
  const { data, status, isFetching, onPhotoClick } = useEventGalleryContainer();

  return (
    <Container size="sm" pt="4rem">
      <FloatingMenuContainer />
      <Title order={2} fw="400" ta="center" mt={44}>
        Seus{" "}
        <Text span fw="bold" inherit>
          melhores momentos
        </Text>
      </Title>
      <Title order={2} fw="400" ta="center">
        aparecem aqui :)
      </Title>
      <Title order={5} fw="400" ta="center" mt="md" c="gray.6">
        Clique em uma das fotos e veja de pertinho.
      </Title>
      <GalleryPhotos
        data={data}
        status={status}
        onPhotoClick={onPhotoClick}
        isFetching={isFetching}
      />
      <FloatingActionsContainer />
    </Container>
  );
};

export default EventGallery;

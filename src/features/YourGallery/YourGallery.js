import { Container, Title, Text } from "@mantine/core";
import FloatingMenuContainer from "../../components/FloatingMenu/";
import FloatingActionsContainer from "../../components/FloatingActions/";
import YourPhoto from "./YourPhoto";
import GalleryPhotos from "../../components/GalleryPhotos/";
import useYourGalleryContainer from "./YourGallery.container";

const YourGallery = () => {
  const {
    data,
    key,
    isLoading,
    isConfirmationStep,
    onConfirmFaceClick,
    onPhotoClick,
    photo
  } = useYourGalleryContainer();

  return (
    <Container size="sm" pt="4rem">
      <FloatingMenuContainer />
      <YourPhoto
        url={photo?.url}
        loading={isLoading}
        onConfirmFaceClick={onConfirmFaceClick}
        reducedImage={false}
      />
      {
            isConfirmationStep ? (
                <>
                    <Title order={1} fw='400' ta='center' mt='xl'>
                        Você é essa pessoa?
                    </Title>
                    <Text variant='secondary' fw='400' size='md' ta='center' mt='md' c='gray.6'>
                        Se sim, <Text span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={onConfirmFaceClick}>clique aqui.</Text>
                        <br/>
                        Se não, tente novamente.
                    </Text>
                </>
            ) : (
                isLoading && (
                    <></>
                ) || (
                    photo && (
                        <>
                            <Title order={2} fw='400' ta='center' mt='xl'>
                                Seus <Text span fw='bold' inherit>melhores momentos</Text>
                            </Title>
                            <Title order={2} fw='400' ta='center'>
                                aparecem aqui :)
                            </Title>
                            <Title order={5} fw='400' ta='center' mt='md' c='gray.6'>
                                Clique em uma das fotos e veja de pertinho.
                            </Title>
                        </>
                    ) || (
                        <>
                            <Title order={2} fw='400' ta='center' mt='xl'>
                                Desculpe, mas não<br/>encontramos fotos com seu <br/>rosto :(
                            </Title>
                            <Title order={6} fw='400' ta='center' mt='md' c='gray.6'>
                                Fotos que possuem rostos reconhecidos por nossa tecnologia <br/> aparecem logo abaixo.
                            </Title>
                        </>
                    )
                )
        )
        }
      {!isConfirmationStep && <GalleryPhotos data={data} isFetching={isLoading} activeImageKey={key} onPhotoClick={onPhotoClick} />}
      <FloatingActionsContainer />
    </Container>
  );
};

export default YourGallery;

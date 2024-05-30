import { Title, Text } from '@mantine/core'

const GalleryText = () => {
  return (
    <>
        <Title order={2} fw='400' ta='center' mt={44}>
            Seus <Text span fw='bold' inherit>melhores momentos</Text>
        </Title>
        <Title order={2} fw='400' ta='center'>
            aparecem aqui :)
        </Title>
        <Title order={5} fw='400' ta='center' mt='md' c='gray.6'>
            Clique em uma das fotos e veja de pertinho.
        </Title>
    </>
  )
}

export default GalleryText

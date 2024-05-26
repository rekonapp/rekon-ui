import PropTypes from 'prop-types';
import {
    Text,
    Title
} from '@mantine/core'

const YourGalleryText = ({
    url,
    loading
}) => {
  return (
    <>
        {
            loading && (
                <></>
            ) || (
                url && (
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
        }
    </>
  )
};

YourGalleryText.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default YourGalleryText

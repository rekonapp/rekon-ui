import { Flex, Box, Image, Text } from '@mantine/core';

const MainImage = ({ imageSource }) => {
  return (
    <Flex
        mih={50}
        gap="xl"
        mt="xl"
        justify="center"
        align="center"
        direction="column"
    >
        <Box component="div">
            <Image mih='320' maw='390' src={imageSource} radius='md'/>
        </Box>
        <Text size='32px'>As fotos do rolê <br/> ficaram ótimas! </Text>
    </Flex>
  )
}

export default MainImage;

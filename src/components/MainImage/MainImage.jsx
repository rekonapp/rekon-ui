import { Flex, Box, Image, Text } from '@mantine/core';

const MainImage = ({
    width,
    height,
    imageSource,
}) => {
  return (
    <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="column"
    >
        <Box component="div">
            <Image mih={height} maw={width} src={imageSource} radius='md'/>
        </Box>
    </Flex>
  )
}

export default MainImage;

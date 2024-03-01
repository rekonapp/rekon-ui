import { Flex, Button, Anchor, Text } from '@mantine/core';

const RedirectActions = ({ imageSource }) => {
  return (
    <Flex
        w='100%'
        h='23%'
        gap="xl"
        mt="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        bg='gray.1'
        pos='relative'
        style={{  'border-radius': '16px 16px 0 0' }}
    >
        <Flex align='center' direction='column' gap='lg' pos='absolute' top={'-1rem'}>
            <Button bg='red.8' c='white.3' size='xl' radius='xl'>Me encontre!</Button>
            <Anchor c='gray.6' td='underline' display='flex'>
                Ir para&#160;
                <Text fw={600}>Galeria do Evento</Text>
            </Anchor>
        </Flex>
    </Flex>
  )
}

export default RedirectActions;

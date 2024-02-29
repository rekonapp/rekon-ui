import { Flex, Button, Anchor } from '@mantine/core';

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
        <Flex direction='column' gap='lg' pos='absolute' top={'-1rem'}>
            <Button>Me encontra, aluado</Button>
            <Anchor>Ir para Galeria do Evento</Anchor>
        </Flex>
    </Flex>
  )
}

export default RedirectActions;

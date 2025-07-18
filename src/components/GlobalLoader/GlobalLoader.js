import {
    Center,
    Loader
} from '@mantine/core';

const GlobalLoader = () => {
  return (
    <Center h='100vh'>
        <Loader color="violet.9" size="lg" />
    </Center>
  )
}

export default GlobalLoader
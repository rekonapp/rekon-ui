import {
    Center,
    Loader
} from '@mantine/core';

const GlobalLoader = () => {
  return (
    <Center h='100vh'>
        <Loader color="blue.7" size="lg" />
    </Center>
  )
}

export default GlobalLoader
import {
    Center,
    Loader
} from '@mantine/core';

const GlobalLoader = () => {
  return (
    <Center h='100vh'>
        <Loader color="red.9" />
    </Center>
  )
}

export default GlobalLoader
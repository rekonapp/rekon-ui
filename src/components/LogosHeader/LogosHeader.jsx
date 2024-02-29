import Logo from '../Logo/Logo.jsx';
import { Flex, Text } from '@mantine/core';

const LogosHeader = () => {
  return (
    <Flex
        mih={50}
        gap="xl"
        mt="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
    >
        <Logo imageSource={'https://marketplace.canva.com/EAEVjIqFyyQ/1/0/1600w/canva-verde-e-branco-figuras-modernas-online-evento-logotipo-LBks5-4z-qI.jpg'}/>
        <Text>+</Text>
        <Logo imageSource={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmkZF1aeWNw5C4GcHOYx7J2zNWXxFx5xAi5Zd-WTGag&s'}/>
    </Flex>
  )
}

export default LogosHeader

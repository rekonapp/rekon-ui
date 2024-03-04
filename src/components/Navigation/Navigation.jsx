import { IconAdjustments } from '@tabler/icons-react';
import { Box, ActionIcon } from '@mantine/core';

const Navigation = () => {
  return (
    <Box miw={410} mih={58} bg='gray.2' component='div' style={{ borderRadius: '30px' }}>
        <ActionIcon variant="filled" color="gray" size="xl" radius="xl" aria-label="Settings">
            <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
        <Box>
            Home / Galeria do Evento
        </Box>
        <ActionIcon variant="filled" color="gray" size="xl" radius="xl" aria-label="Settings">
            <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
    </Box>
  )
}

export default Navigation;

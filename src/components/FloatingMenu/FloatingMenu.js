import {
    Text,
    Flex,
    Paper,
    Popover,
    ActionIcon
} from '@mantine/core';

import { IconArrowBack, IconDots } from '@tabler/icons-react';

import FloatingMenuBreadcrumbsContainer from './FloatingMenuBreadcrumbs';

import classes from './FloatingMenu.module.css';

const FloatingMenu = () => (
    <Paper withBorder radius='xl' bg='gray.0' p='xs'>
        <Flex
            gap="sm"
            justify="center"
            align="center"
            direction="row"
        >
            <ActionIcon color='gray.5' size='md' w='50' h='50' autoContrast radius='xl'>
                <IconArrowBack stroke={1}></IconArrowBack>
            </ActionIcon>
            <Paper withBorder radius='xl' className={classes.innerContent} bg='gray.0'>
                <FloatingMenuBreadcrumbsContainer/>
            </Paper>
            <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <ActionIcon color='gray.5' size='md' w='50' h='50' autoContrast radius='xl'>
                        <IconDots stroke={1} />
                    </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                    <Text size="xs">Nosso Regulamento</Text>
                    <Text size="xs">Nosso Regulamento</Text>
                </Popover.Dropdown>
            </Popover>
        </Flex>
    </Paper>
);

export default FloatingMenu;

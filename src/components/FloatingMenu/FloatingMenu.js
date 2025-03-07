import PropTypes from 'prop-types';

import {
    ActionIcon,
    Container,
    Divider,
    Flex,
    NavLink,
    Paper,
    Popover
} from '@mantine/core';

import {
    IconArrowBack,
    IconDots,
    IconLicense,
    IconMail
} from '@tabler/icons-react';

import FloatingMenuBreadcrumbsContainer from './FloatingMenuBreadcrumbs';

import classes from './FloatingMenu.module.css';

const FloatingMenu = ({ onReturnClick }) => {
    return (
        <Container className={classes.fixedNavbar} mt='sm'>
            <Paper withBorder radius='xl' bg='gray.0' p='xs'>
                <Flex
                    gap="sm"
                    justify="space-between"
                    align="center"
                    direction="row"
                >
                    <ActionIcon className={classes.actionIcon} color='gray.5' size='ms' w='50' h='50' autoContrast radius='xl' onClick={() => onReturnClick()}>
                        <IconArrowBack stroke={1}></IconArrowBack>
                    </ActionIcon>
                    <Paper withBorder radius='xl' className={classes.innerContent} bg='gray.0'>
                        <FloatingMenuBreadcrumbsContainer/>
                    </Paper>
                    <Popover width={200} position="bottom" withArrow shadow="md">
                        <Popover.Target>
                            <ActionIcon className={classes.actionIcon} color='gray.5' size='md' w='50' h='50' autoContrast radius='xl'>
                                <IconDots stroke={1} />
                            </ActionIcon>
                        </Popover.Target>
                        <Popover.Dropdown w='224' p={4} className={classes.popoverDropdown}>
                            <NavLink
                                href="#required-for-focus"
                                label="Nosso regulamento"
                                leftSection={<IconLicense size="1rem" stroke={1.5} />}
                            />
                            <Divider my={4} />
                            <NavLink
                                href="#required-for-focus"
                                label="Contato"
                                leftSection={<IconMail size="1rem" stroke={1.5} />}
                            />
                        </Popover.Dropdown>
                    </Popover>
                </Flex>
            </Paper>
        </Container>
    )
};

FloatingMenu.propTypes = {
    onReturnClick: PropTypes.func.isRequired
};

export default FloatingMenu;

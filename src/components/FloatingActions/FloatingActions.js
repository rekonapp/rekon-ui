import PropTypes from 'prop-types';
import {
    Flex,
    Paper,
    Button,
    Container,
    ActionIcon
} from '@mantine/core';

import {
    IconArrowUp
} from '@tabler/icons-react';

import classes from './FloatingActions.module.css';

const FloatingActions = ({
    onScrollClick,
    onFindClick
}) => {
    return (
        <Container className={classes.fixedActions} h='74px'>
            <Paper withBorder p='sm' className={classes.fixedActionsInfo}>
                <Flex align='center' justify='space-between' gap='20px'>
                    <Button onClick={() => onFindClick()} radius='xl' bg='red.9' h={58} fw='400' flex='2'>Me encontre!</Button>
                    <ActionIcon color='gray.5' size='md' w='58' h='58' radius='xl' onClick={() => onScrollClick()}>
                        <IconArrowUp stroke={1}></IconArrowUp>
                    </ActionIcon>
                </Flex>
            </Paper>
        </Container>
    )
};

FloatingActions.propTypes = {
    onFindClick: PropTypes.func.isRequired,
    onScrollClick: PropTypes.func.isRequired
};

export default FloatingActions;

import PropTypes from 'prop-types';
import {
    Flex,
    Paper,
    Button,
    Container,
    ActionIcon,
    FileButton
} from '@mantine/core';

import {
    IconFaceId,
    IconArrowUp
} from '@tabler/icons-react';

import classes from './FloatingActions.module.css';

const FloatingActions = ({
    setFile,
    isMobile,
    onFindClick,
    onScrollClick,
}) => {
    return (
        <Container className={classes.fixedActions} h='74px'>
            <Paper withBorder p='sm' className={classes.fixedActionsInfo}>
                <Flex align='center' justify='space-between' gap='20px'>
                {
                    isMobile && (
                        <FileButton onChange={setFile} accept="image/png, image/jpeg" multiple>
                            
                            {(props) => <Button {...props} leftSection={<IconFaceId className={classes.iconButton}></IconFaceId>} radius='xl' bg='red.9' h={58} fw='400' flex='2'> Me encontre! </Button>}
                        </FileButton>
                    ) || (
                        <Button onClick={onFindClick} radius='xl' leftSection={<IconFaceId className={classes.iconButton}></IconFaceId>} bg='red.9' h={58} fw='400' flex='2'>Me encontre!</Button>
                    )
                }
                    <ActionIcon color='gray.5' size='md' w='58' h='58' radius='xl' onClick={() => onScrollClick()}>
                        <IconArrowUp stroke={1}></IconArrowUp>
                    </ActionIcon>
                </Flex>
            </Paper>
        </Container>
    )
};

FloatingActions.propTypes = {
    isMobile: PropTypes.bool,
    setFile: PropTypes.func.isRequired,
    onFindClick: PropTypes.func.isRequired,
    onScrollClick: PropTypes.func.isRequired
};

export default FloatingActions;

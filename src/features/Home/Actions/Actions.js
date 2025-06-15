import {
    Text,
    Grid,
    Paper,
    Button,
    Center,
    FileButton
} from '@mantine/core';

import PropTypes from 'prop-types';
import classes from './Actions.module.css';
import { IconFaceId } from '@tabler/icons-react';

const Actions = ({
    setFile,
    isMobile,
    onFindMeClick,
    onGalleryEventButtonClick
}) => {
	return (
		<Grid grow gutter='sm' mt='4rem'>
            <Grid.Col lg='12' pb={0}>
                <Paper className={classes.actionsContainer} radius='1rem 1rem 0 0' bg='gray.0' withBorder>
                    <Center pos='relative'>
                        {
                            isMobile && (
                                <FileButton onChange={setFile} accept="image/png, image/jpeg" multiple>
                                    {(props) => <Button {...props} className={classes.mainButton} leftSection={<IconFaceId className={classes.iconButton} stroke={1.5}/>} fullWidth color='blue.7' size='24' radius='lg' fw='400' h='72'>Me encontre! </Button>}
                                </FileButton>
                            ) || (
                                <Button onClick={onFindMeClick} className={classes.mainButton} leftSection={<IconFaceId className={classes.iconButton} stroke={1.5}/>} fullWidth color='blue.7' size='24' radius='lg' fw='400' h='72'>Me encontre! </Button>
                            )
                        }
                        <Text onClick={() => onGalleryEventButtonClick()}component='span' td='underline' c='gray.6' className={classes.redirectLink}>Ir para a <Text component='a' fw={500}>Galeria do Evento</Text></Text>
                    </Center>
                </Paper>
            </Grid.Col>
		</Grid>
	);
};

Actions.propTypes = {
    isMobile: PropTypes.bool,
    setFile: PropTypes.func.isRequired,
    onFindMeClick: PropTypes.func.isRequired,
    onGalleryEventButtonClick: PropTypes.func.isRequired
};

export default Actions;

import {
    Text,
    Box,
    Group,
    Button
} from '@mantine/core';
import PropTypes from 'prop-types';
import { IconFaceId } from '@tabler/icons-react';

import { Dropzone } from '@mantine/dropzone';

import classes from './ModalUploadImage.module.css';
const IMAGE_MIME_TYPE = ["image/png","image/gif", "image/jpeg"];

const ModalUploadImage = ({
    file,
    onFindClick,
    dropzoneControl
}) => {
    return (
        <Box>
            <Dropzone
                multiple={false}
                radius='lg'
                className={classes.root}
                onDrop={dropzoneControl.onSuccess}
                accept={IMAGE_MIME_TYPE}
                >
                <Group justify="center" gap="xl" mih={!file && 227 || 139} style={{ pointerEvents: 'none', color: file && 'red' }}>
                    <Box ta='center'>
                        <IconFaceId/>
                        <Dropzone.Accept>
                            <Text size="sm" inline mt={7}>
                                {file?.name || 'Formatos suportados: jpg, jpeg, png.' }
                            </Text>
                        </Dropzone.Accept>
                        <Dropzone.Idle>
                            <Text size="sm" inline mt={7}>
                                {file?.name || 'Formatos suportados: jpg, jpeg, png.' }
                            </Text>
                        </Dropzone.Idle>
                        <Dropzone.Reject>
                            <Text size="sm" inline mt={7}>
                                Foto com formato inválido, não será possível
                            </Text>
                        </Dropzone.Reject>
                    </Box>
                </Group>
            </Dropzone>
            {
                file && (
                    <Button fullWidth radius='lg' mt='sm' color='red.9' h={72} onClick={onFindClick}>Me encontre!</Button>
                )
            }
        </Box> 
    )
};

ModalUploadImage.propTypes = {
    file: PropTypes.object,
    onFindClick: PropTypes.func,
    dropzoneControl: PropTypes.object
};

export default ModalUploadImage
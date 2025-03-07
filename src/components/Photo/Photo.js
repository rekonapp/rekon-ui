import {
    Button,
    Card,
    Center,
    Divider,
    Flex,
    Image,
    LoadingOverlay,
    NavLink,
    Popover
} from '@mantine/core';

import { IconBrandInstagram, IconDownload, IconInfoCircle } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import classes from './Photo.module.css';

const Photo = ({
    photo,
    loading,
    onDownloadClick,
    downloadLoading,
    reducedImage,
    innerWidth
}) => {
  return (
    <Card withBorder shadow="sm" radius="xl" mt={ (reducedImage || innerWidth < 500) ? '100px' : '32px' } className={classes.photoContainer}>
            { (!loading && photo?.thumb_url) ? (
                    <>
                        <Card.Section h={ (reducedImage || innerWidth < 500) ? '280px' : '420px' } className={classes.photo} mt='sm' bg='gray.1'>
                            <Center>
                                <Image h={ (reducedImage || innerWidth < 500) ? '280px' : '420px' } className={classes.photo} src={photo.thumb_url} style={{ objectPosition: 'top' }}/>
                            </Center>
                        </Card.Section>

                        <Card.Section inheritPadding mt="sm" pb="md">
                            <Flex align='center' justify='center' gap={10} className={classes.photoActions}>
                                <Button onClick={() => onDownloadClick(photo)} loading={downloadLoading} radius='xl' bg='gray.2' c='dark' h={42} w={'256'} fw='400' href={photo.url} leftSection={<IconDownload size='20'/>}>
                                    Download
                                </Button>
                                <Popover width={200} position="bottom" withArrow shadow="md">
                                    <Popover.Target>
                                        <Button radius='xl' bg='gray.2' c='dark' h={42} fw='400' leftSection={<IconInfoCircle size='20'/>}>
                                            Sobre
                                        </Button>
                                    </Popover.Target>
                                    <Popover.Dropdown w='224' p={4}>
                                        <NavLink
                                            label="@fotografo.insta"
                                            leftSection={<IconBrandInstagram size="1rem" stroke={1.5} />}
                                        />
                                        <Divider my={4} />
                                        <NavLink
                                            label="01/01/2020"
                                            leftSection={<IconInfoCircle size="1rem" stroke={1.5} />}
                                        />
                                    </Popover.Dropdown>
                                </Popover>
                            </Flex>
                        </Card.Section>
                    </>
                    ) : (
                    <Card.Section h={'420px'}>
                        <LoadingOverlay visible={true} color='red.9' zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                    </Card.Section>
                )
            }
    </Card>
  )
};

Photo.propTypes = {
    photo: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    reducedImage: PropTypes.bool.isRequired,
    downloadLoading: PropTypes.bool.isRequired,
    onDownloadClick: PropTypes.func.isRequired,
    innerWidth: PropTypes.number.isRequired
};

export default Photo

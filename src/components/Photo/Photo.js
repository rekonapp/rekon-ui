import {
    Card,
    Flex,
    Button,
    Center,
    Image,
    Popover,
    NavLink,
    Divider,
    LoadingOverlay
} from '@mantine/core';

import PropTypes from 'prop-types';
import classes from './Photo.module.css';
import { IconDownload, IconBrandInstagram, IconInfoCircle } from '@tabler/icons-react';

const Photo = ({
    photo,
    loading,
    reducedImage
}) => {
  return (
    <Card withBorder shadow="sm" radius="xl" mt={ reducedImage ? '100px' : '32px' } className={classes.photoContainer}>
      <Card.Section h={ reducedImage ? '280px' : '420px' } className={classes.photo} mt='sm' bg='gray.1'>
        <Center>
            {
                (!loading && photo?.url) && (
                    <Image h={ reducedImage ? '280px' : '420px' } className={classes.photo} src={photo.url} style={{ objectPosition: 'top' }}/>
                ) || (
                    <LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                )
            }
        </Center>
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <Flex align='center' justify='center' gap={10}>
            <Button radius='xl' bg='gray.2' c='dark' h={42} w={'293'} fw='400' leftSection={<IconDownload size='20'/>}>
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
    </Card>
  )
};

Photo.propTypes = {
    photo: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    reducedImage: PropTypes.bool.isRequired
};

export default Photo

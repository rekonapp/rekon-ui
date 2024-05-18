import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import relativeTime from 'dayjs/plugin/relativeTime';

import { RouterProvider } from 'react-router-dom';

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

import { createRouter } from './app/routes';

import 'dayjs/locale/pt-br';

import './Root.css';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);

const Root = () => {
	const router = createRouter();

	return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <ModalsProvider modalProps={{ centered: true }}>
                <RouterProvider router={router} />
            </ModalsProvider>
        </MantineProvider>
	);
};

export default Root;

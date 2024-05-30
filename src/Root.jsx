import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useScrollIntoView } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications'

import { BrowserRouter } from 'react-router-dom';

import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';

import RouterContainer from './app/routes';

import 'dayjs/locale/pt-br';

import './Root.css';

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


dayjs.locale('pt-br');
dayjs.extend(relativeTime);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [globalLoading, setGlobalLoading] = useState(false);
    const { scrollIntoView, targetRef } = useScrollIntoView({
        duration: 200
    });

    return (
        <GlobalContext.Provider value={{ globalLoading, setGlobalLoading, event_key: import.meta.env.VITE_EVENT_KEY, scrollFn: scrollIntoView, scrollRef: targetRef  }}>
            {children}
        </GlobalContext.Provider>
    );
};

const Root = () => {
    const queryClient = new QueryClient();

	return (
        <BrowserRouter>
            <GlobalProvider>
                <QueryClientProvider client={queryClient}>
                    <MantineProvider theme={{
                            fontFamily: 'Archivo, serif',
                            headings: { fontFamily: 'Archivo, serif' }
                        }}>
                        <Notifications/>
                        <ModalsProvider modalProps={{ centered: true }}>
                            <RouterContainer/>
                        </ModalsProvider>
                    </MantineProvider>
                </QueryClientProvider>
            </GlobalProvider>
        </BrowserRouter>
	);
};


GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default Root;

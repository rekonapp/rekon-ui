import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';

import '@mantine/core/styles.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([{
    path: '/',
    element: <Home mainColor={'red'} />
}, {
    path: '/gallery',
    element: <Gallery />
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
)

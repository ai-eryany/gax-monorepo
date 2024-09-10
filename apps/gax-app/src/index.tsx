import './index.css';
import './index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';
import { App } from '@app';
import { clx } from '@gax/utils';
import { ROUTES } from '@gax/constants';
import { config } from '@configs';
import { HomeOutlet } from '@interface';

const home: RouteObject = {
    index: true,
    element: <HomeOutlet />,
};

const app: RouteObject = {
    path: clx(ROUTES?.HOME?.URL),
    element: <App />,
    children: [home],
};

createRoot(document.getElementById(config?.appTag || '')!).render(
    <StrictMode>
        <RouterProvider router={createBrowserRouter([app])} />
    </StrictMode>
);

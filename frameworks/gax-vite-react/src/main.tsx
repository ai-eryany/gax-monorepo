import '@styles/globals/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';
import { App } from './App';
import { clx } from '@gax/utils';
import { ROUTES } from '@gax/constants';
import { HomeOutlet } from './outlets';
import { appConfig } from './configs';

const home: RouteObject = {
    index: true,
    element: <HomeOutlet />,
};

const app: RouteObject = {
    path: clx(ROUTES?.HOME?.URL),
    element: <App />,
    children: [home],
};

export function surveReactVite(ele: Element) {
    return createRoot(ele).render(
        <StrictMode>
            <RouterProvider router={createBrowserRouter([app])} />
        </StrictMode>
    );
}

surveReactVite(document.getElementById(appConfig.appTag || '')!);

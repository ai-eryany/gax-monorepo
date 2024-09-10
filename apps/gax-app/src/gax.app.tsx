import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { usePathNormalizer, useScroll } from '@gax/hooks';
import {
    Headerlayout,
    NavbarLayout,
    MainLayout,
    FooterLayout,
} from '@interface';
import { NavbarComp } from '@components';

function App() {
    usePathNormalizer();
    useScroll();
    return (
        <HelmetProvider>
            <Helmet prioritizeSeoTags>
                <html dir="ltr" lang="en" className="" />
                <title>GAX</title>
            </Helmet>
            <Headerlayout>
                <NavbarLayout>
                    <NavbarComp />
                </NavbarLayout>
            </Headerlayout>
            <MainLayout>
                <Outlet />
            </MainLayout>
            <FooterLayout />
        </HelmetProvider>
    );
}

export { App };

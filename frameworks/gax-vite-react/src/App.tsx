import { Helmet, HelmetProvider } from 'react-helmet-async';
import { clx, cntl } from '@gax/utils';
import { Outlet } from 'react-router-dom';
import { usePathNormalizer } from '@gax/hooks';
import {
    HeaderLayout,
    NavbarLayout,
    MainLayout,
    FooterLayout,
    SidebarLayout,
} from '@layouts';
import { NavbarArea, SidebarArea } from '@components';

const style = cntl`
    bg-primary
`;

// TODO: uncomment useScroll in production!
function App() {
    usePathNormalizer();
    // useScroll();
    return (
        <HelmetProvider>
            <Helmet prioritizeSeoTags>
                <html dir="ltr" lang="en" className="" />
                <title>GAX</title>
                <body className={clx(style)} />
            </Helmet>
            <HeaderLayout>
                <NavbarLayout>
                    <NavbarArea />
                </NavbarLayout>
            </HeaderLayout>
            <SidebarLayout>
                <SidebarArea />
            </SidebarLayout>
            <MainLayout>
                <Outlet />
            </MainLayout>
            <FooterLayout />
        </HelmetProvider>
    );
}

export { App };

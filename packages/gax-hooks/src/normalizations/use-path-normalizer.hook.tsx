// Packages
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Constants
import { ROUTES } from '@gax/constants';

function usePathNormalizer() {
    const { pathname } = useLocation();
    const normalizedPaths = [ROUTES?.HOME_ALT?.URL, ROUTES?.HOME_ALT2?.URL];
    useEffect(() => {
        if (normalizedPaths.includes(pathname)) window.location.href = '/';
    }, [pathname, ROUTES]);
}

export { usePathNormalizer };

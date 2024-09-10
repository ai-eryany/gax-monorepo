// Packages
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@gax/constants';
import * as R from 'ramda';

function usePathname() {
    const { pathname } = useLocation();
    const [isHome, setIsHome] = useState(R.equals(pathname, ROUTES?.HOME?.URL));
    const [isAbout, setIsAbout] = useState(
        R.equals(pathname, ROUTES?.ABOUT?.URL)
    );
    const [isContact, setIsContact] = useState(
        R.equals(pathname, ROUTES?.CONTACT?.URL)
    );
    const [isBlogs, setIsBlogs] = useState(
        R.equals(pathname, ROUTES?.BLOGS?.URL)
    );
    const [isProjects, setIsProjects] = useState(
        R.equals(pathname, ROUTES?.PROJECTS?.URL)
    );
    const [isNotFound, setIsNotFound] = useState(
        R.equals(pathname, ROUTES?.['*']?.URL)
    );

    const switchToHome = () => {
        setIsHome(true);
        setIsAbout(false);
        setIsContact(false);
        setIsBlogs(false);
        setIsProjects(false);
        setIsNotFound(false);
    };

    const switchToAbout = () => {
        setIsHome(false);
        setIsAbout(true);
        setIsContact(false);
        setIsBlogs(false);
        setIsProjects(false);
        setIsNotFound(false);
    };

    const switchToContact = () => {
        setIsHome(false);
        setIsAbout(false);
        setIsContact(true);
        setIsBlogs(false);
        setIsProjects(false);
        setIsNotFound(false);
    };

    const switchToBlogs = () => {
        setIsHome(false);
        setIsAbout(false);
        setIsContact(false);
        setIsBlogs(true);
        setIsProjects(false);
        setIsNotFound(false);
    };

    const switchToProjects = () => {
        setIsHome(false);
        setIsAbout(false);
        setIsContact(false);
        setIsBlogs(false);
        setIsProjects(true);
        setIsNotFound(false);
    };

    const switchToNotFound = () => {
        setIsHome(false);
        setIsAbout(false);
        setIsContact(false);
        setIsBlogs(false);
        setIsProjects(false);
        setIsNotFound(true);
    };

    useEffect(() => {
        if (R.equals(pathname, ROUTES?.HOME?.URL)) switchToHome();
        else if (R.equals(pathname, ROUTES?.ABOUT?.URL)) switchToAbout();
        else if (R.equals(pathname, ROUTES?.CONTACT?.URL)) switchToContact();
        else if (R.equals(pathname, ROUTES?.BLOGS?.URL)) switchToBlogs();
        else if (R.equals(pathname, ROUTES?.PROJECTS?.URL)) switchToProjects();
        else if (R.equals(pathname, ROUTES?.['*']?.URL)) switchToNotFound();
    }, [pathname]);

    return { isHome, isAbout, isContact, isBlogs, isProjects, isNotFound };
}

export { usePathname };

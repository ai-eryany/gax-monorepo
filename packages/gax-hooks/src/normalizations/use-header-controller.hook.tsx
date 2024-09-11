import { useEffect, useState } from 'react';

function useHeaderController() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlHeader);
        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);

    return [isVisible];
}

export { useHeaderController };

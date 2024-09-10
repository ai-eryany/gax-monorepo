// Packages
import { useState, useEffect } from 'react';

function useWindow() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const applyWindowSize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', applyWindowSize);
        return () => window.removeEventListener('resize', applyWindowSize);
    }, []);

    return [windowWidth];
}

export { useWindow };

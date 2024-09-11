import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function MobileNavbarList() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav((state) => !state);

    return (
        <div>
            <div onClick={handleClick} className="z-10 md:hidden">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]'
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>
        </div>
    );
}

export { MobileNavbarList };

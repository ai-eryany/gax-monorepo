import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SocialIconComp } from './social-icon.comp';

function SocialIconsComp() {
    return (
        <ul className="fixed left-0 top-[35%] hidden flex-col lg:flex ">
            <SocialIconComp
                href="/"
                Icon={FaLinkedin}
                text="LinkedIn"
                className="bg-blue-500"
            />
            <SocialIconComp
                href="/"
                Icon={FaGithub}
                text="Github"
                className="bg-gray-600"
            />
            <SocialIconComp
                href="/"
                Icon={HiOutlineMail}
                text="Email"
                className="bg-cyan-600"
            />
            <SocialIconComp
                href="/"
                Icon={BsFillPersonLinesFill}
                text="Resume"
                className="bg-gray-800"
            />
        </ul>
    );
}

export { SocialIconsComp };

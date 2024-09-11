import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SocialIcon } from './social.icon';

// TODO: convert this into dynamic listing with the public-db
function SocialList() {
    return (
        <>
            <li>
                <SocialIcon
                    href="/"
                    Icon={FaLinkedin}
                    text="LinkedIn"
                    className="bg-blue-500"
                />
            </li>
            <li>
                <SocialIcon
                    href="/"
                    Icon={FaGithub}
                    text="Github"
                    className="bg-gray-600"
                />
            </li>
            <li>
                <SocialIcon
                    href="/"
                    Icon={HiOutlineMail}
                    text="Email"
                    className="bg-cyan-600"
                />
            </li>
            <li>
                <SocialIcon
                    href="/"
                    Icon={BsFillPersonLinesFill}
                    text="Resume"
                    className="bg-gray-800"
                />
            </li>
        </>
    );
}

export { SocialList };

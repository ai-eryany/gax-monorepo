import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SocialIcon } from './Social.icon';

// TODO: convert this into dynamic listing with the public-db
export function SocialList() {
    return (
        <>
            <SocialIcon
                href="/"
                Icon={FaLinkedin}
                text="LinkedIn"
                className="bg-blue-500"
            />
            <SocialIcon
                href="/"
                Icon={FaGithub}
                text="Github"
                className="bg-gray-600"
            />
            <SocialIcon
                href="/"
                Icon={HiOutlineMail}
                text="Email"
                className="bg-cyan-600"
            />
            <SocialIcon
                href="/"
                Icon={BsFillPersonLinesFill}
                text="Resume"
                className="bg-gray-800"
            />
        </>
    );
}

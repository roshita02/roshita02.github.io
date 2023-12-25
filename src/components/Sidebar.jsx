import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const social = {
    linkedin: 'https://www.linkedin.com/in/roshitashk/',
    github: 'https://github.com/roshita02',
    twitter: 'https://twitter.com/roshita_shakya'
  };

  return (
    <ul>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#2867B2]">
        <a
          className="flex justify-around items-center w-full "
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <FaLinkedin size={30} />
        </a>
      </li>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#1B1F23]">
        <a
          className="flex justify-around items-center w-full"
          href={social.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FaGithub size={30} />
        </a>
      </li>

      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#2867B2]">
        <a
          className="flex justify-around items-center w-full "
          href={social.twitter}
          target="_blank"
          rel="noreferrer"
        >
          Twitter <FaTwitter size={30} />
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;

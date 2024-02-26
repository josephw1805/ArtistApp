import Link from "next/link";

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiWeiboFill,
} from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";

const socials = [
  {
    path: "https://www.youtube.com/channel/UCiv7jcOvvOrpChrrElT-9tw",
    icon: <RiYoutubeFill />,
  },
  {
    path: "https://www.instagram.com/CYNDILOVES2SING/",
    icon: <RiInstagramFill />,
  },
  {
    path: "https://www.tiktok.com/@cyndiwang905",
    icon: <FaTiktok />,
  },
  {
    path: "https://www.facebook.com/0905CyndiWang/",
    icon: <RiFacebookBoxFill />,
  },
  {
    path: "https://www.weibo.com/1504965390",
    icon: <RiWeiboFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank">
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

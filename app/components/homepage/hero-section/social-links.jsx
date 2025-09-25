// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {FaFacebook, FaInstagram, FaTwitterSquare} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="my-12 flex items-center gap-5">
      {personalData.github && (
        <Link
          href={personalData.github}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <BsGithub size={30} />
        </Link>
      )}
      {personalData.linkedIn && (
        <Link
          href={personalData.linkedIn}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <BsLinkedin size={30} />
        </Link>
      )}
      {personalData.facebook && (
        <Link
          href={personalData.facebook}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <FaFacebook size={30} />
        </Link>
      )}
      {personalData.instagram && (
        <Link
          href={personalData.instagram}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <FaInstagram size={30} />
        </Link>
      )}
      {personalData.leetcode && (
        <Link
          href={personalData.leetcode}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <SiLeetcode size={30} />
        </Link>
      )}
      {personalData.twitter && (
        <Link
          href={personalData.twitter}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <FaTwitterSquare size={30} />
        </Link>
      )}
    </div>
  );
} 
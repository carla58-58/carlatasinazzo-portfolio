import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 bg-background dark:bg-background" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Would you like to collaborate on a project <span className="text-purple">together</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s get in touch to discuss employment opportunities.
        </p>
        <a href="mailto:carlaa_58@hotmail.com">
          <MagicButton
            title="Send me a message"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Carla Tasinazzo
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-background rounded-lg border border-black-300"
            >
              <a key={info.id} href={info.url} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

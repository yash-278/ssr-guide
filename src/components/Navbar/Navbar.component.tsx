import {
  FaMap,
  FaFlagCheckered,
  FaCar,
  FaExclamationTriangle,
  FaArrowCircleDown,
} from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button/Button.component";
import logo from "../../assets/images/ssr-logo.png";
import { useState } from "react";
import Modal from "../Modal/Modal.component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-mirage py-3 px-5 border-b-2 border-spring-green flex items-center justify-between">
      <div className="flex space-x-20">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="relative h-10" />
          <div className="-skew-x-[12deg] text-white font-bold uppercase tracking-widest text-sm bg-blue-dianne px-2 border-2 border-jade">
            Guide
          </div>
        </div>
        <div className="flex space-x-3 items-center">
          <Button
            className="hidden lg:flex"
            text="Cars"
            type="Primary"
            icon={<FaCar className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            className="hidden lg:flex"
            text="Map"
            type="Primary"
            icon={<FaMap className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            className="hidden lg:flex"
            text="Races"
            type="Primary"
            icon={<FaFlagCheckered className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            className="hidden lg:flex"
            text="Challenges"
            type="Primary"
            icon={<FaExclamationTriangle className="text-spring-green" scale={"1.3em"} />}
          />
        </div>
      </div>
      <div>
        <Button
          className="hidden lg:flex"
          text="Download"
          type="Secondary"
          onClick={() => {
            window.open(
              "https://play.google.com/store/apps/details?id=com.timbojimbo.ssr&referrer=utm_source%3Dssrguide%26utm_medium%3Dsocial%26utm_campaign%3Dplay_now"
            );
          }}
          icon={<FaArrowCircleDown className="text-mirage" scale={"1.3em"} />}
        />
        <Button
          className="lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="Icon"
          icon={<GiHamburgerMenu className="text-mirage" scale={"1.3em"} />}
        />
      </div>

      <Modal state={[isOpen, setIsOpen]} />
    </div>
  );
};

export default Navbar;

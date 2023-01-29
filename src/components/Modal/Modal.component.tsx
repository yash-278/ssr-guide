import React from "react";
import Button from "../Button/Button.component";
import { GoChevronLeft } from "react-icons/go";
import {
  FaArrowCircleDown,
  FaCar,
  FaExclamationTriangle,
  FaFlagCheckered,
  FaMap,
} from "react-icons/fa";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  state: [isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>];
}

const Modal = ({ state }: ModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = state;
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute h-screen w-screen left-0 bottom-0 bg-mirage bg-opacity-80 z-10`}
    >
      <div className="absolute border-2 border-spring-green p-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-mirage rounded-md w-64 mx-auto space-y-3">
        <div className="w-full relative flex items-center">
          <Button
            type="Icon Danger"
            icon={<GoChevronLeft className="text-white stroke-black" />}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <p className="uppercase flex-1 text-center text-spring-green italic font-bold tracking-widest">
            MENU
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-3 items-center">
          <Button
            text="Cars"
            className="w-full justify-center"
            type="Primary"
            icon={<FaCar className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            text="Map"
            className="w-full justify-center"
            type="Primary"
            icon={<FaMap className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            text="Races"
            className="w-full justify-center"
            type="Primary"
            icon={<FaFlagCheckered className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            text="Challenges"
            className="w-full justify-center"
            type="Primary"
            icon={<FaExclamationTriangle className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            className="w-full justify-center"
            text="Download"
            type="Secondary"
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.timbojimbo.ssr&referrer=utm_source%3Dssrguide%26utm_medium%3Dsocial%26utm_campaign%3Dplay_now"
              );
            }}
            icon={<FaArrowCircleDown className="text-mirage" scale={"1.3em"} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

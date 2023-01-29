import {
  FaMap,
  FaFlagCheckered,
  FaCar,
  FaExclamationTriangle,
  FaArrowCircleDown,
} from "react-icons/fa";
import Button from "../Button/Button.component";
import logo from "../../assets/images/ssr-logo.png";

const Navbar = () => {
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
            text="Cars"
            type="Primary"
            icon={<FaCar className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            text="Map"
            type="Primary"
            icon={<FaMap className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            text="Races"
            type="Primary"
            icon={<FaFlagCheckered className="text-spring-green" scale={"1.3em"} />}
          />
          <Button
            text="Challenges"
            type="Primary"
            icon={<FaExclamationTriangle className="text-spring-green" scale={"1.3em"} />}
          />
        </div>
      </div>
      <div>
        <Button
          text="Download"
          type="Secondary"
          icon={<FaArrowCircleDown className="text-mirage" scale={"1.3em"} />}
        />
      </div>
    </div>
  );
};

export default Navbar;

import { ReactNode } from "react";

const Button = ({
  text,
  icon,
  type,
}: {
  text: string;
  icon?: ReactNode;
  type: "Primary" | "Secondary";
}) => {
  const buttonSlanted = {
    transform: "skewX(-12deg)",
  };

  const buttonslantedtext = {
    display: "inline-block",
  };

  switch (type) {
    case "Primary":
      return (
        <button
          className="bg-blue-dianne px-7 py-1 border-2 border-jade flex items-center space-x-1"
          style={buttonSlanted}
        >
          {icon}
          <span
            className="font-bold uppercase text-sm tracking-wide text-spring-green"
            style={buttonslantedtext}
          >
            {text}
          </span>
        </button>
      );
    case "Secondary":
      return (
        <button
          className="bg-spring-green px-7 py-1 border-2 border-jade flex items-center space-x-1"
          style={buttonSlanted}
        >
          {icon}
          <span
            className="font-bold uppercase text-sm tracking-wide text-mirage"
            style={buttonslantedtext}
          >
            {text}
          </span>
        </button>
      );

    default:
      return null;
  }
};

export default Button;

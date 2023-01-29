import { ReactNode } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  type: "Primary" | "Secondary" | "Icon" | "Icon Danger";
}
const Button = ({ text, icon, type, className, ...props }: ButtonProps): JSX.Element | null => {
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
          {...props}
          className={`bg-blue-dianne px-7 py-1 border-2 border-jade flex items-center space-x-1 ${className}`}
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
          {...props}
          className={`bg-spring-green px-7 py-1 border-2 border-jade flex items-center space-x-1 ${className}`}
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
    case "Icon":
      return (
        <button
          {...props}
          className={`bg-spring-green px-4 py-1 border-2 border-jade flex items-center space-x-1 ${className}`}
          style={buttonSlanted}
        >
          {icon}
        </button>
      );

    case "Icon Danger":
      return (
        <button
          {...props}
          className={`bg-red-600 px-4 py-1 border-2 flex items-center space-x-1 ${className}`}
          style={buttonSlanted}
        >
          {icon}
        </button>
      );

    default:
      return null;
  }
};

export default Button;

import React from "react";

import { ButtonVariant } from "../../types";
import { buttonVariants } from "../../utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  label: string;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  disabled,
  type,
  ariaLabel,
  label,
  variant,
}) => {
  const variantKey = variant as ButtonVariant;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        className={`${buttonVariants[variantKey]}`}
        // className=" y-xs bg-violet px-7 hover:bg-light-violet"
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type || "button"}
      className={`button ${disabled ? "disabled" : ""}`}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};

export default Button;

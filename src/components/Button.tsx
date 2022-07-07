import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`h-12 px-4 text-sm rounded-lg outline-none bg-blue-600 text-white cursor-pointer disabled:bg-opacity-75 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
}

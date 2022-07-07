import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export default function TextInput({
  labelText,
  id,
  className,
  ...rest
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs mb-1">
        {labelText}
      </label>
      <input id={id} className="h-10 rounded w-full border px-2" {...rest} />
    </div>
  );
}

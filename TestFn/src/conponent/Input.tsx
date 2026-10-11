import type { ChangeEvent } from "react";
import TextError from "./TextError";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  placeholder?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
        }`}
      />

      <TextError message={error} />
    </div>
  );
}

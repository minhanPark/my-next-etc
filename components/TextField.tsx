"use client";

import { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import cls from "classnames";

interface TextFieldProps {
  required?: boolean;
  label: string;
  addClass?: string;
  type?: "text" | "password" | "email";
  register: UseFormRegisterReturn;
}

export default function TextField({
  required = false,
  label,
  addClass = "",
  type = "text",
  register,
}: TextFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  const displayLabel = required ? `${label} *` : label;
  return (
    <div className={`relative z-0 ${addClass}`}>
      <input
        {...register}
        type={type === "password" && isVisible ? "text" : type}
        id={label}
        className={cls(
          "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer",
          { "pr-12": type === "password" }
        )}
        placeholder={" "}
        required={required}
      />
      <label
        htmlFor={label}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {displayLabel}
      </label>
      {type === "password" && (
        <div
          onClick={() => setIsVisible((prev) => !prev)}
          className="absolute inset-y-0 right-0 flex items-center pr-3.5 cursor-pointer"
        >
          {isVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}

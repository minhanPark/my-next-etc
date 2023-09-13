interface TextFieldProps {
  required?: boolean;
  label: string;
  addClass?: string;
  type?: "text" | "password" | "email";
}

export default function TextField({
  required = false,
  label,
  addClass = "",
  type = "text",
}: TextFieldProps) {
  const displayLabel = required ? `${label} *` : label;
  return (
    <div className={`relative z-0 ${addClass}`}>
      <input
        type={type}
        id={label}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
        placeholder={" "}
        required={required}
      />
      <label
        htmlFor={label}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {displayLabel}
      </label>
    </div>
  );
}

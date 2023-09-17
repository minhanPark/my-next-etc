import NextLink from "next/link";
import cls from "classnames";

interface LinkProps {
  children: React.ReactNode;
  fontSize?: "base" | "small";
  fontColor?: "gray" | "primary";
  href: string;
}

export default function Link({
  children,
  fontSize = "small",
  fontColor = "gray",
  href,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cls("font-normal hover:underline hover:text-emerald-600", {
        "text-base": fontSize === "base",
        "text-sm": fontSize === "small",
        "text-gray-500": fontColor === "gray",
        "text-emerald-600": fontColor === "primary",
      })}
    >
      {children}
    </NextLink>
  );
}

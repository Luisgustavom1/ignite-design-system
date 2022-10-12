import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export const Heading = ({ size = "md", children, asChild }: HeadingProps) => {
  const Component = asChild ? Slot : "h2";
  return (
    <Component
      className={clsx("text-gray-100 font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Component>
  );
};
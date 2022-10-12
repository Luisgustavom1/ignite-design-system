import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={clsx(
        "py-4 px-3 w-full bg-cyan-500 font-semibold rounded text-black transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Component>
  );
};

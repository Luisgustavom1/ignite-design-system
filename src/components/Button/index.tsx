import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({
  children,
  asChild,
  className,
  ...rest
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      {...rest}
      className={clsx(
        "py-3 px-4 w-full bg-cyan-500 font-semibold rounded text-black transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
    >
      {children}
    </Component>
  );
};

import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, PropsWithChildren, ReactNode } from "react";

export interface TextFieldRootProps {
  children: ReactNode;
}

const TextFieldRoot = ({ children }: TextFieldRootProps) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3 w-full rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
};

TextFieldRoot.displayName = "TextInput.Root";

const TextFieldIcon = ({ children }: PropsWithChildren) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextFieldIcon.displayName = 'TextInput.Icon'

export interface TextFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const TextFieldInput = ({ ...rest }: TextFieldInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...rest}
    />
  );
};

TextFieldInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Icon: TextFieldIcon,
};

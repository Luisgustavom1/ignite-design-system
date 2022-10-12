import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from ".";
import { Text } from "../text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-3">
          {Story()}
          <Text>Lembrar-me de mim por 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

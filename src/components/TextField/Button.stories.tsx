import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextFieldRootProps } from ".";

export default {
  title: "Components/TextField",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Placeholder example input with icon" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextFieldRootProps>;

export const Default: StoryObj<TextFieldRootProps> = {};

export const WithoutIcon: StoryObj<TextFieldRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Placeholder example without icon" />,
  },
};

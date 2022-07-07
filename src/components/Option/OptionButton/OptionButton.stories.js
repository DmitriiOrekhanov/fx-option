import { OptionButton } from "./OptionButton";

export default {
  title: "Components/OptionButton",
  component: OptionButton,
  argTypes: {
    type: {
      options: ["direction", "style", "option-mode"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <OptionButton {...args} />;

export const Directions = Template.bind({});
Directions.args = {
  title: "Hаправления",
  type: "direction",
  text1: "We Buy",
  text2: "We Sell",
};

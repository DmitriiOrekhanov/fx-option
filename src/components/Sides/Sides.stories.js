import { Sides } from "./Sides";

export default {
  title: "Components/Sides",
  component: Sides,
  argTypes: {},
};

const Template = (args) => <Sides {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: [
    { value: "123456789", label: "123456789" },
    { value: "987654321", label: "987654321" },
    { value: "000", label: "0000" },
  ],
};

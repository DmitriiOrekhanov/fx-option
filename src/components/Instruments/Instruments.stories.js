import { Instruments } from "./Instruments";

export default {
  title: "Components/Instruments",
  component: Instruments,
  argTypes: {},
};

const Template = (args) => <Instruments {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

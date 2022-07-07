import { Bonus } from "./Bonus";

export default {
  title: "Components/Bonus",
  component: Bonus,
  argTypes: {},
};

const Template = (args) => <Bonus {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

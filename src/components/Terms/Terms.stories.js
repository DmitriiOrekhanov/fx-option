import { Terms } from "./Terms";

export default {
  title: "Components/Terms",
  component: Terms,
  argTypes: {},
};

const Template = (args) => <Terms {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

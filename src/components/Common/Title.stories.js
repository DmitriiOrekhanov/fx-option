import { Title } from "./Title";

export default {
  title: "Common/Title",
  component: Title,
  argTypes: {},
};

const Template = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Title",
};

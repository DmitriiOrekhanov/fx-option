import { Info } from "./Info";

export default {
  title: "Common/Info",
  component: Info,
  argTypes: {},
};

const Template = (args) => <Info {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Title",
  text: "Test Text",
};

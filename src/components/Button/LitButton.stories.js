import LitButton from './LitButton.vue';

export default {
  title: 'Components/LitButton',
  component: LitButton,
  argTypes: {
    color: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary'],
      },
  },
};

const Template = (args, { argTypes }) => ({
  components: { LitButton },
  props: Object.keys(argTypes),
  template: '<LitButton v-bind="$props">{{$props.label}}</LitButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  rounded : true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  variant: 'secondary',
  rounded : true
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  variant: 'primary',
  rounded : true,
  size : 'large'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  variant: 'primary',
  rounded : true,
  size: 'small'
};

export const Loader = Template.bind({});
Loader.args = {
  label: 'Button',
  variant: 'primary',
  rounded : true,
  size: 'small',
  loading: true
};

export const Color = Template.bind({});
Color.args = {
  label: 'Button',
  variant: 'primary',
  rounded : true,
  size: 'small',
  color: 'blue'
};

export const ColorBorder = Template.bind({});
ColorBorder.args = {
  label: 'Button',
  variant: 'primary',
  rounded : true,
  size: 'small',
  color: 'blue',
  bordered : true
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Search',
  variant: 'primary',
  rounded : true,
  size: 'small',
  icon: 'search'
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Menu',
  variant: 'secondary',
  rounded : true,
  size: 'small',
  iconRight: 'bars'
};

import LitButton from './LitButton.vue';

export default {
  title: 'LitButton',
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


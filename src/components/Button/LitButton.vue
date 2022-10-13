<template>
  <button :disabled="disabled" :style="btnStyles" v-on="$listeners" class="lit-button" :class="classObject">
    <div class="wrapper" v-show="!loading">
      <slot></slot>
    </div>
    <img class="loader" v-show="loading" :src="getLoader" />
  </button>
</template>
<script>
export default {
  name: "lit-button",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    color: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    bordered:{
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classObject() {
      return {
        rounded: this.rounded,
        primary: this.variant == "primary",
        secondary: this.variant == "secondary",
        large: this.size == "large",
        medium: this.size == "medium",
        small: this.size == "small",
        disabled: this.disabled
      };
    },
    btnStyles(){
      if(this.color && this.bordered){
        return{
          color: this.color,
          background: 'white',
          border: `2px solid ${this.color}`
        }
      }
      else{
        return{
          background:this.color
        }
      }
    },
    getLoader() {
      if (this.variant === "secondary") {
        return require("../../assets/loader.gif");
      }
      return require("../../assets/button-loader.gif");
    },
  },
};
</script>

<style lang="scss" scoped>
.lit-button {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
  border: none;
  color: white;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &.primary {
    background: #e30513;
    color: white;
  }
  &.secondary {
    background: white;
    border: 2px solid #cc9017;
    color: #cc9017;
  }
  &.rounded {
    border-radius: 20px;
  }
  &.large {
    width: 300px;
    font-size: 16px;
    font-weight: 700;
  }
  &.medium {
    width: 250px;
    font-size: 16px;
    font-weight: 700;
  }
  &.small {
    width: 200px;
    font-size: 14px;
    font-weight: 700;
  }
  &.disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
  .wrapper {
    width: 100%;
    > * {
      display: block;
    }
  }
  .loader {
    height: inherit;
    margin: 0 auto;
    padding: 0;
  }
}
</style>

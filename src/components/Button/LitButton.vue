<template>
  <button
    :disabled="disabled"
    :style="btnStyles"
    v-on="$listeners"
    class="lit-button"
    :class="classObject"
  >
    <div class="wrapper" v-show="!loading">
      <span class="icon-left" v-show="icon">
        <v-icon :name="icon" />
      </span>
      <slot></slot>
      <span class="icon-right" v-show="iconRight">
        <v-icon :name="iconRight" />
      </span>
    </div>
    <img class="loader" v-show="loading" :src="getLoader" />
  </button>
</template>
<script>
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "lit-button",
  components: {
    "v-icon": Icon,
  },
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
    bordered: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    iconRight: {
      type: String,
    },
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
    btnStyles() {
      if (this.color && this.bordered) {
        return {
          color: this.color,
          background: "white",
          border: `2px solid ${this.color}`,
        };
      } else {
        return {
          background: this.color,
        };
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
  padding: 0 20px;
  border: none;
  color: white;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &.primary {
    background: #e30513;
    color: white;
    .icon-left, .icon-right{
      fill: white;
    }
  }
  &.secondary {
    background: white;
    border: 2px solid #cc9017;
    color: #cc9017;
    .icon-left, .icon-right{
      fill: #cc9017;
    }
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
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .wrapper {
    width: 100%;
    position: relative;
    .icon-left{
      position: absolute;
      left: 0;
    }
    .icon-right{
      position: absolute;
      right: 0;
    }
  }
  .loader {
    height: inherit;
    margin: 0 auto;
    padding: 0;
  }
}
</style>

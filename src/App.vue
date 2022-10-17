<template>
  <div id="app" class="container">
    <div class="items">
      <LitButton @click="litButtonClick" variant="primary" size="large" rounded>Primary Large</LitButton>
    </div>
    <div class="items">
      <LitButton @click="litButtonClick" variant="primary" size="medium" rounded>Primary Medium</LitButton>
    </div>
    <div class="items">
      <LitButton @click="litButtonClick" variant="primary" size="small" rounded>Primary small</LitButton>
    </div>
    <div class="items">
      <LitButton @click="litButtonClick" variant="secondary" size="large" rounded>Secondary Large</LitButton>
    </div>
    <div class="items">
      <LitButton @click="litButtonClick" variant="secondary" size="medium" rounded>Secondary Medium</LitButton>
    </div>
    <div class="items">
      <LitButton @click="litButtonClick" variant="secondary" size="small" rounded>Secondary small</LitButton>
    </div>
    <div class="items">
      <LitButton loading @click="litButtonClick" variant="primary" size="small" rounded>Secondary small</LitButton>
    </div>
    <div class="items">
      <LitButton loading @click="litButtonClick" variant="secondary" size="small" rounded>Secondary small</LitButton>
    </div>
    <div class="items">
      <LitButton color="blue"  @click="litButtonClick" size="small" rounded>Color</LitButton>
    </div>
    <div class="items">
      <LitButton color="blue" bordered  @click="litButtonClick" size="small" rounded>Color Bordered</LitButton>
    </div>
    <div class="items">
      <LitButton disabled @click="litButtonClick" variant="primary" size="small" rounded>Disabled</LitButton>
    </div>
  </div>
</template>

<script>
import {LitButton} from './components';

export default {
  name: 'App',
  components: {
    LitButton
  },
  methods:{
    litButtonClick(){
      console.log("lit button click");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.items{
  margin-top: 20px;
}
</style>

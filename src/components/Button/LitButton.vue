<template>
    <button ><slot></slot></button>
</template>
<script>
  export default {
    name: "lit-button",
  };
</script>

<style scoped>
    button {
        background: rgb(30, 97, 184);
        padding: 8px 16px;
        border-radius: 20px;
        color: white;
        width: 120px;
    }
</style>
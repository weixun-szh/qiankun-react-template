<template>
  <div>
    <h5>vue子应用--list</h5>
    <button @click="goreactlist">跳转到react-list</button>
  </div>
</template>
  
  <script setup>
let goreactlist = () => {
  window.history.pushState({}, "", "/sub-react/list");
};
</script>
  
  <style>
</style>
  
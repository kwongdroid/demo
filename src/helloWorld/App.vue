<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
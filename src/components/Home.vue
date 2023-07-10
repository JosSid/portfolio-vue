<template>
  <div class="hello">
    <h1 class="neon">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.neon {
  color: #ffffff;
  animation: glow 1000ms infinite alternate;
}
@keyframes glow {
  from {
    text-shadow: 0 0 10px #1877f2, 0 0 20px #1459b3, 0 0 30px #179bff;
  }
  to {
    text-shadow: 0 0 5px #1877f2, 0 0 10px #1459b3, 0 0 15px #179bff;
  }
}
.title {
  font-size: 60px;
}
</style>

<template>
  <div class="progress-wrapper">
    <div class="progress">
      <div class="inside-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressSpinner",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.progress-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.progress {
  --value: v-bind(`${value}%`);
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(#d3d5de var(--value), #fff 0%);
}

.inside-circle {
  width: 65px;
  height: 65px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

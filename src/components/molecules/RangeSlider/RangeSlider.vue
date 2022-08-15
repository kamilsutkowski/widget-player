<template>
  <input type="range" min="1" max="100" class="slider" v-model="value" />
  <div class="progress" :style="{ width: `${100 - value}%` }"></div>
</template>
<script>
export default {
  name: "RangeSlider",
  data() {
    return {
      value: 20,
    };
  },
};
</script>
<style scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: transparent;
  z-index: 1;
}
.slider::-webkit-slider-thumb {
  position: relative;
  top: -5px;
  -webkit-appearance: none;
  cursor: pointer;
  height: 25px;
  width: 25px;
  border-radius: 30px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background: url("@/assets/images/volume-high-solid.svg") #ffffff;
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.slider::-moz-range-thumb {
  transform: translateY(-5px);
  cursor: pointer;
  height: 25px;
  width: 25px;
  border-radius: 30px;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background: url("@/assets/images/volume-high-solid.svg") #ffffff;
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.progress {
  position: absolute;
  height: 10px;
  background: #ef5c72;
  top: 0;
  right: 0;
}
</style>

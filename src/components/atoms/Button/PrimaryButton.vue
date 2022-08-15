<template>
  <div
    :class="['player-controls__item', size]"
    :style="{ backgroundColor: bgColor || 'transparent' }"
  >
    <font-awesome-icon
      :style="{ color: iconColor }"
      :icon="`fa-solid fa-${icon}`"
    />
  </div>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    bgColor: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      default: "#fff",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
};
</script>

<style scoped>
.player-controls__item {
  margin: 10px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.player-controls__item:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.small {
  width: 25px;
  height: 25px;
  font-size: 1em;
}

.medium {
  width: 40px;
  height: 40px;
  font-size: 1em;
}

.large {
  width: 60px;
  height: 60px;
  font-size: 1.2em;
}
</style>

<template>
  <div class="list-item" @click.stop="handleSong(item.id)">
    <div class="item-info">
      <p class="track-info">
        {{ secondsToMinutes(item.duration) }} | {{ item.album }}
      </p>
      <h3 class="track-title">{{ item.title }}</h3>
    </div>
    <div class="item-controls">
      <primary-button icon="share-nodes" icon-color="#605391" size="small" />
      <primary-button
        v-if="item.isFavourite"
        icon="heart"
        icon-color="#EF5C72"
        size="small"
        @click.stop="$parent.$emit('toggleFavourite', item.id)"
      />
      <primary-button
        v-else
        icon="heart"
        icon-color="#D3D5DE"
        size="small"
        @click.stop="$parent.$emit('toggleFavourite', item.id)"
      />
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/atoms/Button/PrimaryButton.vue";
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: { PrimaryButton },
  computed: {
    secondsToMinutes() {
      return (val) => {
        const min = Math.floor(val / 60);
        let rest = ("0" + (val % 60)).slice(-2);
        return `${min}:${rest}`;
      };
    },
  },
  methods: {
    handleSong(id) {
      this.$parent.$emit("setCurrentSong", id);
      this.$parent.$emit("togglePlaylist");
    },
  },
};
</script>

<style scoped>
.list-item {
  padding: 25px 0 25px 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.list-item:hover {
  background-color: #e8e8e8;
}

.item-controls {
  display: flex;
}

.track-info {
  color: #a19ea6;
  font-weight: bold;
  font-size: 0.8em;
}
.track-title {
  color: #605391;
}
</style>

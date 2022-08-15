<template>
  <div class="playlist">
    <div class="playlist-header">
      <primary-button
        class="backward-button"
        icon="reply"
        icon-color="#605391"
        bg-color="#fff"
        @click="$emit('togglePlaylist')"
      />
      <h2 class="playlist-title">Playlist</h2>
    </div>

    <div class="playlist-content">
      <ul class="listWrapper">
        <li class="listElement" v-for="item in playlist" :key="item.id">
          <ListItem :item="item" @toggle-favourite="toggleFavourite" />
        </li>
      </ul>
    </div>
    <div class="shadow-wrapper"></div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/atoms/Button/PrimaryButton.vue";
import ListItem from "@/components/molecules/ListItem/ListItem.vue";

export default {
  name: "PlaylistCard",
  props: {
    playlist: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    PrimaryButton,
    ListItem,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
  height: 50px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #dfdfe7;
  border-radius: 10px;
}

.playlist {
  position: absolute;
  width: 400px;
  height: 550px;
  background-color: #f3f4f8;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
}
.playlist-header {
  flex: 1;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.backward-button {
  position: absolute;
  left: 0;
}
.playlist-title {
  color: #605391;
  font-weight: bold;
}

.playlist-content {
  position: relative;
  flex: 6;
  overflow-y: auto;
  scrollbar-color: #dfdfe7 transparent;
  scrollbar-width: thin;
}

.shadow-wrapper {
  pointer-events: none;
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 90%;
  height: 75px;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: inherit;
}

.listWrapper {
  padding: 0;
  list-style: none;
  margin-right: 20px;
}

.listElement {
  border-bottom: 1px solid #dbdde5;
}

.listElement:last-child {
  border: none;
}
</style>

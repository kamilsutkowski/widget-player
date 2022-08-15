<template>
  <main class="wrapper">
    <Transition name="player">
      <player-card
        v-show="!isShowPlaylist"
        :is-play="isPlay"
        :current-song="playlist[currentSong]"
        @toggle-play="togglePlay"
        @prev-song="prevSong"
        @next-song="nextSong"
        @toggle-playlist="toggleShowPlayList"
        @toggle-favourite="toggleFavouriteSong"
      />
    </Transition>

    <Transition name="playlist">
      <playlist-card
        class="playlist"
        :playlist="playlist"
        v-show="isShowPlaylist"
        @set-current-song="setCurrentSong"
        @toggle-playlist="toggleShowPlayList"
        @toggle-favourite="toggleFavouriteSong"
      />
    </Transition>
  </main>
</template>

<script>
import PlayerCard from "./components/organisms/PlayerCard/PlayerCard.vue";
import PlaylistCard from "./components/organisms/PlaylistCard/PlaylistCard.vue";

export default {
  name: "AppComponent",
  components: {
    PlayerCard,
    PlaylistCard,
  },
  data() {
    return {
      isPlay: false,
      isShowPlaylist: false,
      playlist: [
        {
          id: 1,
          album: "Icona Pop",
          title: "I love it",
          duration: 196,
          isFavourite: false,
        },
        {
          id: 2,
          album: "Icona Pop",
          title: "Sunshine Through Rain",
          duration: 134,
          isFavourite: false,
        },
        {
          id: 3,
          album: "Icona Pop",
          title: "Emergency",
          duration: 243,
          isFavourite: false,
        },
        {
          id: 4,
          album: "Icona Pop",
          title: "All Night",
          duration: 111,
          isFavourite: false,
        },
        {
          id: 5,
          album: "Icona Pop",
          title: "Girlfriend",
          duration: 432,
          isFavourite: false,
        },
        {
          id: 6,
          album: "Icona Pop",
          title: "We Got the World",
          duration: 152,
          isFavourite: false,
        },
        {
          id: 7,
          album: "Icona Pop",
          title: "Clap Snap",
          duration: 175,
          isFavourite: false,
        },
        {
          id: 8,
          album: "Icona Pop",
          title: "In the Stars",
          duration: 110,
          isFavourite: false,
        },
        {
          id: 9,
          album: "Icona Pop",
          title: "Get Lost",
          duration: 120,
          isFavourite: false,
        },
        {
          id: 10,
          album: "Icona Pop",
          title: "First Time",
          duration: 196,
          isFavourite: false,
        },
        {
          id: 11,
          album: "Icona Pop",
          title: "On a Roll",
          duration: 196,
          isFavourite: false,
        },
        {
          id: 12,
          album: "Icona Pop",
          title: "Light Me Up",
          duration: 196,
          isFavourite: false,
        },
      ],
      currentSong: 0,
    };
  },
  methods: {
    togglePlay() {
      this.isPlay = !this.isPlay;
    },
    toggleShowPlayList() {
      this.isShowPlaylist = !this.isShowPlaylist;
    },
    nextSong() {
      if (this.currentSong >= this.playlist.length - 1) {
        this.currentSong = 0;
      } else {
        this.currentSong++;
      }
    },
    prevSong() {
      if (this.currentSong === 0) {
        this.currentSong = this.playlist.length - 1;
      } else {
        this.currentSong--;
      }
    },
    setCurrentSong(id) {
      const index = this.playlist.findIndex((el) => el.id === id);
      this.currentSong = index;
    },
    toggleFavouriteSong(id) {
      if (id) {
        const index = this.playlist.findIndex((el) => el.id === id);
        const { isFavourite } = this.playlist[index];
        this.playlist[index].isFavourite = !isFavourite;
      } else {
        const { isFavourite } = this.playlist[this.currentSong];
        this.playlist[this.currentSong].isFavourite = !isFavourite;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.player-enter-active {
  transition: all 0.5s ease-out;
}

.player-leave-active {
  transition: all 0.2s;
}

.player-enter-from,
.player-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.playlist-enter-active {
  transition: all 0.5s ease-out;
}

.playlist-leave-active {
  transition: all 0.2s;
}

.playlist-enter-from,
.playlist-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

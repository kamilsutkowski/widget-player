<template>
  <section class="player">
    <div class="player-header">
      <div class="player-top">
        <div class="player-top__controls">
          <primary-button icon="repeat" />
          <primary-button icon="shuffle" />
          <primary-button icon="rotate-right" />
        </div>
        <div class="player-top__menu">
          <primary-button icon="bars" @click="$emit('togglePlaylist')" />
        </div>
      </div>
      <div class="player-info">
        <Transition name="slide-fade" mode="out-in">
          <h3 :key="currentSong" class="player_info__album">
            {{ currentSong.album }}
          </h3>
        </Transition>
        <Transition name="slide-fade" mode="out-in">
          <h4 :key="currentSong" class="player_info__title">
            {{ currentSong.title }}
          </h4>
        </Transition>
      </div>
    </div>
    <div class="player-volume">
      <range-slider />
    </div>
    <div class="player-controls">
      <div class="player-controls__item">
        <primary-button
          icon="share-nodes"
          icon-color="#605391"
          bg-color="#fff"
        />
      </div>
      <div class="player-controls__items">
        <div class="player-controls__item">
          <primary-button
            icon="backward-step"
            bg-color="#605391"
            @click="$emit('prevSong')"
          />
        </div>
        <div class="player-controls__item">
          <progress-spinner :value="33" />
          <primary-button
            v-show="!isPlay"
            icon="play"
            bg-color="#605391"
            size="large"
            @click="$emit('togglePlay')"
          />
          <primary-button
            v-show="isPlay"
            icon="pause"
            bg-color="#605391"
            size="large"
            @click="$emit('togglePlay')"
          />
        </div>
        <div class="player-controls__item">
          <primary-button
            icon="forward-step"
            bg-color="#605391"
            @click="$emit('nextSong')"
          />
        </div>
      </div>
      <div class="player-controls__item">
        <primary-button
          v-if="currentSong.isFavourite"
          icon="heart"
          icon-color="#EF5C72"
          bg-color="#fff"
          @click="$emit('toggleFavourite')"
        />
        <primary-button
          v-else
          icon="heart"
          icon-color="#D3D5DE"
          bg-color="#fff"
          @click="$emit('toggleFavourite')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "@/components/atoms/Button/PrimaryButton.vue";
import ProgressSpinner from "@/components/molecules/ProgressSpinner/ProgressSpinner.vue";
import RangeSlider from "@/components/molecules/RangeSlider/RangeSlider.vue";

export default {
  name: "PlayerCard",
  props: {
    isPlay: {
      type: Boolean,
      required: true,
    },
    currentSong: {
      type: Object,
      required: true,
    },
  },
  components: {
    PrimaryButton,
    ProgressSpinner,
    RangeSlider,
  },
};
</script>

<style scoped>
.player {
  position: absolute;
  width: 400px;
  height: 550px;
  background-color: #f3f4f8;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.player-header {
  position: relative;
  background: url("@/assets/images/header.png") no-repeat;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  flex: 3;
}

.player-top {
  width: 100%;
  position: absolute;
  top: 0;
  border-radius: inherit;
  height: 65px;
  background: rgba(60, 60, 120, 0.7);
}

.player-top__menu {
  position: absolute;
  right: 5px;
  top: 5px;
  color: #7c7e98;
  font-size: 1.2em;
  cursor: pointer;
}
.player-top__controls {
  color: white;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.player-top__controls > * {
  cursor: pointer;
}

.player-top__menu:hover {
  color: white;
}

.player-info {
  color: white;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  height: auto;
  background: rgba(60, 60, 120, 0.7);
  text-align: center;
}

.player-info > * {
  margin: 5px;
}

.player-controls {
  flex: 1;
  background: #eeeff5;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.player-controls__items {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>

import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faRepeat,
  faRotateRight,
  faShuffle,
  faCirclePlay,
  faShareNodes,
  faBackwardStep,
  faForwardStep,
  faPlay,
  faPause,
  faHeart,
  faReply,
} from "@fortawesome/free-solid-svg-icons";

library.add([
  faBars,
  faRepeat,
  faRotateRight,
  faShuffle,
  faCirclePlay,
  faShareNodes,
  faBackwardStep,
  faForwardStep,
  faPlay,
  faPause,
  faHeart,
  faReply,
]);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

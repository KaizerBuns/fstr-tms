import { createApp } from "vue";
import VWave from "v-wave";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import VueGoogleMaps from "@fawmi/vue-google-maps";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueTheMask from "vue-the-mask";
import VueCookies from "vue-cookies";
import ElementPlus from "element-plus";

/* import font awesome icon component */
library.add(fas, far, fab);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/** App Styles */
import "element-plus/dist/index.css";
import "@/assets/styles/tailwind.scss";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueTheMask);
app.use(VWave);
app.use(VueCookies);
app.use(ElementPlus, { zIndex: 3000 });
/*
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAz_fhO4k3mkAiyV-CgxWVwwu4egdSEbec", //"AIzaSyAggx3ikiC4IreZsY5a90sEq8Vwh_qhQLM",
    libraries: "places",
  },
});
*/
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

export default app;

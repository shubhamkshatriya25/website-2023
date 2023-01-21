<template>
  <v-app class="app">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="particlesOptions"
    />
    <v-main>
      <IndexScreen />
    </v-main>
  </v-app>
</template>

<script>
import IndexScreen from "./components/IndexScreen";
import { loadFull } from "tsparticles";
import { particlesJSConfig } from "./assets/configs/particlesConfig";

export default {
  name: "App",
  components: {
    IndexScreen,
  },
  data() {
    return {
      particlesOptions: particlesJSConfig,
    };
  },
  methods: {
    particlesInit: async function (engine) {
      await loadFull(engine);
    },
    particlesLoaded: async function (container) {
      console.log("Particles container loaded", container);
    },
  },
};
</script>

<style lang="scss">
.app {
  background-color: #232741 !important;
  color: #31302c !important;
  font-family: Jost, sans-serif;
  font-size: 15px;
  margin: 0;
  height: 100%;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

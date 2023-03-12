export default {
  data() {
    return {
      isHomeInFullScreen: false,
    };
  },
  methods: {
    kCloseHomeModal: function () {
      this.$parent.$data.isHomeOpen = false;
    },
    toggleHomeInFullScreenView: function () {
      this.isHomeInFullScreen = !this.isHomeInFullScreen;
    },
  },
};

import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    selectServer(server) {
      eventBus.$emit("server-changed", server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

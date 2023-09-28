import VueNativeSock from 'vue-native-websocket';

export default {
  install(Vue) {
    Vue.use(VueNativeSock, 'ws://127.0.0.1:8080/websocket/1001', {
      format: 'json',
      reconnection: true, // 是否自动重连
    });
  },
};

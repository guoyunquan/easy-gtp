// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WebSocketPlugin from '../src/config/websocket.js'
Vue.config.productionTip = false
import highlight from 'highlight.js';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(highlight)
Vue.use(WebSocketPlugin)
Vue.directive('highlight', (el) => {let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {highlight.highlightBlock(block)})
})

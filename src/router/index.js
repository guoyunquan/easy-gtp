import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test11 from '@/components/test11'
import ChatGptApi from "../components/ChatGptApi";
import Websocket from "../components/websocket";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'test11',
      component: test11
    },
    {
      path:'/test',
      name:'ChatGptApi',
      component: ChatGptApi
    },
    {
      path:'/websocket',
      name: 'websocket',
      component: Websocket
    }
  ]
})

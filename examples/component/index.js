import Vue from 'vue'
import App from './App.vue'
import RecyclerView from '../../src/index'

Vue.config.productionTip = false

Vue.use(RecyclerView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

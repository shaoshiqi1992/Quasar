import Vue from 'vue'
import one from './pages/one/list.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#one',
  render: h => h(one)
})

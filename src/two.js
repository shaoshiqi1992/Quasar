import Vue from 'vue'
import two from './pages/two/list.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#two',
  render: h => h(two)
})

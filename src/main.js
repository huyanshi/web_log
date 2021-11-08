import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
if (process.env.NODE_ENV == 'development') require('./api/mock')

new Vue({
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/config'
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from '@/store'
// import Field from '@/containers/composition_new/components/Field'
// import StructForm from '@/containers/composition_new/components/StructForm'

// QUESTION - ??
Vue.config.productionTip = false

// Recursive component fix
// https://vuejs.org/v2/guide/components.html#Recursive-Components
// Vue.compoent('StructForm', StructForm)
// Vue.compoent('Field', Field)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'

// Module routes
import { MainHomeRoute } from './main'
import { CompositionListRoute, CompositionShowRoute, CompositionNewRoute, CompositionEditRoute } from './composition'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    MainHomeRoute,
    CompositionListRoute,
    CompositionNewRoute,
    CompositionEditRoute,
    CompositionShowRoute
  ]
})

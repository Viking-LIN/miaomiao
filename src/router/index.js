import Vue from 'vue'
import Router from 'vue-router'
import movie from './movie'
import cinema from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/',
  routes: [
    movie,
    cinema
  ]
})

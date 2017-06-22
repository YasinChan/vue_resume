import Vue from 'vue'
import Router from 'vue-router'
import Works from 'components/works/works'
import Introduce from 'components/introduce/introduce'
import Skills from 'components/skills/skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/introduce'
    },
    {
      path: '/works',
      component: Works
    },
    {
      path: '/introduce',
      component: Introduce
    },
    {
      path: '/skills',
      component: Skills
    }
  ]
})

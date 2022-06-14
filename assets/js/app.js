import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import c_menu from './components/menu.js'
Vue.component('c-menu', c_menu)

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)

import page_portfolio from './view/portfolio/home.js'
Vue.component('p-portfolio', page_portfolio)

import page_habilidade from './view/habilidade/home.js'
Vue.component('p-habilidade', page_habilidade)

import page_contacto from './view/contacto/home.js'
Vue.component('p-contacto', page_contacto)

Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/portfolio', component: { template: '<p-portfolio></p-portfolio>' } },
    { path: '/habilidade', component: { template: '<p-habilidade></p-habilidade>' } },
    { path: '/contacto', component: { template: '<p-contacto></p-contacto>' } }

]

const router = new Router({ routes })

new Vue({
    router,
    data: {
        jms: "joaquim"
    },

  
}).$mount('#app')

;(async () => { })()
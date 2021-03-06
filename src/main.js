import vue from 'vue'
import vueRouter from 'vue-router'
import App from './app'
import axios from './plugin/ajax/index'
import store from './store'
import element from "element-ui"

import 'element-ui/lib/theme-chalk/index.css'
import './less/index.less'

vue.use(vueRouter)
vue.use(axios)
vue.use(element)

vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

import routes from './router/index'
//实例化VueRouter
const router = new vueRouter({
    routes // （缩写）相当于 routes: routes
})

window.vm = new vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
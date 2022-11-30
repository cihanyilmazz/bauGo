import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.scss'
import './assets/css/darkmode.scss'
import '../node_modules/remixicon/fonts/remixicon.css'
//import jquery from 'jquery'
import VCalendar from 'v-calendar'
import Multiselect from 'vue-multiselect'
import VueTheMask from 'vue-the-mask'
import VueSplide from '@splidejs/vue-splide'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueSplide)
Vue.use(VueTheMask)
Vue.use(VueAxios, axios)
Vue.use(VCalendar, { componentPrefix: 'v',})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(router)
Vue.component('multiselect', Multiselect)
//Vue.use(jquery)
window.$ = window.jQuery = require('jquery')
Vue.config.productionTip = false

Vue.prototype.$googleClientID = '477330156566-j4h4opoq2jj5qjmljossl76n4ku24gin.apps.googleusercontent.com'
Vue.prototype.$facebookClientID = '1738172203036445'
Vue.prototype.$recaptchaKey = '6LcW3OMZAAAAAFLjGt0Seh1-nKbUC5Rh3kktlgqw'

axios.defaults.baseURL = 'http://ec2-52-209-26-186.eu-west-1.compute.amazonaws.com/api'

const userData = JSON.parse(localStorage.getItem('user_data'))
if (userData && userData.access_token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + userData.access_token
}

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')

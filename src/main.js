import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto/vue-scrollto'
Vue.use(VueScrollTo)
// предупреждение о работе в режиме разработки
// Vue.config.productionTip = false

new Vue({
    el: '#app',
    name: 'Application',
    template: '<App/>',
    components: { App }
});
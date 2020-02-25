import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iview from 'iview'; //UI框架 
import 'iview/dist/styles/iview.css';

Vue.use(iview); /* 嫁接 */

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenuAkahon from 'vue-sidebar-menu-akahon'
// import VueLatestTable from '../lib/VueLatestTable.vue'
// export { VueLatestTable }


Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

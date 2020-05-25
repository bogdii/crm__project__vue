import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import tooltipDirective from './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)



firebase.initializeApp({
  apiKey: "AIzaSyB7tzOsz0AxyG81YOe6SnPlYK7xW85qy4Q",
  authDomain: "finance-crm-vue.firebaseapp.com",
  databaseURL: "https://finance-crm-vue.firebaseio.com",
  projectId: "finance-crm-vue",
  storageBucket: "finance-crm-vue.appspot.com",
  messagingSenderId: "152222809856",
  appId: "1:152222809856:web:10d1c1e03fe6e452457de5",
  measurementId: "G-74P0X9GG2T"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



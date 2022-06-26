import Vue from 'vue'
import App from './App'
import rankingStore from "@/store/ranking-store";

Vue.config.productionTip = false
Vue.prototype.$store = rankingStore

App.mpType = 'app'

const app = new Vue({
  ...App,
  rankingStore
})
app.$mount()

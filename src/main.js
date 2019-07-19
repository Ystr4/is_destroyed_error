import Vue from 'vue'
import App from './App.vue'

import HtmlWrapper from './components/HtmlWrapper'
import HtmlWrapper_func from './components/HtmlWrapper_func'

Vue.component('HtmlWrapper', HtmlWrapper);
Vue.component('HtmlWrapper_func', HtmlWrapper_func);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

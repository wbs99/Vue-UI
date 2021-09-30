import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
Vue.component('good-button', Button)
Vue.component('g-icon',Icon)

new Vue({
  el: '#app',
})

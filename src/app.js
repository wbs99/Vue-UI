import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input.vue'

Vue.component('good-button', Button)
Vue.component('g-icon', Icon)
Vue.component('good-button-group', ButtonGroup)
Vue.component('good-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    message: 'hi',
  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
  },
})

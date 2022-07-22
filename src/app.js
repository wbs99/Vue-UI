import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Layout from "./layout.vue";
import Header from "./header.vue";
import Sider from "./sider.vue";
import Content from "./content.vue";
import Footer from "./footer.vue";
import Toast from "./toast.vue";
import plugin from "./plugin.js";

Vue.component("good-button", Button);
Vue.component("g-icon", Icon);
Vue.component("good-button-group", ButtonGroup);
Vue.component("good-input", Input);
Vue.component("good-row", Row);
Vue.component("good-col", Col);
Vue.component("good-layout", Layout);
Vue.component("good-header", Header);
Vue.component("good-sider", Sider);
Vue.component("good-content", Content);
Vue.component("good-footer", Footer);
Vue.component("good-toast", Toast);
Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    message: "hi",
  },
  mounted() {},
  methods: {
    showToast() {
      this.$toast("你好啊");
    },
    inputChange(e) {
      console.log(e);
    },
  },
});

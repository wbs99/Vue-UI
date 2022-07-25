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
import Tabs from "./tabs.vue";
import TabsHead from "./tabsHead.vue";
import TabsBody from "./tabsBody.vue";
import TabsItem from "./tabsItem.vue";
import TabsPane from "./tabsPane.vue";

Vue.component("good-button", Button);
Vue.component("good-icon", Icon);
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
Vue.component("good-tabs", Tabs);
Vue.component("good-tabs-head", TabsHead);
Vue.component("good-tabs-body", TabsBody);
Vue.component("good-tabs-item", TabsItem);
Vue.component("good-tabs-pane", TabsPane);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    message: "hi",
  },
  mounted() {},
  methods: {
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast(
        `你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`,
        {
          position,
          enableHtml: false,
          closeButton: {
            text: "已充值",
            callback() {
              console.log("他说已经充值智商了");
            },
          },
          autoClose: 3,
        }
      );
    },
  },
});

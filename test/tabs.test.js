const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsHead from "../src/tabsHead";
import TabsBody from "../src/tabsBody";
import TabsItem from "../src/tabsItem";
import TabsPane from "../src/tabsPane";

Vue.component("good-tabs", Tabs);
Vue.component("good-tabs-head", TabsHead);
Vue.component("good-tabs-body", TabsBody);
Vue.component("good-tabs-item", TabsItem);
Vue.component("good-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("存在.", () => {
    expect(Tabs).to.exist;
  });

  it("接受 selected 属性", done => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <good-tabs selected="finance">
        <good-tabs-head>
          <good-tabs-item name="woman"> 美女 </good-tabs-item>
          <good-tabs-item name="finance"> 财经 </good-tabs-item>
          <good-tabs-item name="sports"> 体育 </good-tabs-item>
        </good-tabs-head>
        <good-tabs-body>
          <good-tabs-pane name="woman"> 美女相关资讯 </good-tabs-pane>
          <good-tabs-pane name="finance"> 财经相关资讯 </good-tabs-pane>
          <good-tabs-pane name="sports"> 体育相关资讯 </good-tabs-pane>
        </good-tabs-body>
      </good-tabs>
    `;
    let vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`);
      expect(x.classList.contains("active")).to.be.true;
      done();
    });
  });

  it("可以接受 direction prop", () => {});
});

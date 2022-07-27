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

describe("TabsItem", () => {
  it("存在.", () => {
    expect(TabsItem).to.exist;
  });

  it("接受 name 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx",
      },
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
  });
  it("接受 disabled 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true,
      },
    }).$mount();
    expect(vm.$el.classList.contains("disabled")).to.be.true;
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});

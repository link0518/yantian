import CodeTabs from "D:/github/yantian/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+b_5qzj4dn37igxddz2mld3il5ax4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "D:/github/yantian/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+b_5qzj4dn37igxddz2mld3il5ax4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/github/yantian/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+b_5qzj4dn37igxddz2mld3il5ax4/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

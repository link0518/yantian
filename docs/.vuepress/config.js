import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
export default defineUserConfig({
  base: "/yantian/",
  bundler: viteBundler(),
  theme: defaultTheme({
    title: 'My VuePress Site',
    
    logo: '23.svg', //文件在public文件夹内
    nav: [
      { text: '你的文字', link: '/' }, // 在 logo 旁边添加文字
    ],
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '关注作者',
        children:
            [
                {
                    text: 'bilibili',
                    link: 'https://space.bilibili.com/7841146'
                },
                {
                    text: 'QQ',
                    link: 'https://tool.gljlw.com/qq/?qq=1936301798'
                },
            ],
    },
    ]
  }),
})
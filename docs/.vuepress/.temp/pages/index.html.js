import comp from "D:/github/yantian/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/23.svg\",\"heroText\":\"衍天宗\",\"tagline\":\"吃鸡小课堂\",\"actions\":[{\"text\":\"点击开始\",\"link\":\"https://blog.csdn.net/passwordgloo\",\"type\":\"primary\"},{\"text\":\"关于作者\",\"link\":\"/child/about.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"笔记\",\"details\":\"Markdown语言，简洁高效记录每一刻\",\"link\":\"https://www.baidu.com\"},{\"title\":\"博客\",\"details\":\"干净整洁的博客，易于存档文件\"},{\"title\":\"文档\",\"details\":\"在线个人文档，创作中意的文档\"}],\"footer\":\"jx3 | Copyright © 2024-present guyong\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"readme.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

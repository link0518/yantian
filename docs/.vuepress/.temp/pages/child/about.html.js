import comp from "D:/github/yantian/docs/.vuepress/.temp/pages/child/about.html.vue"
const data = JSON.parse("{\"path\":\"/child/about.html\",\"title\":\"了解我\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"heading\"},\"headers\":[{\"level\":2,\"title\":\"项目用途\",\"slug\":\"项目用途\",\"link\":\"#项目用途\",\"children\":[]},{\"level\":2,\"title\":\"联系信息\",\"slug\":\"联系信息\",\"link\":\"#联系信息\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"child/about.md\"}")
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

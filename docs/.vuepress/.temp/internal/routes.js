export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github/yantian/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/child/about.html", { loader: () => import(/* webpackChunkName: "child_about.html" */"D:/github/yantian/docs/.vuepress/.temp/pages/child/about.html.js"), meta: {"title":"了解我"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github/yantian/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

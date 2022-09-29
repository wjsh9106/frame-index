export default {
  namespaced: true,
  state: () => ({
    headerMenuActiveIndex: localStorage.getItem('headerMenuActiveIndex'), // 顶部导航选中菜单id
    headerMenuActiveName: localStorage.getItem('headerMenuActiveName') // 顶部导航选中菜单name
  }),
  mutations: {
    // 更新顶部导航选中菜单信息
    updateHeaderMenuActive(state, nav) {
      state.headerMenuActiveIndex = nav.navId
      state.headerMenuActiveName = nav.navName
      localStorage.setItem('headerMenuActiveIndex', nav.navId)
      localStorage.setItem('headerMenuActiveName', nav.navName)
    }
  },
  actions: {}
}

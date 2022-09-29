export default {
  namespaced: true,
  state: () => ({
    headerMenuActiveIndex: 0, // 顶部导航选中菜单id
    headerMenuActiveName: '' // 顶部导航选中菜单name
  }),
  mutations: {
    // 更新顶部导航选中菜单信息
    updateHeaderMenuActive(state, nav) {
      state.headerMenuActiveIndex = nav.navId
      state.headerMenuActiveName = nav.navName
    }
  },
  actions: {}
}

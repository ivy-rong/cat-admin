export const useSidebarStore = defineStore('sidebar', () => {
  /**
   * 是否展开侧边栏，默认不折叠
   */
  const isCollapse = ref(false)

  /**
   * 修改折叠状态
   */
  const changeSidebarCollapse = (value: boolean) => {
    isCollapse.value = value
  }

  /**
   * 切换折叠状态
   */
  const toggleSidebarCollapse = () => {
    isCollapse.value = !isCollapse.value
  }
  return {
    isCollapse,
    changeSidebarCollapse,
    toggleSidebarCollapse
  }
})

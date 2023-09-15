<script setup lang="ts">
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NLayoutFooter
} from 'naive-ui'
</script>

<template>
  <NLayout
    has-sider
    class="bg-pink-300 h-screen"
  >
    <NLayoutSider
      class="h-screen"
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <BaseSidebar />
    </NLayoutSider>
    <NLayout>
      <NLayoutHeader> <BaseHeader /> </NLayoutHeader>
      <NLayoutContent>
        内容
        <RouterView v-slot="{ Component }">
          <div>4234</div>
          <Transition
            name="router"
            mode="out-in"
          >
            <component :is="Component" />
          </Transition>
        </RouterView>
      </NLayoutContent>
      <NLayoutFooter><BaseFooter /></NLayoutFooter>
    </NLayout>
  </NLayout>
</template>

<style scoped lang="scss">
.router-enter-active,
.router-leave-active {
  transition: opacity 0.3s ease;
}
.router-enter-from,
.router-leave-to {
  opacity: 0;
}
</style>

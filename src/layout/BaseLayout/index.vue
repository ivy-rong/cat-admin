<script setup lang="ts">
import { NLayout, NLayoutHeader ,NLayoutSider,NLayoutContent,NLayoutFooter} from 'naive-ui'
</script>

<template>
  <NLayout has-sider class="bg-pink-300 h-screen">
    <NLayoutSider class="h-screen border-r shadow-sm  hover:shadow"> <BaseSidebar /> </NLayoutSider>
    <NLayout>
      <NLayoutHeader class="h-16 border-b hover:shadow shadow-sm"> <BaseHeader /> </NLayoutHeader>
      <NLayoutContent class="h-[calc(100%-120px)]">
        <RouterView v-slot="{ Component }">
          <Transition
            name="router"
            mode="out-in"
          >
            <component :is="Component" />
          </Transition>
        </RouterView>
      </NLayoutContent>
      <NLayoutFooter class="h-14 border-t hover:shadow shadow-sm"><BaseFooter /></NLayoutFooter>
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

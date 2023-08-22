<script setup lang="ts">

import { useThemeStore } from '@/store/index'
const themeStore = useThemeStore()
import { zhCN, dateZhCN ,enUS,dateEnUS} from 'naive-ui'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
// const { t } = i18n.global

 </script>

<template>
  <NConfigProvider
  :theme="themeStore.theme"
  :theme-overrides="themeStore.themOverrides"
  :date-locale="themeStore.dateLocale==='dateZhCN' ? dateZhCN : dateEnUS"
  :locale="themeStore.local === 'zh_CN' ? zhCN : enUS"
  preflight-style-disabled
  >
    <RouterView v-slot="{ Component }">
      <Transition
        name="router"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>


  </NConfigProvider>
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

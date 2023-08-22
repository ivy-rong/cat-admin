<script setup lang="ts">
import MenuFoldLeftIcon from '~icons/line-md/menu-fold-left'
import SunnyIcon from '~icons/line-md/moon-alt-to-sunny-outline-loop-transition'
import MoonIcon from '~icons/line-md/moon-alt-loop'
import LanguageIcon from '~icons/heroicons/language'

import { ref } from 'vue'
import { languageOptions } from './private'
import { useThemeStore } from '@/store/index'
import { NDropdown } from 'naive-ui'
const themeStore = useThemeStore()

const language = ref(languageOptions)

const handleSelect = (key: string) => {
  console.log(key)
}
</script>

<template>
  <div class="flex justify-between items-center h-full px-2">
    <div>
      <NIcon
        class="cursor-pointer"
        size="20"
        :component="MenuFoldLeftIcon"
      />
    </div>
    <div class="space-x-2">
      <NIcon
        class="cursor-pointer"
        size="20"
        :color="themeStore.themeMode === 'light' ? '#FDC022' : 'yellow'"
        :component="themeStore.themeMode === 'light' ? SunnyIcon : MoonIcon"
        @click="themeStore.changeThemeMode(themeStore.themeMode === 'light' ? 'dark' : 'light')"
      />
      <NDropdown
        trigger="hover"
        :options="language"
        @select="handleSelect"
      >
        <NIcon
          class="cursor-pointer"
          size="20"
          :component="LanguageIcon"
        />
      </NDropdown>
    </div>
  </div>
</template>

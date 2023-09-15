<script setup lang="ts">
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'

let flag = ref('11111111')

import { useMouse } from '@vueuse/core'

// "x" and "y" are refs
const { x, y } = useMouse()

const router = useRouter()
</script>

<template>
  <main>
    <div>12413</div>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
    <n-tag type="warning"> 超人不会飞 </n-tag>
    <n-tag type="error"> 手写的从前 </n-tag>
    <n-tag type="info"> 哪里都是你 </n-tag>

    <n-alert
      title="Info 类型"
      type="info"
    >
      Gee it's good to be back home
    </n-alert>
    <n-alert
      title="Success 类型"
      type="success"
    >
      Leave it till tomorrow to unpack my case
    </n-alert>
    <n-alert
      title="Warning 类型"
      type="warning"
    >
      Honey disconnect the phone
    </n-alert>
    <n-alert
      title="Error 类型"
      type="error"
    >
      I'm back in the U.S.S.R.
    </n-alert>

    <n-button
      strong
      secondary
    >
      Default
    </n-button>
    <n-button
      strong
      secondary
      type="tertiary"
    >
      Tertiary
    </n-button>
    <n-button
      strong
      secondary
      type="primary"
    >
      Primary
    </n-button>
    <n-button
      strong
      secondary
      type="info"
    >
      Info
    </n-button>
    <n-button
      strong
      secondary
      type="success"
    >
      Success
    </n-button>
    <!-- <icon-accessibility />
    <icon-account-box style="font-size: 2em; color: red" />
    <div>Home</div>
    <span>{{ counterStore.count }}</span>
    <NButton @click="counterStore.increment">+1</NButton>
    <NButton @click="counterStore.decrement">-1</NButton>
    <NButton @click="() => router.push('/store')">store</NButton>
    <NButton>{{ flag }}</NButton>
    <div>{{ x }} {{ y }}</div> -->
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TinyDialogBox, TinyButton } from '@opentiny/vue'
import DemoUniverSheets from './components/DemoUniverSheets.vue'
import EcsList from './views/ecs-list/EcsList.vue'

const boxVisibility = ref(false)
</script>

<template>
  <EcsList @advanced-buy="boxVisibility = true" />
  <tiny-dialog-box fullscreen v-model:visible="boxVisibility" title="批量购买弹性云服务器">
    <DemoUniverSheets />
    <template #footer>
      <tiny-button @click="boxVisibility = false" round>取消</tiny-button>
      <tiny-button type="primary" @click="boxVisibility = false" round>确定</tiny-button>
    </template>
  </tiny-dialog-box>
</template>

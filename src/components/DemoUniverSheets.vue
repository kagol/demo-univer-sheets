<script lang="ts" setup>
import { onMounted } from 'vue'
import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core'
import UniverPresetSheetsCoreZhCN from '@univerjs/preset-sheets-core/locales/zh-CN'
import { createUniver, LocaleType, mergeLocales } from '@univerjs/presets'

import '@univerjs/preset-sheets-core/lib/index.css'

onMounted(() => {

const { univer, univerAPI } = createUniver({
  locale: LocaleType.ZH_CN,
  locales: {
    [LocaleType.ZH_CN]: mergeLocales(
      UniverPresetSheetsCoreZhCN,
    ),
  },
  presets: [
    UniverSheetsCorePreset({
      container: 'app-univer-sheet',
    }),
  ],
})

univerAPI.createWorkbook({})
})
</script>

<template>
    <div id="app-univer-sheet"></div>
</template>

<style>
html,
body,
#app,
#app-univer-sheet {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
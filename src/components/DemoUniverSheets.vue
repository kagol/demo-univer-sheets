<script lang="ts" setup>
import { onMounted } from 'vue'
import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core'
import UniverPresetSheetsCoreZhCN from '@univerjs/preset-sheets-core/locales/zh-CN'
import { createUniver, FUniver, LocaleType, mergeLocales } from '@univerjs/presets'

import '@univerjs/preset-sheets-core/lib/index.css'

let univerAPIInstance: FUniver

const { data } = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

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
  univerAPIInstance = univerAPI

  // 初始化表格行列数
  const fWorkbook = univerAPI.getActiveWorkbook()
  const fWorksheet = fWorkbook.getActiveSheet()
  // 设置行数为 100000
  fWorksheet.setRowCount(1000)
  // 设置列数为 30
  fWorksheet.setColumnCount(50)

  // 批量初始化数据
  const facadeAPI = FUniver.newAPI(univer);
  facadeAPI.executeCommand('sheet.command.set-range-values', data);
})

const getData = () => {
  const fWorkbook = univerAPIInstance.getActiveWorkbook()
  const fWorksheet = fWorkbook.getActiveSheet()
  const sheetSnapshot = fWorksheet.getSheet().getSnapshot()
  return sheetSnapshot
}

defineExpose({
  getData,
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
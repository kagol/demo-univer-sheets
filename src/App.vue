<script setup lang="ts">
import { ref } from 'vue'
import { TinyDialogBox, TinyButton } from '@opentiny/vue'
import DemoUniverSheets from './components/DemoUniverSheets.vue'
import EcsList from './views/ecs-list/EcsList.vue'
import { randomTableData } from './views/ecs-list/ecs-data';
import { table2excel, excel2table } from './utils';

const boxVisibility = ref(false)
const demoUniverSheetsRef = ref()

const tableData = ref(randomTableData);
const excelData = table2excel(tableData.value)

const confirm = () => {
  boxVisibility.value = false
  const data = demoUniverSheetsRef.value?.getData()
  tableData.value = excel2table(data)
}
</script>

<template>
  <EcsList :data="tableData" @advanced-buy="boxVisibility = true" />
  <tiny-dialog-box fullscreen v-model:visible="boxVisibility" title="批量购买弹性云服务器">
    <DemoUniverSheets ref="demoUniverSheetsRef" :data="excelData" />
    <template #footer>
      <tiny-button @click="boxVisibility = false" round>取消</tiny-button>
      <tiny-button type="primary" @click="confirm" round>确定</tiny-button>
    </template>
  </tiny-dialog-box>
</template>

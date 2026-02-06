<script setup lang="ts">
import { ref } from 'vue';
import { TinyActionMenu, TinyContainer, Modal, TinyButton } from '@opentiny/vue';
import Header from '../../layouts/header.vue';

const options = ref([
  {
    label: '远程登录'
  },
  {
    label: '发送命令'
  },
  {
    label: '定时任务',
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  },
  {
    label: '购买相同配置'
  },
  {
    label: '开机',
    disabled: true
  },
  {
    label: '关机'
  },
  {
    label: '购买相同配置'
  },
  {
    label: '重启'
  },
  {
    label: '重置密码'
  },
  {
    label: '修改名称'
  },
  {
    label: '修改主机名'
  },
  {
    label: '变更规格'
  },
  {
    label: '变更产品(FlexusX)'
  },
  {
    label: '转包年/包月'
  },
  {
    label: '删除'
  },
  {
    label: '镜像',
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  },
  {
    label: '磁盘/备份',
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  },
  {
    label: '网络/安全组',
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  },
  {
    label: '故障排查',
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  },
  {
    label: '查看积分指标'
  },
  {
    label: '运维与监控',
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  },
  {
    label: '编辑标签'
  }
]);

const { data: tableData } = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const handleItemClick = (item: any) => {
  if (item.itemData.label === '变更规格') {
    console.log('变更规格====');
  }
};

const copy = async (text) => {
  await navigator.clipboard.writeText(text);
  Modal.message({ status: 'success', message: '复制成功' });
};

const emit = defineEmits(['advancedBuy'])

const handleAdvancedBuy = () => {
  emit('advancedBuy')
}
</script>

<template>
  <tiny-container :aside-width="0" class="main-layout">
    <template #header>
      <Header />
    </template>
    <div id="J_container" style="padding-left: 0px; padding-top: 48px; margin-right: 36px; width: calc(100% - 36px)">
      <!-- console development -->
      <ibiza-ecs _nghost-ng-c2859340050="" ng-version="17.3.12" tiscrollcontainer=""
        ><ti-app-layout
          _ngcontent-ng-c2859340050=""
          class="ibiza-ecs-class hws"
          _nghost-ng-c3660804855=""
          tcversion="@cloud/ti-app-layout:13.0.211"
          style="
            --ti-app-layout-cf-top: 48px;
            --ti-app-layout-cf-bottom: 0px;
            --ti-app-layout-left-width: 192px;
            --ti-app-layout-horizontal-scroll-height: 0px;
          "
        >
          <div _ngcontent-ng-c3660804855="" class="ti-app-layout-left-container" v-if="true">
            <ti-app-layout-left _ngcontent-ng-c2859340050="" _nghost-ng-c1351990101=""
              ><ibiza-ecs-side-menu-new _ngcontent-ng-c2859340050="" _nghost-ng-c3606549493="" class="ng-star-inserted">
                <div _ngcontent-ng-c3606549493="" class="ng-star-inserted">
                  <tp-leftmenu _ngcontent-ng-c3606549493="" _nghost-ng-c4009679120="" id="ti_auto_id_8" tiny3version="12.3.210"
                    ><ti-leftmenu
                      _ngcontent-ng-c4009679120=""
                      id="ti_auto_id_9"
                      tiny3version="12.3.210"
                      class="ti3-leftmenu-panel-no-sidebar ti3-leftmenu-container"
                      style="--ti-leftmenu-width: 192px; top: 48px; left: 0px"
                    >
                      <div class="ti3-leftmenu-panel-container">
                        <div class="ti3-leftmenu-panel">
                          <ti-leftmenu-head
                            _ngcontent-ng-c4009679120=""
                            class="tp-leftmenu-head tp-leftmenu-search-head ti3-leftmenu-head ng-star-inserted"
                            ><span _ngcontent-ng-c4009679120="" class="tp-leftmenu-search-container ng-star-inserted"
                              ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_service_name">云服务器控制台</span
                              ><span _ngcontent-ng-c4009679120="" class="tp-leftmenu-search-box ng-star-inserted"
                                ><ti-icon
                                  _ngcontent-ng-c4009679120=""
                                  name="search"
                                  tioutline=""
                                  class="tp-leftmenu-search-icon ti3-icon-search ti3-icon"
                                  tabindex="0"
                                  id="ti_auto_id_10"
                                  tiny3version="12.3.210"
                                ></ti-icon></span
                              ><!----></span
                            ><!----><!----></ti-leftmenu-head
                          ><!----><!----><!----><!----><ti-leftmenu-level1
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_8_level1_container_0"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-level1 ng-star-inserted"
                            ><a
                              rel="noopener noreferrer"
                              tioutline=""
                              class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                              tabindex="0"
                              id="ti_auto_id_8_level1_container_0_leftmenu_level1"
                              href="#/ecs/dashboard"
                              ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                ><tp-leftmenu-cell
                                  _ngcontent-ng-c4009679120=""
                                  _nghost-ng-c1551052256=""
                                  id="ti_auto_id_8_level1_cell_0"
                                  tiny3version="12.3.210"
                                  ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_0" class="ng-star-inserted">总览</span
                                  ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                ></ti-leftmenu-item
                              ><!----><!----></a
                            >
                            <div hidden=""><!----></div> </ti-leftmenu-level1
                          ><!----><!----><!----><ti-leftmenu-level1
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_8_level1_container_1"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-level1 ng-star-inserted"
                            ><a
                              rel="noopener noreferrer"
                              tioutline=""
                              class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                              tabindex="0"
                              id="ti_auto_id_8_level1_container_1_leftmenu_level1"
                              href="#/ise/manager/iseList"
                              ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                ><tp-leftmenu-cell
                                  _ngcontent-ng-c4009679120=""
                                  _nghost-ng-c1551052256=""
                                  id="ti_auto_id_8_level1_cell_1"
                                  tiny3version="12.3.210"
                                  ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_1" class="ng-star-inserted">事件</span
                                  ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                ></ti-leftmenu-item
                              ><!----><!----></a
                            >
                            <div hidden=""><!----></div> </ti-leftmenu-level1
                          ><!----><!----><!----><ti-leftmenu-level1
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_8_level1_container_2"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-level1 ng-star-inserted"
                            ><a
                              rel="noopener noreferrer"
                              tioutline=""
                              class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                              tabindex="0"
                              id="ti_auto_id_8_level1_container_2_leftmenu_level1"
                              href="#/ecs/manager/automatic-om/scheduleList"
                              ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                ><tp-leftmenu-cell
                                  _ngcontent-ng-c4009679120=""
                                  _nghost-ng-c1551052256=""
                                  id="ti_auto_id_8_level1_cell_2"
                                  tiny3version="12.3.210"
                                  ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_2" class="ng-star-inserted">定时运维</span
                                  ><!----><!----><!----><ti-tag
                                    _ngcontent-ng-c4009679120=""
                                    size="xs"
                                    titipposition="right"
                                    class="tp-leftmenu-tags ti3-multiselect-box-cell ti3-box-cell-notclose ti3-box-cell-tag-red ti3-tag-small ng-star-inserted"
                                    _nghost-ng-c3321171704=""
                                    id="ti_auto_id_93"
                                    tiny3version="12.3.210"
                                    ><!---->
                                    <section
                                      _ngcontent-ng-c3321171704=""
                                      id="ti_auto_id_93_content"
                                      title="NEW"
                                      class="ti3-box-cell-key-noclose ng-star-inserted"
                                    >
                                      NEW<!---->
                                    </section>
                                    <!----><!----><!----> </ti-tag
                                  ><!----><!----><!----></tp-leftmenu-cell
                                ></ti-leftmenu-item
                              ><!----><!----></a
                            >
                            <div hidden=""><!----></div> </ti-leftmenu-level1
                          ><!----><!----><!----><ti-leftmenu-level1
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_8_level1_container_3"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-level1 ng-star-inserted"
                            ><a
                              rel="noopener noreferrer"
                              tioutline=""
                              class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                              tabindex="0"
                              id="ti_auto_id_8_level1_container_3_leftmenu_level1"
                              href="https://console.huaweicloud.com/ticket/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/ticketindex/diagnose"
                              ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                ><tp-leftmenu-cell
                                  _ngcontent-ng-c4009679120=""
                                  _nghost-ng-c1551052256=""
                                  id="ti_auto_id_8_level1_cell_3"
                                  tiny3version="12.3.210"
                                  ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_3" class="ng-star-inserted">一键诊断</span
                                  ><span
                                    _ngcontent-ng-c4009679120=""
                                    class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                  ></span
                                  ><!----><!----><!----><ti-tag
                                    _ngcontent-ng-c4009679120=""
                                    size="xs"
                                    titipposition="right"
                                    class="tp-leftmenu-tags ti3-multiselect-box-cell ti3-box-cell-notclose ti3-box-cell-tag-red ti3-tag-small ng-star-inserted"
                                    _nghost-ng-c3321171704=""
                                    id="ti_auto_id_88"
                                    tiny3version="12.3.210"
                                    ><!---->
                                    <section
                                      _ngcontent-ng-c3321171704=""
                                      id="ti_auto_id_88_content"
                                      title="NEW"
                                      class="ti3-box-cell-key-noclose ng-star-inserted"
                                    >
                                      NEW<!---->
                                    </section>
                                    <!----><!----><!----> </ti-tag
                                  ><!----><!----><!----></tp-leftmenu-cell
                                ></ti-leftmenu-item
                              ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                              ><!----></a
                            >
                            <div hidden=""><!----></div> </ti-leftmenu-level1
                          ><!----><!----><!----><ti-leftmenu-level1
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_8_level1_container_4"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-level1 ng-star-inserted"
                            ><a
                              rel="noopener noreferrer"
                              tioutline=""
                              class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                              tabindex="0"
                              id="ti_auto_id_8_level1_container_4_leftmenu_level1"
                              href="https://console.huaweicloud.com/cbh?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn"
                              ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                ><tp-leftmenu-cell
                                  _ngcontent-ng-c4009679120=""
                                  _nghost-ng-c1551052256=""
                                  id="ti_auto_id_8_level1_cell_4"
                                  tiny3version="12.3.210"
                                  ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_4" class="ng-star-inserted">云堡垒机</span
                                  ><span
                                    _ngcontent-ng-c4009679120=""
                                    class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                  ></span
                                  ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                ></ti-leftmenu-item
                              ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                              ><!----></a
                            >
                            <div hidden=""><!----></div> </ti-leftmenu-level1
                          ><!----><!----><ti-leftmenu-group
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_94"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-group ng-star-inserted"
                          >
                            <div class="ti3-leftmenu-group-wrapper" id="ti_auto_id_94_leftmenu_group">
                              <ti-leftmenu-group-item _ngcontent-ng-c4009679120=""
                                ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_5">实例与镜像</span></ti-leftmenu-group-item
                              ><!---->
                            </div>
                            <div>
                              <ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_5_0"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link ti3-leftmenu-level1-open-item"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_5_0_leftmenu_level1"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_5_0"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_5_0" class="ng-star-inserted">弹性云服务器</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><ti-icon
                                    class="ti3-leftmenu-triangle ti3-icon ti3-icon-accordion-fold ng-star-inserted"
                                    id="ti_auto_id_8_level1_container_5_0_leftmenu_state_icon"
                                    tiny3version="12.3.210"
                                  ></ti-icon
                                  ><!----><!----></a
                                >
                                <div>
                                  <!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_5_0_0_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ti3-leftmenu-level2-active ng-star-inserted"
                                    ><a rel="noopener noreferrer" class="ti3-leftmenu-link ti3-leftmenu-level2-link" href="#/ecs/manager/vmList"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_5_0_0"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_5_0_0" class="ng-star-inserted">弹性云服务器</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_5_0_1_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a
                                      rel="noopener noreferrer"
                                      class="ti3-leftmenu-link ti3-leftmenu-level2-link"
                                      href="#/groups/manager/groupsList"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_5_0_1"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_5_0_1" class="ng-star-inserted">云服务器组</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!---->
                                </div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_5_1"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_5_1_leftmenu_level1"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_5_1"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_5_1" class="ng-star-inserted"
                                        >华为云Flexus云服务</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><ti-icon
                                    class="ti3-leftmenu-triangle ti3-icon-accordion-unfold ti3-icon ng-star-inserted"
                                    id="ti_auto_id_8_level1_container_5_1_leftmenu_state_icon"
                                    tiny3version="12.3.210"
                                  ></ti-icon
                                  ><!----><!----></a
                                >
                                <div hidden="">
                                  <!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_5_1_0_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a
                                      rel="noopener noreferrer"
                                      class="ti3-leftmenu-link ti3-leftmenu-level2-link"
                                      href="https://console.huaweicloud.com/smb/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_5_1_0"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_5_1_0" class="ng-star-inserted"
                                          >Flexus应用服务器L实例</span
                                        ><span
                                          _ngcontent-ng-c4009679120=""
                                          class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                        ></span
                                        ><!----><!----><!----><ti-tag
                                          _ngcontent-ng-c4009679120=""
                                          size="xs"
                                          titipposition="right"
                                          class="tp-leftmenu-tags ti3-multiselect-box-cell ti3-box-cell-notclose ti3-box-cell-tag-red ti3-tag-small ng-star-inserted"
                                          _nghost-ng-c3321171704=""
                                          id="ti_auto_id_95"
                                          tiny3version="12.3.210"
                                          ><!---->
                                          <section
                                            _ngcontent-ng-c3321171704=""
                                            id="ti_auto_id_95_content"
                                            title="NEW"
                                            class="ti3-box-cell-key-noclose ng-star-inserted"
                                          >
                                            NEW<!---->
                                          </section>
                                          <!----><!----><!----> </ti-tag
                                        ><!----><!----><!----></tp-leftmenu-cell
                                      ><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_5_1_1_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a
                                      rel="noopener noreferrer"
                                      class="ti3-leftmenu-link ti3-leftmenu-level2-link"
                                      href="https://console.huaweicloud.com/hecsx/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/ecs/manager/xList"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_5_1_1"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_5_1_1" class="ng-star-inserted"
                                          >Flexus云服务器X实例</span
                                        ><span
                                          _ngcontent-ng-c4009679120=""
                                          class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                        ></span
                                        ><!----><!----><!----><ti-tag
                                          _ngcontent-ng-c4009679120=""
                                          size="xs"
                                          titipposition="right"
                                          class="tp-leftmenu-tags ti3-multiselect-box-cell ti3-box-cell-notclose ti3-box-cell-tag-red ti3-tag-small ng-star-inserted"
                                          _nghost-ng-c3321171704=""
                                          id="ti_auto_id_96"
                                          tiny3version="12.3.210"
                                          ><!---->
                                          <section
                                            _ngcontent-ng-c3321171704=""
                                            id="ti_auto_id_96_content"
                                            title="NEW"
                                            class="ti3-box-cell-key-noclose ng-star-inserted"
                                          >
                                            NEW<!---->
                                          </section>
                                          <!----><!----><!----> </ti-tag
                                        ><!----><!----><!----></tp-leftmenu-cell
                                      ><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_5_1_2_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a
                                      rel="noopener noreferrer"
                                      class="ti3-leftmenu-link ti3-leftmenu-level2-link"
                                      href="https://console.huaweicloud.com/lcs/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/lcs/manager/vmList"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_5_1_2"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_5_1_2" class="ng-star-inserted">HECS</span
                                        ><span
                                          _ngcontent-ng-c4009679120=""
                                          class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                        ></span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!---->
                                </div> </ti-leftmenu-level1
                              ><!----><!----><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_5_3"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_5_3_leftmenu_level1"
                                  href="#/deh/manager/dehList"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_5_3"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_5_3" class="ng-star-inserted">专属主机</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_5_4"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_5_4_leftmenu_level1"
                                  href="#/bms/manager/bmsInfo/vmList"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_5_4"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_5_4" class="ng-star-inserted">裸金属服务器</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_5_5"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_5_5_leftmenu_level1"
                                  href="#/ims/manager/imageList/selfImage"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_5_5"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_5_5" class="ng-star-inserted">镜像服务</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><!---->
                            </div> </ti-leftmenu-group
                          ><!----><!----><!----><ti-leftmenu-group
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_97"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-group ng-star-inserted"
                          >
                            <div class="ti3-leftmenu-group-wrapper" id="ti_auto_id_97_leftmenu_group">
                              <ti-leftmenu-group-item _ngcontent-ng-c4009679120=""
                                ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_6">网络与安全</span></ti-leftmenu-group-item
                              ><!---->
                            </div>
                            <div>
                              <ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_6_0"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_6_0_leftmenu_level1"
                                  href="#/vpc/secGroups"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_6_0"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_6_0" class="ng-star-inserted">安全组</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_6_1"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_6_1_leftmenu_level1"
                                  href="https://console.huaweicloud.com/vpc/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/vpc/vpcmanager/eips"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_6_1"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_6_1" class="ng-star-inserted">弹性公网IP</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_6_2"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_6_2_leftmenu_level1"
                                  href="https://console.huaweicloud.com/console-home/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/dew/kps"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_6_2"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_6_2" class="ng-star-inserted">密钥对</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><!---->
                            </div> </ti-leftmenu-group
                          ><!----><!----><!----><ti-leftmenu-group
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_98"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-group ng-star-inserted"
                          >
                            <div class="ti3-leftmenu-group-wrapper" id="ti_auto_id_98_leftmenu_group">
                              <ti-leftmenu-group-item _ngcontent-ng-c4009679120=""
                                ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_7">存储与备份</span></ti-leftmenu-group-item
                              ><!---->
                            </div>
                            <div>
                              <ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_7_0"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_7_0_leftmenu_level1"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_7_0"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_7_0" class="ng-star-inserted">云硬盘</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><ti-icon
                                    class="ti3-leftmenu-triangle ti3-icon-accordion-unfold ti3-icon ng-star-inserted"
                                    id="ti_auto_id_8_level1_container_7_0_leftmenu_state_icon"
                                    tiny3version="12.3.210"
                                  ></ti-icon
                                  ><!----><!----></a
                                >
                                <div hidden="">
                                  <!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_7_0_0_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a rel="noopener noreferrer" class="ti3-leftmenu-link ti3-leftmenu-level2-link" href="#/evs/manager/volumelist"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_7_0_0"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_7_0_0" class="ng-star-inserted">磁盘</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_7_0_1_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a rel="noopener noreferrer" class="ti3-leftmenu-link ti3-leftmenu-level2-link" href="#/evs/manager/snapshotlist"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_7_0_1"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_7_0_1" class="ng-star-inserted">快照</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!---->
                                </div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_7_1"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_7_1_leftmenu_level1"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_7_1"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_7_1" class="ng-star-inserted">专属分布式存储</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><ti-icon
                                    class="ti3-leftmenu-triangle ti3-icon-accordion-unfold ti3-icon ng-star-inserted"
                                    id="ti_auto_id_8_level1_container_7_1_leftmenu_state_icon"
                                    tiny3version="12.3.210"
                                  ></ti-icon
                                  ><!----><!----></a
                                >
                                <div hidden="">
                                  <!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_7_1_0_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a rel="noopener noreferrer" class="ti3-leftmenu-link ti3-leftmenu-level2-link" href="#/dss/manager/list"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_7_1_0"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_7_1_0" class="ng-star-inserted">存储池</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_7_1_1_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a rel="noopener noreferrer" class="ti3-leftmenu-link ti3-leftmenu-level2-link" href="#/dss/manager/volumeList"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_7_1_1"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_7_1_1" class="ng-star-inserted">磁盘</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!---->
                                </div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_7_2"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_7_2_leftmenu_level1"
                                  href="https://console.huaweicloud.com/console-home/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/cbr"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_7_2"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_7_2" class="ng-star-inserted">云备份</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_7_3"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_7_3_leftmenu_level1"
                                  href="https://console.huaweicloud.com/cbr/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/cbr/manager/csbs/vaultList?service=csbs"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_7_3"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_7_3" class="ng-star-inserted">云服务器备份</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_7_4"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_7_4_leftmenu_level1"
                                  href="https://console.huaweicloud.com/cbr/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/cbr/manager/vbs/vaultList?service=vbs"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_7_4"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_7_4" class="ng-star-inserted">云硬盘备份</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><!---->
                            </div> </ti-leftmenu-group
                          ><!----><!----><!----><ti-leftmenu-group
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_99"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-group ng-star-inserted"
                          >
                            <div class="ti3-leftmenu-group-wrapper" id="ti_auto_id_99_leftmenu_group">
                              <ti-leftmenu-group-item _ngcontent-ng-c4009679120=""
                                ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_8">弹性策略</span></ti-leftmenu-group-item
                              ><!---->
                            </div>
                            <div>
                              <ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_8_0"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_8_0_leftmenu_level1"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_8_0"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_8_0" class="ng-star-inserted">弹性伸缩</span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><ti-icon
                                    class="ti3-leftmenu-triangle ti3-icon-accordion-unfold ti3-icon ng-star-inserted"
                                    id="ti_auto_id_8_level1_container_8_0_leftmenu_state_icon"
                                    tiny3version="12.3.210"
                                  ></ti-icon
                                  ><!----><!----></a
                                >
                                <div hidden="">
                                  <!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_8_0_0_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a
                                      rel="noopener noreferrer"
                                      class="ti3-leftmenu-link ti3-leftmenu-level2-link"
                                      href="#/as/manager/groupConfigInfo/groupList"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_8_0_0"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_8_0_0" class="ng-star-inserted">伸缩实例</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!----><ti-leftmenu-level2
                                    _ngcontent-ng-c4009679120=""
                                    id="ti_auto_id_8_level2_container_8_0_1_leftmenu_level2"
                                    tiny3version="12.3.210"
                                    tabindex="0"
                                    class="ti3-leftmenu-level2 ng-star-inserted"
                                    ><a rel="noopener noreferrer" class="ti3-leftmenu-link ti3-leftmenu-level2-link" href="#/as/manager/bandwidth"
                                      ><tp-leftmenu-cell
                                        _ngcontent-ng-c4009679120=""
                                        _nghost-ng-c1551052256=""
                                        id="ti_auto_id_8_level2_cell_8_0_1"
                                        tiny3version="12.3.210"
                                        ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level2_8_0_1" class="ng-star-inserted">伸缩带宽</span
                                        ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                      ><!----></a
                                    ></ti-leftmenu-level2
                                  ><!----><!----><!---->
                                </div> </ti-leftmenu-level1
                              ><!----><!----><!----><!----><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_8_3"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_8_3_leftmenu_level1"
                                  href="https://console.huaweicloud.com/vpc/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/elb/manager/elbList"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_8_3"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_8_3" class="ng-star-inserted">弹性负载均衡</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><!---->
                            </div> </ti-leftmenu-group
                          ><!----><!----><!----><ti-leftmenu-group
                            _ngcontent-ng-c4009679120=""
                            id="ti_auto_id_100"
                            tiny3version="12.3.210"
                            class="ti3-leftmenu-group ng-star-inserted"
                          >
                            <div class="ti3-leftmenu-group-wrapper" id="ti_auto_id_100_leftmenu_group">
                              <ti-leftmenu-group-item _ngcontent-ng-c4009679120=""
                                ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_group_9">运维与监控</span></ti-leftmenu-group-item
                              ><!---->
                            </div>
                            <div>
                              <ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_9_0"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_9_0_leftmenu_level1"
                                  href="https://console.huaweicloud.com/ces?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/alarm/histories?namespace=SYS.ECS"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_9_0"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_9_0" class="ng-star-inserted">告警记录</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_9_1"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_9_1_leftmenu_level1"
                                  href="https://console.huaweicloud.com/ces?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/hostMonitor/list?namespace=SYS.ECS"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_9_1"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_9_1" class="ng-star-inserted">主机监控</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_9_2"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_9_2_leftmenu_level1"
                                  href="https://console.huaweicloud.com/coc?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/console-home/task-mgmt/work-order/trouble-shoot?type=ecs"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_9_2"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_9_2" class="ng-star-inserted">运维操作记录</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><ti-leftmenu-level1
                                _ngcontent-ng-c4009679120=""
                                id="ti_auto_id_8_level1_container_9_3"
                                tiny3version="12.3.210"
                                class="ti3-leftmenu-level1 ng-star-inserted"
                                ><a
                                  rel="noopener noreferrer"
                                  tioutline=""
                                  class="ti3-leftmenu-level1-item ti3-leftmenu-link"
                                  tabindex="0"
                                  id="ti_auto_id_8_level1_container_9_3_leftmenu_level1"
                                  href="https://console.huaweicloud.com/coc?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn"
                                  ><ti-leftmenu-item _ngcontent-ng-c4009679120="" class="ti3-leftmenu-level1-label"
                                    ><tp-leftmenu-cell
                                      _ngcontent-ng-c4009679120=""
                                      _nghost-ng-c1551052256=""
                                      id="ti_auto_id_8_level1_cell_9_3"
                                      tiny3version="12.3.210"
                                      ><span _ngcontent-ng-c4009679120="" id="ti_auto_id_8_level1_9_3" class="ng-star-inserted">云运维中心</span
                                      ><span
                                        _ngcontent-ng-c4009679120=""
                                        class="ti3-icon-action-binding ti3-icon tp-leftmenu-link ng-star-inserted"
                                      ></span
                                      ><!----><!----><!----><!----><!----><!----></tp-leftmenu-cell
                                    ></ti-leftmenu-item
                                  ><!----><span class="ti3-icon-action-binding ti3-icon ti3-leftmenu-href ng-star-inserted"></span
                                  ><!----></a
                                >
                                <div hidden=""><!----></div> </ti-leftmenu-level1
                              ><!----><!----><!---->
                            </div> </ti-leftmenu-group
                          ><!----><!----><!----><!----><!---->
                        </div>
                        <!---->
                      </div>
                      <ti-icon
                        tioutline=""
                        class="ti3-leftmenu-toggle ti3-icon-left-1 ti3-leftmenu-toggle-show ti3-icon ng-star-inserted"
                        tabindex="0"
                        id="ti_auto_id_9_toggle"
                        tiny3version="12.3.210"
                      ></ti-icon
                      ><!----> </ti-leftmenu
                    ><!----><!----><!----><!----></tp-leftmenu
                  >
                </div>
                <!----> </ibiza-ecs-side-menu-new
              ><!----><!----></ti-app-layout-left
            >
          </div>
          <div _ngcontent-ng-c3660804855="" class="ti-app-layout-main-container">
            <div _ngcontent-ng-c3660804855="" class="ti-app-layout-header-area"></div>
            <div _ngcontent-ng-c3660804855="" class="ti-app-layout-main-area">
              <div _ngcontent-ng-c2859340050="" class="container">
                <tp-restrict-new _ngcontent-ng-c2859340050="" _nghost-ng-c1522641768="" id="ti_auto_id_2" tiny3version="12.3.210"
                  ><ti-alert
                    _ngcontent-ng-c1522641768=""
                    _nghost-ng-c2010694719=""
                    class="ng-tns-c2010694719-0"
                    id="ti_auto_id_2_restrict_alert"
                    tiny3version="12.3.210"
                    ><!----><!----></ti-alert
                  ><!----></tp-restrict-new
                ><tp-restrict-new _ngcontent-ng-c2859340050="" _nghost-ng-c1522641768="" id="ti_auto_id_3" tiny3version="12.3.210"
                  ><ti-alert
                    _ngcontent-ng-c1522641768=""
                    _nghost-ng-c2010694719=""
                    class="ng-tns-c2010694719-1"
                    id="ti_auto_id_3_restrict_alert"
                    tiny3version="12.3.210"
                    ><!----><!----></ti-alert
                  ><!----></tp-restrict-new
                ><router-outlet _ngcontent-ng-c2859340050=""></router-outlet
                ><ibiza-ecs-ecs _nghost-ng-c196878968="" class="ng-star-inserted"
                  ><router-outlet _ngcontent-ng-c196878968=""></router-outlet
                  ><app-ecs-list-container _nghost-ng-c3565173692="" class="ng-star-inserted"
                    ><ti-app-layout-main
                      _ngcontent-ng-c3565173692=""
                      _nghost-ng-c3415584491=""
                      tcversion="@cloud/ti-app-layout:13.0.211"
                      class="ti-app-layout-main-host"
                      ><!---->
                      <div
                        _ngcontent-ng-c3415584491=""
                        class="ti-app-layout-main-header"
                        style="position: sticky; top: calc(var(--ti-app-layout-sticky-base-top) + 0px); right: 0px; z-index: 80"
                      ></div>
                      <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body">
                        <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-sidebar"></div>
                        <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-content">
                          <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-content-body">
                            <ti-app-layout-main-content _ngcontent-ng-c3565173692="" _nghost-ng-c1101202487=""
                              ><ti-global-message
                                _ngcontent-ng-c3565173692=""
                                id="ecsGlobalMessage"
                                _nghost-ng-c517794197=""
                                tiny3version="12.3.210"
                                tcversion="@cloud/ti-global-message:13.0.211"
                                style="position: sticky; top: calc(var(--ti-app-layout-sticky-base-top) + 0px); right: 0px; z-index: 80"
                              >
                                <div _ngcontent-ng-c517794197=""><!----></div>
                                <div _ngcontent-ng-c517794197="" class="ti-global-message-bottom-bar">
                                  <div _ngcontent-ng-c517794197="" class="ti-global-message-clear">清空</div>
                                  <div _ngcontent-ng-c517794197="" class="ti-global-message-collapse">
                                    收起
                                    <div _ngcontent-ng-c517794197="" class="ti-global-message-collapse-icon">
                                      <tp-icon
                                        _ngcontent-ng-c517794197=""
                                        name="cloudx-action-foldI"
                                        _nghost-ng-c199735890=""
                                        id="ti_auto_id_12"
                                        tiny3version="12.3.210"
                                        ><!--?xml version="1.0" encoding="UTF-8"?-->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentcolor">
                                          <path
                                            d="m12.74,15.68c-.41.41-1.07.41-1.48,0l-6.15-6.15c-.29-.29-.29-.77,0-1.06s.77-.29,1.06,0l5.83,5.83,5.83-5.83c.26-.26.66-.29.96-.09l.1.09c.29.29.29.77,0,1.06l-6.15,6.15Z"
                                          ></path>
                                        </svg>
                                      </tp-icon>
                                    </div>
                                  </div>
                                </div>
                                <!----><!----><!---->
                              </ti-global-message>
                              <div _ngcontent-ng-c3565173692="" class="ecs-list-container-global">
                                <ibiza-ecs-ecs-grid-list _ngcontent-ng-c3565173692="" _nghost-ng-c3580682620="" class="ng-star-inserted">
                                  <div _ngcontent-ng-c3580682620="" id="ibizaEcsGridList" class="ecs-list-container">
                                    <tp-layout-content
                                      _ngcontent-ng-c3580682620=""
                                      leftmenu=""
                                      ticloudui=""
                                      class="ecs-list-container-layout-base tp-layout-content"
                                      _nghost-ng-c1285424354=""
                                      ><ibiza-ecs-guide-head _ngcontent-ng-c3580682620="" _nghost-ng-c529278324=""
                                        ><tp-layout-content-header _ngcontent-ng-c529278324="" _nghost-ng-c2242251176=""
                                          ><tp-descandbuy
                                            _ngcontent-ng-c529278324=""
                                            id="ecs-list-descandbuy"
                                            _nghost-ng-c3779160287=""
                                            tiny3version="12.3.210"
                                            ><tp-helptip
                                              _ngcontent-ng-c3779160287=""
                                              class="tp-descandbuy-title"
                                              _nghost-ng-c1505140518=""
                                              id="ecs-list-descandbuy_helptip"
                                              tiny3version="12.3.210"
                                              ><span _ngcontent-ng-c1505140518="" class="tp-helptip-label" id="ecs-list-descandbuy_helptip_label"
                                                >弹性云服务器</span
                                              ><!----><tp-icon
                                                _ngcontent-ng-c1505140518=""
                                                local=""
                                                name="cloudx-action-help"
                                                class="tp-icon-cloudx-action-help ng-star-inserted"
                                                id="ecs-list-descandbuy_helptip_tipicon"
                                                tiny3version="12.3.210"
                                              ></tp-icon
                                              ><!----><!----></tp-helptip
                                            >
                                            <div _ngcontent-ng-c3779160287="" class="tp-descandbuy-right">
                                              <section _ngcontent-ng-c3779160287="" style="display: flex">
                                                <section _ngcontent-ng-c3779160287="" style="flex: 1; align-self: center">
                                                  <div _ngcontent-ng-c529278324="" class="vertical-center justify-between">
                                                    <div _ngcontent-ng-c529278324=""><!----></div>
                                                    <div
                                                      _ngcontent-ng-c529278324=""
                                                      class="tp-descandbuy-div-standard ng-star-inserted"
                                                      style="position: relative"
                                                    >
                                                      <span _ngcontent-ng-c529278324="" class="ng-star-inserted"
                                                        ><tp-iconaction
                                                          _ngcontent-ng-c529278324=""
                                                          iconname="cloudx-action-diagnosis"
                                                          id="oneClickDiagnosis"
                                                          class="mr-5x align-middle"
                                                          _nghost-ng-c227395152=""
                                                          tiny3version="12.3.210"
                                                          tiform=""
                                                          ><a
                                                            _ngcontent-ng-c227395152=""
                                                            rel="noopener noreferrer"
                                                            class="tp-icon-action tp-icon-action-type-link"
                                                            href="https://console.huaweicloud.com/ticket/?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/ticketindex/diagnose"
                                                            target="_blank"
                                                            id="oneClickDiagnosis_awrapper"
                                                            ><tp-icon
                                                              _ngcontent-ng-c227395152=""
                                                              class="tp-icon-action-icon"
                                                              _nghost-ng-c199735890=""
                                                              id="ti_auto_id_69"
                                                              tiny3version="12.3.210"
                                                              ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: currentcolor">
                                                                <path
                                                                  d="m11.26,2.13c.26,0,.47-.21.47-.47s-.21-.47-.47-.47h-6.53c-.26,0-.47.21-.47.47s.21.47.47.47h6.53Zm-3.26,4.49c.26,0,.47.21.47.47v1.7h1.7c.23,0,.43.17.47.39v.08c0,.26-.2.47-.47.47h-1.7s0,1.7,0,1.7c0,.23-.17.43-.39.47h-.09c-.26,0-.47-.2-.47-.47v-1.7h-1.7c-.23,0-.43-.17-.47-.39v-.08c0-.26.2-.47.47-.47h1.7v-1.7c0-.23.17-.43.39-.47h.09Zm5.27-1.96H2.73c-.43,0-.79.35-.79.79v7.63c0,.44.35.79.79.79h10.53c.43,0,.79-.35.79-.79v-7.63c0-.44-.35-.79-.79-.79Zm0-.95c.96,0,1.73.78,1.73,1.73v7.63c0,.96-.78,1.73-1.73,1.73H2.73c-.96,0-1.73-.78-1.73-1.73v-7.63c0-.96.78-1.73,1.73-1.73h10.53Z"
                                                                ></path>
                                                              </svg> </tp-icon
                                                            ><span
                                                              _ngcontent-ng-c227395152=""
                                                              class="tp-icon-action-text"
                                                              id="oneClickDiagnosis_label"
                                                              >一键诊断</span
                                                            ></a
                                                          ></tp-iconaction
                                                        ></span
                                                      ><!----><!----><span
                                                        _ngcontent-ng-c529278324=""
                                                        class="mr-4x pointer align-middle list-header-guide-icon-help ng-star-inserted"
                                                        ><tp-icon
                                                          _ngcontent-ng-c529278324=""
                                                          name="cloudx-action-user-guide"
                                                          class="action-icon mr-base"
                                                          _nghost-ng-c199735890=""
                                                          id="ti_auto_id_70"
                                                          tiny3version="12.3.210"
                                                          ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentcolor">
                                                            <path
                                                              d="m16.92,2.25c1.63,0,2.96,1.31,2.96,2.94v10.92c0,1.63-1.33,2.94-2.96,2.94H7.47c-.41,0-.75-.34-.75-.75s.34-.75.75-.75h9.45c.81,0,1.46-.65,1.46-1.44V5.19c0-.79-.65-1.44-1.46-1.44h-.04s0,5.25,0,5.25c0,.64-.75.98-1.24.57l-1.75-1.51-1.76,1.51c-.45.39-1.14.11-1.23-.45v-.12s0-5.25,0-5.25h-3.79c-.81,0-1.46.65-1.46,1.44v13.62c0,.79.65,1.44,1.46,1.44h12.04c.41,0,.75.34.75.75s-.34.75-.75.75H7.08c-1.63,0-2.96-1.31-2.96-2.94V5.19c0-1.62,1.33-2.94,2.96-2.94h9.83Zm-1.54,1.5h-3v3.62l1.01-.86c.25-.21.59-.24.86-.08l.11.08,1.01.86v-3.62Z"
                                                            ></path>
                                                          </svg> </tp-icon
                                                        ><span
                                                          _ngcontent-ng-c529278324=""
                                                          meta-data-uba="www_v1_ecs.click.ecs_list_show_guide_modal"
                                                          class="icon-label ng-star-inserted"
                                                        >
                                                          使用指南 </span
                                                        ><!----><!----><!----></span
                                                      ><!---->
                                                    </div>
                                                    <!---->
                                                  </div>
                                                </section>
                                                <!----><!----><span
                                                  _ngcontent-ng-c3779160287=""
                                                  style="display: inline-block"
                                                  class="ng-star-inserted"
                                                  ><button
                                                    _ngcontent-ng-c3779160287=""
                                                    tibutton=""
                                                    size="large"
                                                    id="applyCloudHost"
                                                    tiny3version="12.3.210"
                                                    class="tp-descandbuy-button-left-space ti3-btn-danger ti3-btn-large"
                                                  >
                                                    <!----><!---->
                                                    购买弹性云服务器
                                                  </button></span
                                                >
                                                <tiny-button type="text" text="高级购买" style="font-size: 12px; margin-left: 12px;" @click="handleAdvancedBuy"></tiny-button>
                                              </section>
                                              <!---->
                                            </div> </tp-descandbuy
                                          ><!----><!----></tp-layout-content-header
                                        ><tp-helpbubble
                                          _ngcontent-ng-c529278324=""
                                          _nghost-ng-c3245859644=""
                                          id="ti_auto_id_11"
                                          tiny3version="12.3.210"
                                          hidden=""
                                          ><!----></tp-helpbubble
                                        ></ibiza-ecs-guide-head
                                      ><!----><!----><!----><!----><!---->
                                      <div _ngcontent-ng-c3580682620="" class="ng-star-inserted">
                                        <ti-alert
                                          _ngcontent-ng-c3580682620=""
                                          type="prompt"
                                          class="mb-4x ng-tns-c2010694719-16 ng-star-inserted"
                                          style="width: 100%"
                                          _nghost-ng-c2010694719=""
                                          id="ti_auto_id_102"
                                          tiny3version="12.3.210"
                                        >
                                          <div
                                            _ngcontent-ng-c2010694719=""
                                            class="ng-tns-c2010694719-16 ng-trigger ng-trigger-alertAnimate ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-ng-c2010694719=""
                                              class="ti3-alert-container ng-tns-c2010694719-16 ti3-alert-prompt-container ng-star-inserted"
                                              style="display: flex"
                                            >
                                              <span
                                                _ngcontent-ng-c2010694719=""
                                                class="ti3-icon ti3-alert-icon ng-tns-c2010694719-16 ti3-icon-alert-prompt-1 ng-star-inserted"
                                                ><span _ngcontent-ng-c2010694719="" class="path1"></span
                                                ><span _ngcontent-ng-c2010694719="" class="path2"></span></span
                                              ><!---->
                                              <div
                                                _ngcontent-ng-c2010694719=""
                                                class="ti3-alert-label ng-tns-c2010694719-16 ti3-alert-label-with-typeIcon"
                                                style="overflow-y: hidden; width: calc(100% - 56px)"
                                                id="ti_auto_id_102_label"
                                              >
                                                <div
                                                  _ngcontent-ng-c2010694719=""
                                                  class="ti3-alert-message ng-tns-c2010694719-16"
                                                  style="height: 18px; top: 0px"
                                                >
                                                  <!----><ti-alert-message
                                                    _ngcontent-ng-c3580682620=""
                                                    id="resetPwdOnlineMsg"
                                                    tiny3version="12.3.210"
                                                    class="ng-tns-c2010694719-16 ng-star-inserted"
                                                    style=""
                                                    ><span _ngcontent-ng-c3580682620="" translate="" class="ng-star-inserted"
                                                      >如果云服务器一键式重置密码功能未生效，建议安装密码重置插件开启一键重置密码功能。</span
                                                    ><span _ngcontent-ng-c3580682620="" class="ng-star-inserted"
                                                      ><a
                                                        _ngcontent-ng-c3580682620=""
                                                        rel="noopener noreferrer"
                                                        id="resetPwdOnlineLink"
                                                        tinavicon=""
                                                        target="_blank"
                                                        meta-data-uba="www_v1_ecs.click.ecs_list_install_resetPwd_agent_link"
                                                        class="common-link ng-star-inserted"
                                                        href="https://support.huaweicloud.com/zh-cn/urlredirects-ecs/ecs_term_download_resetPwd_suggest_link.html"
                                                        >如何安装插件？</a
                                                      ><!----><!----></span
                                                    ><!----><!----></ti-alert-message
                                                  ><!----><ti-alert-message
                                                    _ngcontent-ng-c3580682620=""
                                                    id="resetPwdUpdateMsg"
                                                    tiny3version="12.3.210"
                                                    class="ng-tns-c2010694719-16 ng-star-inserted"
                                                    ><span _ngcontent-ng-c3580682620="" class="ng-star-inserted"
                                                      >一键式重置密码插件对插件稳定性进行了优化，建议您更新插件版本，具体操作请参考<a
                                                        class="common-link a-out-link"
                                                        id="ecsUpdaterResetPwdPlugin"
                                                        tinavicon=""
                                                        style="display: inline-block"
                                                        href="https://support.huaweicloud.com/zh-cn/urlredirects-ecs/ecs_term_resetPwd_update_link.html"
                                                        target="_blank"
                                                        meta-data-uba="www_v1_ecs.click.ecs_term_resetPwd_plug_update_faq"
                                                        rel="noopener noreferrer"
                                                        >更新一键式重置密码插件</a
                                                      >。</span
                                                    ><!----></ti-alert-message
                                                  ><!----><!---->
                                                </div>
                                              </div>
                                              <div _ngcontent-ng-c2010694719="" class="ti3-alert-message-page-container ng-tns-c2010694719-16">
                                                <span
                                                  _ngcontent-ng-c2010694719=""
                                                  class="ti3-alert-message-page ng-tns-c2010694719-16 ng-star-inserted ti3-alert-message-page-active"
                                                  id="ti_auto_id_102_alert_messages_page_0"
                                                ></span
                                                ><span
                                                  _ngcontent-ng-c2010694719=""
                                                  class="ti3-alert-message-page ng-tns-c2010694719-16 ng-star-inserted"
                                                  id="ti_auto_id_102_alert_messages_page_1"
                                                ></span
                                                ><!---->
                                              </div>
                                              <!---->
                                            </div>
                                            <!----><!---->
                                          </div>
                                          <!----><!---->
                                        </ti-alert>
                                      </div>
                                      <!---->
                                      <div _ngcontent-ng-c3580682620="" class="ng-star-inserted">
                                        <!----><ecs-region-resources-count
                                          _ngcontent-ng-c3580682620=""
                                          _nghost-ng-c2980093526=""
                                          class="ng-star-inserted"
                                        >
                                          <div _ngcontent-ng-c2980093526="" class="ng-star-inserted">
                                            <div
                                              _ngcontent-ng-c2980093526=""
                                              id="regionResourcesCountLabel"
                                              class="tp-smart-prompt tp-smart-small tp-smart-border-always mb-4x cf-recommend-content-collapse"
                                            >
                                              <div _ngcontent-ng-c2980093526="" class="tp-recommend-container">
                                                <span _ngcontent-ng-c2980093526="" translate="" class="tp-recommend-label">我的ECS：</span
                                                ><span _ngcontent-ng-c2980093526="" class="tp-recommend-content"
                                                  ><span _ngcontent-ng-c2980093526="" class="ng-star-inserted"
                                                    ><span
                                                      _ngcontent-ng-c2980093526=""
                                                      tioverflow=""
                                                      class="tp-recommend-item-content pointer cf-recommend-selected"
                                                      id="regionResourcesCountRegions0"
                                                      style="text-overflow: ellipsis; overflow: hidden; display: inline-block; white-space: nowrap"
                                                      ><span _ngcontent-ng-c2980093526="" class="tp-recommend-item-text">华北-北京四</span
                                                      ><span _ngcontent-ng-c2980093526="" class="cf-recommend-num">(1)</span></span
                                                    ><!----></span
                                                  ><!----></span
                                                >
                                                <div _ngcontent-ng-c2980093526="" style="margin-left: auto; flex-shrink: 0">
                                                  <!----><ecs-icon-buttons
                                                    _ngcontent-ng-c2980093526=""
                                                    id="ecsListRefreshRegionResource"
                                                    class="pull-right ml5"
                                                    _nghost-ng-c4149977294=""
                                                    ><span
                                                      _ngcontent-ng-c4149977294=""
                                                      class="suite-icon-container refresh-icon ng-star-inserted"
                                                      id="ecsListRefreshRegionResource"
                                                      ><!----><tp-icon
                                                        _ngcontent-ng-c4149977294=""
                                                        name="cloudx-action-refresh"
                                                        class="icon-btn-style ng-star-inserted"
                                                        _nghost-ng-c199735890=""
                                                        id="ti_auto_id_103"
                                                        tiny3version="12.3.210"
                                                        ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentcolor">
                                                          <path
                                                            d="m17.71,4.13c4.12,2.98,5.2,8.57,2.61,12.82l2.55-.68c.34-.09.69.08.84.39l.04.12c.1.38-.13.78-.51.88l-4.34,1.16c-.38.1-.78-.13-.88-.51l-1.17-4.34c-.1-.38.12-.78.51-.88.38-.1.78.12.88.51l.75,2.77c2.34-3.63,1.45-8.5-2.12-11.08-3.7-2.67-8.88-1.86-11.56,1.81-2.68,3.67-1.86,8.81,1.84,11.48,2.49,1.8,5.28,2.19,8.45,1.16.38-.12.78.08.91.46.12.38-.08.78-.46.91-3.59,1.17-6.86.71-9.74-1.36C1.96,16.62.99,10.57,4.14,6.26,7.29,1.94,13.37.99,17.71,4.13Z"
                                                          ></path>
                                                        </svg> </tp-icon
                                                      ><!----><!----><!----><!----></span
                                                    ><!----><!----><!----></ecs-icon-buttons
                                                  >
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <!----> </ecs-region-resources-count
                                        ><!---->
                                      </div>
                                      <!----><tp-layout-content-body _ngcontent-ng-c3580682620="" _nghost-ng-c597071219=""
                                        ><tp-layout-section _ngcontent-ng-c3580682620="" _nghost-ng-c2332595846="" class="tp-layout-section"
                                          ><!----><ecs-source-card _nghost-ng-c1827580719="" class="ng-star-inserted">
                                            <div _ngcontent-ng-c1827580719="" class="mb-2x">
                                              <ti-overview-card
                                                _ngcontent-ng-c1827580719=""
                                                _nghost-ng-c3848295123=""
                                                tcversion="@cloud/ti-overview-card:13.0.211"
                                                class="ng-star-inserted"
                                                ><ti-tabs-container
                                                  _ngcontent-ng-c3848295123=""
                                                  _nghost-ng-c4097486712=""
                                                  tcversion="@cloud/ti-tabs-container:13.0.211"
                                                >
                                                  <div _ngcontent-ng-c4097486712="" class="ti-resource-info-tabs">
                                                    <div _ngcontent-ng-c4097486712="" class="ti-resource-info-tabs-header"><!----></div>
                                                    <div _ngcontent-ng-c4097486712="" class="tabs-wrapper-width">
                                                      <!----><!---->
                                                      <div _ngcontent-ng-c3848295123="" class="ti-overview-card-flex-start ng-star-inserted">
                                                        <div
                                                          _ngcontent-ng-c3848295123=""
                                                          class="ti-overview-card-item ti-overview-card-item-0 ti-overview-card-item-flex-start ng-star-inserted"
                                                        >
                                                          <div
                                                            _ngcontent-ng-c3848295123=""
                                                            class="ti-overview-card-item-left ti-overview-card-item-left-with-right"
                                                          >
                                                            <!----><tp-icon
                                                              _ngcontent-ng-c3848295123=""
                                                              class="ti-overview-card-item-icon ng-star-inserted"
                                                              _nghost-ng-c199735890=""
                                                              id="ti_auto_id_41"
                                                              tiny3version="12.3.210"
                                                              ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentcolor">
                                                                <path
                                                                  d="m13.47,6.91c.29.24.36.65.18.96l-.06.09-3.03,3.78h4.44c.59,0,.94.65.64,1.14l-.06.08-4,5c-.26.32-.73.38-1.05.12-.29-.24-.36-.65-.18-.96l.06-.09,3.03-3.78h-4.44c-.59,0-.94-.65-.64-1.13l.06-.08,4-5c.26-.32.73-.38,1.05-.12Zm-1.47-4.16c4.2,0,7.62,3.34,7.75,7.5v.25s0,9.25,0,9.25c0,.41-.34.75-.75.75-.38,0-.69-.28-.74-.65v-.1s0-9.25,0-9.25c0-3.45-2.8-6.25-6.25-6.25s-6.13,2.68-6.25,6.02v.23s0,9.25,0,9.25h15.25c.41,0,.75.34.75.75,0,.38-.28.69-.65.74h-.1s-18,0-18,0c-.41,0-.75-.34-.75-.75,0-.38.28-.69.65-.74h.1s1.25,0,1.25,0v-9.25c0-4.28,3.47-7.75,7.75-7.75Z"
                                                                ></path>
                                                              </svg> </tp-icon
                                                            ><!---->
                                                            <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-description">
                                                              <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-video">
                                                                <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-wrap">
                                                                  <div
                                                                    _ngcontent-ng-c3848295123=""
                                                                    tioverflow=""
                                                                    class="ti-overview-card-item-label ti-overview-card-item-label-with-value"
                                                                    style="
                                                                      text-overflow: ellipsis;
                                                                      overflow: hidden;
                                                                      display: block;
                                                                      white-space: nowrap;
                                                                    "
                                                                  >
                                                                    监控告警
                                                                  </div>
                                                                  <!---->
                                                                </div>
                                                                <!---->
                                                              </div>
                                                              <!---->
                                                            </div>
                                                          </div>
                                                          <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-right ng-star-inserted">
                                                            <!----><!---->
                                                            <div
                                                              _ngcontent-ng-c3848295123=""
                                                              class="ti-overview-card-item-value"
                                                              style="cursor: auto"
                                                            >
                                                              <!----><!---->
                                                              <div _ngcontent-ng-c3848295123="" class="ng-star-inserted">
                                                                <ti-badge
                                                                  _ngcontent-ng-c3848295123=""
                                                                  _nghost-ng-c3336735134=""
                                                                  id="ti_auto_id_51"
                                                                  tiny3version="12.3.210"
                                                                  class="ti3-badge-container ti3-badge-custom ng-star-inserted"
                                                                  ><span
                                                                    _ngcontent-ng-c3848295123=""
                                                                    class="ti-overview-card-item-value-text-decoration"
                                                                    style="cursor: pointer"
                                                                    >0</span
                                                                  ><!----></ti-badge
                                                                ><!----><!----><!----><!----><!----><!----><!---->
                                                              </div>
                                                              <!---->
                                                            </div>
                                                          </div>
                                                          <!----><!---->
                                                        </div>
                                                        <!----><!----><!----><!----><!----><!---->
                                                        <div
                                                          _ngcontent-ng-c3848295123=""
                                                          class="ti-overview-card-item ti-overview-card-item-1 ti-overview-card-item-flex-start ng-star-inserted"
                                                        >
                                                          <div
                                                            _ngcontent-ng-c3848295123=""
                                                            class="ti-overview-card-item-left ti-overview-card-item-left-with-right"
                                                          >
                                                            <!----><tp-icon
                                                              _ngcontent-ng-c3848295123=""
                                                              class="ti-overview-card-item-icon ng-star-inserted"
                                                              _nghost-ng-c199735890=""
                                                              id="ti_auto_id_44"
                                                              tiny3version="12.3.210"
                                                              ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                              <svg
                                                                id="_图层_1"
                                                                data-name="图层 1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 16 16"
                                                                style="fill: currentcolor"
                                                              >
                                                                <path
                                                                  id="_形状结合"
                                                                  data-name="形状结合"
                                                                  d="m7.25.84c.47-.26,1.04-.26,1.5,0l.26.14c.99.52,1.7.87,2.29,1.1.46.19,1.05.38,1.69.58l.66.19c.64.18,1.09.76,1.09,1.42,0,2.38-.23,4.77-.83,6.43-.67,1.87-2.81,3.42-5.28,4.56-.4.18-.86.17-1.25-.03-2.47-1.31-4.59-2.88-5.27-4.5-.6-1.46-.84-3.89-.84-6.42,0-.68.45-1.25,1.1-1.45.81-.23,1.59-.48,2.33-.77.83-.33,1.76-.79,2.55-1.24Zm1,.87c-.15-.09-.35-.09-.51,0-.82.47-1.79.95-2.67,1.3-.77.3-1.59.57-2.42.8-.23.07-.38.27-.38.49,0,2.4.23,4.74.76,6.04.5,1.21,2.24,2.56,4.25,3.7l.56.3c.12.06.25.06.37,0,2.23-1.03,4.21-2.46,4.76-3.98.55-1.52.77-3.82.77-6.09,0-.22-.14-.4-.36-.46-.93-.26-1.8-.54-2.45-.81l-.17-.07c-.47-.19-1-.45-1.67-.8l-.83-.44Zm-.25,5.24c.27,0,.5.22.5.5v4c0,.27-.22.5-.5.5s-.5-.23-.5-.5v-4c0-.28.22-.5.5-.5Zm0-2.4c.41,0,.75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75Z"
                                                                ></path></svg></tp-icon
                                                            ><!---->
                                                            <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-description">
                                                              <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-video">
                                                                <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-wrap">
                                                                  <div
                                                                    _ngcontent-ng-c3848295123=""
                                                                    tioverflow=""
                                                                    class="ti-overview-card-item-label ti-overview-card-item-label-with-value"
                                                                    style="
                                                                      text-overflow: ellipsis;
                                                                      overflow: hidden;
                                                                      display: block;
                                                                      white-space: nowrap;
                                                                    "
                                                                  >
                                                                    安全风险
                                                                  </div>
                                                                  <!---->
                                                                </div>
                                                                <!---->
                                                              </div>
                                                              <!---->
                                                            </div>
                                                          </div>
                                                          <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-right ng-star-inserted">
                                                            <!----><!---->
                                                            <div
                                                              _ngcontent-ng-c3848295123=""
                                                              class="ti-overview-card-item-value"
                                                              style="cursor: auto"
                                                            >
                                                              <!----><!---->
                                                              <div _ngcontent-ng-c3848295123="" class="ng-star-inserted">
                                                                <ti-badge
                                                                  _ngcontent-ng-c3848295123=""
                                                                  _nghost-ng-c3336735134=""
                                                                  id="ti_auto_id_68"
                                                                  tiny3version="12.3.210"
                                                                  class="ti3-badge-container ti3-badge-custom ng-star-inserted"
                                                                  ><span
                                                                    _ngcontent-ng-c3848295123=""
                                                                    class="ti-overview-card-item-value-text-decoration"
                                                                    style="cursor: pointer"
                                                                    >0</span
                                                                  ><!----></ti-badge
                                                                ><!----><!----><!----><!----><!----><!----><!---->
                                                              </div>
                                                              <!---->
                                                            </div>
                                                          </div>
                                                          <!----><!---->
                                                        </div>
                                                        <!----><!----><!----><!----><!----><!----><container-base
                                                          _ngcontent-ng-c3848295123=""
                                                          class="ng-star-inserted"
                                                          ><app-dash-renew-statistic _nghost-ng-c3485818869="" class="ng-star-inserted">
                                                            <div _ngcontent-ng-c3485818869="" class="custom-resource-card-item">
                                                              <div _ngcontent-ng-c3485818869="" class="card-image-content">
                                                                <tp-icon
                                                                  _ngcontent-ng-c3485818869=""
                                                                  name="cloudx-action-renew"
                                                                  class="dash-recharge-image tp-icon-height-isSquare"
                                                                  _nghost-ng-c199735890=""
                                                                  id="ti_auto_id_47"
                                                                  tiny3version="12.3.210"
                                                                  ><!--?xml version="1.0" encoding="utf-8"?-->
                                                                  <!-- Generator: Adobe Illustrator 27.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                                                  <svg
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 16 16"
                                                                    xml:space="preserve"
                                                                    style="fill: currentcolor"
                                                                  >
                                                                    <rect fill="none" width="16" height="16"></rect>
                                                                    <path
                                                                      d="M12.9,2.2c1.2,0,2.1,1,2.1,2.2v7.3c0,1.2-0.9,2.1-2.1,2.1H3.1c-1.2,0-2.1-0.9-2.1-2.1V4.4
    c0-1.2,0.9-2.2,2.1-2.2H12.9z M14,6.5H2v5.2c0,0.6,0.5,1.1,1.1,1.1h9.8c0.6,0,1.1-0.5,1.1-1.1V6.5z M12.1,10c0.3,0,0.5,0.2,0.5,0.5
    S12.4,11,12.1,11h-2c-0.3,0-0.5-0.2-0.5-0.5S9.8,10,10.1,10H12.1z M12.9,3.3H3.1C2.5,3.3,2,3.8,2,4.4v1.2h12V4.4
    C14,3.8,13.5,3.3,12.9,3.3z"
                                                                    ></path>
                                                                  </svg>
                                                                </tp-icon>
                                                                <div _ngcontent-ng-c3485818869="" tioverflow="" class="card-label">
                                                                  <div _ngcontent-ng-c3485818869="">待续费</div>
                                                                </div>
                                                              </div>
                                                              <div _ngcontent-ng-c3485818869="" class="card-value-content">
                                                                <div
                                                                  _ngcontent-ng-c3485818869=""
                                                                  id="renewTotalNum"
                                                                  class="value-content ng-star-inserted"
                                                                >
                                                                  <span _ngcontent-ng-c3485818869="" class="card-value">0</span
                                                                  ><!---->
                                                                </div>
                                                                <!----><!----><!----><!---->
                                                              </div>
                                                            </div>
                                                            <!----><!----> </app-dash-renew-statistic
                                                          ><!----></container-base
                                                        ><!----><!----><!----><!----><!----><!----><!----><!---->
                                                        <div
                                                          _ngcontent-ng-c3848295123=""
                                                          class="ti-overview-card-item ti-overview-card-item-3 ti-overview-card-item-flex-start ng-star-inserted"
                                                        >
                                                          <div
                                                            _ngcontent-ng-c3848295123=""
                                                            class="ti-overview-card-item-left ti-overview-card-item-left-with-right"
                                                          >
                                                            <!----><tp-icon
                                                              _ngcontent-ng-c3848295123=""
                                                              class="ti-overview-card-item-icon ng-star-inserted"
                                                              _nghost-ng-c199735890=""
                                                              id="ti_auto_id_48"
                                                              tiny3version="12.3.210"
                                                              ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: currentcolor">
                                                                <path
                                                                  d="m11,1c.2,0,.39.02.57.05.19.05.37.11.54.21.18.08.34.19.49.31.14.12.28.26.39.41l1.27,1.75c.12.12.23.25.32.39.09.13.16.26.22.4.06.14.1.29.14.44.04.17.06.35.06.54v7c0,.18-.02.36-.06.53-.04.15-.08.3-.14.44-.06.14-.13.27-.22.4-.09.14-.2.27-.32.39s-.25.23-.39.32c-.13.09-.26.16-.4.22-.14.06-.29.1-.44.14-.17.04-.35.06-.53.06H3.5c-.19,0-.37-.02-.54-.06-.15-.04-.3-.08-.44-.14-.14-.06-.27-.13-.41-.22-.13-.09-.26-.2-.38-.32s-.23-.25-.32-.39c-.09-.13-.16-.26-.22-.4-.06-.14-.1-.29-.15-.44-.03-.17-.04-.35-.04-.53v-7c0-.19,0-.37.04-.54.05-.15.09-.3.15-.44.06-.14.13-.27.22-.4.09-.14.2-.27.32-.39l1.27-1.75c.11-.15.25-.29.39-.41.15-.12.31-.23.49-.31.17-.1.35-.16.54-.21.18-.03.37-.05.56-.05h6.02Zm1.5,3H3.5c-.12,0-.23.01-.35.03-.08.02-.16.05-.24.08-.08.04-.16.08-.23.12-.09.06-.17.13-.25.19-.08.09-.14.17-.19.25l-.14.24c-.02.07-.05.16-.07.24-.03.12-.03.23-.03.35v7c0,.11,0,.22.03.34l.07.24c.05.08.09.16.14.23.05.09.11.17.19.25.08.07.16.14.25.19.07.05.15.09.23.13.08.03.16.06.24.08.11.03.23.04.35.04h9c.11,0,.22-.02.34-.04.08-.02.16-.05.24-.08.08-.04.16-.08.23-.13.09-.05.17-.12.25-.19.07-.08.14-.16.19-.25.05-.07.09-.15.13-.23.03-.08.06-.16.08-.25.03-.11.04-.22.04-.33v-7c0-.12-.02-.23-.04-.35-.02-.08-.05-.17-.08-.24-.04-.08-.08-.16-.13-.24s-.12-.16-.19-.25c-.08-.06-.16-.13-.25-.19-.07-.04-.15-.08-.23-.12-.08-.03-.16-.06-.24-.08-.12-.02-.23-.03-.34-.03Zm-4.5,2c.28,0,.5.22.5.5v4.21l1.88-2.05c.19-.2.51-.22.71-.03.2.19.22.51.03.71l-2.75,3c-.1.1-.23.16-.37.16s-.28-.06-.37-.16l-2.75-3c-.19-.21-.17-.52.03-.71.21-.19.52-.17.71.03l1.88,2.05v-4.21c0-.28.22-.5.5-.5Zm3-4h-6.02c-.11,0-.22,0-.34.03-.11.03-.22.06-.32.12-.11.05-.2.12-.29.18-.09.08-.17.16-.24.26l-.31.41h9.03l-.31-.41c-.07-.1-.15-.18-.24-.26-.09-.06-.19-.13-.29-.18-.11-.06-.21-.09-.32-.12-.12-.02-.23-.03-.35-.03Z"
                                                                ></path></svg></tp-icon
                                                            ><!---->
                                                            <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-description">
                                                              <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-video">
                                                                <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-label-wrap">
                                                                  <div
                                                                    _ngcontent-ng-c3848295123=""
                                                                    tioverflow=""
                                                                    class="ti-overview-card-item-label ti-overview-card-item-label-with-value"
                                                                    style="
                                                                      text-overflow: ellipsis;
                                                                      overflow: hidden;
                                                                      display: block;
                                                                      white-space: nowrap;
                                                                    "
                                                                  >
                                                                    未安装UniAgent
                                                                  </div>
                                                                  <!---->
                                                                </div>
                                                                <!---->
                                                              </div>
                                                              <!---->
                                                            </div>
                                                          </div>
                                                          <div _ngcontent-ng-c3848295123="" class="ti-overview-card-item-right ng-star-inserted">
                                                            <!----><!---->
                                                            <div
                                                              _ngcontent-ng-c3848295123=""
                                                              class="ti-overview-card-item-value"
                                                              style="cursor: pointer"
                                                            >
                                                              <!----><ti-badge
                                                                _ngcontent-ng-c3848295123=""
                                                                _nghost-ng-c3336735134=""
                                                                id="ti_auto_id_67"
                                                                tiny3version="12.3.210"
                                                                class="ti3-badge-container ti3-badge-custom ng-star-inserted"
                                                              >
                                                                <sapn _ngcontent-ng-c3848295123="" class="ti-overview-card-item-value-text-decoration"
                                                                  >0 </sapn
                                                                ><!----> </ti-badge
                                                              ><!----><!----><!----><!----><!---->
                                                            </div>
                                                          </div>
                                                          <!----><!---->
                                                        </div>
                                                        <!----><!----><!----><!----><!----><!----><!---->
                                                      </div>
                                                      <!----><!----><!----><!----><!----><!---->
                                                    </div>
                                                  </div>
                                                  <!----> </ti-tabs-container
                                                ><!----></ti-overview-card
                                              ><!---->
                                            </div> </ecs-source-card
                                          ><!----><ti-grid-kit
                                            _ngcontent-ng-c3580682620=""
                                            id="ecsGridList"
                                            tcversion="@cloud/ti-grid-kit:13.0.211"
                                            class="ng-star-inserted"
                                            style="
                                              --ti-grid-kit-sticky-agheader-top: calc(104px + var(--ti-app-layout-sticky-base-top));
                                              --ti-grid-kit-sticky-before-top: calc(0px + var(--ti-app-layout-sticky-base-top));
                                            "
                                          >
                                            <div class="ti-grid-kit-container ti-grid-kit-sticky ti-grid-kit-horizontal-scrollbar-sticky">
                                              <div
                                                class="ti-grid-kit-header-wrap ng-star-inserted"
                                                style="
                                                  position: sticky;
                                                  top: calc(var(--ti-app-layout-sticky-base-top) + 16px);
                                                  right: 0px;
                                                  z-index: 80;
                                                "
                                              >
                                                <!---->
                                                <div class="ti-grid-kit-header">
                                                  <div class="ti-grid-kit-header-left-container">
                                                    <ti-header-operators
                                                      _ngcontent-ng-c3580682620=""
                                                      _nghost-ng-c2810229181=""
                                                      id="ti_auto_id_13"
                                                      tiny3version="12.3.210"
                                                      tcversion="@cloud/ti-header-operators:13.0.211"
                                                      class="ng-star-inserted"
                                                      ><!----><!----><!----><span _ngcontent-ng-c2810229181="" class="ng-star-inserted"
                                                        ><button
                                                          _ngcontent-ng-c2810229181=""
                                                          type="button"
                                                          tibutton=""
                                                          class="ti-header-operators-item ti3-btn-middle"
                                                          id="ti_auto_id_36"
                                                          tiny3version="12.3.210"
                                                        >
                                                          <!---->
                                                          开机
                                                        </button></span
                                                      ><!----><!----><!----><!----><!----><!----><!----><span
                                                        _ngcontent-ng-c2810229181=""
                                                        class="ng-star-inserted"
                                                        ><button
                                                          _ngcontent-ng-c2810229181=""
                                                          type="button"
                                                          tibutton=""
                                                          class="ti-header-operators-item ti3-btn-middle"
                                                          id="ti_auto_id_37"
                                                          tiny3version="12.3.210"
                                                        >
                                                          <!---->
                                                          关机
                                                        </button></span
                                                      ><!----><!----><!----><!----><!----><!----><!----><span
                                                        _ngcontent-ng-c2810229181=""
                                                        class="ng-star-inserted"
                                                        ><button
                                                          _ngcontent-ng-c2810229181=""
                                                          type="button"
                                                          tibutton=""
                                                          class="ti-header-operators-item ti3-btn-middle"
                                                          id="ti_auto_id_38"
                                                          tiny3version="12.3.210"
                                                        >
                                                          <!---->
                                                          重启
                                                        </button></span
                                                      ><!----><!----><!----><!----><!----><!----><!----><span
                                                        _ngcontent-ng-c2810229181=""
                                                        class="ng-star-inserted"
                                                        ><button
                                                          _ngcontent-ng-c2810229181=""
                                                          type="button"
                                                          tibutton=""
                                                          class="ti-header-operators-item ti3-btn-middle"
                                                          id="ti_auto_id_39"
                                                          tiny3version="12.3.210"
                                                        >
                                                          <!---->
                                                          重置密码
                                                        </button></span
                                                      ><!----><!----><!----><!----><!----><!----><!----><span
                                                        _ngcontent-ng-c2810229181=""
                                                        class="ng-star-inserted"
                                                        ><button
                                                          _ngcontent-ng-c2810229181=""
                                                          type="button"
                                                          tibutton=""
                                                          class="ti-header-operators-item ti3-btn-middle"
                                                          id="ti_auto_id_40"
                                                          tiny3version="12.3.210"
                                                        >
                                                          <!---->
                                                          续费
                                                        </button></span
                                                      ><!----><!----><!----><!----><!----><ti-menu
                                                        _ngcontent-ng-c2810229181=""
                                                        buttonselect=""
                                                        panelalign="left"
                                                        class="ti-header-operators-item ng-star-inserted"
                                                        _nghost-ng-c343947683=""
                                                        id="moreOperation"
                                                        tiny3version="12.3.210"
                                                        tiform=""
                                                        ><a
                                                          _ngcontent-ng-c343947683=""
                                                          oncontextmenu="return false"
                                                          href="javascript:void(0)"
                                                          class="ti3-menu-toggle-menu"
                                                          id="moreOperation_toggle"
                                                          >更多<!----><!----><span
                                                            _ngcontent-ng-c343947683=""
                                                            class="ti3-icon ti3-icon-accordion-unfold ng-star-inserted"
                                                          ></span
                                                          ><!----><!----></a
                                                        ><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></ti-menu
                                                      ><!----><!----><!----><!----><!----><!----><!----></ti-header-operators
                                                    ><!----><span
                                                      class="ti-grid-kit-export-button ng-star-inserted"
                                                      id="ecsGridKitViewId_exportButton"
                                                      ><ti-grid-export id="ti_auto_id_19" tiny3version="12.3.210" class="ng-star-inserted"
                                                        ><ti-menu
                                                          buttonselect=""
                                                          _nghost-ng-c343947683=""
                                                          id="ti_auto_id_20"
                                                          tiny3version="12.3.210"
                                                          tiform=""
                                                          class="ng-star-inserted"
                                                          ><a
                                                            _ngcontent-ng-c343947683=""
                                                            oncontextmenu="return false"
                                                            class="ti3-menu-toggle-menu"
                                                            id="ti_auto_id_20_toggle"
                                                            href="javascript:void(0)"
                                                            >导出<!----><span
                                                              _ngcontent-ng-c343947683=""
                                                              class="ti3-icon ti3-icon-accordion-unfold ng-star-inserted"
                                                            ></span
                                                            ><!----><!----></a
                                                          ><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></ti-menu
                                                        ><!----><!----></ti-grid-export
                                                      ><!----><!----></span
                                                    ><!----><!----><!---->
                                                  </div>
                                                  <div class="ti-grid-kit-header-right-container">
                                                    <!---->
                                                    <div _ngcontent-ng-c3580682620="" header-info="" class="ml8 mb12 ng-star-inserted">
                                                      <ibiza-ecs-ecs-task-center-new
                                                        _ngcontent-ng-c3580682620=""
                                                        id="ecsListTaskCenter"
                                                        _nghost-ng-c1027952210=""
                                                        class="ng-star-inserted"
                                                        ><!----><!----></ibiza-ecs-ecs-task-center-new
                                                      ><!---->
                                                    </div>
                                                    <!---->
                                                  </div>
                                                </div>
                                                <div class="ti-grid-kit-sub-header ng-star-inserted">
                                                  <div
                                                    class="ti-grid-kit-search-container ti-grid-kit-left-container"
                                                    id="ecsGridKitViewId_search_container"
                                                  >
                                                    <ti-grid-property-search
                                                      class="ti-grid-kit-multi-search ti-grid-kit-search-with-pagination-multi-search ng-star-inserted"
                                                      _nghost-ng-c3147842706=""
                                                      ><!----><tp-searchbox
                                                        _ngcontent-ng-c3147842706=""
                                                        class="ti-grid-property-search ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                        _nghost-ng-c2735559287=""
                                                        id="ecsGridKitViewId_property_search_searchbox"
                                                        tiny3version="12.3.210"
                                                        tiform=""
                                                        ><ti-dominator
                                                          _ngcontent-ng-c2735559287=""
                                                          type="tagsinput"
                                                          multiple="true"
                                                          class="tp-searchbox-dominator ti3-select-dominator-container ti3-multiselect-container ng-untouched ng-pristine ng-valid"
                                                          _nghost-ng-c4263889896=""
                                                          id="ecsGridKitViewId_property_search_searchbox_tp-searchbox-dominator"
                                                          tiny3version="12.3.210"
                                                          tiform=""
                                                          tabindex="0"
                                                        >
                                                          <section _ngcontent-ng-c2735559287="" leftarea="" class="tp-searchbox-leftArea">
                                                            <ti-icon
                                                              _ngcontent-ng-c2735559287=""
                                                              tioutline=""
                                                              name="search"
                                                              class="tp-searchbox-search-icon ti3-icon-search ti3-icon"
                                                              tabindex="0"
                                                              id="ecsGridKitViewId_property_search_searchbox_search"
                                                              tiny3version="12.3.210"
                                                            ></ti-icon
                                                            ><!---->
                                                          </section>
                                                          <section
                                                            _ngcontent-ng-c4263889896=""
                                                            class="ti3-select-dominator-text ti3-tags-input-container"
                                                            id="ecsGridKitViewId_property_search_searchbox_tp-searchbox-dominator_input"
                                                            style="max-height: 74px"
                                                          >
                                                            <!----><!----><!----><!---->
                                                            <section
                                                              _ngcontent-ng-c2735559287=""
                                                              tag-editor=""
                                                              class="tp-searchbox-right ng-star-inserted"
                                                            >
                                                              <section _ngcontent-ng-c2735559287="" class="tp-searchbox-search-field">
                                                                <!----><!----><input
                                                                  _ngcontent-ng-c2735559287=""
                                                                  titext=""
                                                                  noborder=""
                                                                  type="text"
                                                                  class="tp-searchbox-input tp-searchbox-input-grow ti3-text-input-noborder ng-untouched ng-pristine ng-valid"
                                                                  _nghost-ng-c4077046280=""
                                                                  placeholder="默认按照名称搜索、过滤"
                                                                  id="ecsGridKitViewId_property_search_searchbox_input"
                                                                  tiny3version="12.3.210"
                                                                  autocomplete="off"
                                                                  tabindex="0"
                                                                />
                                                              </section>
                                                            </section>
                                                            <!----><!----><!----><!----><!---->
                                                          </section>
                                                          <!----><!----><!---->
                                                          <section _ngcontent-ng-c2735559287="" actions="" class="tp-searchbox-buttons">
                                                            <!----><!----><!----><tp-icon
                                                              _ngcontent-ng-c2735559287=""
                                                              local=""
                                                              tioutline=""
                                                              name="cloudx-action-help"
                                                              class="tp-searchbox-icon-length tp-icon-cloudx-action-help ng-star-inserted"
                                                              style="outline-offset: -2px"
                                                              tabindex="0"
                                                              id="ecsGridKitViewId_property_search_searchbox_helptip"
                                                              tiny3version="12.3.210"
                                                            ></tp-icon
                                                            ><!----><!---->
                                                          </section> </ti-dominator
                                                        ><ti-dropsearch
                                                          _ngcontent-ng-c2735559287=""
                                                          panelmaxwidth="dominatorWidth"
                                                          type="suggestion"
                                                          _nghost-ng-c1314199683=""
                                                          id="ecsGridKitViewId_property_search_searchbox_tp_searchbox_prop_drop"
                                                          tiny3version="12.3.210"
                                                          tiform=""
                                                          class="ng-untouched ng-pristine ng-valid"
                                                          ><ti-drop
                                                            _ngcontent-ng-c1314199683=""
                                                            _nghost-ng-c2814315127=""
                                                            id="ti_auto_id_25"
                                                            tiny3version="12.3.210"
                                                            class="ti3-dropdown-container ti-grid-property-search-virtual"
                                                            ><!----></ti-drop
                                                          ></ti-dropsearch
                                                        ><ti-dropsearch
                                                          _ngcontent-ng-c2735559287=""
                                                          panelmaxwidth="dominatorWidth"
                                                          type="suggestion"
                                                          _nghost-ng-c1314199683=""
                                                          id="ecsGridKitViewId_property_search_searchbox_tp_searchbox_operators_drop"
                                                          tiny3version="12.3.210"
                                                          tiform=""
                                                          class="ng-untouched ng-pristine ng-valid"
                                                          ><ti-drop
                                                            _ngcontent-ng-c1314199683=""
                                                            _nghost-ng-c2814315127=""
                                                            id="ti_auto_id_26"
                                                            tiny3version="12.3.210"
                                                            class="ti3-dropdown-container ti-grid-property-search-virtual"
                                                            ><!----></ti-drop
                                                          ></ti-dropsearch
                                                        ><ti-dropsearch
                                                          _ngcontent-ng-c2735559287=""
                                                          type="suggestion"
                                                          panelmaxwidth="dominatorWidth"
                                                          _nghost-ng-c1314199683=""
                                                          id="ecsGridKitViewId_property_search_searchbox_tp_searchbox_value_drop"
                                                          tiny3version="12.3.210"
                                                          tiform=""
                                                          class="ng-untouched ng-pristine ng-valid"
                                                          ><ti-drop
                                                            _ngcontent-ng-c1314199683=""
                                                            _nghost-ng-c2814315127=""
                                                            id="ti_auto_id_27"
                                                            tiny3version="12.3.210"
                                                            class="ti3-dropdown-container ti-grid-property-search-virtual"
                                                            ><!----></ti-drop
                                                          ></ti-dropsearch
                                                        ><ti-dropsearch
                                                          _ngcontent-ng-c2735559287=""
                                                          type="suggestion"
                                                          panelmaxwidth="dominatorWidth"
                                                          _nghost-ng-c1314199683=""
                                                          id="ecsGridKitViewId_property_search_searchbox_tp_searchbox_value_multi_drop"
                                                          tiny3version="12.3.210"
                                                          tiform=""
                                                          class="ng-untouched ng-pristine ng-valid"
                                                          ><ti-drop
                                                            _ngcontent-ng-c1314199683=""
                                                            _nghost-ng-c2814315127=""
                                                            id="ti_auto_id_28"
                                                            tiny3version="12.3.210"
                                                            class="ti3-dropdown-container ti-grid-property-search-virtual"
                                                            ><!----></ti-drop
                                                          ></ti-dropsearch
                                                        ><!----><ti-drop
                                                          _ngcontent-ng-c2735559287=""
                                                          panelwidth="232px"
                                                          class="tp-searchbox-custom-drop ti3-dropdown-container ti-grid-property-search-virtual"
                                                          _nghost-ng-c2814315127=""
                                                          id="ecsGridKitViewId_property_search_searchbox_tp-searchbox-custom-drop"
                                                          tiny3version="12.3.210"
                                                          ><!----></ti-drop
                                                        ><ti-drop
                                                          _ngcontent-ng-c2735559287=""
                                                          panelwidth="232px"
                                                          class="tp-searchbox-edit-drop ti3-dropdown-container ti-grid-property-search-virtual"
                                                          _nghost-ng-c2814315127=""
                                                          id="ti_auto_id_21"
                                                          tiny3version="12.3.210"
                                                          ><!----></ti-drop
                                                        ><!----><!----><!----><!----><!----><!----><!----></tp-searchbox
                                                      >
                                                      <div class="ti-grid-kit-right-container ng-star-inserted">
                                                        <button
                                                          type="button"
                                                          tibutton=""
                                                          class="ti-grid-kit-refresh-button ti3-btn-onlyIcon ti3-btn-middle ng-star-inserted"
                                                          id="ecsGridKitViewId_refreshButton"
                                                          tiny3version="12.3.210"
                                                        >
                                                          <!----><ti-icon
                                                            name="refresh-1"
                                                            class="ti3-icon-refresh-1 ti3-icon"
                                                            id="ti_auto_id_33"
                                                            tiny3version="12.3.210"
                                                          ></ti-icon></button
                                                        ><!----><ti-preference class="ti-grid-kit-preference-button ng-star-inserted"
                                                          ><button
                                                            tibutton=""
                                                            class="ti-preference-btn ti3-btn-onlyIcon ti3-btn-middle"
                                                            id="ti_auto_id_34"
                                                            tiny3version="12.3.210"
                                                          >
                                                            <!----><ti-icon
                                                              name="config"
                                                              class="ti3-icon-config ti3-icon"
                                                              id="ti_auto_id_35"
                                                              tiny3version="12.3.210"
                                                            ></ti-icon></button></ti-preference
                                                        ><!---->
                                                      </div>
                                                      <!----><!----><!----> </ti-grid-property-search
                                                    ><!----><!----><!----><!----><!---->
                                                  </div>
                                                  <!----><!----><!----><!----><!---->
                                                </div>
                                                <!----><!---->
                                              </div>

                                              <!-- ECS 列表 -->
                                              <ti-grid
                                                _nghost-ng-c3957723611=""
                                                class="ng-star-inserted"
                                                style="height: auto; overflow: visible; min-height: 0px"
                                                ><ti-table
                                                  _ngcontent-ng-c3957723611=""
                                                  ticolsresizable=""
                                                  id="ti-grid-ecsGridKitViewId"
                                                  tiny3version="12.3.210"
                                                  class="ti-grid-table-sticky ti-grid-table-horizontal-scrollbar-sticky ti3-table"
                                                >
                                                  <div
                                                    _ngcontent-ng-c3957723611=""
                                                    class="ti3-table-fixed-head"
                                                    style="
                                                      position: sticky;
                                                      top: calc(var(--ti-app-layout-sticky-base-top) + 104px);
                                                      right: 0px;
                                                      z-index: 80;
                                                    "
                                                  >
                                                    <table _ngcontent-ng-c3957723611="" style="width: 100%">
                                                      <thead _ngcontent-ng-c3957723611="">
                                                        <tr _ngcontent-ng-c3957723611="">
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            checkbox-column=""
                                                            not-resizable=""
                                                            class="ng-star-inserted"
                                                          >
                                                            <input
                                                              _ngcontent-ng-c3957723611=""
                                                              type="checkbox"
                                                              ticheckbox=""
                                                              _nghost-ng-c531329826=""
                                                              id="ti-grid-ecsGridKitViewId_checkAll"
                                                              tiny3version="12.3.210"
                                                              tiform=""
                                                              class="ng-untouched ng-pristine ng-valid"
                                                            /><label
                                                              _ngcontent-ng-c531329826=""
                                                              class="ti3-checkbox ng-star-inserted"
                                                              for="ti-grid-ecsGridKitViewId_checkAll"
                                                              id="ti-grid-ecsGridKitViewId_checkAll_checkbox"
                                                              ><span
                                                                _ngcontent-ng-c531329826=""
                                                                tioutline=""
                                                                class="ti3-checkbox-skin ti3-icon ti3-icon-checkmark"
                                                                tabindex="0"
                                                              ></span
                                                              ><span
                                                                _ngcontent-ng-c531329826=""
                                                                class="ti3-checkbox-label"
                                                                id="ti-grid-ecsGridKitViewId_checkAll_label"
                                                              ></span
                                                            ></label>
                                                          </th>
                                                          <!----><!----><!---->
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="180"
                                                            class="ng-star-inserted"
                                                            style="width: 180px !important"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      名称/ID
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_54"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="100"
                                                            tiresizeminwidth="100"
                                                            class="ng-star-inserted"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: auto"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      监控
                                                                    </div>
                                                                    <!----><!----><!----><!----><!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th _ngcontent-ng-c3957723611="" width="70" tiresizeminwidth="70" class="ng-star-inserted">
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: auto"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      安全
                                                                    </div>
                                                                    <!----><!----><!----><!----><!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="100"
                                                            tiresizeminwidth="100"
                                                            class="ng-star-inserted"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      状态
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_55"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="100"
                                                            tiresizeminwidth="100"
                                                            class="ng-star-inserted"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      可用区
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_56"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="180"
                                                            class="ng-star-inserted"
                                                            style="width: 180px !important"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      规格/镜像
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_57"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th _ngcontent-ng-c3957723611="" width="120" tiresizeminwidth="75" class="ng-star-inserted">
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      操作系统类型
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_58"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="75"
                                                            class="ng-star-inserted"
                                                            style="width: 17%"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      IP地址
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_59"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="120"
                                                            class="ng-star-inserted"
                                                            style="width: 120px !important"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      计费模式
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_60"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="75"
                                                            class="ng-star-inserted"
                                                            style="width: 17%"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: pointer"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      标签
                                                                    </div>
                                                                    <!----><!----><!----><!---->
                                                                    <div _ngcontent-ng-c1841846041="" class="customSortLabel ng-star-inserted">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1841846041=""
                                                                        class="ti-custom-sort-icon ti3-icon-sort ti3-icon"
                                                                        id="ti_auto_id_61"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon>
                                                                    </div>
                                                                    <!----><!----><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="140"
                                                            not-resizable=""
                                                            class="ti3-table-column-fixed-right ng-star-inserted"
                                                            style="width: 140px !important"
                                                          >
                                                            <section
                                                              _ngcontent-ng-c3957723611=""
                                                              class="ti-table-draggable-container"
                                                              draggable="false"
                                                              style="cursor: auto"
                                                            >
                                                              <ti-grid-header-wrapper _ngcontent-ng-c3957723611=""
                                                                ><grid-kit-custom-header _nghost-ng-c1841846041="" class="ng-star-inserted">
                                                                  <div _ngcontent-ng-c1841846041="" class="header-container">
                                                                    <span _ngcontent-ng-c1841846041="" class="header-left"></span
                                                                    ><!---->
                                                                    <div
                                                                      _ngcontent-ng-c1841846041=""
                                                                      tioverflow=""
                                                                      class="customHeaderLabel ng-star-inserted"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      操作
                                                                    </div>
                                                                    <!----><!----><!----><!----><!----><!----><span
                                                                      _ngcontent-ng-c1841846041=""
                                                                      class="header-right ng-star-inserted"
                                                                    ></span
                                                                    ><!---->
                                                                  </div> </grid-kit-custom-header
                                                                ><!----></ti-grid-header-wrapper
                                                              >
                                                            </section>
                                                          </th>
                                                          <!---->
                                                        </tr>
                                                      </thead>
                                                    </table>
                                                  </div>
                                                  <div
                                                    _ngcontent-ng-c3957723611=""
                                                    itemsize="43"
                                                    class="cdk-virtual-scroll-viewport ti3-table-container ti3-resize-wrapper cdk-virtual-scrollable cdk-virtual-scroll-orientation-vertical ti3-table-virtual-scroll-viewport ti3-table-virtual-scroll-viewport-nodata"
                                                    style="height: 0px"
                                                  >
                                                    <table
                                                      _ngcontent-ng-c3957723611=""
                                                      class="ti3-table-virtual-scroll-content-wrapper"
                                                      style="transform: translateY(0px)"
                                                    >
                                                      <thead _ngcontent-ng-c3957723611="">
                                                        <tr _ngcontent-ng-c3957723611="">
                                                          <th _ngcontent-ng-c3957723611="" checkbox-column="" class="ng-star-inserted"></th>
                                                          <!----><!----><!---->
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="160"
                                                            class="ng-star-inserted"
                                                            style="width: 160px !important"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="100"
                                                            tiresizeminwidth="100"
                                                            class="ng-star-inserted"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="80"
                                                            tiresizeminwidth="80"
                                                            class="ng-star-inserted"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="100"
                                                            tiresizeminwidth="75"
                                                            class="ng-star-inserted"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="80"
                                                            tiresizeminwidth="75"
                                                            class="ng-star-inserted"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="180"
                                                            class="ng-star-inserted"
                                                            style="width: 180px !important"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="90"
                                                            tiresizeminwidth="75"
                                                            class="ng-star-inserted"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="75"
                                                            class="ng-star-inserted"
                                                            style="width: 17%"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="120"
                                                            class="ng-star-inserted"
                                                            style="width: 120px !important"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="75"
                                                            class="ng-star-inserted"
                                                            style="width: 17%"
                                                          ></th>
                                                          <th
                                                            _ngcontent-ng-c3957723611=""
                                                            width="17%"
                                                            tiresizeminwidth="140"
                                                            class="ng-star-inserted"
                                                            style="width: 140px !important"
                                                          ></th>
                                                          <!---->
                                                        </tr>
                                                      </thead>
                                                      <!---->
                                                      <tbody
                                                        _ngcontent-ng-c3957723611=""
                                                        class="ng-star-inserted"
                                                        v-for="(row, rowIndex) in tableData"
                                                        :key="rowIndex"
                                                      >
                                                        <tr
                                                          _ngcontent-ng-c3957723611=""
                                                          draggable="false"
                                                          style="cursor: auto; height: 66px"
                                                          class="ng-star-inserted"
                                                        >
                                                          <!---->
                                                          <td
                                                            _ngcontent-ng-c3957723611=""
                                                            checkbox-column=""
                                                            class="ti-gridkit-select-column ng-star-inserted"
                                                          >
                                                            <span _ngcontent-ng-c3957723611="" class="ti-grid-tip-container"
                                                              ><input
                                                                _ngcontent-ng-c3957723611=""
                                                                type="checkbox"
                                                                ticheckbox=""
                                                                _nghost-ng-c531329826=""
                                                                id="ti_auto_id_62"
                                                                tiny3version="12.3.210"
                                                                tiform=""
                                                                class="ng-untouched ng-pristine ng-valid" /><label
                                                                _ngcontent-ng-c531329826=""
                                                                class="ti3-checkbox ng-star-inserted"
                                                                for="ti_auto_id_62"
                                                                id="ti_auto_id_62_checkbox"
                                                                ><span
                                                                  _ngcontent-ng-c531329826=""
                                                                  tioutline=""
                                                                  class="ti3-checkbox-skin ti3-icon ti3-icon-checkmark"
                                                                  tabindex="0"
                                                                ></span
                                                                ><span
                                                                  _ngcontent-ng-c531329826=""
                                                                  class="ti3-checkbox-label"
                                                                  id="ti_auto_id_62_label"
                                                                ></span></label
                                                            ></span>
                                                          </td>
                                                          <!----><!---->
                                                          <!-- 名称/ID -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><ecs-name-renderer _nghost-ng-c515978185="" class="ng-star-inserted">
                                                                <div
                                                                  _ngcontent-ng-c515978185=""
                                                                  tioverflow=""
                                                                  class="ti-render-container line-height20 ecs-list-container"
                                                                  style="
                                                                    white-space: nowrap;
                                                                    text-overflow: ellipsis;
                                                                    overflow: hidden;
                                                                    display: block;
                                                                  "
                                                                >
                                                                  <!---->
                                                                  <div _ngcontent-ng-c515978185="" class="vertical-center ng-star-inserted">
                                                                    <span _ngcontent-ng-c515978185="" class="nowrap_hidden left-name-wrapper"
                                                                      ><a
                                                                        _ngcontent-ng-c515978185=""
                                                                        noopener=""
                                                                        meta-data-uba="www_v1_ecs.click.ecs_list_go_ecsDetail"
                                                                        class="common-link ng-star-inserted"
                                                                        rel="noopener noreferrer"
                                                                        id="name_link_0"
                                                                        href="#/ecs/manager/vmList/vmDetail/basicinfo?instanceId=xxx-xxx-xxx-xxx-xxx"
                                                                        >{{ row.name }}</a
                                                                      ><!----></span
                                                                    >
                                                                    <div _ngcontent-ng-c515978185="" class="right-name-wrapper copy-hide">
                                                                      <!----><tp-rename
                                                                        _ngcontent-ng-c515978185=""
                                                                        _nghost-ng-c2705658368=""
                                                                        id="ti_auto_id_63"
                                                                        tiny3version="12.3.210"
                                                                        class="ng-star-inserted"
                                                                        ><!----><ti-cell-icons
                                                                          _ngcontent-ng-c2705658368=""
                                                                          class="tp-rename-icon-container ti3-cell-icons-container"
                                                                          ><tp-icon
                                                                            _ngcontent-ng-c2705658368=""
                                                                            local=""
                                                                            name="cloudx-action-edit"
                                                                            class="editor-icon tp-icon-cloudx-action-edit"
                                                                            title="编辑"
                                                                            id="ti_auto_id_63_editor"
                                                                            tiny3version="12.3.210"
                                                                          ></tp-icon
                                                                          ><!----></ti-cell-icons
                                                                        ></tp-rename
                                                                      ><!----><!----><!----><span _ngcontent-ng-c515978185=""
                                                                        ><tp-copy
                                                                          _ngcontent-ng-c515978185=""
                                                                          dark=""
                                                                          _nghost-ng-c3300677490=""
                                                                          title="复制"
                                                                          id="nameCopy0"
                                                                          tiny3version="12.3.210"
                                                                          @click="copy(row.name)"
                                                                          ><tp-icon
                                                                            _ngcontent-ng-c3300677490=""
                                                                            local=""
                                                                            tioutline=""
                                                                            name="cloudx-action-copy"
                                                                            tabindex="0"
                                                                            class="tp-icon-cloudx-action-copy"
                                                                            id="nameCopy0_copyicon"
                                                                            tiny3version="12.3.210"
                                                                          ></tp-icon></tp-copy
                                                                      ></span>
                                                                    </div>
                                                                  </div>
                                                                  <!----><!---->
                                                                  <div _ngcontent-ng-c515978185=""><!----><!----><!----><!----></div>
                                                                  <div _ngcontent-ng-c515978185="" class="vertical-center">
                                                                    <span _ngcontent-ng-c515978185="" class="nowrap_hidden left-id-wrapper">{{
                                                                      row.id
                                                                    }}</span
                                                                    ><!----><span _ngcontent-ng-c515978185="" class="copy-hide"
                                                                      ><tp-copy
                                                                        _ngcontent-ng-c515978185=""
                                                                        dark=""
                                                                        _nghost-ng-c3300677490=""
                                                                        title="复制"
                                                                        id="idCopy0"
                                                                        tiny3version="12.3.210"
                                                                        @click="copy(row.id)"
                                                                        ><tp-icon
                                                                          _ngcontent-ng-c3300677490=""
                                                                          local=""
                                                                          tioutline=""
                                                                          name="cloudx-action-copy"
                                                                          tabindex="0"
                                                                          class="tp-icon-cloudx-action-copy"
                                                                          id="idCopy0_copyicon"
                                                                          tiny3version="12.3.210"
                                                                        ></tp-icon></tp-copy
                                                                    ></span>
                                                                  </div>
                                                                </div> </ecs-name-renderer
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 监控 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><watch-renderer _nghost-ng-c2736237283="" class="ng-star-inserted"
                                                                ><tp-icon
                                                                  _ngcontent-ng-c2736237283=""
                                                                  name="cloudx-action-monitoring-information"
                                                                  class="ecsMonitoringSvg pointer monitor-icon-color ng-star-inserted"
                                                                  _nghost-ng-c199735890=""
                                                                  id="mcharts0"
                                                                  tiny3version="12.3.210"
                                                                  ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                                  {{ row.monitor }}
                                                                  <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    style="fill: currentcolor"
                                                                  >
                                                                    <path
                                                                      d="m19,2.25c1.52,0,2.75,1.23,2.75,2.75v10c0,1.52-1.23,2.75-2.75,2.75H5c-1.52,0-2.75-1.23-2.75-2.75V5c0-1.52,1.23-2.75,2.75-2.75h14Zm0,1.5H5c-.69,0-1.25.56-1.25,1.25v10c0,.69.56,1.25,1.25,1.25h14c.69,0,1.25-.56,1.25-1.25V5c0-.69-.56-1.25-1.25-1.25Zm-.92,4.22c.27.32.22.79-.09,1.06l-3.7,3.1c-.27.23-.67.23-.95,0l-3.34-2.7-2.98,2.67c-.27.25-.68.25-.96.03l-.1-.09c-.28-.31-.25-.78.06-1.06l3.46-3.1c.27-.25.69-.26.97-.02l3.36,2.71,3.23-2.7c.32-.27.79-.22,1.06.09Zm-.58,11.78c.41,0,.75.34.75.75s-.34.75-.75.75H6.5c-.41,0-.75-.34-.75-.75s.34-.75.75-.75h11Z"
                                                                    ></path>
                                                                  </svg> </tp-icon
                                                                ><!----><!----><!----><!----><!----><!----></watch-renderer
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 安全 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><hss-status-renderer class="ng-star-inserted">
                                                                <div>
                                                                  <security-status-tip _nghost-ng-c3053175081=""
                                                                    ><tp-icon
                                                                      _ngcontent-ng-c3053175081=""
                                                                      titipposition="right"
                                                                      name="cloudx-action-state-protection"
                                                                      class="hss-status-icon hss-noCheck tp-icon-height-isSquare ng-star-inserted"
                                                                      _nghost-ng-c199735890=""
                                                                      id="ti_auto_id_105"
                                                                      tiny3version="12.3.210"
                                                                      ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                                      <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 16 16"
                                                                        style="fill: currentcolor"
                                                                      >
                                                                        <path
                                                                          fill-rule="evenodd"
                                                                          d="m8.73,2.29l4.13,1.64c.38.15.63.52.61.93-.03.61-.1,1.74-.25,3.68-.27,3.55-4.67,5.46-5.22,5.46s-4.95-1.91-5.23-5.46c-.15-1.94-.22-3.07-.25-3.68-.02-.41.23-.78.61-.93l4.13-1.64c.47-.19,1-.19,1.47,0Z"
                                                                        ></path>
                                                                        <path
                                                                          fill-rule="evenodd"
                                                                          fill="#FFFFFF"
                                                                          d="m5.78,8.27l2.91-3.58c.1-.13.31-.03.28.13l-.4,2.45c-.02.1.06.19.16.19h1.35c.14,0,.21.15.13.26l-2.91,3.58c-.1.13-.31.03-.28-.13l.4-2.45c.02-.1-.06-.19-.16-.19h-1.35c-.14,0-.21-.15-.13-.26Z"
                                                                        ></path></svg></tp-icon
                                                                    ><!----><!----><!----><!----><!----></security-status-tip
                                                                  >
                                                                </div> </hss-status-renderer
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 状态 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><ecs-status-renderer _nghost-ng-c3756180711="" class="ng-star-inserted">
                                                                <div
                                                                  _ngcontent-ng-c3756180711=""
                                                                  tioverflow=""
                                                                  class="ti-render-container"
                                                                  style="
                                                                    text-overflow: ellipsis;
                                                                    overflow: hidden;
                                                                    display: block;
                                                                    white-space: nowrap;
                                                                  "
                                                                >
                                                                  <!----><ti-status
                                                                    _ngcontent-ng-c3756180711=""
                                                                    class="ecs-status-icon ti3-multiselect-box-cell ti3-alarm-active"
                                                                    _nghost-ng-c1337968283=""
                                                                    id="ti_auto_id_64"
                                                                    tiny3version="12.3.210"
                                                                  >
                                                                    <section _ngcontent-ng-c1337968283="" id="ti_auto_id_64_content">
                                                                      <ti-icon
                                                                        _ngcontent-ng-c1337968283=""
                                                                        class="ti3-icon-operation ti3-icon"
                                                                        id="ti_auto_id_65"
                                                                        tiny3version="12.3.210"
                                                                      ></ti-icon
                                                                      ><span _ngcontent-ng-c3756180711="" class="nowrap_hidden">
                                                                        {{ row.status }}
                                                                      </span>
                                                                    </section>
                                                                  </ti-status>
                                                                  <div
                                                                    _ngcontent-ng-c3756180711=""
                                                                    class="common-color-prompt ml20 nowrap_hidden ng-star-inserted"
                                                                  ></div>
                                                                  <!----><!----><!---->
                                                                  <div _ngcontent-ng-c3756180711="" class="nowrap_hidden ml20">
                                                                    <!----><!----><!---->
                                                                  </div>
                                                                  <!---->
                                                                </div> </ecs-status-renderer
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 可用区 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><grid-tip-text-render class="ng-star-inserted"
                                                                ><!---->
                                                                <div
                                                                  tioverflow=""
                                                                  class="ng-star-inserted"
                                                                  style="
                                                                    text-overflow: ellipsis;
                                                                    overflow: hidden;
                                                                    display: block;
                                                                    white-space: nowrap;
                                                                  "
                                                                >
                                                                  <span>{{ row.availableArea }}</span>
                                                                </div>
                                                                <!----><!----><!----> </grid-tip-text-render
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 规格/镜像 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><ecs-spec-renderer _nghost-ng-c642105319="" class="ng-star-inserted">
                                                                <div
                                                                  _ngcontent-ng-c642105319=""
                                                                  tioverflow=""
                                                                  class="ti-render-container"
                                                                  style="
                                                                    white-space: nowrap;
                                                                    text-overflow: ellipsis;
                                                                    overflow: hidden;
                                                                    display: block;
                                                                  "
                                                                >
                                                                  <!---->
                                                                  <div _ngcontent-ng-c642105319="" class="nowrap_hidden">
                                                                    {{ row.spec }}
                                                                  </div>
                                                                  <div _ngcontent-ng-c642105319="" class="nowrap_hidden ng-star-inserted">
                                                                    <!---->
                                                                    {{ row.image }}
                                                                  </div>
                                                                  <!----><!---->
                                                                </div> </ecs-spec-renderer
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 操作系统 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><grid-tip-text-render class="ng-star-inserted"
                                                                ><!---->
                                                                <div
                                                                  tioverflow=""
                                                                  class="ng-star-inserted"
                                                                  style="
                                                                    text-overflow: ellipsis;
                                                                    overflow: hidden;
                                                                    display: block;
                                                                    white-space: nowrap;
                                                                  "
                                                                >
                                                                  <span>{{ row.os }}</span>
                                                                </div>
                                                                <!----><!----><!----> </grid-tip-text-render
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- IP地址 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><ecs-eip-renderer _nghost-ng-c2195075618="" class="ng-star-inserted">
                                                                <div
                                                                  _ngcontent-ng-c2195075618=""
                                                                  tioverflow=""
                                                                  titipmaxwidth="400px"
                                                                  class="ti-render-container line-height20"
                                                                  style="
                                                                    white-space: nowrap;
                                                                    text-overflow: ellipsis;
                                                                    overflow: hidden;
                                                                    display: block;
                                                                  "
                                                                >
                                                                  <!----><!----><!---->
                                                                  <div
                                                                    _ngcontent-ng-c2195075618=""
                                                                    class="nowrap_hidden no-auto-tip flex-container items-center ng-star-inserted"
                                                                  >
                                                                    <span _ngcontent-ng-c2195075618="" class="nowrap_hidden left-wrapper"
                                                                      ><a
                                                                        _ngcontent-ng-c2195075618=""
                                                                        rel="noopener noreferrer"
                                                                        target="_blank"
                                                                        class="common-link ng-star-inserted"
                                                                        id="eipThirdLink0"
                                                                        href="https://console.huaweicloud.com/vpc?agencyId=xxxxxxxxxxxxxxxxxxx&amp;region=cn-north-4&amp;locale=zh-cn#/vpc/vpcmanager/eips?ip=xx.xx.xx.xx"
                                                                        >{{ row.publicIp }}</a
                                                                      ><!----><!----><span
                                                                        _ngcontent-ng-c2195075618=""
                                                                        class="ml5 mr5 common-color-prompt"
                                                                        >(<span _ngcontent-ng-c2195075618="">弹性公网IP</span
                                                                        ><span _ngcontent-ng-c2195075618="" class="ng-star-inserted"
                                                                          >&nbsp;全动态BGP</span
                                                                        ><!---->)</span
                                                                      ><span _ngcontent-ng-c2195075618="">5 Mbit/s</span></span
                                                                    ><span _ngcontent-ng-c2195075618="" class="right-wrapper copy-hide"
                                                                      ><tp-copy
                                                                        _ngcontent-ng-c2195075618=""
                                                                        dark=""
                                                                        _nghost-ng-c3300677490=""
                                                                        title="复制"
                                                                        id="eipCopy0"
                                                                        tiny3version="12.3.210"
                                                                        @click="copy(row.publicIp)"
                                                                        ><tp-icon
                                                                          _ngcontent-ng-c3300677490=""
                                                                          local=""
                                                                          tioutline=""
                                                                          name="cloudx-action-copy"
                                                                          tabindex="0"
                                                                          class="tp-icon-cloudx-action-copy"
                                                                          id="eipCopy0_copyicon"
                                                                          tiny3version="12.3.210"
                                                                        ></tp-icon></tp-copy
                                                                    ></span>
                                                                  </div>
                                                                  <!---->
                                                                  <div _ngcontent-ng-c2195075618="" class="nowrap_hidden flex-container items-center">
                                                                    <span _ngcontent-ng-c2195075618="" class="nowrap_hidden left-wrapper"
                                                                      ><span _ngcontent-ng-c2195075618="">{{ row.privateIp }}</span
                                                                      ><span
                                                                        _ngcontent-ng-c2195075618=""
                                                                        class="ml5 mr5 common-color-prompt ng-star-inserted"
                                                                        >(<span _ngcontent-ng-c2195075618="">私有IP</span>)</span
                                                                      ><!----></span
                                                                    ><span _ngcontent-ng-c2195075618="" class="right-wrapper copy-hide"
                                                                      ><tp-copy
                                                                        _ngcontent-ng-c2195075618=""
                                                                        dark=""
                                                                        _nghost-ng-c3300677490=""
                                                                        title="复制"
                                                                        id="ipCopy0"
                                                                        tiny3version="12.3.210"
                                                                        @click="copy(row.privateIp)"
                                                                        ><tp-icon
                                                                          _ngcontent-ng-c3300677490=""
                                                                          local=""
                                                                          tioutline=""
                                                                          name="cloudx-action-copy"
                                                                          tabindex="0"
                                                                          class="tp-icon-cloudx-action-copy"
                                                                          id="ipCopy0_copyicon"
                                                                          tiny3version="12.3.210"
                                                                        ></tp-icon></tp-copy
                                                                    ></span>
                                                                  </div>
                                                                  <!---->
                                                                </div> </ecs-eip-renderer
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 计费模式 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><ecs-payment-mode-renderer _nghost-ng-c3844243603="" class="ng-star-inserted">
                                                                <div _ngcontent-ng-c3844243603="" class="ti-render-container">
                                                                  <!---->
                                                                  <div _ngcontent-ng-c3844243603="" class="ng-star-inserted">
                                                                    <div
                                                                      _ngcontent-ng-c3844243603=""
                                                                      tioverflow=""
                                                                      class="nowrap_hidden"
                                                                      style="
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden;
                                                                        display: block;
                                                                        white-space: nowrap;
                                                                      "
                                                                    >
                                                                      {{ row.billingMode }}
                                                                      <!---->
                                                                    </div>
                                                                    <!----><!---->
                                                                    <div _ngcontent-ng-c3844243603="" class="ellipse-el ng-star-inserted">
                                                                      <tp-count
                                                                        _ngcontent-ng-c3844243603=""
                                                                        class="ecs_normal_list_payment_count tp-count-time-only"
                                                                        _nghost-ng-c2310625565=""
                                                                        id="ti_auto_id_106"
                                                                        tiny3version="12.3.210"
                                                                        ><!----><!---->
                                                                        <section
                                                                          _ngcontent-ng-c2310625565=""
                                                                          tioverflow=""
                                                                          class="tp-count-state-time ng-star-inserted"
                                                                          style="
                                                                            text-overflow: ellipsis;
                                                                            overflow: hidden;
                                                                            display: inline-block;
                                                                            white-space: nowrap;
                                                                          "
                                                                        >
                                                                          <!----><tp-count-time
                                                                            _ngcontent-ng-c2310625565=""
                                                                            pattern="combine"
                                                                            _nghost-ng-c3193557254=""
                                                                            id="ti_auto_id_107"
                                                                            tiny3version="12.3.210"
                                                                            class="ng-star-inserted"
                                                                            ><!----><span
                                                                              _ngcontent-ng-c3193557254=""
                                                                              class="tp-count-time-text ng-star-inserted"
                                                                              id="ti_auto_id_107_countdown_text"
                                                                            >
                                                                              {{ row.createTime }} </span
                                                                            ><!----><!----><!----></tp-count-time
                                                                          ><!---->
                                                                        </section>
                                                                        <!----><!----><!---->
                                                                      </tp-count>
                                                                    </div>
                                                                    <!---->
                                                                  </div>
                                                                  <!----><!----><!----><!----><!---->
                                                                </div>
                                                                <!----> </ecs-payment-mode-renderer
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 标签 -->
                                                          <td _ngcontent-ng-c3957723611="" class="ti-grid-common-column ng-star-inserted">
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><ti-grid-tag _nghost-ng-c3849391072="" class="ti-render-container ng-star-inserted">
                                                                <div _ngcontent-ng-c3849391072="" class="ti-grid-tag-container ng-star-inserted">
                                                                  <div _ngcontent-ng-c3849391072="">
                                                                    <button
                                                                      _ngcontent-ng-c3849391072=""
                                                                      tibutton=""
                                                                      class="ti-grid-tag-button ti3-btn-onlyIcon-noborder"
                                                                      disabled=""
                                                                      id="ecsListTagRender_tag_icon"
                                                                      tiny3version="12.3.210"
                                                                    >
                                                                      <!----><tp-icon
                                                                        _ngcontent-ng-c3849391072=""
                                                                        name="cloudx-action-tag"
                                                                        class="ti-grid-tag-button-icon"
                                                                        _nghost-ng-c199735890=""
                                                                        id="ti_auto_id_104"
                                                                        tiny3version="12.3.210"
                                                                        ><!--?xml version="1.0" encoding="UTF-8"?-->
                                                                        <svg
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          viewBox="0 0 16 16"
                                                                          style="fill: currentcolor"
                                                                        >
                                                                          <path
                                                                            d="m6.39,1c1.38,0,2.17.78,3.28,1.87l4.82,4.92c.33.31.51.76.51,1.24s-.18.92-.5,1.24l-4.38,4.27c-.32.31-.78.46-1.24.46s-.92-.16-1.24-.47l-5.44-5.33c-.48-.47-.78-.79-.96-1.15-.17-.36-.24-.76-.24-1.42v-2.35c0-.94.07-1.88.58-2.48.47-.55,1.27-.8,2.61-.8h2.2Zm0,1.06h-2.28c-.9,0-1.47.06-1.74.36-.24.27-.29.71-.3,1.57v2.63c0,.86.02.94.86,1.76l5.65,5.53c.09.09.24.14.4.14.17.01.31-.04.41-.13l4.54-4.43c.09-.08.14-.22.14-.37,0-.13-.04-.24-.1-.33l-.05-.06-4.55-4.64-.46-.45c-1.11-1.1-1.64-1.58-2.52-1.58Zm.19,1.95c.68.68.68,1.79,0,2.47s-1.79.68-2.47,0-.68-1.79,0-2.47c.68-.68,1.79-.68,2.47,0Zm-1.77.7c-.29.29-.29.77,0,1.06s.77.29,1.06,0c.3-.29.3-.76,0-1.06s-.77-.29-1.06,0Z"
                                                                          ></path>
                                                                        </svg>
                                                                      </tp-icon>
                                                                    </button>
                                                                  </div>
                                                                  <span
                                                                    _ngcontent-ng-c3849391072=""
                                                                    tioverflow=""
                                                                    style="
                                                                      text-overflow: ellipsis;
                                                                      overflow: hidden;
                                                                      display: block;
                                                                      white-space: nowrap;
                                                                    "
                                                                  ></span>
                                                                </div>
                                                                <!----><!----><!----><!----> </ti-grid-tag
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!-- 操作 -->
                                                          <td
                                                            _ngcontent-ng-c3957723611=""
                                                            class="ti-grid-common-column ti3-table-column-fixed-right ng-star-inserted"
                                                          >
                                                            <ti-grid-custom-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                              ><grid-tiny-operation-render class="ng-star-inserted">
                                                                <ti-actionmenu
                                                                  v-if="false"
                                                                  _nghost-ng-c64761219=""
                                                                  id="ecsGridKitViewId_actionmenu_0"
                                                                  tiny3version="12.3.210"
                                                                  tiform=""
                                                                  class="ng-star-inserted"
                                                                  style="max-width: 250px"
                                                                >
                                                                  <a
                                                                    _ngcontent-ng-c64761219=""
                                                                    href="javascript:void(0)"
                                                                    oncontextmenu="return false"
                                                                    class="ti3-action-menu-item ng-star-inserted"
                                                                    id="ecsGridKitViewId_actionmenu_0_remoteLogin_0"
                                                                    style="margin-right: 6px"
                                                                  >
                                                                    <section _ngcontent-ng-c64761219="">
                                                                      <div class="ng-star-inserted">远程登录</div>
                                                                    </section>
                                                                  </a>
                                                                  <ti-menu
                                                                    _ngcontent-ng-c64761219=""
                                                                    panelalign="right"
                                                                    style="display: inline-block; margin-left: 6px"
                                                                    _nghost-ng-c343947683=""
                                                                    id="ecsGridKitViewId_actionmenu_0_menu"
                                                                    tiny3version="12.3.210"
                                                                    tiform=""
                                                                  >
                                                                    <a
                                                                      _ngcontent-ng-c343947683=""
                                                                      oncontextmenu="return false"
                                                                      href="javascript:void(0)"
                                                                      class="ti3-menu-toggle-menu"
                                                                      id="ecsGridKitViewId_actionmenu_0_menu_toggle"
                                                                    >
                                                                      <section
                                                                        _ngcontent-ng-c64761219=""
                                                                        class="tiMoreText ng-star-inserted"
                                                                        style="display: inline-block"
                                                                      >
                                                                        更多
                                                                      </section>
                                                                      <section
                                                                        _ngcontent-ng-c64761219=""
                                                                        class="tiMenuText ng-star-inserted"
                                                                        style="display: none"
                                                                      >
                                                                        操作
                                                                      </section>
                                                                      <span
                                                                        _ngcontent-ng-c343947683=""
                                                                        class="ti3-icon ti3-icon-accordion-unfold ng-star-inserted"
                                                                      ></span>
                                                                    </a>
                                                                  </ti-menu>
                                                                </ti-actionmenu>

                                                                <tiny-action-menu
                                                                  :options="options"
                                                                  :max-show-num="1"
                                                                  trigger="click"
                                                                  @item-click="handleItemClick"
                                                                  ref="actionMenuRef"
                                                                >
                                                                </tiny-action-menu>

                                                                <!----><!----><!----><!----></grid-tiny-operation-render
                                                              ><!----></ti-grid-custom-viewer
                                                            ><!----><!---->
                                                          </td>
                                                          <!----><!---->
                                                        </tr>
                                                        <!----><!----><!----><!----><!----><!----><!----><!---->
                                                      </tbody>
                                                      <!----><!---->
                                                    </table>
                                                    <div class="ti3-table-virtual-scroll-spacer"></div>
                                                  </div>
                                                  <div
                                                    _ngcontent-ng-c3957723611=""
                                                    class="ti-grid-table-horizontal-scrollbar ng-star-inserted"
                                                    style="display: none"
                                                  >
                                                    <div _ngcontent-ng-c3957723611="" class="ti-grid-table-horizontal-scrollbar-content"></div>
                                                  </div>
                                                  <!---->
                                                  <div _ngcontent-ng-c3957723611="" class="ti-grid-table-overlay" hidden="">
                                                    <div _ngcontent-ng-c3957723611="" class="ti-grid-table-overlay-panel">
                                                      <!----><ti-grid-no-rows-viewer _ngcontent-ng-c3957723611="" class="ng-star-inserted"
                                                        ><grid-kit-loading-overlay _nghost-ng-c1574488737="" class="ng-star-inserted"
                                                          ><ti-loading
                                                            _ngcontent-ng-c1574488737=""
                                                            size="middle"
                                                            class="ti-grid-kit-loading"
                                                            _nghost-ng-c2332124363=""
                                                            id="ti_auto_id_31"
                                                            tiny3version="12.3.210"
                                                            ><!----><ti-icon
                                                              _ngcontent-ng-c2332124363=""
                                                              name="loading"
                                                              class="ti3-loading-default ti3-icon-loading ti3-loading-default-middle ti3-icon ng-star-inserted"
                                                              id="ti_auto_id_32"
                                                              tiny3version="12.3.210"
                                                            ></ti-icon
                                                            ><!----><!----></ti-loading
                                                          ></grid-kit-loading-overlay
                                                        ><!----></ti-grid-no-rows-viewer
                                                      ><!----><!----><!----><!---->
                                                    </div>
                                                  </div>
                                                </ti-table>
                                              </ti-grid>
                                              <ti-pagination
                                                class="ti-grid-kit-pagination-container ti3-page-container ti3-page-content-justified ng-star-inserted"
                                                _nghost-ng-c3723502124=""
                                                id="ecsGridKitViewId_pagination"
                                                tiny3version="12.3.210"
                                                tiform=""
                                                unselectable="on"
                                                style="display: inline-flex"
                                                ><label
                                                  _ngcontent-ng-c3723502124=""
                                                  tioverflow=""
                                                  class="ti3-pag-total-items ng-star-inserted"
                                                  id="ecsGridKitViewId_pagination_total_items"
                                                  style="text-overflow: ellipsis; overflow: hidden; display: inline-block; white-space: nowrap"
                                                >
                                                  总条数：{{ tableData.length }}
                                                  <!----><span _ngcontent-ng-c3723502124="" class="ng-star-inserted"
                                                    ><span
                                                      _ngcontent-ng-c3723502124=""
                                                      class="ti3-pag-selected-divider"
                                                      style="margin: 0 var(--ti-common-space-2x)"
                                                      >| </span
                                                    >已选：0</span
                                                  ><!----><!----></label
                                                ><!---->
                                                <div _ngcontent-ng-c3723502124="" class="ti3-pag-content-right ng-star-inserted">
                                                  <ti-select
                                                    _ngcontent-ng-c3723502124=""
                                                    size="small"
                                                    class="ti3-page-size-option ti3-select-small ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                    _nghost-ng-c783833559=""
                                                    id="ecsGridKitViewId_pagination_select"
                                                    tiny3version="12.3.210"
                                                    tiform=""
                                                    style="width: 75px; max-width: 72px"
                                                    ><ti-dominator
                                                      _ngcontent-ng-c783833559=""
                                                      size="16px"
                                                      customclass="ti-select-loading-cover"
                                                      _nghost-ng-c4263889896=""
                                                      id="ecsGridKitViewId_pagination_select_dominator"
                                                      tiny3version="12.3.210"
                                                      tiform=""
                                                      class="ti3-select-dominator-container ng-untouched ng-pristine ng-valid"
                                                      tabindex="0"
                                                    >
                                                      <section
                                                        _ngcontent-ng-c4263889896=""
                                                        class="ti3-select-dominator-text"
                                                        id="ecsGridKitViewId_pagination_select_dominator_input"
                                                      >
                                                        <section
                                                          _ngcontent-ng-c4263889896=""
                                                          class="ti3-overflow-padding ng-star-inserted"
                                                          style="visibility: visible"
                                                        >
                                                          10<!----><!----><!----><!----><!----><!----><!----><!---->
                                                        </section>
                                                        <!----><!----><!----><!---->
                                                      </section>
                                                      <!---->
                                                      <section
                                                        _ngcontent-ng-c4263889896=""
                                                        class="ti3-icon ti3-icon-accordion-unfold ti3-select-dominator-dropdown-btn ng-star-inserted"
                                                        id="ecsGridKitViewId_pagination_select_dominator_btn"
                                                      ></section>
                                                      <!----><!----> </ti-dominator
                                                    ><!----><ti-dropsearch
                                                      _ngcontent-ng-c783833559=""
                                                      _nghost-ng-c1314199683=""
                                                      id="ecsGridKitViewId_pagination_select_droplist"
                                                      tiny3version="12.3.210"
                                                      tiform=""
                                                      class="ng-untouched ng-pristine ng-valid"
                                                      ><ti-drop
                                                        _ngcontent-ng-c1314199683=""
                                                        _nghost-ng-c2814315127=""
                                                        class="ti3-select-small ti3-dropdown-container"
                                                        id="ti_auto_id_101"
                                                        tiny3version="12.3.210"
                                                        ><!----></ti-drop
                                                      ></ti-dropsearch
                                                    ><!----><!----><!----></ti-select
                                                  ><!---->
                                                  <div _ngcontent-ng-c3723502124="" class="ti3-pag-pages">
                                                    <a
                                                      _ngcontent-ng-c3723502124=""
                                                      href="javascript:void(0);"
                                                      oncontextmenu="return false"
                                                      class="ti3-pag-prev disabled"
                                                      id="ecsGridKitViewId_pagination_prev_page"
                                                      title=""
                                                      tabindex="-1"
                                                      ><i _ngcontent-ng-c3723502124="" class="ti3-icon ti3-icon-left-1"></i></a
                                                    ><a
                                                      _ngcontent-ng-c3723502124=""
                                                      href="javascript:void(0);"
                                                      oncontextmenu="return false"
                                                      tioutline=""
                                                      class="ti3-pag-page active ng-star-inserted"
                                                      id="ecsGridKitViewId_pagination_go_1"
                                                      tabindex=""
                                                      >1</a
                                                    ><!----><!----><!----><a
                                                      _ngcontent-ng-c3723502124=""
                                                      href="javascript:void(0);"
                                                      oncontextmenu="return false"
                                                      class="ti3-pag-next disabled"
                                                      id="ecsGridKitViewId_pagination_next_page"
                                                      title=""
                                                      tabindex="-1"
                                                      ><i _ngcontent-ng-c3723502124="" class="ti3-icon ti3-icon-right-1"></i
                                                    ></a>
                                                  </div>
                                                  <!---->
                                                </div>
                                              </ti-pagination>
                                            </div>
                                            <!----><!----> </ti-grid-kit
                                          ><!----><!----></tp-layout-section
                                        ></tp-layout-content-body
                                      >
                                    </tp-layout-content>
                                  </div>
                                  <!----><!----><!----><!----> </ibiza-ecs-ecs-grid-list
                                ><!----><!----><router-outlet _ngcontent-ng-c3565173692="" hidden=""></router-outlet
                                ><!---->
                              </div>
                            </ti-app-layout-main-content>
                          </div>
                          <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-content-footer"></div>
                        </div>
                        <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-right"></div>
                      </div> </ti-app-layout-main></app-ecs-list-container
                  ><!----><!----></ibiza-ecs-ecs
                ><!---->
              </div>
            </div>
          </div>
          <div _ngcontent-ng-c3660804855="" class="ti-app-layout-right-container">
            <ti-app-layout-right _ngcontent-ng-c2859340050="" _nghost-ng-c3642742526=""
              ><ti-global-help-panel
                _ngcontent-ng-c2859340050=""
                _nghost-ng-c2604634453=""
                id="ti_auto_id_1"
                tcversion="@cloud/ti-global-help-panel:13.0.211"
                class="ti-global-help-panel-collapse"
                style="
                  --ti-global-help-panel-cf-height: 48px;
                  --ti-global-help-panel-tab-height: 0px;
                  --ti-global-help-panel-placeholder-element: 24px;
                  --ti-global-help-panel-header-height: 20px;
                  --tp_help_doc_browser_search_searchbox_title: 100px;
                  width: 480px;
                "
                ><!----><!----><!---->
                <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel">
                  <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel-handle-dragger ng-star-inserted">
                    <ti-icon
                      _ngcontent-ng-c2604634453=""
                      name="stretch-upright"
                      class="ti-global-help-panel-drag-icon ti3-icon-stretch-upright ti3-icon"
                      id="ti_auto_id_4"
                      tiny3version="12.3.210"
                    ></ti-icon>
                  </div>
                  <!---->
                  <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel-header ng-star-inserted">
                    <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel-header-icon-wrap ng-star-inserted">
                      <tp-icon
                        _ngcontent-ng-c2604634453=""
                        name="cloudx-action-fixed"
                        class="ti-global-help-panel-header-icon ti-global-help-panel-nail ng-star-inserted"
                        _nghost-ng-c199735890=""
                        id="ti_auto_id_7"
                        tiny3version="12.3.210"
                        ><!--?xml version="1.0" encoding="UTF-8"?-->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentcolor">
                          <path
                            d="m16.04,2.8c.63-.53,1.55-.49,2.13.09l2.94,2.94c.58.58.62,1.5.09,2.13l-4.25,5.03.57.57c.57.57.61,1.46.13,2.08l-.13.15-2.89,2.89c-.61.61-1.61.61-2.23,0l-3.02-3.02-4.99,4.99c-.29.29-.77.29-1.06,0s-.29-.77,0-1.06l4.99-4.99-3.02-3.02c-.58-.58-.61-1.5-.1-2.11l.1-.11,2.89-2.89c.61-.61,1.61-.61,2.23,0l.57.57,5.03-4.25Zm1,1.13l-.03.02-6.09,5.14-1.55-1.55s-.08-.03-.11,0l-2.89,2.89s-.03.08,0,.11l7.09,7.09s.08.03.11,0l2.89-2.89s.03-.08,0-.11l-1.55-1.55,5.14-6.09s.02-.07,0-.1l-2.94-2.94s-.02-.02-.03-.02h-.04Z"
                          ></path>
                        </svg> </tp-icon
                      ><!----><!---->
                    </div>
                    <!---->
                    <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel-header-icon-wrap">
                      <ti-icon
                        _ngcontent-ng-c2604634453=""
                        class="ti-global-help-panel-header-icon ti3-icon-full-screen ti3-icon"
                        id="ti_auto_id_5"
                        tiny3version="12.3.210"
                      ></ti-icon>
                    </div>
                    <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel-header-icon-wrap">
                      <ti-icon
                        _ngcontent-ng-c2604634453=""
                        name="close"
                        class="ti-global-help-panel-header-icon ti-global-help-panel-close ti3-icon-close ti3-icon"
                        id="ti_auto_id_6"
                        tiny3version="12.3.210"
                      ></ti-icon>
                    </div>
                  </div>
                  <!---->
                  <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel-container"><!----><!----></div>
                  <div _ngcontent-ng-c2604634453="" class="ti-global-help-panel-container" hidden="">
                    <div _ngcontent-ng-c2604634453="" id="ti-global-help-panel-smart-assistant" class="ng-star-inserted"></div>
                    <!---->
                  </div>
                </div>
              </ti-global-help-panel></ti-app-layout-right
            >
          </div>
          <div _ngcontent-ng-c3660804855="" class="ti-app-layout-hack-place-for-cfui-right"></div> </ti-app-layout
      ></ibiza-ecs>
    </div>
    <!-- 侧边栏 -->
    <div id="J_rightSidebar">
      <div
        class="js-cf-rightSidebar modules-right-sidebar-cf-right-sidebar-container modules-right-sidebar-right-sidebar-show-state"
        style="top: 48px; height: calc(100% - 48px)"
      >
        <div class="modules-right-sidebar-right-sidebar-menu-container">
          <div class="modules-right-sidebar-container">
            <div class="modules-right-sidebar-top">
              <div class="modules-right-sidebar-icon-item-wrapper">
                <div class="modules-right-sidebar-right-sidebar-menu-item-svg-item" id="cf_J_rightSidebar_pangu">
                  <div class="modules-right-sidebar-pangu-icon-default">
                    <div class="modules-right-sidebar-pangu-icon-svg">
                      <!--?xml version="1.0" encoding="UTF-8"?--><svg
                        id="a"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 64 64"
                      >
                        <defs>
                          <linearGradient
                            id="c"
                            x1="-250.621"
                            y1="412.011"
                            x2="-249.763"
                            y2="411.965"
                            gradientTransform="translate(4655.918 4026.867) scale(18.537 -9.631)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#15f78e"></stop>
                            <stop offset="1" stop-color="#16f36c"></stop>
                          </linearGradient>
                          <linearGradient
                            id="e"
                            x1="-258.935"
                            y1="445.236"
                            x2="-259.609"
                            y2="444.662"
                            gradientTransform="translate(13152.393 23208.859) scale(50.6 -52.104)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#3608fc"></stop>
                            <stop offset=".08" stop-color="#2d19fb"></stop>
                            <stop offset=".3" stop-color="#297df4"></stop>
                            <stop offset=".496" stop-color="#3ab4f3"></stop>
                            <stop offset="1" stop-color="#2ddbe4"></stop>
                          </linearGradient>
                          <linearGradient
                            id="g"
                            x1="-244.583"
                            y1="434.765"
                            x2="-244.64"
                            y2="434.063"
                            gradientTransform="translate(3269.012 9418.854) scale(13.316 -21.563)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#2ed8e6"></stop>
                            <stop offset=".265" stop-color="#22e1dd"></stop>
                            <stop offset=".503" stop-color="#19f1c9"></stop>
                            <stop offset=".661" stop-color="#15f699"></stop>
                            <stop offset=".817" stop-color="#15f791"></stop>
                            <stop offset="1" stop-color="#16f57b"></stop>
                          </linearGradient>
                          <linearGradient
                            id="i"
                            x1="-248.042"
                            y1="434.307"
                            x2="-247.9"
                            y2="433.888"
                            gradientTransform="translate(3981.835 9292.189) scale(16.006 -21.283)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#24dfe0" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#16f57b"></stop>
                          </linearGradient>
                          <linearGradient
                            id="k"
                            x1="-247.646"
                            y1="410.558"
                            x2="-248.549"
                            y2="410.558"
                            gradientTransform="translate(4051.638 3877.056) scale(16.15 -9.299)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#f89d10"></stop>
                            <stop offset=".235" stop-color="#febc11"></stop>
                            <stop offset=".441" stop-color="#ffc112"></stop>
                            <stop offset="1" stop-color="#ffbc12"></stop>
                          </linearGradient>
                          <linearGradient
                            id="m"
                            x1="-259.87"
                            y1="445.422"
                            x2="-259.244"
                            y2="444.55"
                            gradientTransform="translate(13974.629 23450.326) scale(53.715 -52.626)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#d70901"></stop>
                            <stop offset=".079" stop-color="#e52505"></stop>
                            <stop offset=".137" stop-color="#e92a04"></stop>
                            <stop offset=".481" stop-color="#f94905"></stop>
                            <stop offset="1" stop-color="#f89d10"></stop>
                          </linearGradient>
                          <linearGradient
                            id="o"
                            x1="-248.518"
                            y1="425.057"
                            x2="-248.941"
                            y2="424.958"
                            gradientTransform="translate(4177.832 6115.238) scale(16.606 -14.252)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#feb810"></stop>
                            <stop offset="1" stop-color="#ffbe12"></stop>
                          </linearGradient>
                          <linearGradient
                            id="r"
                            x1="-242.129"
                            y1="432.296"
                            x2="-242.237"
                            y2="431.866"
                            gradientTransform="translate(2925.294 8360.001) scale(11.861 -19.221)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#f88a0d"></stop>
                            <stop offset=".552" stop-color="#fba20e"></stop>
                            <stop offset=".87" stop-color="#fba20e" stop-opacity=".112"></stop>
                            <stop offset="1" stop-color="#fdb20e" stop-opacity="0"></stop>
                          </linearGradient>
                          <linearGradient
                            id="t"
                            x1="-240.671"
                            y1="435.108"
                            x2="-240.413"
                            y2="434.6"
                            gradientTransform="translate(2708.468 9591.705) scale(11.04 -22.037)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#810cea"></stop>
                            <stop offset=".471" stop-color="#370afb"></stop>
                            <stop offset=".786" stop-color="#330efc" stop-opacity="0"></stop>
                            <stop offset=".997" stop-color="#3608fc" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#2e40f9" stop-opacity="0"></stop>
                          </linearGradient>
                          <linearGradient
                            id="v"
                            x1="-259.506"
                            y1="426.343"
                            x2="-258.686"
                            y2="426.27"
                            gradientTransform="translate(12734.871 6358.142) scale(49.02 -14.897)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#dd0113" stop-opacity=".008"></stop>
                            <stop offset=".031" stop-color="#df0019"></stop>
                            <stop offset=".14" stop-color="#dc052e"></stop>
                            <stop offset=".231" stop-color="#d80a45"></stop>
                            <stop offset=".471" stop-color="#ce1881"></stop>
                            <stop offset=".686" stop-color="#bb21c4"></stop>
                            <stop offset=".79" stop-color="#a117d9"></stop>
                            <stop offset=".853" stop-color="#840ee8"></stop>
                            <stop offset=".901" stop-color="#840ee8" stop-opacity=".524"></stop>
                            <stop offset=".961" stop-color="#840ee8" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#6102fa" stop-opacity="0"></stop>
                          </linearGradient>
                          <linearGradient
                            id="x"
                            x1="-248.9"
                            y1="416.909"
                            x2="-247.951"
                            y2="416.909"
                            gradientTransform="translate(4113.381 4576.745) scale(16.491 -10.964)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#d1050f" stop-opacity="0"></stop>
                            <stop offset=".298" stop-color="#cd0906"></stop>
                            <stop offset=".736" stop-color="#d40825"></stop>
                            <stop offset="1" stop-color="#d9083e" stop-opacity="0"></stop>
                          </linearGradient>
                          <linearGradient
                            id="z"
                            x1="-245.862"
                            y1="432.258"
                            x2="-245.693"
                            y2="431.76"
                            gradientTransform="translate(3483.195 8270.102) scale(14.125 -19.119)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#dd0113" stop-opacity="0"></stop>
                            <stop offset=".404" stop-color="#d70901"></stop>
                            <stop offset="1" stop-color="#e82905"></stop>
                          </linearGradient>
                        </defs>
                        <g id="b">
                          <path
                            id="d"
                            d="m13.878,54.209c.36,0,.709.041,1.045.119l.413.111.232.054.271.046.232.02h6.162s.169-.003.169-.003h.111s.111.005.111.005c2.511.039,4.534,2.086,4.534,4.607,0,1.708-.929,3.199-2.31,3.995-.7.429-1.524.677-2.406.677-.053,0-2.779-.007-8.18-.021l-.137-.009-.274-.025-.376-.046-.2-.03-.307-.054-.302-.062-.213-.049-.407-.108-.129-.04c-1.907-.564-3.297-2.329-3.297-4.418,0-1.813,1.047-3.381,2.569-4.133.442-.229.925-.389,1.435-.465.397-.111.817-.171,1.25-.171Z"
                            style="fill: url(#c)"
                          ></path>
                          <path
                            id="f"
                            d="m45.323,1.613l5.296-1.034.472.083c.442.081.795.158,1.058.23l.124.036c.413.124,1.006.353,1.78.687,2.402,1.155,3.984,3.018,4.594,5.044.682,2.556.344,4.657-.674,6.9l-.143.307c-.191.4-.467.932-.634,1.229l-.404.691-.063.1-.013.024c-.738,1.252-1.56,2.403-2.465,3.453-.286.332-.578.662-.876.99l-.937,1.007-.549.562c-.9.915-1.845,1.81-2.834,2.684l-.059.049-.077.071-1.382,1.213-1.269,1.079-.734.613-.095.081-.584.48c-.053.045-.107.09-.162.133l-.09.075-.693.564-.244.195-.444.36-1.593,1.27-1.511,1.184c-.063.052-.127.102-.192.15-.057.047-.116.093-.176.137-.06.049-.121.097-.184.143l-.096.076-.441.34-.138.109-.075.056c-.071.058-.141.11-.211.161l-.215.171-1.884,1.445-3.486,2.648-.071.055-2.42,1.831-.094.07-.287.218c-.043.033-.087.066-.132.097l-.241.186-3.404,2.592-.586.452-.17.129-.542.421c-.242.25-.511.474-.804.664-.19.177-.394.338-.612.482-.185.173-.385.331-.597.472-.176.165-.365.316-.565.452-.173.163-.358.314-.555.449-.166.157-.343.302-.531.434-.159.152-.33.293-.509.422-.151.146-.312.281-.482.405-.141.137-.29.265-.448.383-.137.136-.283.263-.437.381-.127.126-.26.245-.401.356-.114.116-.234.225-.36.329-.108.112-.222.219-.341.32-.097.102-.198.201-.304.294-.081.089-.166.174-.255.257-.074.083-.15.164-.229.242-.067.079-.137.156-.209.23-.071.087-.145.171-.221.252-.066.082-.134.161-.205.238-.065.083-.132.163-.202.241-.25.327-.542.621-.87.871-.796.656-1.816,1.049-2.928,1.049-2.545,0-4.608-2.063-4.608-4.608,0-1.039.344-1.997.923-2.768l.223-.282.418-.502.299-.348.51-.576.278-.298.327-.338.276-.275.385-.373.742-.689,1.011-.894,1.306-1.105,1.531-1.248,1.663-1.319,1.752-1.363.958-.736.082-.064,3.168-2.411c.067-.053.135-.105.205-.155l.085-.067,2.445-1.849.071-.055,5.716-4.355c.065-.052.132-.103.2-.152l.176-.139.76-.587.087-.07.437-.339.192-.15c.054-.044.109-.087.165-.129l.097-.078.764-.598c.067-.056.135-.109.204-.161l1.838-1.466.084-.069.576-.465.084-.07.718-.587,1.089-.905,1.048-.889.511-.443.852-.758.696-.629c.222-.202.434-.397.636-.585l.694-.652.752-.745.638-.665.499-.551.314-.365.231-.281.505-.636.201-.261.331-.449.101-.142.108-.16c.336-.505.585-.946.82-1.383l.371-.703c.005-.009-.45-.137-1.661-.104-.488-.682-.773-1.751-.854-3.205.011-.06-.446-.239-.952-.419l-.588-.202c-.4-.134-.721-.236-.72-.237l2.842-.496-2.306-3.464Z"
                            style="fill: url(#e)"
                          ></path>
                          <path
                            id="h"
                            d="m18.093,49.326c-.916.946-1.657,1.832-2.225,2.657s-.983,1.562-1.248,2.211c-.263.438-.37,1.101-.322,1.991.073,1.334.575,2.638.575,2.638l2.213,5.017h-2.213c-3.517-.073-6.314-1.547-8.392-4.424-1.406-2.378-1.689-4.918-.848-7.621.609-1.763,1.432-3.381,2.469-4.853,1.332-1.837,2.428-3.16,3.289-3.969s3.222-.914,7.086-.315l-.386,6.667Z"
                            style="fill: url(#g); fill-rule: evenodd"
                          ></path>
                          <path
                            id="j"
                            d="m15.434,44.079c-1.149,2.272-1.723,4.758-1.723,7.46.091,1.013.394,1.898.909,2.655.201.23,1.193.356,2.975.379h3.573l-1.219,9.267h-5.075c-3.517-.073-6.314-1.547-8.392-4.424-1.406-2.378-1.689-4.918-.848-7.621.609-1.763,1.432-3.381,2.469-4.853,1.332-1.837,2.428-3.16,3.289-3.969s2.208-.44,4.042,1.105Z"
                            style="fill: url(#i); fill-rule: evenodd"
                          ></path>
                          <path
                            id="l"
                            d="m48.466,54.541c2.064,0,3.812,1.357,4.398,3.228.154.46.237.952.237,1.463,0,2.218-.632,4.104-2.72,4.543-.307.065-1.561.065-1.888.065h-6.784c-.67,0-1.307-.143-1.882-.401-1.686-.685-2.876-2.339-2.876-4.271,0-2.474,1.95-4.493,4.397-4.603l6.664-.005.1-.005c.117-.009.235-.013.354-.013Z"
                            style="fill: url(#k)"
                          ></path>
                          <path
                            id="n"
                            d="m9.709,5.573c2.197,0,4.035,1.537,4.496,3.595.015.042.03.085.044.127l.024.074.014.04.031.088.034.089.018.044.024.055.034.079.027.058.048.098.049.098.023.042.025.047.085.156.021.037.028.047.058.1.125.206.131.205.105.158.038.056.012.018c.022.031.043.062.064.093.019.026.038.053.056.08l.025.036.062.087.055.078.039.054.108.145.023.031.037.049.078.104.221.286.021.026c.019.023.037.046.055.069.019.023.037.046.055.069.017.021.034.042.051.063l.12.147.069.086.202.241.034.04c.027.031.054.062.08.094l.025.03.04.045.039.046c.031.035.062.071.091.107l.013.015.019.021c.015.017.029.033.044.05.023.025.045.05.067.076.023.025.045.05.067.076.021.023.042.047.062.07l.037.042.032.035.167.186.168.182.045.05.044.047.047.052.06.062.092.099.036.037c.03.031.06.063.09.094l.035.037c.022.022.043.044.064.067.022.022.043.044.064.067l.025.026c.022.022.044.044.065.067.022.022.044.044.065.067l.051.052.052.054c.032.031.063.063.094.095l.037.037c.023.022.045.045.067.067l.049.048.057.058.049.048.088.088.049.048.05.051c.036.034.072.069.108.105.024.023.047.046.07.069l.032.031.055.053.064.063.066.063.107.104.072.067.115.111.073.069c.025.023.05.047.074.071l.113.107c.025.023.049.045.074.069.037.034.073.068.109.103l.018.017c.034.03.067.061.099.092l.051.047.05.046.105.098.049.044.104.097.043.039c.038.033.075.067.112.102l.277.25c.027.024.054.049.081.073l.051.046c.036.031.072.063.107.096.017.015.034.031.052.046.029.025.058.051.086.076.025.022.05.044.074.066.029.025.058.051.086.076.027.024.054.047.081.072l.048.042c.039.033.077.067.115.102l.128.112c.031.027.063.054.093.082.024.021.048.042.072.063l.06.053c.028.024.056.047.083.072.037.031.073.062.108.094l.058.051c.028.024.056.047.083.072.03.025.059.05.088.076l.05.043c.04.033.08.067.119.102.029.024.057.048.084.073l.05.043c.03.025.059.05.089.075.039.033.078.066.116.099l.031.027c.037.03.073.061.109.092l.067.056c.036.029.071.059.106.09l.067.056c.036.029.071.059.106.09l.067.056c.037.03.074.062.11.093l.034.028c.04.032.079.065.118.099l.057.047c.041.033.082.067.123.102l.054.045c.03.024.059.048.088.073.049.039.097.08.144.121.034.027.068.055.102.084l.083.068.12.1.03.025.037.03.089.073.155.129c.022.018.044.036.066.054l.026.022c.038.03.076.061.114.092.023.018.046.037.069.056.023.018.046.037.069.056.023.018.046.037.069.056.023.018.046.037.069.056.023.018.046.037.069.056l.035.028.061.05c.038.03.076.06.113.091.023.018.046.037.069.056l.037.03.06.049.057.045.083.067.055.044.015.012.055.044.015.012.06.047.081.067.055.044.015.012.119.094.094.077.046.037c.027.021.054.042.081.064l.015.012.042.033.1.081.101.079.089.071.055.043.089.071.036.028.091.071.089.071.055.043.089.071c.028.021.055.043.082.065l.062.049c.028.021.055.043.082.065l.062.049c.028.021.055.043.082.065l.062.049c.028.021.055.043.082.065.025.019.049.038.073.058l.028.021c.039.03.078.06.117.091l.028.023c.04.03.079.061.118.092.025.019.049.038.073.058l.028.021c.04.03.079.061.118.093l.102.079c.04.03.079.061.118.093l.036.028.037.029.074.056.107.085.129.1.018.014.056.043.057.045.074.056.107.085.056.043.018.014.114.087.107.085.056.043.018.014.04.031c.03.023.061.046.09.069l.018.014.056.043.018.014.056.043.018.014.04.031c.03.023.061.046.09.069l.018.014.037.028.093.072.018.014.053.041.062.047c.03.023.061.046.09.069l.018.014.056.043.018.014.053.041.062.047c.038.029.077.058.114.087l.048.037.039.03.11.085.062.047c.075.056.148.114.22.174.097.068.191.139.282.214.082.058.161.119.239.182.087.062.172.126.254.193.085.06.168.124.249.189.087.062.172.126.254.193.085.06.168.124.249.189.087.062.172.126.254.193.082.059.163.12.241.183.086.061.17.124.252.191.09.063.178.13.263.199.082.059.163.12.241.183.085.06.168.123.249.188.087.061.172.125.254.192.086.061.17.124.252.191.085.06.168.123.249.188.087.061.172.125.254.192.085.06.168.123.249.188.086.06.169.124.251.189.086.06.169.124.251.189.085.06.167.122.248.187.089.063.176.128.26.197.082.058.161.118.239.181.085.06.169.123.25.188.088.062.174.127.257.194.081.057.16.117.238.18.089.062.175.127.259.196.084.059.166.121.245.186.083.059.165.12.244.184.088.062.173.127.256.194.08.057.159.116.235.178.087.061.171.125.253.192.086.061.171.125.253.192.079.056.156.115.232.176.083.059.164.12.243.184.09.063.177.13.262.2.077.055.153.113.226.173.082.058.162.12.241.183.089.063.175.129.259.198.077.055.152.113.225.172.085.06.167.124.247.189.081.058.16.119.237.182.083.06.164.122.243.186.08.058.158.118.234.18.079.057.156.116.231.178.083.06.164.122.242.187.082.06.163.122.241.187.077.056.153.115.227.176.077.056.152.114.226.175.085.062.169.127.249.195.072.053.142.108.211.165.085.062.167.127.247.194.052.038.103.078.153.118l.054.044c.084.062.166.126.246.193.074.055.147.113.218.173.077.057.153.117.227.179.074.055.147.113.218.173.076.057.151.117.224.178.077.058.152.118.225.18.072.054.142.11.21.169.075.056.148.115.219.176.077.058.152.119.225.182.073.056.144.114.214.174.07.054.139.11.206.168.073.056.144.114.213.173.073.056.144.114.213.175.071.055.141.113.209.172.072.057.143.115.212.176.067.052.132.106.195.162.074.058.147.119.217.181.066.052.13.107.193.163.069.054.135.111.201.169.068.054.134.11.198.168.068.055.135.112.2.171.062.05.122.102.181.155.076.061.15.125.222.191.057.047.113.096.168.146l.02.017c.061.051.121.104.18.158.064.054.127.109.189.166.069.058.136.117.201.179.058.049.115.1.17.152.061.052.121.106.179.161.061.053.121.107.18.163.061.052.12.106.178.162.064.056.127.114.189.174.054.048.108.098.16.148.063.056.125.113.185.173.053.047.104.096.155.146.067.06.132.122.195.186.051.047.101.095.15.145.06.055.118.112.175.171.055.052.109.105.161.159.049.046.096.093.143.141.058.055.115.112.17.169.058.056.114.114.169.172.046.045.091.092.135.139.061.06.121.122.178.186.044.045.087.091.13.137.055.056.108.113.159.171.048.049.094.1.139.151.029.03.057.061.085.092.104.102.202.21.296.322.089.093.174.189.256.289.075.081.147.164.216.25.079.086.155.174.227.266.078.086.153.176.224.268.076.087.149.176.219.268.074.086.144.174.212.265.07.083.137.169.201.257.07.085.137.173.201.264.066.082.129.167.19.254.067.085.13.172.191.262.065.085.127.173.186.263.058.078.113.158.166.239.063.087.124.177.181.268.06.085.117.172.171.261.051.074.099.15.145.227l.013.022c.055.083.108.168.157.254.033.05.064.102.095.153l.049.084.037.061.044.075.022.037c.012.021.024.041.036.062.027.045.054.091.08.137l.019.032c.024.041.046.082.069.123.017.03.035.061.051.092.02.035.04.071.059.106.025.045.05.09.074.136l.032.059c.034.061.067.124.099.187l.034.066.065.131c.033.063.064.126.094.191l.028.057c.023.046.045.093.067.14.017.036.034.072.051.109l.031.067.057.126.056.127.059.139.056.136c.028.065.054.131.079.197l.048.124.049.132.047.13.044.125.036.105.016.047c.015.044.03.087.043.131l.039.128c.015.046.029.091.042.138l.056.199.035.129c.013.047.026.095.038.142l.018.076c.088.355.134.726.134,1.107,0,2.545-2.063,4.608-4.608,4.608-.875,0-1.693-.244-2.39-.667-1.069-.633-1.86-1.686-2.146-2.931l-.01-.036c-.009-.029-.017-.058-.025-.087-.01-.032-.02-.064-.029-.096l-.011-.033c-.017-.045-.032-.09-.048-.135l-.018-.049c-.016-.037-.031-.075-.045-.113-.018-.042-.036-.085-.053-.127l-.028-.063c-.022-.045-.043-.091-.063-.137-.018-.037-.036-.074-.054-.112-.018-.035-.036-.07-.053-.106-.024-.045-.048-.091-.071-.136-.022-.04-.044-.08-.065-.12-.029-.049-.056-.098-.083-.148l-.021-.035c-.027-.043-.054-.087-.08-.132l-.011-.018c-.02-.032-.041-.064-.06-.096-.018-.028-.036-.057-.054-.086l-.039-.062-.045-.067c-.017-.025-.033-.05-.049-.075-.021-.031-.042-.062-.063-.093l-.086-.126-.054-.079-.02-.028c-.016-.022-.031-.044-.047-.067-.021-.029-.041-.057-.061-.086l-.106-.147-.047-.064c-.024-.032-.048-.065-.072-.097l-.09-.12-.068-.089-.043-.058-.097-.125-.026-.033-.026-.033c-.025-.031-.049-.062-.073-.093l-.08-.101-.033-.042-.254-.312-.029-.034-.155-.186-.089-.105-.045-.054c-.035-.04-.07-.08-.104-.121l-.076-.088-.038-.043-.056-.065-.018-.02c-.026-.029-.052-.058-.077-.088l-.05-.056c-.024-.027-.048-.054-.072-.082l-.011-.013c-.036-.038-.07-.076-.105-.115-.036-.038-.072-.077-.107-.116-.031-.033-.062-.066-.093-.099-.044-.044-.086-.089-.128-.135-.029-.029-.057-.058-.084-.088-.046-.045-.09-.091-.134-.137-.035-.035-.07-.07-.105-.107-.038-.036-.074-.073-.111-.111-.049-.046-.096-.093-.143-.141-.044-.041-.086-.083-.128-.126-.041-.039-.081-.078-.12-.117-.051-.048-.102-.096-.151-.146-.038-.035-.075-.07-.111-.106-.053-.048-.105-.097-.156-.147l-.064-.059-.067-.064c-.035-.031-.07-.063-.105-.095l-.057-.054c-.046-.041-.092-.083-.136-.126-.052-.045-.103-.091-.152-.139-.053-.046-.105-.093-.156-.141-.055-.047-.109-.095-.161-.145-.058-.05-.115-.1-.171-.153-.051-.044-.101-.088-.151-.134-.056-.047-.111-.095-.165-.145-.054-.045-.106-.091-.158-.138l-.02-.017c-.059-.049-.117-.1-.174-.152-.049-.041-.097-.082-.145-.125-.065-.053-.128-.107-.19-.163-.059-.048-.118-.098-.175-.149-.062-.05-.122-.101-.181-.153-.062-.05-.124-.102-.183-.155-.066-.052-.13-.107-.193-.163-.059-.047-.117-.095-.173-.145-.068-.054-.135-.109-.2-.167-.063-.05-.125-.101-.186-.154-.066-.051-.13-.105-.193-.159-.066-.051-.13-.104-.193-.158-.067-.052-.133-.105-.197-.161-.07-.054-.139-.11-.206-.168-.069-.053-.136-.108-.202-.164-.066-.051-.131-.103-.195-.157-.069-.053-.137-.107-.203-.163-.074-.056-.146-.113-.216-.173-.07-.053-.138-.107-.204-.163-.071-.053-.141-.109-.209-.166-.074-.055-.147-.113-.218-.173-.072-.054-.142-.11-.211-.167-.076-.057-.151-.116-.223-.177-.068-.05-.134-.102-.199-.156l-.056-.042c-.062-.047-.123-.096-.183-.146-.069-.051-.136-.104-.202-.158-.082-.06-.163-.123-.241-.188-.07-.051-.138-.105-.205-.16-.079-.057-.156-.117-.231-.18-.08-.058-.157-.118-.233-.181-.075-.055-.149-.112-.221-.171-.076-.055-.15-.112-.222-.172-.081-.058-.16-.119-.237-.182-.08-.058-.158-.118-.234-.18-.078-.056-.154-.115-.228-.176-.081-.058-.16-.119-.237-.182-.078-.056-.153-.114-.227-.174-.086-.061-.17-.126-.251-.192-.07-.05-.138-.102-.205-.156l-.015-.012c-.077-.055-.153-.112-.226-.171l-.015-.012c-.088-.062-.173-.127-.256-.195-.075-.054-.149-.11-.221-.168-.083-.059-.164-.12-.243-.184-.087-.062-.172-.126-.255-.194-.08-.057-.159-.117-.235-.179-.081-.057-.16-.117-.237-.18-.088-.062-.173-.127-.256-.194-.08-.057-.159-.116-.235-.178-.085-.06-.168-.123-.249-.188-.086-.06-.169-.124-.25-.189-.081-.057-.16-.117-.238-.18-.089-.062-.175-.127-.259-.196-.082-.058-.163-.119-.241-.182-.085-.06-.169-.123-.25-.188-.089-.063-.176-.128-.26-.197-.082-.058-.161-.118-.239-.181-.087-.061-.171-.124-.253-.191-.086-.06-.169-.124-.251-.189-.086-.06-.169-.124-.251-.189-.087-.061-.172-.125-.254-.192-.085-.06-.168-.123-.249-.188-.087-.061-.172-.125-.254-.192-.086-.061-.17-.124-.252-.191-.085-.06-.168-.123-.249-.188-.087-.061-.172-.125-.254-.192-.09-.063-.178-.13-.263-.199-.082-.059-.163-.12-.241-.183-.086-.061-.17-.124-.252-.191-.09-.063-.178-.13-.263-.199-.085-.06-.168-.124-.249-.189-.087-.062-.172-.126-.254-.193-.085-.06-.168-.124-.249-.189-.087-.062-.172-.126-.254-.193-.085-.06-.168-.124-.249-.189-.09-.064-.178-.131-.263-.2-.101-.072-.199-.148-.294-.228-.041-.028-.081-.058-.121-.087l-.059-.045c-.029-.022-.059-.044-.087-.067l-.039-.03-.11-.085c-.036-.027-.071-.054-.106-.082l-.03-.023c-.029-.022-.059-.044-.087-.067-.026-.02-.053-.04-.078-.06l-.018-.014-.056-.043-.018-.014-.04-.031c-.029-.022-.059-.044-.087-.067-.026-.02-.053-.04-.078-.06l-.018-.014-.056-.043-.018-.014-.056-.043-.018-.014-.04-.031c-.03-.023-.061-.046-.09-.069l-.018-.014-.056-.043-.018-.014-.056-.043-.018-.014-.04-.031c-.03-.023-.061-.046-.09-.069l-.018-.014-.056-.043-.018-.014-.056-.043-.057-.045c-.03-.023-.061-.046-.09-.069l-.018-.014-.056-.043-.018-.014-.056-.043-.057-.045-.074-.056-.107-.085-.129-.1-.018-.014-.056-.043-.057-.045c-.05-.037-.099-.075-.147-.114-.025-.019-.049-.038-.073-.058l-.089-.069-.018-.014c-.038-.029-.076-.058-.113-.088l-.028-.021c-.04-.03-.079-.061-.118-.093-.025-.019-.049-.038-.073-.058l-.099-.077-.073-.059c-.04-.03-.079-.061-.118-.092-.025-.019-.049-.038-.073-.058l-.062-.049c-.028-.021-.055-.043-.082-.065l-.062-.049c-.028-.021-.055-.043-.082-.065l-.062-.049c-.028-.021-.055-.043-.082-.065l-.117-.092-.088-.071-.055-.043-.088-.071-.036-.028-.091-.071-.088-.071-.055-.043-.088-.071-.049-.038-.235-.188-.049-.038-.049-.039c-.039-.031-.078-.062-.116-.094l-.049-.038-.177-.142-.082-.067-.141-.113c-.037-.029-.074-.059-.111-.09l-.087-.069-.123-.101c-.023-.018-.046-.037-.069-.056l-.028-.023c-.037-.029-.074-.059-.111-.09-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056l-.095-.076-.111-.092c-.033-.026-.066-.054-.099-.081l-.067-.054-.1-.083-.053-.043-.121-.1-.083-.068-.052-.044c-.041-.034-.082-.068-.122-.103-.034-.027-.067-.055-.1-.082-.03-.024-.059-.048-.088-.073-.041-.033-.082-.067-.123-.102l-.054-.045c-.04-.032-.079-.065-.118-.099l-.057-.047c-.048-.039-.095-.078-.142-.119l-.064-.054c-.036-.029-.071-.059-.106-.09l-.067-.056c-.036-.029-.071-.059-.106-.09l-.067-.056c-.036-.029-.071-.059-.106-.09l-.062-.053c-.047-.038-.094-.078-.139-.118-.018-.015-.037-.031-.055-.047-.027-.023-.055-.046-.082-.069-.04-.033-.08-.067-.119-.102-.029-.024-.057-.048-.084-.073l-.05-.043c-.04-.033-.08-.067-.119-.102-.027-.023-.053-.045-.079-.069-.028-.024-.056-.047-.083-.072-.037-.031-.073-.062-.108-.094l-.058-.051c-.028-.024-.056-.047-.083-.072-.035-.03-.07-.06-.105-.091-.031-.026-.061-.053-.092-.08l-.036-.031-.118-.103c-.039-.034-.078-.068-.116-.102l-.047-.041c-.039-.034-.078-.068-.116-.102l-.028-.024-.053-.047-.028-.024-.045-.041c-.029-.025-.058-.051-.087-.077l-.028-.024-.045-.041-.054-.048-.105-.094-.054-.048-.364-.329c-.038-.034-.075-.068-.112-.102l-.042-.038c-.038-.034-.075-.068-.112-.102l-.025-.022c-.024-.022-.048-.044-.071-.066l-.056-.052-.025-.022c-.024-.022-.048-.044-.071-.066l-.051-.047-.05-.046-.101-.094c-.045-.04-.089-.082-.133-.124l-.039-.037c-.025-.023-.05-.046-.074-.069-.037-.033-.073-.067-.109-.102l-.022-.02-.052-.05c-.025-.023-.049-.046-.073-.07l-.022-.02-.051-.049-.022-.02-.086-.083-.065-.06-.118-.114-.064-.063-.067-.063-.098-.096-.055-.053-.155-.152-.069-.066-.107-.106-.049-.048-.088-.088-.064-.063-.1-.102c-.023-.022-.045-.045-.067-.067-.033-.032-.065-.064-.096-.097l-.037-.037c-.046-.045-.09-.09-.134-.137l-.027-.028c-.022-.022-.044-.044-.065-.067-.022-.022-.044-.044-.065-.067-.035-.035-.07-.071-.104-.107-.022-.022-.043-.044-.064-.067-.022-.022-.043-.044-.064-.067-.031-.031-.061-.064-.091-.096l-.036-.037c-.03-.031-.06-.063-.09-.094l-.046-.048-.051-.056-.06-.063-.092-.099c-.043-.045-.085-.09-.125-.136l-.194-.21-.167-.185c-.021-.023-.042-.047-.063-.07-.034-.037-.067-.074-.1-.112-.024-.027-.049-.054-.072-.082-.023-.025-.045-.05-.067-.076-.023-.025-.045-.05-.067-.076-.024-.026-.047-.053-.07-.08-.039-.044-.078-.089-.116-.134l-.08-.092c-.033-.037-.066-.075-.098-.113l-.053-.064-.045-.053-.199-.237-.078-.093-.047-.058c-.031-.037-.061-.074-.091-.112l-.087-.106c-.032-.039-.064-.078-.095-.118l-.012-.015c-.012-.015-.024-.03-.035-.045-.101-.11-.197-.225-.288-.344-.018-.022-.035-.045-.052-.068-.018-.022-.035-.045-.052-.068l-.028-.036-.067-.088-.119-.158-.055-.073-.078-.107-.049-.065c-.028-.037-.055-.074-.082-.112l-.027-.037-.064-.089-.055-.078-.055-.077c-.034-.047-.067-.094-.099-.142l-.054-.077-.059-.087-.046-.066-.074-.111-.027-.04-.053-.079-.101-.153-.122-.191c-.013-.02-.026-.04-.038-.06l-.027-.041-.062-.098-.176-.29-.054-.091-.084-.145-.033-.056-.099-.175-.034-.063-.017-.03c-.023-.041-.046-.083-.068-.126-.028-.049-.054-.099-.08-.149l-.036-.067-.06-.117-.103-.207-.107-.22-.078-.168-.041-.091-.044-.1-.033-.074-.056-.132-.09-.22-.081-.21-.043-.117c-.013-.035-.026-.07-.038-.105l-.006-.015-.032-.09-.071-.212-.038-.118-.042-.14c-.02-.063-.038-.126-.054-.19l-.016-.058-.026-.094-.046-.182-.026-.109-.008-.035c-.01-.043-.02-.086-.029-.13-.071-.321-.108-.654-.108-.996,0-2.545,2.063-4.608,4.608-4.608Z"
                            style="fill: url(#m)"
                          ></path>
                          <path
                            id="p"
                            d="m57.589,49.599c.858,1.685,1.314,3.202,1.36,5.187-.095,3.882-2.052,6.653-5.871,8.312-.846.387-2.067.625-3.663.714v.014s-.607.015-.607.015l-1.75.011h-3.699l-1.016-9.292,2.608.022h1.943c.446-.004.76-.011.94-.022.56-.034,1.123-.158,1.688-.372l1.693-1.001c2.697-1.585,4.775-2.757,6.235-3.516l.139-.071Z"
                            style="fill: url(#o); fill-rule: evenodd"
                          ></path>
                          <path
                            id="q"
                            d="m19.119,15.597c-2.42-2.35-4.013-4.362-4.778-6.035-.486-1.063-.171-2.128.189-3.118l1.362-1.875-.032-2.436c-.788-1.157-1.302-1.73-1.54-1.716-1.909.106-3.505.553-4.66,1.257-2.058,1.254-4.408,3.407-4.646,7.007-.238,3.599,1.695,6.917,5.165,10.855l6.19-2.925,2.751-1.013Z"
                            style="fill: #d70616; fill-rule: evenodd"
                          ></path>
                          <path
                            id="s"
                            d="m53.578,43.876c1.316,1.483,2.314,2.788,2.995,3.916,1.516,2.511,2.315,4.332,2.376,6.993-.095,3.882-2.052,6.653-5.871,8.312-4.115-3.609-5.977-5.537-5.586-5.783,2.223-1.399,2.253-2.336,2.14-2.756-.22-.817-.835-2.068-2.544-4.099l2.853-4.306,3.638-2.277Z"
                            style="fill: url(#r); fill-rule: evenodd"
                          ></path>
                          <path
                            id="u"
                            d="m47.965,9.628h.655c2.226.048,3.074,1.105,2.543,3.173-.584,2.612-.876,3.918-.876,3.918l-.617,3.721,1.685,2.013c2.372-2.276,4.184-4.499,5.438-6.669,1.877-3.167,2.757-5.748,1.855-9.126-.979-3.25-4.457-6.081-9.814-6.241h-.713s-.157,9.212-.157,9.212Z"
                            style="fill: url(#t); fill-rule: evenodd"
                          ></path>
                          <path
                            id="w"
                            d="m14.551.416h.082c.033,0,.065,0,.098.001h.098c.033-.001.065,0,.097,0h.097c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.097,0h.097c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.097,0l32.923.005.081.002.222.011.089.005.235.018c.041.003.083.007.124.011.043.004.087.008.13.012.047.005.093.01.139.016l.068.008.155.02c.045.006.09.012.134.018.05.007.101.014.151.022l.07.011.07.012c2.165.377,5.964,1.465,7.698,5.374.678,1.528-2.599,7.42-7.107,9.348.335-3.233.092-3.879-.253-4.7-.241-.389-.616-.655-1.126-.799l-.578-.132-.6-.048h-.037s-.025-.002-.025-.002H15.61c-.032,0-.065,0-.097,0h-.097c-.033.001-.065,0-.098,0h-.098c-.033.001-.065,0-.098,0h-.098c-.032.001-.065,0-.097,0h-.097c-.033.001-.065,0-.098,0h-.107s-.054.003-.054.003h-.012s-.031.004-.031.004c-.152.015-.306.023-.462.023-2.545,0-4.608-2.063-4.608-4.608,0-2.378,1.802-4.336,4.114-4.582l.151-.015.093-.008.195-.013.114-.007.137-.005.12-.004c.056-.002.113-.003.17-.003Z"
                            style="fill: url(#v)"
                          ></path>
                          <path
                            id="y"
                            d="m11.82,10.845c1.355-.809,2.331-1.213,2.927-1.213h9.965v.396V.419h-10.381c-1.575.046-3.131.515-4.669,1.407s-1.845,3.191-.922,6.897l1.001,2.66,2.079-.538Z"
                            style="fill: url(#x); fill-rule: evenodd"
                          ></path>
                          <path
                            id="aa"
                            d="m19.119,15.597c-2.42-2.35-4.013-4.362-4.778-6.035-.486-1.063-.171-2.128.189-3.118l1.362-1.875-.032-2.436c-.788-1.157-1.302-1.73-1.54-1.716-1.909.106-3.505.553-4.66,1.257-2.058,1.254-4.408,3.407-4.646,7.007-.238,3.599,1.695,6.917,5.165,10.855l6.19-2.925,2.751-1.013Z"
                            style="fill: url(#z); fill-rule: evenodd"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="modules-right-sidebar-pangu-icon-hover modules-right-sidebar-pangu-icon-animation"></div>
                    <div class="modules-right-sidebar-pangu-icon-active modules-right-sidebar-pangu-icon-animation"></div>
                  </div>
                </div>
              </div>
              <div class="modules-right-sidebar-icon-item-wrapper">
                <div class="modules-right-sidebar-right-sidebar-menu-item-svg-item" id="cf_J_rightSidebar_helpCenter">
                  <div class="modules-right-sidebar-right-sidebar-menu-item-svg-wrapper">
                    <div class="modules-right-sidebar-right-sidebar-menu-item-svg">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 22 22"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1891.000000, -89.000000)">
                            <g transform="translate(1884.000000, 48.000000)">
                              <g transform="translate(6.000000, 40.000000)">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle stroke="#191919" cx="12" cy="12" r="9.75"></circle>
                                <path
                                  d="M11.9678069,14.4962687 L11.9678069,12.6598148 C13.3997747,12.6598148 14.5606139,11.5047509 14.5606139,10.0799074 C14.5606139,8.65506388 13.3997747,7.5 11.9678069,7.5 C10.5358392,7.5 9.375,8.65506388 9.375,10.0799074"
                                  stroke="#191919"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <ellipse fill="#191919" cx="11.90625" cy="16.7350746" rx="1" ry="1"></ellipse>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modules-right-sidebar-icon-item-wrapper">
                <div class="modules-right-sidebar-right-sidebar-menu-item-svg-item" id="cf_J_rightSidebar_nps">
                  <div class="modules-right-sidebar-npsIcon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <circle fill="none" stroke="#000" stroke-miterlimit="10" cx="12" cy="12" r="9.5"></circle>
                      <ellipse stroke-width="0px" cx="9" cy="9" rx="1" ry="1.5"></ellipse>
                      <ellipse stroke-width="0px" cx="14.9" cy="9" rx="1" ry="1.5"></ellipse>
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        d="m7.75,13.62s1.19,1.88,4.21,1.88,4.3-1.88,4.3-1.88"
                      ></path>
                    </svg>
                  </div>
                  <div class="modules-right-sidebar-npsIcon-gif-icon modules-right-sidebar-npsIcon-gif-animate-active-start-delay"></div>
                </div>
              </div>
            </div>
            <div class="modules-right-sidebar-bottom">
              <div class="modules-right-sidebar-icon-item-wrapper">
                <div class="modules-right-sidebar-right-sidebar-menu-item-svg-item" id="cf_J_rightSidebar_intelligentService">
                  <div class="modules-right-sidebar-right-sidebar-menu-item-svg-wrapper">
                    <div class="modules-right-sidebar-right-sidebar-menu-item-svg">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 22 22"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1891.000000, -993.000000)" stroke="#191919">
                            <g transform="translate(1884.000000, 48.000000)">
                              <g transform="translate(6.000000, 944.000000)">
                                <g transform="translate(2.370000, 2.370000)">
                                  <g transform="translate(-0.000000, -0.000000)">
                                    <path
                                      d="M16.05,8.8275 L16.05,6.42 C16.05,2.87433191 13.1756681,0 9.63,0 C6.08433191,0 3.21,2.87433191 3.21,6.42 L3.21,8.8275"
                                      stroke-linecap="round"
                                    ></path>
                                    <path
                                      d="M1.07,7.2225 L3.21,7.2225 L3.21,7.2225 L3.21,13.6425 L1.07,13.6425 C0.479055318,13.6425 5.97234165e-16,13.1634447 0,12.5725 L0,8.2925 C-7.23698514e-17,7.70155532 0.479055318,7.2225 1.07,7.2225 Z"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M16.05,7.2225 L18.19,7.2225 C18.7809447,7.2225 19.26,7.70155532 19.26,8.2925 L19.26,12.5725 C19.26,13.1634447 18.7809447,13.6425 18.19,13.6425 L16.05,13.6425 L16.05,13.6425 L16.05,7.2225 Z"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M16.7904073,16.6839512 C16.0413796,13.9691375 13.5540445,11.9754073 10.6010488,11.9754073"
                                      stroke-linecap="round"
                                      transform="translate(13.695728, 14.329679) rotate(-270.000000) translate(-13.695728, -14.329679) "
                                    ></path>
                                    <circle cx="9.63" cy="17.655" r="1.605"></circle>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modules-right-sidebar-float-right-sidebar modules-right-sidebar-hide-state-plugin-container">
          <div class="modules-right-sidebar-hide-state-plugin">
            <div class="modules-right-sidebar-right-sidebar-menu-item-svg-item" id="cf_J_rightSidebar_pangu">
              <div class="modules-right-sidebar-pangu-icon-default">
                <div class="modules-right-sidebar-pangu-icon-svg">
                  <!--?xml version="1.0" encoding="UTF-8"?--><svg
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 64 64"
                  >
                    <defs>
                      <linearGradient
                        id="c"
                        x1="-250.621"
                        y1="412.011"
                        x2="-249.763"
                        y2="411.965"
                        gradientTransform="translate(4655.918 4026.867) scale(18.537 -9.631)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#15f78e"></stop>
                        <stop offset="1" stop-color="#16f36c"></stop>
                      </linearGradient>
                      <linearGradient
                        id="e"
                        x1="-258.935"
                        y1="445.236"
                        x2="-259.609"
                        y2="444.662"
                        gradientTransform="translate(13152.393 23208.859) scale(50.6 -52.104)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#3608fc"></stop>
                        <stop offset=".08" stop-color="#2d19fb"></stop>
                        <stop offset=".3" stop-color="#297df4"></stop>
                        <stop offset=".496" stop-color="#3ab4f3"></stop>
                        <stop offset="1" stop-color="#2ddbe4"></stop>
                      </linearGradient>
                      <linearGradient
                        id="g"
                        x1="-244.583"
                        y1="434.765"
                        x2="-244.64"
                        y2="434.063"
                        gradientTransform="translate(3269.012 9418.854) scale(13.316 -21.563)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#2ed8e6"></stop>
                        <stop offset=".265" stop-color="#22e1dd"></stop>
                        <stop offset=".503" stop-color="#19f1c9"></stop>
                        <stop offset=".661" stop-color="#15f699"></stop>
                        <stop offset=".817" stop-color="#15f791"></stop>
                        <stop offset="1" stop-color="#16f57b"></stop>
                      </linearGradient>
                      <linearGradient
                        id="i"
                        x1="-248.042"
                        y1="434.307"
                        x2="-247.9"
                        y2="433.888"
                        gradientTransform="translate(3981.835 9292.189) scale(16.006 -21.283)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#24dfe0" stop-opacity="0"></stop>
                        <stop offset="1" stop-color="#16f57b"></stop>
                      </linearGradient>
                      <linearGradient
                        id="k"
                        x1="-247.646"
                        y1="410.558"
                        x2="-248.549"
                        y2="410.558"
                        gradientTransform="translate(4051.638 3877.056) scale(16.15 -9.299)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#f89d10"></stop>
                        <stop offset=".235" stop-color="#febc11"></stop>
                        <stop offset=".441" stop-color="#ffc112"></stop>
                        <stop offset="1" stop-color="#ffbc12"></stop>
                      </linearGradient>
                      <linearGradient
                        id="m"
                        x1="-259.87"
                        y1="445.422"
                        x2="-259.244"
                        y2="444.55"
                        gradientTransform="translate(13974.629 23450.326) scale(53.715 -52.626)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#d70901"></stop>
                        <stop offset=".079" stop-color="#e52505"></stop>
                        <stop offset=".137" stop-color="#e92a04"></stop>
                        <stop offset=".481" stop-color="#f94905"></stop>
                        <stop offset="1" stop-color="#f89d10"></stop>
                      </linearGradient>
                      <linearGradient
                        id="o"
                        x1="-248.518"
                        y1="425.057"
                        x2="-248.941"
                        y2="424.958"
                        gradientTransform="translate(4177.832 6115.238) scale(16.606 -14.252)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#feb810"></stop>
                        <stop offset="1" stop-color="#ffbe12"></stop>
                      </linearGradient>
                      <linearGradient
                        id="r"
                        x1="-242.129"
                        y1="432.296"
                        x2="-242.237"
                        y2="431.866"
                        gradientTransform="translate(2925.294 8360.001) scale(11.861 -19.221)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#f88a0d"></stop>
                        <stop offset=".552" stop-color="#fba20e"></stop>
                        <stop offset=".87" stop-color="#fba20e" stop-opacity=".112"></stop>
                        <stop offset="1" stop-color="#fdb20e" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient
                        id="t"
                        x1="-240.671"
                        y1="435.108"
                        x2="-240.413"
                        y2="434.6"
                        gradientTransform="translate(2708.468 9591.705) scale(11.04 -22.037)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#810cea"></stop>
                        <stop offset=".471" stop-color="#370afb"></stop>
                        <stop offset=".786" stop-color="#330efc" stop-opacity="0"></stop>
                        <stop offset=".997" stop-color="#3608fc" stop-opacity="0"></stop>
                        <stop offset="1" stop-color="#2e40f9" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient
                        id="v"
                        x1="-259.506"
                        y1="426.343"
                        x2="-258.686"
                        y2="426.27"
                        gradientTransform="translate(12734.871 6358.142) scale(49.02 -14.897)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#dd0113" stop-opacity=".008"></stop>
                        <stop offset=".031" stop-color="#df0019"></stop>
                        <stop offset=".14" stop-color="#dc052e"></stop>
                        <stop offset=".231" stop-color="#d80a45"></stop>
                        <stop offset=".471" stop-color="#ce1881"></stop>
                        <stop offset=".686" stop-color="#bb21c4"></stop>
                        <stop offset=".79" stop-color="#a117d9"></stop>
                        <stop offset=".853" stop-color="#840ee8"></stop>
                        <stop offset=".901" stop-color="#840ee8" stop-opacity=".524"></stop>
                        <stop offset=".961" stop-color="#840ee8" stop-opacity="0"></stop>
                        <stop offset="1" stop-color="#6102fa" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient
                        id="x"
                        x1="-248.9"
                        y1="416.909"
                        x2="-247.951"
                        y2="416.909"
                        gradientTransform="translate(4113.381 4576.745) scale(16.491 -10.964)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#d1050f" stop-opacity="0"></stop>
                        <stop offset=".298" stop-color="#cd0906"></stop>
                        <stop offset=".736" stop-color="#d40825"></stop>
                        <stop offset="1" stop-color="#d9083e" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient
                        id="z"
                        x1="-245.862"
                        y1="432.258"
                        x2="-245.693"
                        y2="431.76"
                        gradientTransform="translate(3483.195 8270.102) scale(14.125 -19.119)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#dd0113" stop-opacity="0"></stop>
                        <stop offset=".404" stop-color="#d70901"></stop>
                        <stop offset="1" stop-color="#e82905"></stop>
                      </linearGradient>
                    </defs>
                    <g id="b">
                      <path
                        id="d"
                        d="m13.878,54.209c.36,0,.709.041,1.045.119l.413.111.232.054.271.046.232.02h6.162s.169-.003.169-.003h.111s.111.005.111.005c2.511.039,4.534,2.086,4.534,4.607,0,1.708-.929,3.199-2.31,3.995-.7.429-1.524.677-2.406.677-.053,0-2.779-.007-8.18-.021l-.137-.009-.274-.025-.376-.046-.2-.03-.307-.054-.302-.062-.213-.049-.407-.108-.129-.04c-1.907-.564-3.297-2.329-3.297-4.418,0-1.813,1.047-3.381,2.569-4.133.442-.229.925-.389,1.435-.465.397-.111.817-.171,1.25-.171Z"
                        style="fill: url(#c)"
                      ></path>
                      <path
                        id="f"
                        d="m45.323,1.613l5.296-1.034.472.083c.442.081.795.158,1.058.23l.124.036c.413.124,1.006.353,1.78.687,2.402,1.155,3.984,3.018,4.594,5.044.682,2.556.344,4.657-.674,6.9l-.143.307c-.191.4-.467.932-.634,1.229l-.404.691-.063.1-.013.024c-.738,1.252-1.56,2.403-2.465,3.453-.286.332-.578.662-.876.99l-.937,1.007-.549.562c-.9.915-1.845,1.81-2.834,2.684l-.059.049-.077.071-1.382,1.213-1.269,1.079-.734.613-.095.081-.584.48c-.053.045-.107.09-.162.133l-.09.075-.693.564-.244.195-.444.36-1.593,1.27-1.511,1.184c-.063.052-.127.102-.192.15-.057.047-.116.093-.176.137-.06.049-.121.097-.184.143l-.096.076-.441.34-.138.109-.075.056c-.071.058-.141.11-.211.161l-.215.171-1.884,1.445-3.486,2.648-.071.055-2.42,1.831-.094.07-.287.218c-.043.033-.087.066-.132.097l-.241.186-3.404,2.592-.586.452-.17.129-.542.421c-.242.25-.511.474-.804.664-.19.177-.394.338-.612.482-.185.173-.385.331-.597.472-.176.165-.365.316-.565.452-.173.163-.358.314-.555.449-.166.157-.343.302-.531.434-.159.152-.33.293-.509.422-.151.146-.312.281-.482.405-.141.137-.29.265-.448.383-.137.136-.283.263-.437.381-.127.126-.26.245-.401.356-.114.116-.234.225-.36.329-.108.112-.222.219-.341.32-.097.102-.198.201-.304.294-.081.089-.166.174-.255.257-.074.083-.15.164-.229.242-.067.079-.137.156-.209.23-.071.087-.145.171-.221.252-.066.082-.134.161-.205.238-.065.083-.132.163-.202.241-.25.327-.542.621-.87.871-.796.656-1.816,1.049-2.928,1.049-2.545,0-4.608-2.063-4.608-4.608,0-1.039.344-1.997.923-2.768l.223-.282.418-.502.299-.348.51-.576.278-.298.327-.338.276-.275.385-.373.742-.689,1.011-.894,1.306-1.105,1.531-1.248,1.663-1.319,1.752-1.363.958-.736.082-.064,3.168-2.411c.067-.053.135-.105.205-.155l.085-.067,2.445-1.849.071-.055,5.716-4.355c.065-.052.132-.103.2-.152l.176-.139.76-.587.087-.07.437-.339.192-.15c.054-.044.109-.087.165-.129l.097-.078.764-.598c.067-.056.135-.109.204-.161l1.838-1.466.084-.069.576-.465.084-.07.718-.587,1.089-.905,1.048-.889.511-.443.852-.758.696-.629c.222-.202.434-.397.636-.585l.694-.652.752-.745.638-.665.499-.551.314-.365.231-.281.505-.636.201-.261.331-.449.101-.142.108-.16c.336-.505.585-.946.82-1.383l.371-.703c.005-.009-.45-.137-1.661-.104-.488-.682-.773-1.751-.854-3.205.011-.06-.446-.239-.952-.419l-.588-.202c-.4-.134-.721-.236-.72-.237l2.842-.496-2.306-3.464Z"
                        style="fill: url(#e)"
                      ></path>
                      <path
                        id="h"
                        d="m18.093,49.326c-.916.946-1.657,1.832-2.225,2.657s-.983,1.562-1.248,2.211c-.263.438-.37,1.101-.322,1.991.073,1.334.575,2.638.575,2.638l2.213,5.017h-2.213c-3.517-.073-6.314-1.547-8.392-4.424-1.406-2.378-1.689-4.918-.848-7.621.609-1.763,1.432-3.381,2.469-4.853,1.332-1.837,2.428-3.16,3.289-3.969s3.222-.914,7.086-.315l-.386,6.667Z"
                        style="fill: url(#g); fill-rule: evenodd"
                      ></path>
                      <path
                        id="j"
                        d="m15.434,44.079c-1.149,2.272-1.723,4.758-1.723,7.46.091,1.013.394,1.898.909,2.655.201.23,1.193.356,2.975.379h3.573l-1.219,9.267h-5.075c-3.517-.073-6.314-1.547-8.392-4.424-1.406-2.378-1.689-4.918-.848-7.621.609-1.763,1.432-3.381,2.469-4.853,1.332-1.837,2.428-3.16,3.289-3.969s2.208-.44,4.042,1.105Z"
                        style="fill: url(#i); fill-rule: evenodd"
                      ></path>
                      <path
                        id="l"
                        d="m48.466,54.541c2.064,0,3.812,1.357,4.398,3.228.154.46.237.952.237,1.463,0,2.218-.632,4.104-2.72,4.543-.307.065-1.561.065-1.888.065h-6.784c-.67,0-1.307-.143-1.882-.401-1.686-.685-2.876-2.339-2.876-4.271,0-2.474,1.95-4.493,4.397-4.603l6.664-.005.1-.005c.117-.009.235-.013.354-.013Z"
                        style="fill: url(#k)"
                      ></path>
                      <path
                        id="n"
                        d="m9.709,5.573c2.197,0,4.035,1.537,4.496,3.595.015.042.03.085.044.127l.024.074.014.04.031.088.034.089.018.044.024.055.034.079.027.058.048.098.049.098.023.042.025.047.085.156.021.037.028.047.058.1.125.206.131.205.105.158.038.056.012.018c.022.031.043.062.064.093.019.026.038.053.056.08l.025.036.062.087.055.078.039.054.108.145.023.031.037.049.078.104.221.286.021.026c.019.023.037.046.055.069.019.023.037.046.055.069.017.021.034.042.051.063l.12.147.069.086.202.241.034.04c.027.031.054.062.08.094l.025.03.04.045.039.046c.031.035.062.071.091.107l.013.015.019.021c.015.017.029.033.044.05.023.025.045.05.067.076.023.025.045.05.067.076.021.023.042.047.062.07l.037.042.032.035.167.186.168.182.045.05.044.047.047.052.06.062.092.099.036.037c.03.031.06.063.09.094l.035.037c.022.022.043.044.064.067.022.022.043.044.064.067l.025.026c.022.022.044.044.065.067.022.022.044.044.065.067l.051.052.052.054c.032.031.063.063.094.095l.037.037c.023.022.045.045.067.067l.049.048.057.058.049.048.088.088.049.048.05.051c.036.034.072.069.108.105.024.023.047.046.07.069l.032.031.055.053.064.063.066.063.107.104.072.067.115.111.073.069c.025.023.05.047.074.071l.113.107c.025.023.049.045.074.069.037.034.073.068.109.103l.018.017c.034.03.067.061.099.092l.051.047.05.046.105.098.049.044.104.097.043.039c.038.033.075.067.112.102l.277.25c.027.024.054.049.081.073l.051.046c.036.031.072.063.107.096.017.015.034.031.052.046.029.025.058.051.086.076.025.022.05.044.074.066.029.025.058.051.086.076.027.024.054.047.081.072l.048.042c.039.033.077.067.115.102l.128.112c.031.027.063.054.093.082.024.021.048.042.072.063l.06.053c.028.024.056.047.083.072.037.031.073.062.108.094l.058.051c.028.024.056.047.083.072.03.025.059.05.088.076l.05.043c.04.033.08.067.119.102.029.024.057.048.084.073l.05.043c.03.025.059.05.089.075.039.033.078.066.116.099l.031.027c.037.03.073.061.109.092l.067.056c.036.029.071.059.106.09l.067.056c.036.029.071.059.106.09l.067.056c.037.03.074.062.11.093l.034.028c.04.032.079.065.118.099l.057.047c.041.033.082.067.123.102l.054.045c.03.024.059.048.088.073.049.039.097.08.144.121.034.027.068.055.102.084l.083.068.12.1.03.025.037.03.089.073.155.129c.022.018.044.036.066.054l.026.022c.038.03.076.061.114.092.023.018.046.037.069.056.023.018.046.037.069.056.023.018.046.037.069.056.023.018.046.037.069.056.023.018.046.037.069.056l.035.028.061.05c.038.03.076.06.113.091.023.018.046.037.069.056l.037.03.06.049.057.045.083.067.055.044.015.012.055.044.015.012.06.047.081.067.055.044.015.012.119.094.094.077.046.037c.027.021.054.042.081.064l.015.012.042.033.1.081.101.079.089.071.055.043.089.071.036.028.091.071.089.071.055.043.089.071c.028.021.055.043.082.065l.062.049c.028.021.055.043.082.065l.062.049c.028.021.055.043.082.065l.062.049c.028.021.055.043.082.065.025.019.049.038.073.058l.028.021c.039.03.078.06.117.091l.028.023c.04.03.079.061.118.092.025.019.049.038.073.058l.028.021c.04.03.079.061.118.093l.102.079c.04.03.079.061.118.093l.036.028.037.029.074.056.107.085.129.1.018.014.056.043.057.045.074.056.107.085.056.043.018.014.114.087.107.085.056.043.018.014.04.031c.03.023.061.046.09.069l.018.014.056.043.018.014.056.043.018.014.04.031c.03.023.061.046.09.069l.018.014.037.028.093.072.018.014.053.041.062.047c.03.023.061.046.09.069l.018.014.056.043.018.014.053.041.062.047c.038.029.077.058.114.087l.048.037.039.03.11.085.062.047c.075.056.148.114.22.174.097.068.191.139.282.214.082.058.161.119.239.182.087.062.172.126.254.193.085.06.168.124.249.189.087.062.172.126.254.193.085.06.168.124.249.189.087.062.172.126.254.193.082.059.163.12.241.183.086.061.17.124.252.191.09.063.178.13.263.199.082.059.163.12.241.183.085.06.168.123.249.188.087.061.172.125.254.192.086.061.17.124.252.191.085.06.168.123.249.188.087.061.172.125.254.192.085.06.168.123.249.188.086.06.169.124.251.189.086.06.169.124.251.189.085.06.167.122.248.187.089.063.176.128.26.197.082.058.161.118.239.181.085.06.169.123.25.188.088.062.174.127.257.194.081.057.16.117.238.18.089.062.175.127.259.196.084.059.166.121.245.186.083.059.165.12.244.184.088.062.173.127.256.194.08.057.159.116.235.178.087.061.171.125.253.192.086.061.171.125.253.192.079.056.156.115.232.176.083.059.164.12.243.184.09.063.177.13.262.2.077.055.153.113.226.173.082.058.162.12.241.183.089.063.175.129.259.198.077.055.152.113.225.172.085.06.167.124.247.189.081.058.16.119.237.182.083.06.164.122.243.186.08.058.158.118.234.18.079.057.156.116.231.178.083.06.164.122.242.187.082.06.163.122.241.187.077.056.153.115.227.176.077.056.152.114.226.175.085.062.169.127.249.195.072.053.142.108.211.165.085.062.167.127.247.194.052.038.103.078.153.118l.054.044c.084.062.166.126.246.193.074.055.147.113.218.173.077.057.153.117.227.179.074.055.147.113.218.173.076.057.151.117.224.178.077.058.152.118.225.18.072.054.142.11.21.169.075.056.148.115.219.176.077.058.152.119.225.182.073.056.144.114.214.174.07.054.139.11.206.168.073.056.144.114.213.173.073.056.144.114.213.175.071.055.141.113.209.172.072.057.143.115.212.176.067.052.132.106.195.162.074.058.147.119.217.181.066.052.13.107.193.163.069.054.135.111.201.169.068.054.134.11.198.168.068.055.135.112.2.171.062.05.122.102.181.155.076.061.15.125.222.191.057.047.113.096.168.146l.02.017c.061.051.121.104.18.158.064.054.127.109.189.166.069.058.136.117.201.179.058.049.115.1.17.152.061.052.121.106.179.161.061.053.121.107.18.163.061.052.12.106.178.162.064.056.127.114.189.174.054.048.108.098.16.148.063.056.125.113.185.173.053.047.104.096.155.146.067.06.132.122.195.186.051.047.101.095.15.145.06.055.118.112.175.171.055.052.109.105.161.159.049.046.096.093.143.141.058.055.115.112.17.169.058.056.114.114.169.172.046.045.091.092.135.139.061.06.121.122.178.186.044.045.087.091.13.137.055.056.108.113.159.171.048.049.094.1.139.151.029.03.057.061.085.092.104.102.202.21.296.322.089.093.174.189.256.289.075.081.147.164.216.25.079.086.155.174.227.266.078.086.153.176.224.268.076.087.149.176.219.268.074.086.144.174.212.265.07.083.137.169.201.257.07.085.137.173.201.264.066.082.129.167.19.254.067.085.13.172.191.262.065.085.127.173.186.263.058.078.113.158.166.239.063.087.124.177.181.268.06.085.117.172.171.261.051.074.099.15.145.227l.013.022c.055.083.108.168.157.254.033.05.064.102.095.153l.049.084.037.061.044.075.022.037c.012.021.024.041.036.062.027.045.054.091.08.137l.019.032c.024.041.046.082.069.123.017.03.035.061.051.092.02.035.04.071.059.106.025.045.05.09.074.136l.032.059c.034.061.067.124.099.187l.034.066.065.131c.033.063.064.126.094.191l.028.057c.023.046.045.093.067.14.017.036.034.072.051.109l.031.067.057.126.056.127.059.139.056.136c.028.065.054.131.079.197l.048.124.049.132.047.13.044.125.036.105.016.047c.015.044.03.087.043.131l.039.128c.015.046.029.091.042.138l.056.199.035.129c.013.047.026.095.038.142l.018.076c.088.355.134.726.134,1.107,0,2.545-2.063,4.608-4.608,4.608-.875,0-1.693-.244-2.39-.667-1.069-.633-1.86-1.686-2.146-2.931l-.01-.036c-.009-.029-.017-.058-.025-.087-.01-.032-.02-.064-.029-.096l-.011-.033c-.017-.045-.032-.09-.048-.135l-.018-.049c-.016-.037-.031-.075-.045-.113-.018-.042-.036-.085-.053-.127l-.028-.063c-.022-.045-.043-.091-.063-.137-.018-.037-.036-.074-.054-.112-.018-.035-.036-.07-.053-.106-.024-.045-.048-.091-.071-.136-.022-.04-.044-.08-.065-.12-.029-.049-.056-.098-.083-.148l-.021-.035c-.027-.043-.054-.087-.08-.132l-.011-.018c-.02-.032-.041-.064-.06-.096-.018-.028-.036-.057-.054-.086l-.039-.062-.045-.067c-.017-.025-.033-.05-.049-.075-.021-.031-.042-.062-.063-.093l-.086-.126-.054-.079-.02-.028c-.016-.022-.031-.044-.047-.067-.021-.029-.041-.057-.061-.086l-.106-.147-.047-.064c-.024-.032-.048-.065-.072-.097l-.09-.12-.068-.089-.043-.058-.097-.125-.026-.033-.026-.033c-.025-.031-.049-.062-.073-.093l-.08-.101-.033-.042-.254-.312-.029-.034-.155-.186-.089-.105-.045-.054c-.035-.04-.07-.08-.104-.121l-.076-.088-.038-.043-.056-.065-.018-.02c-.026-.029-.052-.058-.077-.088l-.05-.056c-.024-.027-.048-.054-.072-.082l-.011-.013c-.036-.038-.07-.076-.105-.115-.036-.038-.072-.077-.107-.116-.031-.033-.062-.066-.093-.099-.044-.044-.086-.089-.128-.135-.029-.029-.057-.058-.084-.088-.046-.045-.09-.091-.134-.137-.035-.035-.07-.07-.105-.107-.038-.036-.074-.073-.111-.111-.049-.046-.096-.093-.143-.141-.044-.041-.086-.083-.128-.126-.041-.039-.081-.078-.12-.117-.051-.048-.102-.096-.151-.146-.038-.035-.075-.07-.111-.106-.053-.048-.105-.097-.156-.147l-.064-.059-.067-.064c-.035-.031-.07-.063-.105-.095l-.057-.054c-.046-.041-.092-.083-.136-.126-.052-.045-.103-.091-.152-.139-.053-.046-.105-.093-.156-.141-.055-.047-.109-.095-.161-.145-.058-.05-.115-.1-.171-.153-.051-.044-.101-.088-.151-.134-.056-.047-.111-.095-.165-.145-.054-.045-.106-.091-.158-.138l-.02-.017c-.059-.049-.117-.1-.174-.152-.049-.041-.097-.082-.145-.125-.065-.053-.128-.107-.19-.163-.059-.048-.118-.098-.175-.149-.062-.05-.122-.101-.181-.153-.062-.05-.124-.102-.183-.155-.066-.052-.13-.107-.193-.163-.059-.047-.117-.095-.173-.145-.068-.054-.135-.109-.2-.167-.063-.05-.125-.101-.186-.154-.066-.051-.13-.105-.193-.159-.066-.051-.13-.104-.193-.158-.067-.052-.133-.105-.197-.161-.07-.054-.139-.11-.206-.168-.069-.053-.136-.108-.202-.164-.066-.051-.131-.103-.195-.157-.069-.053-.137-.107-.203-.163-.074-.056-.146-.113-.216-.173-.07-.053-.138-.107-.204-.163-.071-.053-.141-.109-.209-.166-.074-.055-.147-.113-.218-.173-.072-.054-.142-.11-.211-.167-.076-.057-.151-.116-.223-.177-.068-.05-.134-.102-.199-.156l-.056-.042c-.062-.047-.123-.096-.183-.146-.069-.051-.136-.104-.202-.158-.082-.06-.163-.123-.241-.188-.07-.051-.138-.105-.205-.16-.079-.057-.156-.117-.231-.18-.08-.058-.157-.118-.233-.181-.075-.055-.149-.112-.221-.171-.076-.055-.15-.112-.222-.172-.081-.058-.16-.119-.237-.182-.08-.058-.158-.118-.234-.18-.078-.056-.154-.115-.228-.176-.081-.058-.16-.119-.237-.182-.078-.056-.153-.114-.227-.174-.086-.061-.17-.126-.251-.192-.07-.05-.138-.102-.205-.156l-.015-.012c-.077-.055-.153-.112-.226-.171l-.015-.012c-.088-.062-.173-.127-.256-.195-.075-.054-.149-.11-.221-.168-.083-.059-.164-.12-.243-.184-.087-.062-.172-.126-.255-.194-.08-.057-.159-.117-.235-.179-.081-.057-.16-.117-.237-.18-.088-.062-.173-.127-.256-.194-.08-.057-.159-.116-.235-.178-.085-.06-.168-.123-.249-.188-.086-.06-.169-.124-.25-.189-.081-.057-.16-.117-.238-.18-.089-.062-.175-.127-.259-.196-.082-.058-.163-.119-.241-.182-.085-.06-.169-.123-.25-.188-.089-.063-.176-.128-.26-.197-.082-.058-.161-.118-.239-.181-.087-.061-.171-.124-.253-.191-.086-.06-.169-.124-.251-.189-.086-.06-.169-.124-.251-.189-.087-.061-.172-.125-.254-.192-.085-.06-.168-.123-.249-.188-.087-.061-.172-.125-.254-.192-.086-.061-.17-.124-.252-.191-.085-.06-.168-.123-.249-.188-.087-.061-.172-.125-.254-.192-.09-.063-.178-.13-.263-.199-.082-.059-.163-.12-.241-.183-.086-.061-.17-.124-.252-.191-.09-.063-.178-.13-.263-.199-.085-.06-.168-.124-.249-.189-.087-.062-.172-.126-.254-.193-.085-.06-.168-.124-.249-.189-.087-.062-.172-.126-.254-.193-.085-.06-.168-.124-.249-.189-.09-.064-.178-.131-.263-.2-.101-.072-.199-.148-.294-.228-.041-.028-.081-.058-.121-.087l-.059-.045c-.029-.022-.059-.044-.087-.067l-.039-.03-.11-.085c-.036-.027-.071-.054-.106-.082l-.03-.023c-.029-.022-.059-.044-.087-.067-.026-.02-.053-.04-.078-.06l-.018-.014-.056-.043-.018-.014-.04-.031c-.029-.022-.059-.044-.087-.067-.026-.02-.053-.04-.078-.06l-.018-.014-.056-.043-.018-.014-.056-.043-.018-.014-.04-.031c-.03-.023-.061-.046-.09-.069l-.018-.014-.056-.043-.018-.014-.056-.043-.018-.014-.04-.031c-.03-.023-.061-.046-.09-.069l-.018-.014-.056-.043-.018-.014-.056-.043-.057-.045c-.03-.023-.061-.046-.09-.069l-.018-.014-.056-.043-.018-.014-.056-.043-.057-.045-.074-.056-.107-.085-.129-.1-.018-.014-.056-.043-.057-.045c-.05-.037-.099-.075-.147-.114-.025-.019-.049-.038-.073-.058l-.089-.069-.018-.014c-.038-.029-.076-.058-.113-.088l-.028-.021c-.04-.03-.079-.061-.118-.093-.025-.019-.049-.038-.073-.058l-.099-.077-.073-.059c-.04-.03-.079-.061-.118-.092-.025-.019-.049-.038-.073-.058l-.062-.049c-.028-.021-.055-.043-.082-.065l-.062-.049c-.028-.021-.055-.043-.082-.065l-.062-.049c-.028-.021-.055-.043-.082-.065l-.117-.092-.088-.071-.055-.043-.088-.071-.036-.028-.091-.071-.088-.071-.055-.043-.088-.071-.049-.038-.235-.188-.049-.038-.049-.039c-.039-.031-.078-.062-.116-.094l-.049-.038-.177-.142-.082-.067-.141-.113c-.037-.029-.074-.059-.111-.09l-.087-.069-.123-.101c-.023-.018-.046-.037-.069-.056l-.028-.023c-.037-.029-.074-.059-.111-.09-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056-.023-.018-.046-.037-.069-.056l-.095-.076-.111-.092c-.033-.026-.066-.054-.099-.081l-.067-.054-.1-.083-.053-.043-.121-.1-.083-.068-.052-.044c-.041-.034-.082-.068-.122-.103-.034-.027-.067-.055-.1-.082-.03-.024-.059-.048-.088-.073-.041-.033-.082-.067-.123-.102l-.054-.045c-.04-.032-.079-.065-.118-.099l-.057-.047c-.048-.039-.095-.078-.142-.119l-.064-.054c-.036-.029-.071-.059-.106-.09l-.067-.056c-.036-.029-.071-.059-.106-.09l-.067-.056c-.036-.029-.071-.059-.106-.09l-.062-.053c-.047-.038-.094-.078-.139-.118-.018-.015-.037-.031-.055-.047-.027-.023-.055-.046-.082-.069-.04-.033-.08-.067-.119-.102-.029-.024-.057-.048-.084-.073l-.05-.043c-.04-.033-.08-.067-.119-.102-.027-.023-.053-.045-.079-.069-.028-.024-.056-.047-.083-.072-.037-.031-.073-.062-.108-.094l-.058-.051c-.028-.024-.056-.047-.083-.072-.035-.03-.07-.06-.105-.091-.031-.026-.061-.053-.092-.08l-.036-.031-.118-.103c-.039-.034-.078-.068-.116-.102l-.047-.041c-.039-.034-.078-.068-.116-.102l-.028-.024-.053-.047-.028-.024-.045-.041c-.029-.025-.058-.051-.087-.077l-.028-.024-.045-.041-.054-.048-.105-.094-.054-.048-.364-.329c-.038-.034-.075-.068-.112-.102l-.042-.038c-.038-.034-.075-.068-.112-.102l-.025-.022c-.024-.022-.048-.044-.071-.066l-.056-.052-.025-.022c-.024-.022-.048-.044-.071-.066l-.051-.047-.05-.046-.101-.094c-.045-.04-.089-.082-.133-.124l-.039-.037c-.025-.023-.05-.046-.074-.069-.037-.033-.073-.067-.109-.102l-.022-.02-.052-.05c-.025-.023-.049-.046-.073-.07l-.022-.02-.051-.049-.022-.02-.086-.083-.065-.06-.118-.114-.064-.063-.067-.063-.098-.096-.055-.053-.155-.152-.069-.066-.107-.106-.049-.048-.088-.088-.064-.063-.1-.102c-.023-.022-.045-.045-.067-.067-.033-.032-.065-.064-.096-.097l-.037-.037c-.046-.045-.09-.09-.134-.137l-.027-.028c-.022-.022-.044-.044-.065-.067-.022-.022-.044-.044-.065-.067-.035-.035-.07-.071-.104-.107-.022-.022-.043-.044-.064-.067-.022-.022-.043-.044-.064-.067-.031-.031-.061-.064-.091-.096l-.036-.037c-.03-.031-.06-.063-.09-.094l-.046-.048-.051-.056-.06-.063-.092-.099c-.043-.045-.085-.09-.125-.136l-.194-.21-.167-.185c-.021-.023-.042-.047-.063-.07-.034-.037-.067-.074-.1-.112-.024-.027-.049-.054-.072-.082-.023-.025-.045-.05-.067-.076-.023-.025-.045-.05-.067-.076-.024-.026-.047-.053-.07-.08-.039-.044-.078-.089-.116-.134l-.08-.092c-.033-.037-.066-.075-.098-.113l-.053-.064-.045-.053-.199-.237-.078-.093-.047-.058c-.031-.037-.061-.074-.091-.112l-.087-.106c-.032-.039-.064-.078-.095-.118l-.012-.015c-.012-.015-.024-.03-.035-.045-.101-.11-.197-.225-.288-.344-.018-.022-.035-.045-.052-.068-.018-.022-.035-.045-.052-.068l-.028-.036-.067-.088-.119-.158-.055-.073-.078-.107-.049-.065c-.028-.037-.055-.074-.082-.112l-.027-.037-.064-.089-.055-.078-.055-.077c-.034-.047-.067-.094-.099-.142l-.054-.077-.059-.087-.046-.066-.074-.111-.027-.04-.053-.079-.101-.153-.122-.191c-.013-.02-.026-.04-.038-.06l-.027-.041-.062-.098-.176-.29-.054-.091-.084-.145-.033-.056-.099-.175-.034-.063-.017-.03c-.023-.041-.046-.083-.068-.126-.028-.049-.054-.099-.08-.149l-.036-.067-.06-.117-.103-.207-.107-.22-.078-.168-.041-.091-.044-.1-.033-.074-.056-.132-.09-.22-.081-.21-.043-.117c-.013-.035-.026-.07-.038-.105l-.006-.015-.032-.09-.071-.212-.038-.118-.042-.14c-.02-.063-.038-.126-.054-.19l-.016-.058-.026-.094-.046-.182-.026-.109-.008-.035c-.01-.043-.02-.086-.029-.13-.071-.321-.108-.654-.108-.996,0-2.545,2.063-4.608,4.608-4.608Z"
                        style="fill: url(#m)"
                      ></path>
                      <path
                        id="p"
                        d="m57.589,49.599c.858,1.685,1.314,3.202,1.36,5.187-.095,3.882-2.052,6.653-5.871,8.312-.846.387-2.067.625-3.663.714v.014s-.607.015-.607.015l-1.75.011h-3.699l-1.016-9.292,2.608.022h1.943c.446-.004.76-.011.94-.022.56-.034,1.123-.158,1.688-.372l1.693-1.001c2.697-1.585,4.775-2.757,6.235-3.516l.139-.071Z"
                        style="fill: url(#o); fill-rule: evenodd"
                      ></path>
                      <path
                        id="q"
                        d="m19.119,15.597c-2.42-2.35-4.013-4.362-4.778-6.035-.486-1.063-.171-2.128.189-3.118l1.362-1.875-.032-2.436c-.788-1.157-1.302-1.73-1.54-1.716-1.909.106-3.505.553-4.66,1.257-2.058,1.254-4.408,3.407-4.646,7.007-.238,3.599,1.695,6.917,5.165,10.855l6.19-2.925,2.751-1.013Z"
                        style="fill: #d70616; fill-rule: evenodd"
                      ></path>
                      <path
                        id="s"
                        d="m53.578,43.876c1.316,1.483,2.314,2.788,2.995,3.916,1.516,2.511,2.315,4.332,2.376,6.993-.095,3.882-2.052,6.653-5.871,8.312-4.115-3.609-5.977-5.537-5.586-5.783,2.223-1.399,2.253-2.336,2.14-2.756-.22-.817-.835-2.068-2.544-4.099l2.853-4.306,3.638-2.277Z"
                        style="fill: url(#r); fill-rule: evenodd"
                      ></path>
                      <path
                        id="u"
                        d="m47.965,9.628h.655c2.226.048,3.074,1.105,2.543,3.173-.584,2.612-.876,3.918-.876,3.918l-.617,3.721,1.685,2.013c2.372-2.276,4.184-4.499,5.438-6.669,1.877-3.167,2.757-5.748,1.855-9.126-.979-3.25-4.457-6.081-9.814-6.241h-.713s-.157,9.212-.157,9.212Z"
                        style="fill: url(#t); fill-rule: evenodd"
                      ></path>
                      <path
                        id="w"
                        d="m14.551.416h.082c.033,0,.065,0,.098.001h.098c.033-.001.065,0,.097,0h.097c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.097,0h.097c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.098,0h.098c.033-.001.065,0,.097,0l32.923.005.081.002.222.011.089.005.235.018c.041.003.083.007.124.011.043.004.087.008.13.012.047.005.093.01.139.016l.068.008.155.02c.045.006.09.012.134.018.05.007.101.014.151.022l.07.011.07.012c2.165.377,5.964,1.465,7.698,5.374.678,1.528-2.599,7.42-7.107,9.348.335-3.233.092-3.879-.253-4.7-.241-.389-.616-.655-1.126-.799l-.578-.132-.6-.048h-.037s-.025-.002-.025-.002H15.61c-.032,0-.065,0-.097,0h-.097c-.033.001-.065,0-.098,0h-.098c-.033.001-.065,0-.098,0h-.098c-.032.001-.065,0-.097,0h-.097c-.033.001-.065,0-.098,0h-.107s-.054.003-.054.003h-.012s-.031.004-.031.004c-.152.015-.306.023-.462.023-2.545,0-4.608-2.063-4.608-4.608,0-2.378,1.802-4.336,4.114-4.582l.151-.015.093-.008.195-.013.114-.007.137-.005.12-.004c.056-.002.113-.003.17-.003Z"
                        style="fill: url(#v)"
                      ></path>
                      <path
                        id="y"
                        d="m11.82,10.845c1.355-.809,2.331-1.213,2.927-1.213h9.965v.396V.419h-10.381c-1.575.046-3.131.515-4.669,1.407s-1.845,3.191-.922,6.897l1.001,2.66,2.079-.538Z"
                        style="fill: url(#x); fill-rule: evenodd"
                      ></path>
                      <path
                        id="aa"
                        d="m19.119,15.597c-2.42-2.35-4.013-4.362-4.778-6.035-.486-1.063-.171-2.128.189-3.118l1.362-1.875-.032-2.436c-.788-1.157-1.302-1.73-1.54-1.716-1.909.106-3.505.553-4.66,1.257-2.058,1.254-4.408,3.407-4.646,7.007-.238,3.599,1.695,6.917,5.165,10.855l6.19-2.925,2.751-1.013Z"
                        style="fill: url(#z); fill-rule: evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div class="modules-right-sidebar-pangu-icon-hover modules-right-sidebar-pangu-icon-animation"></div>
                <div class="modules-right-sidebar-pangu-icon-active modules-right-sidebar-pangu-icon-animation"></div>
              </div>
            </div>
          </div>
          <div class="modules-right-sidebar-sep-line"></div>
          <div id="cf_J_rightSidebar_hideBtn" cf-uba="rightSidebar..hideBtn" class="modules-right-sidebar-svg-wrapper">
            <!--?xml version="1.0" encoding="UTF-8"?-->
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs></defs>
              <rect width="24.000000" height="24.000000" transform="matrix(-1 0 0 1 24 0)" fill="#D8D8D8" fill-opacity="0"></rect>
              <rect
                width="23.000000"
                height="23.000000"
                transform="matrix(-1 0 0 1 24 0)"
                stroke="#1A1A1A"
                stroke-opacity="0"
                stroke-width="1.000000"
              ></rect>
              <path
                d="M14.28 18.53C14.57 18.82 15.04 18.82 15.34 18.53C15.6 18.27 15.63 17.86 15.42 17.57L15.34 17.46L9.98 12.11C9.93 12.06 9.92 11.99 9.94 11.94L9.98 11.88L15.34 6.53C15.63 6.23 15.63 5.76 15.34 5.46C15.08 5.2 14.67 5.18 14.38 5.38L14.28 5.46L8.92 10.82C8.32 11.42 8.27 12.37 8.79 13.02L8.92 13.17L14.28 18.53Z"
                fill="#191919"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              ></path>
              <path d="" fill="#979797" fill-opacity="0" fill-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </tiny-container>
</template>

<style>
@import './ecs-list.css';
</style>

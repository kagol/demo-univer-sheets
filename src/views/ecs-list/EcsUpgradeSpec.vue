<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
// import { useNextServer } from '@opentiny/next-vue'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { ServerCapabilities } from '../../utils';
import { addSwitchRouterTool } from '../../utils';
import { specListData } from './ecs-spec-list';

const server = new McpServer(
  {
    name: 'console-poc-ecs-server',
    version: '1.0.0'
  },
  { capabilities: ServerCapabilities }
);

const specList = ref(specListData);

const select = (name: string) => {
  const index = specList.value.findIndex((spec) => spec.name === name);
  specList.value[index].selected = true;

  specList.value.forEach((spec) => {
    if (spec.name !== name) {
      spec.selected = false;
    }
  });
};

const selectedSpec = computed(() => {
  const selected = specList.value.find((spec) => spec.selected === true);
  if (!selected) {
    window.parent.selectedSpec = '--';
    return '--';
  }
  window.parent.selectedSpec = selected;
  return `${selected.type} | ${selected.name} | ${selected.vcpus} | ${selected.memory}`;
});

addSwitchRouterTool(server);

window.addEventListener('message', async (event) => {
  if (event.data.type === 'change-tab' && event.data.page === 'ecs-upgrade-spec') {
    await server.connect(window.parent.$serverTransport);
    window.parent.postMessage({ type: 'loaded', page: 'ecs-upgrade-spec' }, '*');
  }
});
const nextStepRef = ref();
const prevStepRef = ref();

// const nextServer = useNextServer({
//   serverInfo: { name: 'ecs-upgrade-spec-server', version: '1.0.0' }
// })

// const server = nextServer?.server
// console.log('ecs-upgrade-spec server=====', server);

server?.registerTool(
  'prev-step',
  {
    description: '用于点击上一步，返回 ECS 列表页面'
  },
  async () => {
    window.parent.postMessage({ type: 'tool-notify', title: '返回 ECS 列表页面' }, '*');
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // 延时1秒
    window.parent.postMessage({ type: 'tool-notify-close' }, '*');

    prevStepRef.value?.click();
    return {
      content: [{ type: 'text', text: 'success' }]
    };
  }
);

server?.registerTool(
  'authorization-close-cloud-server',
  {
    description: `
    用于授权云服务器自动关机。
    点击下一步之前，需要先调用该工具，勾选自动关机。
    `
  },
  async () => {
    window.parent.postMessage({ type: 'tool-notify', title: '授权云服务器自动关机' }, '*');
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // 延时1秒
    window.parent.postMessage({ type: 'tool-notify-close' }, '*');

    document.getElementById('ecsShuttOff_checkbox')?.click();
    return {
      content: [{ type: 'text', text: 'success' }]
    };
  }
);

server?.tool(
  'choose-cloud-server-spec',
  `
    用于选择云服务器规格。
    点击下一步之前，需要先调用该工具，选择服务器规格。
  `,
  {
    name: z.string()
  },
  async ({ name }) => {
    window.parent.postMessage({ type: 'tool-notify', title: '选择云服务器规格' }, '*');
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // 延时1秒
    window.parent.postMessage({ type: 'tool-notify-close' }, '*');

    // 如果存在滚动条，则先滚动到规格所在的表格行，再选中该规格
    const specTableContainer = document.querySelector('#upgrade_vm');
    if (specTableContainer?.scrollHeight > specTableContainer?.clientHeight) {
      const index = specList.value.findIndex((spec) => spec.name === name);
      specTableContainer?.querySelectorAll('.ti3-table-virtual-scroll-content-wrapper tbody tr')[index].scrollIntoView({ behavior: 'smooth' });
      await new Promise((resolve) => setTimeout(() => resolve(true), 1000));
    }

    // 选中表格中的规格
    select(name);

    return {
      content: [{ type: 'text', text: 'success' }]
    };
  }
);

server?.registerTool(
  'next-step',
  {
    description: `
    执行下一步，进行规格变更确认。
    点击下一步之前先勾选自动关机，并选择云服务器规格。
    `
  },
  async () => {
    window.parent.postMessage({ type: 'tool-notify', title: '点击下一步' }, '*');
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // 延时1秒
    window.parent.postMessage({ type: 'tool-notify-close' }, '*');
    nextStepRef.value?.click();
    return {
      content: [{ type: 'text', text: 'success' }]
    };
  }
);

const prevStep = () => {
  window.parent.switchRouter('/console-home/ecs-list.html');
};

const nextStep = () => {
  window.parent.switchRouter('/console-home/ecs-upgrade-spec-confirm.html');
};

onMounted(async () => {
  await server.connect(window.parent.$serverTransport);
  window.parent.postMessage({ type: 'loaded', page: 'ecs-list' }, '*');
});
</script>

<template>
  <div id="J_container" style="padding-left: 0px; padding-top: 0; width: 100%">
    <!-- console development -->
    <ibiza-ecs _nghost-ng-c2859340050="" ng-version="17.3.12" tiscrollcontainer=""
      ><ti-app-layout
        _ngcontent-ng-c2859340050=""
        class="ibiza-ecs-class hws"
        _nghost-ng-c3660804855=""
        tcversion="@cloud/ti-app-layout:13.0.211"
        style="--ti-app-layout-cf-top: 48px; --ti-app-layout-cf-bottom: 0px; --ti-app-layout-horizontal-scroll-height: 0px"
      >
        <div _ngcontent-ng-c3660804855="" class="ti-app-layout-left-container">
          <ti-app-layout-left _ngcontent-ng-c2859340050="" _nghost-ng-c1351990101=""
            ><ibiza-ecs-side-menu-new _ngcontent-ng-c2859340050="" _nghost-ng-c3606549493="" class="ng-star-inserted"><!----></ibiza-ecs-side-menu-new
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
                ><ibiza-ecs-vm-upgrade-spec _nghost-ng-c596763178="" class="ng-star-inserted"
                  ><ti-app-layout-main
                    _ngcontent-ng-c596763178=""
                    _nghost-ng-c3415584491=""
                    class="ti-app-layout-main-with-buylayer ti-app-layout-main-host"
                    tcversion="@cloud/ti-app-layout:13.0.211"
                    ><!---->
                    <div
                      _ngcontent-ng-c3415584491=""
                      class="ti-app-layout-main-header"
                      style="position: sticky; top: calc(var(--ti-app-layout-sticky-base-top) + 0px); right: 0px; z-index: 80"
                    >
                      <ti-app-layout-main-header _ngcontent-ng-c596763178="" _nghost-ng-c3973344523=""
                        ><ti-global-message
                          _ngcontent-ng-c596763178=""
                          id="upgradeSpecGlobalMessage"
                          _nghost-ng-c517794197=""
                          tiny3version="12.3.210"
                          style=""
                          tcversion="@cloud/ti-global-message:13.0.211"
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
                                  id="ti_auto_id_13"
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
                        </ti-global-message></ti-app-layout-main-header
                      >
                    </div>
                    <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body">
                      <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-sidebar"></div>
                      <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-content">
                        <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-content-body">
                          <ti-app-layout-main-content _ngcontent-ng-c596763178="" _nghost-ng-c1101202487="">
                            <div _ngcontent-ng-c596763178="" id="upgrade_vm" style="overflow: auto; height: calc(100vh - 120px)">
                              <tp-layout-content _ngcontent-ng-c596763178="" _nghost-ng-c1285424354="" class="tp-layout-content"
                                ><tp-layout-content-body
                                  _ngcontent-ng-c596763178=""
                                  id="upgrade_vm_containter"
                                  class="tp-no-steps"
                                  _nghost-ng-c597071219=""
                                >
                                  <div _ngcontent-ng-c596763178="" class="cti-header">云服务器变更规格</div>
                                  <ti-alert
                                    _ngcontent-ng-c596763178=""
                                    id="upgrade_vm_desc"
                                    type="prompt"
                                    class="mt10 mb10 ng-tns-c2010694719-4 ng-star-inserted"
                                    style="width: 100%"
                                    _nghost-ng-c2010694719=""
                                    tiny3version="12.3.210"
                                  >
                                    <div
                                      _ngcontent-ng-c2010694719=""
                                      class="ng-tns-c2010694719-4 ng-trigger ng-trigger-alertAnimate ng-star-inserted"
                                    >
                                      <div
                                        _ngcontent-ng-c2010694719=""
                                        class="ti3-alert-container ng-tns-c2010694719-4 ti3-alert-prompt-container ng-star-inserted"
                                        style=""
                                      >
                                        <span
                                          _ngcontent-ng-c2010694719=""
                                          class="ti3-icon ti3-alert-icon ng-tns-c2010694719-4 ti3-icon-alert-prompt-1 ng-star-inserted"
                                          ><span _ngcontent-ng-c2010694719="" class="path1"></span
                                          ><span _ngcontent-ng-c2010694719="" class="path2"></span></span
                                        ><!---->
                                        <div
                                          _ngcontent-ng-c2010694719=""
                                          class="ti3-alert-label ng-tns-c2010694719-4 ti3-alert-label-with-typeIcon"
                                          id="upgrade_vm_desc_label"
                                        >
                                          <!---->
                                          <ul _ngcontent-ng-c596763178="" class="note-title pull-left ng-tns-c2010694719-4">
                                            <li _ngcontent-ng-c596763178=""><span _ngcontent-ng-c596763178="">变更须知</span></li>
                                          </ul>
                                          <ul _ngcontent-ng-c596763178="" class="note-content pull-left ng-tns-c2010694719-4">
                                            <li _ngcontent-ng-c596763178="" id="upgrade_vm_desc_li0" class="ng-star-inserted">
                                              <span _ngcontent-ng-c596763178=""
                                                ><span _ngcontent-ng-c596763178="" class="ng-star-inserted">1</span
                                                ><!---->.</span
                                              ><span _ngcontent-ng-c596763178=""></span
                                              ><span _ngcontent-ng-c596763178="" class="ng-star-inserted"
                                                >您变更的是按需云服务器，请注意配置费用变化(只包含CPU和内存的费用)。</span
                                              ><!----><!---->
                                            </li>
                                            <li _ngcontent-ng-c596763178="" id="upgrade_vm_desc_li1" class="ng-star-inserted">
                                              <span _ngcontent-ng-c596763178=""
                                                ><span _ngcontent-ng-c596763178="" class="ng-star-inserted">2</span
                                                ><!---->.</span
                                              ><span _ngcontent-ng-c596763178=""></span
                                              ><!----><help-panel-and-link
                                                _ngcontent-ng-c596763178=""
                                                _nghost-ng-c4200914611=""
                                                class="ng-star-inserted"
                                                ><!----><!----><!----><!----><span _ngcontent-ng-c4200914611="" class="ng-star-inserted"
                                                  >促销价仅适用于购买活动页面套餐，变更规格时以当前目录价为准，促销价在该场景下不适用。 </span
                                                ><!----><!----><!----><!----><!----></help-panel-and-link
                                              ><!---->
                                            </li>
                                            <li _ngcontent-ng-c596763178="" id="upgrade_vm_desc_li2" class="ng-star-inserted">
                                              <span _ngcontent-ng-c596763178=""
                                                ><span _ngcontent-ng-c596763178="" class="ng-star-inserted">3</span
                                                ><!---->.</span
                                              ><span _ngcontent-ng-c596763178=""></span
                                              ><!----><help-panel-and-link
                                                _ngcontent-ng-c596763178=""
                                                _nghost-ng-c4200914611=""
                                                class="ng-star-inserted"
                                                ><!----><!----><span _ngcontent-ng-c4200914611="" class="ng-star-inserted"
                                                  >变更规格过程中，请勿对云服务器进行关机、重启等其他操作。<a
                                                    class="common-link"
                                                    id="modifySpecHelpLink"
                                                    style="display: inline-block"
                                                    href="javascript:void(0);"
                                                    target="_blank"
                                                    meta-data-uba=""
                                                    rel="noopener noreferrer"
                                                    >了解变更规格详情</a
                                                  ></span
                                                ><!----><!----><!----><!----><!----><!----><!----></help-panel-and-link
                                              ><!---->
                                            </li>
                                            <li _ngcontent-ng-c596763178="" id="upgrade_vm_desc_li3" class="ng-star-inserted">
                                              <span _ngcontent-ng-c596763178=""
                                                ><span _ngcontent-ng-c596763178="" class="ng-star-inserted">4</span
                                                ><!---->.</span
                                              ><span _ngcontent-ng-c596763178=""></span
                                              ><span _ngcontent-ng-c596763178="" class="ng-star-inserted"
                                                >变更规格不影响云服务器系统盘和数据盘的数据。</span
                                              ><!----><!---->
                                            </li>
                                            <!---->
                                          </ul>
                                          <!---->
                                        </div>
                                        <!---->
                                      </div>
                                      <!---->
                                    </div>
                                    <!----><!----> </ti-alert
                                  ><!---->
                                  <div _ngcontent-ng-c596763178="" class="">
                                    <tp-layout-section _ngcontent-ng-c596763178="" _nghost-ng-c2332595846="" class="tp-layout-section">
                                      <div _ngcontent-ng-c596763178="" class="clearfix">
                                        <div _ngcontent-ng-c596763178="" class="config-title mb20">当前配置</div>
                                        <div _ngcontent-ng-c596763178="" class="ng-star-inserted">
                                          <ibiza-ecs-ecs-shuttoff-prompt-input
                                            _ngcontent-ng-c596763178=""
                                            id="upgrade_vm_stop"
                                            meta-data-uba="www_v1_ecs.click.ecs_list_multiModifySpec_stop_checkbox"
                                            _nghost-ng-c3741140736=""
                                          >
                                            <div _ngcontent-ng-c3741140736="">
                                              <label _ngcontent-ng-c3741140736="" class="common-color-number"
                                                ><input
                                                  _ngcontent-ng-c3741140736=""
                                                  type="checkbox"
                                                  id="ecsShuttOff"
                                                  ticheckbox=""
                                                  _nghost-ng-c531329826=""
                                                  tiny3version="12.3.210"
                                                  tiform=""
                                                  class="ng-valid ng-dirty ng-touched"
                                                /><label
                                                  _ngcontent-ng-c531329826=""
                                                  class="ti3-checkbox ng-star-inserted"
                                                  for="ecsShuttOff"
                                                  id="ecsShuttOff_checkbox"
                                                  ><span
                                                    _ngcontent-ng-c531329826=""
                                                    tioutline=""
                                                    class="ti3-checkbox-skin ti3-icon ti3-icon-checkmark"
                                                    tabindex="0"
                                                    style=""
                                                  ></span
                                                  ><span _ngcontent-ng-c531329826="" class="ti3-checkbox-label" id="ecsShuttOff_label"></span></label
                                                ><strong _ngcontent-ng-c3741140736="">授权自动关机</strong
                                                ><strong _ngcontent-ng-c3741140736="" class="ng-star-inserted"
                                                  >（变更规格需要云服务器处于关机状态，您可以在业务空闲时进行关机操作或勾选系统自动关机进行变更规格。）</strong
                                                ><!----></label
                                              >
                                            </div>
                                          </ibiza-ecs-ecs-shuttoff-prompt-input>
                                        </div>
                                        <!---->
                                        <div _ngcontent-ng-c596763178="" class="clearfix">
                                          <div _ngcontent-ng-c596763178="" class="pull-left" style="width: 45%; margin-right: 50px">
                                            <ti-formfield
                                              _ngcontent-ng-c596763178=""
                                              id="upgrade_vm_current_config"
                                              _nghost-ng-c3220445061=""
                                              tiny3version="12.3.210"
                                              type="text"
                                              ><!---->
                                              <table
                                                _ngcontent-ng-c3220445061=""
                                                class="ti3-form ng-star-inserted"
                                                style="max-width: 100%; vertical-align: top"
                                                id="upgrade_vm_current_config_table"
                                              >
                                                <tbody _ngcontent-ng-c3220445061="" class="ti3-text-form">
                                                  <tr _ngcontent-ng-c3220445061="" class="ng-star-inserted">
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                      <span _ngcontent-ng-c3220445061="" class="ti3-icon ti3-icon-staricon" hidden=""></span>
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                      rowspan="1"
                                                    >
                                                      <div _ngcontent-ng-c3220445061="">云服务器名称</div>
                                                    </td>
                                                    <!---->
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                      colspan="1"
                                                      rowspan="1"
                                                    >
                                                      <ti-item _ngcontent-ng-c596763178=""><span _ngcontent-ng-c596763178="">ecs-155a</span></ti-item>
                                                    </td>
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted" style="width: 0px"></td>
                                                    <!----><!----><!---->
                                                  </tr>
                                                  <tr _ngcontent-ng-c3220445061="" class="ng-star-inserted">
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                      <span _ngcontent-ng-c3220445061="" class="ti3-icon ti3-icon-staricon" hidden=""></span>
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                      rowspan="1"
                                                    >
                                                      <div _ngcontent-ng-c3220445061="">镜像</div>
                                                    </td>
                                                    <!---->
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                      colspan="1"
                                                      rowspan="1"
                                                    >
                                                      <ti-item _ngcontent-ng-c596763178=""
                                                        ><span _ngcontent-ng-c596763178="">Ubuntu 24.04 server 64bit</span
                                                        ><!----><!----></ti-item
                                                      >
                                                    </td>
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted" style="width: 0px"></td>
                                                    <!----><!----><!---->
                                                  </tr>
                                                  <tr _ngcontent-ng-c3220445061="" class="ti3-form-list ng-star-inserted">
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                      <span _ngcontent-ng-c3220445061="" class="ti3-icon ti3-icon-staricon" hidden=""></span>
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                      rowspan="1"
                                                    >
                                                      <div _ngcontent-ng-c3220445061="">当前规格</div>
                                                    </td>
                                                    <!---->
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                      colspan="1"
                                                      rowspan="1"
                                                    >
                                                      <ti-item _ngcontent-ng-c596763178="">
                                                        <div _ngcontent-ng-c596763178="">
                                                          <span _ngcontent-ng-c596763178="">通用计算型 | s6.small.1 | 1vCPUs | 1GiB</span
                                                          ><!---->
                                                        </div>
                                                        <!---->
                                                      </ti-item>
                                                    </td>
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted" style="width: 0px"></td>
                                                    <!----><!----><!---->
                                                  </tr>
                                                  <!----><!---->
                                                </tbody>
                                              </table>
                                              <!----><!----><!----><!----><!----><!----><!---->
                                            </ti-formfield>
                                          </div>
                                          <div _ngcontent-ng-c596763178="" class="pull-left" style="width: 49%">
                                            <ti-formfield
                                              _ngcontent-ng-c596763178=""
                                              _nghost-ng-c3220445061=""
                                              id="ti_auto_id_8"
                                              tiny3version="12.3.210"
                                              type="text"
                                              ><!---->
                                              <table
                                                _ngcontent-ng-c3220445061=""
                                                class="ti3-form ng-star-inserted"
                                                style="max-width: 100%; vertical-align: top"
                                                id="ti_auto_id_8_table"
                                              >
                                                <tbody _ngcontent-ng-c3220445061="" class="ti3-text-form">
                                                  <tr _ngcontent-ng-c3220445061="" class="ng-star-inserted">
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                      <span _ngcontent-ng-c3220445061="" class="ti3-icon ti3-icon-staricon" hidden=""></span>
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                      rowspan="1"
                                                    >
                                                      <div _ngcontent-ng-c3220445061="">ID</div>
                                                    </td>
                                                    <!---->
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                      colspan="1"
                                                      rowspan="1"
                                                    >
                                                      <ti-item _ngcontent-ng-c596763178=""
                                                        ><span _ngcontent-ng-c596763178="">dd0aaf47-e2d5-415e-a848-127af6fdc34b</span
                                                        ><tp-copy
                                                          _ngcontent-ng-c596763178=""
                                                          class="copy-class"
                                                          _nghost-ng-c3300677490=""
                                                          id="ti_auto_id_9"
                                                          tiny3version="12.3.210"
                                                          ><tp-icon
                                                            _ngcontent-ng-c3300677490=""
                                                            local=""
                                                            tioutline=""
                                                            name="cloudx-action-copy"
                                                            tabindex="0"
                                                            class="tp-icon-cloudx-action-copy"
                                                            id="ti_auto_id_9_copyicon"
                                                            tiny3version="12.3.210"
                                                          ></tp-icon></tp-copy
                                                      ></ti-item>
                                                    </td>
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted" style="width: 0px"></td>
                                                    <!----><!----><!---->
                                                  </tr>
                                                  <tr _ngcontent-ng-c3220445061="" class="ng-star-inserted">
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                      <span _ngcontent-ng-c3220445061="" class="ti3-icon ti3-icon-staricon" hidden=""></span>
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                      rowspan="1"
                                                    >
                                                      <div _ngcontent-ng-c3220445061="">计费模式</div>
                                                    </td>
                                                    <!---->
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                      colspan="1"
                                                      rowspan="1"
                                                    >
                                                      <ti-item _ngcontent-ng-c596763178=""><span _ngcontent-ng-c596763178="">按需计费</span></ti-item>
                                                    </td>
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted" style="width: 0px"></td>
                                                    <!----><!----><!---->
                                                  </tr>
                                                  <tr _ngcontent-ng-c3220445061="" class="ti3-form-list ng-star-inserted">
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                      <span _ngcontent-ng-c3220445061="" class="ti3-icon ti3-icon-staricon" hidden=""></span>
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                      rowspan="1"
                                                    >
                                                      <div _ngcontent-ng-c3220445061="">区域</div>
                                                    </td>
                                                    <!---->
                                                    <td
                                                      _ngcontent-ng-c3220445061=""
                                                      class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                      colspan="1"
                                                      rowspan="1"
                                                    >
                                                      <ti-item _ngcontent-ng-c596763178=""
                                                        ><span _ngcontent-ng-c596763178="">华北-北京四</span></ti-item
                                                      >
                                                    </td>
                                                    <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted" style="width: 0px"></td>
                                                    <!----><!----><!---->
                                                  </tr>
                                                  <!----><!---->
                                                </tbody>
                                              </table>
                                              <!----><!----><!----><!----><!----><!----><!---->
                                            </ti-formfield>
                                          </div>
                                        </div>
                                      </div> </tp-layout-section
                                    ><tp-layout-section _ngcontent-ng-c596763178="" _nghost-ng-c2332595846="" class="tp-layout-section">
                                      <div _ngcontent-ng-c596763178="" class="clearfix clearfloat mt20" style="min-height: 100px; position: relative">
                                        <!----><!----><ecs-flavor-modal
                                          _ngcontent-ng-c596763178=""
                                          _nghost-ng-c1549886349=""
                                          class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                        >
                                          <div _ngcontent-ng-c1549886349="" class="ng-untouched ng-pristine ng-valid ng-star-inserted">
                                            <!----><!----><span
                                              _ngcontent-ng-c1549886349=""
                                              class="mr12 mb16 ecs-common-inline-block ng-star-inserted"
                                              ><label _ngcontent-ng-c1549886349="" class="mr12 ng-star-inserted">vCPUs</label
                                              ><!----><ti-select
                                                _ngcontent-ng-c1549886349=""
                                                idkey="id"
                                                id="ecs-vcpus-select-id"
                                                tivalidation=""
                                                _nghost-ng-c783833559=""
                                                tiny3version="12.3.210"
                                                tiform=""
                                                class="ng-untouched ng-pristine ng-valid"
                                                ><ti-dominator
                                                  _ngcontent-ng-c783833559=""
                                                  size="16px"
                                                  customclass="ti-select-loading-cover"
                                                  _nghost-ng-c4263889896=""
                                                  id="ecs-vcpus-select-id_dominator"
                                                  tiny3version="12.3.210"
                                                  tiform=""
                                                  class="ti3-select-dominator-container ng-untouched ng-pristine ng-valid"
                                                  tabindex="0"
                                                >
                                                  <section
                                                    _ngcontent-ng-c4263889896=""
                                                    class="ti3-select-dominator-text"
                                                    id="ecs-vcpus-select-id_dominator_input"
                                                  >
                                                    <section
                                                      _ngcontent-ng-c4263889896=""
                                                      class="ti3-overflow-padding ng-star-inserted"
                                                      style="visibility: visible"
                                                    >
                                                      <span
                                                        _ngcontent-ng-c4263889896=""
                                                        class="ti3-placeholder ng-star-inserted"
                                                        title="--请选择vCPUs--"
                                                        >--请选择vCPUs--</span
                                                      ><!----><!---->
                                                    </section>
                                                    <!----><!----><!----><!---->
                                                  </section>
                                                  <!---->
                                                  <section
                                                    _ngcontent-ng-c4263889896=""
                                                    class="ti3-icon ti3-icon-accordion-unfold ti3-select-dominator-dropdown-btn ng-star-inserted"
                                                    id="ecs-vcpus-select-id_dominator_btn"
                                                  ></section>
                                                  <!----><!----> </ti-dominator
                                                ><!----><ti-dropsearch
                                                  _ngcontent-ng-c783833559=""
                                                  _nghost-ng-c1314199683=""
                                                  id="ecs-vcpus-select-id_droplist"
                                                  tiny3version="12.3.210"
                                                  tiform=""
                                                  class="ng-untouched ng-pristine ng-valid"
                                                  ><ti-drop
                                                    _ngcontent-ng-c1314199683=""
                                                    _nghost-ng-c2814315127=""
                                                    id="ti_auto_id_17"
                                                    tiny3version="12.3.210"
                                                    class="ti3-dropdown-container"
                                                    ><!----></ti-drop
                                                  ></ti-dropsearch
                                                ><!----><!----><!----></ti-select
                                              ></span
                                            ><span _ngcontent-ng-c1549886349="" class="mr12 mb16 ecs-common-inline-block ng-star-inserted"
                                              ><label _ngcontent-ng-c1549886349="" class="mr12 ng-star-inserted">内存</label
                                              ><!----><ti-select
                                                _ngcontent-ng-c1549886349=""
                                                idkey="id"
                                                id="ecs-ram-select-id"
                                                tivalidation=""
                                                _nghost-ng-c783833559=""
                                                tiny3version="12.3.210"
                                                tiform=""
                                                class="ng-untouched ng-pristine ng-valid"
                                                ><ti-dominator
                                                  _ngcontent-ng-c783833559=""
                                                  size="16px"
                                                  customclass="ti-select-loading-cover"
                                                  _nghost-ng-c4263889896=""
                                                  id="ecs-ram-select-id_dominator"
                                                  tiny3version="12.3.210"
                                                  tiform=""
                                                  class="ti3-select-dominator-container ng-untouched ng-pristine ng-valid"
                                                  tabindex="0"
                                                >
                                                  <section
                                                    _ngcontent-ng-c4263889896=""
                                                    class="ti3-select-dominator-text"
                                                    id="ecs-ram-select-id_dominator_input"
                                                  >
                                                    <section
                                                      _ngcontent-ng-c4263889896=""
                                                      class="ti3-overflow-padding ng-star-inserted"
                                                      style="visibility: visible"
                                                    >
                                                      <span
                                                        _ngcontent-ng-c4263889896=""
                                                        class="ti3-placeholder ng-star-inserted"
                                                        title="--请选择内存--"
                                                        >--请选择内存--</span
                                                      ><!----><!---->
                                                    </section>
                                                    <!----><!----><!----><!---->
                                                  </section>
                                                  <!---->
                                                  <section
                                                    _ngcontent-ng-c4263889896=""
                                                    class="ti3-icon ti3-icon-accordion-unfold ti3-select-dominator-dropdown-btn ng-star-inserted"
                                                    id="ecs-ram-select-id_dominator_btn"
                                                  ></section>
                                                  <!----><!----> </ti-dominator
                                                ><!----><ti-dropsearch
                                                  _ngcontent-ng-c783833559=""
                                                  _nghost-ng-c1314199683=""
                                                  id="ecs-ram-select-id_droplist"
                                                  tiny3version="12.3.210"
                                                  tiform=""
                                                  class="ng-untouched ng-pristine ng-valid"
                                                  ><ti-drop
                                                    _ngcontent-ng-c1314199683=""
                                                    _nghost-ng-c2814315127=""
                                                    id="ti_auto_id_19"
                                                    tiny3version="12.3.210"
                                                    class="ti3-dropdown-container"
                                                    ><!----></ti-drop
                                                  ></ti-dropsearch
                                                ><!----><!----><!----></ti-select
                                              ></span
                                            ><span _ngcontent-ng-c1549886349="" class="mr12 mb16 ecs-common-inline-block ng-star-inserted"
                                              ><label _ngcontent-ng-c1549886349="" class="mr12 ng-star-inserted">规格名称</label
                                              ><!----><ti-searchbox
                                                _ngcontent-ng-c1549886349=""
                                                _nghost-ng-c4157864299=""
                                                id="ecs-flavor-search-id"
                                                tiny3version="12.3.210"
                                                tiform=""
                                                class="ti3-autocomplete-container ti3-searchbox-container ng-untouched ng-pristine ng-valid"
                                                style="width: 200px"
                                                ><!----><input
                                                  _ngcontent-ng-c4157864299=""
                                                  titext=""
                                                  spellcheck="false"
                                                  class="ti3-searchbox-input ng-untouched ng-pristine ng-valid"
                                                  _nghost-ng-c4077046280=""
                                                  tabindex="0"
                                                  clearable=""
                                                  placeholder="请输入关键字"
                                                  id="ecs-flavor-search-id_input"
                                                  tiny3version="12.3.210"
                                                  autocomplete="off"
                                                />
                                                <div _ngcontent-ng-c4157864299="" class="ti3-searchbox-divider" hidden=""></div>
                                                <div
                                                  _ngcontent-ng-c4157864299=""
                                                  tioutline=""
                                                  class="ti3-searchbox-search ti3-searchbox-search-alive ti3-icon ti3-icon-search ng-star-inserted"
                                                  style="outline-offset: -2px"
                                                  tabindex="0"
                                                  id="ecs-flavor-search-id_search"
                                                ></div>
                                                <!----><ti-droplist
                                                  _ngcontent-ng-c4157864299=""
                                                  id="ecs-flavor-search-id_droplist"
                                                  tiny3version="12.3.210"
                                                  tiform=""
                                                  class="ng-untouched ng-pristine ng-valid"
                                                  ><ti-drop
                                                    _nghost-ng-c2814315127=""
                                                    id="ti_auto_id_21"
                                                    tiny3version="12.3.210"
                                                    class="ti3-dropdown-container"
                                                    ><!----></ti-drop
                                                  ></ti-droplist
                                                >
                                              </ti-searchbox></span
                                            ><!----><!----><!----><!---->
                                            <div _ngcontent-ng-c1549886349="" class="mb12 ng-star-inserted">
                                              <ti-button-group
                                                _ngcontent-ng-c1549886349=""
                                                id="ecs-host-spec-select-id"
                                                _nghost-ng-c3082435483=""
                                                tiny3version="12.3.210"
                                                tiform=""
                                                class="ti3-button-group-bottom-space ng-untouched ng-pristine ng-valid"
                                                ><span _ngcontent-ng-c3082435483="" style="margin-top: -50px">
                                                  <div
                                                    _ngcontent-ng-c3082435483=""
                                                    class="ti3-btn-item-container ng-star-inserted"
                                                    id="ecs-host-spec-select-id_computingv3"
                                                  >
                                                    <button
                                                      _ngcontent-ng-c3082435483=""
                                                      type="button"
                                                      tioutline=""
                                                      class="ti3-btn-item ti3-btn-item-radio"
                                                      id="ecs-host-spec-select-id_button_computingv3"
                                                      tabindex="0"
                                                    >
                                                      <span
                                                        _ngcontent-ng-c3082435483=""
                                                        class="ti3-btn-item-text ng-star-inserted"
                                                        title="通用计算增强型"
                                                        >通用计算增强型</span
                                                      ><!----><!----><!----></button
                                                    ><!----><!----><!----><!---->
                                                  </div>
                                                  <!----><!---->
                                                  <div
                                                    _ngcontent-ng-c3082435483=""
                                                    class="ti3-btn-item-container ng-star-inserted ti3-active"
                                                    id="ecs-host-spec-select-id_normal"
                                                  >
                                                    <button
                                                      _ngcontent-ng-c3082435483=""
                                                      type="button"
                                                      tioutline=""
                                                      class="ti3-btn-item ti3-btn-item-radio"
                                                      id="ecs-host-spec-select-id_button_normal"
                                                      tabindex="0"
                                                    >
                                                      <span _ngcontent-ng-c3082435483="" class="ti3-btn-item-text ng-star-inserted" title="通用计算型"
                                                        >通用计算型</span
                                                      ><!----><!----><!----></button
                                                    ><!----><!----><!----><!---->
                                                  </div>
                                                  <!----><!---->
                                                  <div
                                                    _ngcontent-ng-c3082435483=""
                                                    class="ti3-btn-item-container ng-star-inserted"
                                                    id="ecs-host-spec-select-id_highmem"
                                                  >
                                                    <button
                                                      _ngcontent-ng-c3082435483=""
                                                      type="button"
                                                      tioutline=""
                                                      class="ti3-btn-item ti3-btn-item-radio"
                                                      id="ecs-host-spec-select-id_button_highmem"
                                                      tabindex="0"
                                                    >
                                                      <span _ngcontent-ng-c3082435483="" class="ti3-btn-item-text ng-star-inserted" title="内存优化型"
                                                        >内存优化型</span
                                                      ><!----><!----><!----></button
                                                    ><!----><!----><!----><!---->
                                                  </div>
                                                  <!----><!---->
                                                  <div
                                                    _ngcontent-ng-c3082435483=""
                                                    class="ti3-btn-item-container ng-star-inserted"
                                                    id="ecs-host-spec-select-id_entry"
                                                  >
                                                    <button
                                                      _ngcontent-ng-c3082435483=""
                                                      type="button"
                                                      tioutline=""
                                                      class="ti3-btn-item ti3-btn-item-radio"
                                                      id="ecs-host-spec-select-id_button_entry"
                                                      tabindex="0"
                                                    >
                                                      <span _ngcontent-ng-c3082435483="" class="ti3-btn-item-text ng-star-inserted" title="通用入门型"
                                                        >通用入门型</span
                                                      ><!----><!----><!----></button
                                                    ><!----><!----><!----><!---->
                                                  </div>
                                                  <!----><!----><!---->
                                                </span></ti-button-group
                                              ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                ><tp-helptip
                                                  _ngcontent-ng-c1549886349=""
                                                  class="v-align-middle ng-star-inserted"
                                                  _nghost-ng-c1505140518=""
                                                  id="ti_auto_id_16"
                                                  tiny3version="12.3.210"
                                                  ><span _ngcontent-ng-c1505140518="" class="tp-helptip-label" id="ti_auto_id_16_label"></span
                                                  ><!----><tp-icon
                                                    _ngcontent-ng-c1505140518=""
                                                    local=""
                                                    name="cloudx-action-help"
                                                    class="tp-icon-cloudx-action-help ng-star-inserted"
                                                    id="ti_auto_id_16_tipicon"
                                                    tiny3version="12.3.210"
                                                  ></tp-icon
                                                  ><!----><!----></tp-helptip
                                                ><!----><!----></span
                                              ><!---->
                                            </div>
                                            <!---->
                                            <div _ngcontent-ng-c1549886349="" id="flavor-series" class="mb16 ng-star-inserted">
                                              <ti-button-group
                                                _ngcontent-ng-c1549886349=""
                                                minwidth="40px"
                                                id="ecs-flavor-series-selected-id"
                                                meta-data-uba="www_v1_ecs.click.ecs_create_flavorSeries"
                                                _nghost-ng-c3082435483=""
                                                tiny3version="12.3.210"
                                                tiform=""
                                                class="ti3-button-group-bottom-space ng-untouched ng-pristine ng-valid"
                                                ><span _ngcontent-ng-c3082435483="" style="margin-top: -50px">
                                                  <div
                                                    _ngcontent-ng-c3082435483=""
                                                    class="ti3-btn-item-container ti3-active ng-star-inserted"
                                                    id="ecs-flavor-series-selected-id_全部"
                                                  >
                                                    <button
                                                      _ngcontent-ng-c3082435483=""
                                                      type="button"
                                                      tioutline=""
                                                      class="ti3-btn-item ti3-btn-item-radio"
                                                      id="ecs-flavor-series-selected-id_button_全部"
                                                      tabindex="0"
                                                      style="min-width: 40px"
                                                    >
                                                      <span _ngcontent-ng-c3082435483="" class="ti3-btn-item-text ng-star-inserted"
                                                        ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">全部</span
                                                        ><!----></span
                                                      ><!----><!---->
                                                    </button>
                                                    <section _ngcontent-ng-c3082435483="" class="ti3-btn-item-sup ng-star-inserted">
                                                      <!----><!---->
                                                    </section>
                                                    <!----><!----><!---->
                                                  </div>
                                                  <!----><!---->
                                                  <div
                                                    _ngcontent-ng-c3082435483=""
                                                    class="ti3-btn-item-container ng-star-inserted"
                                                    id="ecs-flavor-series-selected-id_t6"
                                                  >
                                                    <button
                                                      _ngcontent-ng-c3082435483=""
                                                      type="button"
                                                      tioutline=""
                                                      class="ti3-btn-item ti3-btn-item-radio"
                                                      id="ecs-flavor-series-selected-id_button_t6"
                                                      tabindex="0"
                                                      style="min-width: 40px"
                                                    >
                                                      <span _ngcontent-ng-c3082435483="" class="ti3-btn-item-text ng-star-inserted"
                                                        ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">s6</span
                                                        ><!----></span
                                                      ><!----><!---->
                                                    </button>
                                                    <section _ngcontent-ng-c3082435483="" class="ti3-btn-item-sup ng-star-inserted">
                                                      <!----><!---->
                                                    </section>
                                                    <!----><!----><!---->
                                                  </div>
                                                  <!----><!----><!---->
                                                </span></ti-button-group
                                              >
                                              <div _ngcontent-ng-c1549886349="" class="common-color-prompt mt-base"><!----><!----></div>
                                            </div>
                                            <!----><!----><!---->
                                            <div _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                              <ti-table
                                                _ngcontent-ng-c1549886349=""
                                                id="ecs-flavor-modal"
                                                ticolsresizable=""
                                                tiny3version="12.3.210"
                                                class="ti3-table"
                                              >
                                                <div _ngcontent-ng-c1549886349="" id="ecs-flavor-table-title-fixed" class="ti3-table-fixed-head">
                                                  <table _ngcontent-ng-c1549886349="" style="width: calc(100% - 16px)">
                                                    <thead _ngcontent-ng-c1549886349="">
                                                      <tr _ngcontent-ng-c1549886349="">
                                                        <th _ngcontent-ng-c1549886349="" radio-column="" ti-visible-index="0"></th>
                                                        <!----><!---->
                                                        <th _ngcontent-ng-c1549886349="" width="12.5%" class="ng-star-inserted" ti-visible-index="1">
                                                          <ti-cell-text _ngcontent-ng-c1549886349="" class="ti3-cell-text-container ng-star-inserted"
                                                            ><span
                                                              tioverflow=""
                                                              class="ti3-cell-text"
                                                              style="
                                                                text-overflow: ellipsis;
                                                                overflow: hidden;
                                                                display: inline-block;
                                                                white-space: nowrap;
                                                                max-width: calc(100% + 0px);
                                                              "
                                                              >实例类型</span
                                                            ></ti-cell-text
                                                          ><!----><!----><!---->
                                                        </th>
                                                        <!----><!---->
                                                        <th _ngcontent-ng-c1549886349="" width="12.5%" class="ng-star-inserted" ti-visible-index="2">
                                                          <ti-cell-text _ngcontent-ng-c1549886349="" class="ti3-cell-text-container ng-star-inserted"
                                                            ><span
                                                              tioverflow=""
                                                              class="ti3-cell-text"
                                                              style="
                                                                text-overflow: ellipsis;
                                                                overflow: hidden;
                                                                display: inline-block;
                                                                white-space: nowrap;
                                                                max-width: calc(100% + 0px);
                                                              "
                                                              >规格名称</span
                                                            ></ti-cell-text
                                                          ><!----><!----><!---->
                                                        </th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          width="8.653846153846153%"
                                                          class="ng-star-inserted"
                                                          ti-visible-index="3"
                                                        >
                                                          <ti-cell-text _ngcontent-ng-c1549886349="" class="ti3-cell-text-container ng-star-inserted"
                                                            ><span
                                                              tioverflow=""
                                                              class="ti3-cell-text"
                                                              style="
                                                                text-overflow: ellipsis;
                                                                overflow: hidden;
                                                                display: inline-block;
                                                                white-space: nowrap;
                                                                max-width: calc(100% - 20px);
                                                              "
                                                              >vCPUs</span
                                                            ></ti-cell-text
                                                          ><!----><!----><ti-head-sort
                                                            _ngcontent-ng-c1549886349=""
                                                            id="vcpusSortId"
                                                            class="ti3-sort-container ng-star-inserted"
                                                            ><span tioutline="" class="ti3-sort ti3-icon" tabindex="0"></span></ti-head-sort
                                                          ><!---->
                                                        </th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          width="8.653846153846153%"
                                                          class="ng-star-inserted"
                                                          ti-visible-index="4"
                                                        >
                                                          <ti-cell-text _ngcontent-ng-c1549886349="" class="ti3-cell-text-container ng-star-inserted"
                                                            ><span
                                                              tioverflow=""
                                                              class="ti3-cell-text"
                                                              style="
                                                                text-overflow: ellipsis;
                                                                overflow: hidden;
                                                                display: inline-block;
                                                                white-space: nowrap;
                                                                max-width: calc(100% - 20px);
                                                              "
                                                              >内存</span
                                                            ></ti-cell-text
                                                          ><!----><!----><ti-head-sort
                                                            _ngcontent-ng-c1549886349=""
                                                            id="memoryGSortId"
                                                            class="ti3-sort-container ng-star-inserted"
                                                            ><span tioutline="" class="ti3-sort ti3-icon" tabindex="0"></span></ti-head-sort
                                                          ><!---->
                                                        </th>
                                                        <!----><!----><!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          width="10.576923076923077%"
                                                          class="ng-star-inserted"
                                                          ti-visible-index="5"
                                                        >
                                                          <ti-cell-text _ngcontent-ng-c1549886349="" class="ti3-cell-text-container ng-star-inserted"
                                                            ><span
                                                              tioverflow=""
                                                              class="ti3-cell-text"
                                                              style="
                                                                text-overflow: ellipsis;
                                                                overflow: hidden;
                                                                display: inline-block;
                                                                white-space: nowrap;
                                                                max-width: calc(100% - 20px);
                                                              "
                                                              >CPU</span
                                                            ></ti-cell-text
                                                          ><!----><!----><ti-head-sort
                                                            _ngcontent-ng-c1549886349=""
                                                            id="cpuInfoSortId"
                                                            class="ti3-sort-container ng-star-inserted"
                                                            ><span tioutline="" class="ti3-sort ti3-icon" tabindex="0"></span></ti-head-sort
                                                          ><!---->
                                                        </th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          width="15.384615384615385%"
                                                          class="ng-star-inserted"
                                                          ti-visible-index="6"
                                                          style="width: 252.9px"
                                                        >
                                                          <!----><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_22"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1505140518="" class="tp-helptip-label" id="ti_auto_id_22_label"
                                                              >基准 / 最大带宽</span
                                                            ><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_22_tipicon"
                                                              tiny3version="12.3.210"
                                                            ></tp-icon
                                                            ><!----><!----></tp-helptip
                                                          ><!----><ti-head-sort
                                                            _ngcontent-ng-c1549886349=""
                                                            id="qosSortFlagSortId"
                                                            class="ti3-sort-container ng-star-inserted"
                                                            ><span tioutline="" class="ti3-sort ti3-icon" tabindex="0"></span></ti-head-sort
                                                          ><!---->
                                                        </th>
                                                        <!----><!---->
                                                        <th _ngcontent-ng-c1549886349="" width="12.5%" class="ng-star-inserted" ti-visible-index="7">
                                                          <!----><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_23"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1505140518="" class="tp-helptip-label" id="ti_auto_id_23_label"
                                                              >内网收发包</span
                                                            ><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_23_tipicon"
                                                              tiny3version="12.3.210"
                                                            ></tp-icon
                                                            ><!----><!----></tp-helptip
                                                          ><!----><ti-head-sort
                                                            _ngcontent-ng-c1549886349=""
                                                            id="ppsMaxSortId"
                                                            class="ti3-sort-container ng-star-inserted"
                                                            ><span tioutline="" class="ti3-sort ti3-icon" tabindex="0"></span></ti-head-sort
                                                          ><!---->
                                                        </th>
                                                        <!----><!----><!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          width="6.730769230769232%"
                                                          class="ng-star-inserted"
                                                          ti-visible-index="8"
                                                        >
                                                          <ti-cell-text _ngcontent-ng-c1549886349="" class="ti3-cell-text-container ng-star-inserted"
                                                            ><span
                                                              tioverflow=""
                                                              class="ti3-cell-text"
                                                              style="
                                                                text-overflow: ellipsis;
                                                                overflow: hidden;
                                                                display: inline-block;
                                                                white-space: nowrap;
                                                                max-width: calc(100% + 0px);
                                                              "
                                                              >IPv6</span
                                                            ></ti-cell-text
                                                          ><!----><!----><!---->
                                                        </th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          width="12.5%"
                                                          class="ng-star-inserted"
                                                          ti-visible-index="9"
                                                          style="width: 218.6px"
                                                        >
                                                          <!----><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_24"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1505140518="" class="tp-helptip-label" id="ti_auto_id_24_label"
                                                              >规格参考价</span
                                                            ><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_24_tipicon"
                                                              tiny3version="12.3.210"
                                                            ></tp-icon
                                                            ><!----><!----></tp-helptip
                                                          ><!----><ti-head-sort
                                                            _ngcontent-ng-c1549886349=""
                                                            id="priceSortId"
                                                            class="ti3-sort-container ng-star-inserted"
                                                            ><span tioutline="" class="ti3-sort ti3-icon" tabindex="0"></span></ti-head-sort
                                                          ><!---->
                                                        </th>
                                                        <!----><!----><!---->
                                                      </tr>
                                                    </thead>
                                                  </table>
                                                  <div class="ti3-table-fixed-head-filler" style="width: 17px"></div>
                                                </div>
                                                <div
                                                  _ngcontent-ng-c1549886349=""
                                                  id="fixedFlavorTable"
                                                  class="cdk-virtual-scroll-viewport ti3-table-container set-table-height ti3-resize-wrapper reset-table-scrollbar cdk-virtual-scrollable cdk-virtual-scroll-orientation-vertical ti3-table-virtual-scroll-viewport"
                                                  style="height: 400px"
                                                >
                                                  <!-- ECS 规格列表 -->
                                                  <table
                                                    _ngcontent-ng-c1549886349=""
                                                    class="ti3-table-virtual-scroll-content-wrapper"
                                                    style="transform: translateY(0px)"
                                                  >
                                                    <thead _ngcontent-ng-c1549886349="">
                                                      <tr _ngcontent-ng-c1549886349="">
                                                        <th _ngcontent-ng-c1549886349="" radio-column=""></th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="12.5%"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="12.5%"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="8.653846153846153%"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="8.653846153846153%"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!----><!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="10.576923076923077%"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="15.384615384615385%"
                                                          style="
                                                            text-overflow: ellipsis;
                                                            overflow: hidden;
                                                            display: table-cell;
                                                            white-space: nowrap;
                                                            width: 252.9px;
                                                          "
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="12.5%"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!----><!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="6.730769230769232%"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!---->
                                                        <th
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          width="12.5%"
                                                          style="
                                                            text-overflow: ellipsis;
                                                            overflow: hidden;
                                                            display: table-cell;
                                                            white-space: nowrap;
                                                            width: 218.6px;
                                                          "
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!----><!---->
                                                      </tr>
                                                    </thead>
                                                    <tbody _ngcontent-ng-c1549886349="">
                                                      <tr
                                                        _ngcontent-ng-c1549886349=""
                                                        :class="{ 'common-disabled-action': spec.disabled }"
                                                        v-for="spec in specList"
                                                        :key="spec.name"
                                                      >
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            :name="spec.name"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            :disabled="spec.disabled"
                                                            :checked="spec.selected"
                                                            @click="select(spec.name)"
                                                            :id="spec.name"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" :for="spec.name" :id="spec.name"
                                                            ><span tioutline="" class="ti3-radio-skin" tabindex="0"></span
                                                            ><!----></label
                                                          ><!----><!----><!---->
                                                        </td>
                                                        <td _ngcontent-ng-c1549886349="">
                                                          <span
                                                            _ngcontent-ng-c1549886349=""
                                                            tioverflow=""
                                                            titipposition="top"
                                                            class="flavor-type"
                                                            id="undefined"
                                                            style="
                                                              text-overflow: ellipsis;
                                                              overflow: hidden;
                                                              display: inline-block;
                                                              white-space: nowrap;
                                                            "
                                                            >{{ spec.type }}</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_25"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_25_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_25_tipicon"
                                                              tiny3version="12.3.210"
                                                            ></tp-icon
                                                            ><!----><!----></tp-helptip
                                                          ><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          titipposition="right"
                                                          titipmaxwidth="400px"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="">{{ spec.name }}</span
                                                          ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"></span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          {{ spec.vcpus }}
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          {{ spec.memory }}
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          {{ spec.cpu }}
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          {{ spec.pos }}
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          {{ spec.pps }}
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          {{ spec.ipv6 }}
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">{{ spec.price }}</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                    </tbody>
                                                    <!----><!---->
                                                  </table>
                                                  <div class="ti3-table-virtual-scroll-spacer"></div>
                                                </div>
                                              </ti-table>
                                            </div>
                                            <!----><ecs-flavor-desc _ngcontent-ng-c1549886349="" _nghost-ng-c3525477325="" class="ng-star-inserted">
                                              <div _ngcontent-ng-c3525477325="" class="mt16 ng-star-inserted">
                                                <div _ngcontent-ng-c3525477325="" class="clearfix">
                                                  <div _ngcontent-ng-c3525477325="" class="pull-left mr12 line-height18 zh-msg-width">变更后规格</div>
                                                  <div _ngcontent-ng-c3525477325="" class="pull-left">
                                                    <div _ngcontent-ng-c3525477325="">
                                                      <div
                                                        _ngcontent-ng-c3525477325=""
                                                        class="line-height18"
                                                        style="font-weight: bold; display: inline-block; font-family: Arial; margin-right: 20px"
                                                      >
                                                        {{ selectedSpec }}
                                                        <!---->
                                                      </div>
                                                      <!---->
                                                    </div>
                                                    <div
                                                      _ngcontent-ng-c3525477325=""
                                                      class="common-color-prompt common-color-dt-description mt12 ng-star-inserted"
                                                    >
                                                      T6型实例创建成功后，可以选择操作列下“更多 &gt; 查看积分指标”，查看实例的积分使用情况。
                                                      <!---->
                                                    </div>
                                                    <!----><!----><!---->
                                                  </div>
                                                </div>
                                                <!----><!----><!----><!----><!----><!----><!----><!---->
                                              </div>
                                              <!----> </ecs-flavor-desc
                                            ><!----><!----><!----><!---->
                                          </div>
                                          <!----><!----> </ecs-flavor-modal
                                        ><!---->
                                      </div>
                                      <div _ngcontent-ng-c596763178="" class="clearfix clearfloat"><!----><!----><!----><!----><!----></div>
                                      <div _ngcontent-ng-c596763178="" class="clearfix clearfloat mt20 ng-untouched ng-pristine ng-valid">
                                        <ti-formfield
                                          _ngcontent-ng-c596763178=""
                                          id="vm-upgrade-spec-cpu-options"
                                          verticalalign="top"
                                          _nghost-ng-c3220445061=""
                                          tiny3version="12.3.210"
                                          ><!---->
                                          <table
                                            _ngcontent-ng-c3220445061=""
                                            class="ti3-form ng-star-inserted"
                                            style="max-width: 100%; vertical-align: top"
                                            id="vm-upgrade-spec-cpu-options_table"
                                          >
                                            <tbody _ngcontent-ng-c3220445061="">
                                              <!----><!---->
                                            </tbody>
                                          </table>
                                          <!----><!----><!----><!----><!----><!----><!---->
                                        </ti-formfield>
                                      </div> </tp-layout-section
                                    ><!---->
                                  </div>
                                  <!---->
                                </tp-layout-content-body></tp-layout-content
                              >
                            </div>
                            <!---->
                          </ti-app-layout-main-content>
                        </div>
                        <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-content-footer">
                          <ti-app-layout-main-footer _ngcontent-ng-c596763178="" _nghost-ng-c4203532101="">
                            <div _ngcontent-ng-c596763178="">
                              <tp-buylayer
                                _ngcontent-ng-c596763178=""
                                id="upgrade_confirm_buylayer"
                                class="tp-buylayer-aligncenter tp-buylayer-container ng-star-inserted"
                                _nghost-ng-c4018966349=""
                                tiny3version="12.3.210"
                                style="padding-left: 0px"
                              >
                                <div _ngcontent-ng-c4018966349="" class="tp-buylayer-content">
                                  <tp-buylayer-left
                                    _ngcontent-ng-c4018966349=""
                                    _nghost-ng-c908810386=""
                                    id="upgrade_confirm_buylayer_buylayer_left"
                                    tiny3version="12.3.210"
                                  >
                                    <div _ngcontent-ng-c908810386="" class="tp-buylayer-font-main">
                                      <div _ngcontent-ng-c908810386="" class="tp-buyLayer-price-container">
                                        <div _ngcontent-ng-c908810386="" class="tp-buyLayer-left-zone ng-star-inserted"><!----><!----></div>
                                        <!---->
                                        <div _ngcontent-ng-c908810386="" class="tp-buylayer-price-zone ng-star-inserted">
                                          <div _ngcontent-ng-c908810386="" class="tp-buylayer-majorprice-container ng-star-inserted">
                                            <!---->
                                            <div _ngcontent-ng-c908810386="" style="display: inline-block" class="ng-star-inserted">
                                              <span _ngcontent-ng-c908810386="" class="ng-star-inserted"
                                                ><!----><span _ngcontent-ng-c908810386="" class="tp-buylayer-label">配置费用</span
                                                ><!----><span _ngcontent-ng-c908810386="" class="ng-star-inserted"
                                                  ><!----><!----><span _ngcontent-ng-c908810386="" class="ng-star-inserted"
                                                    ><span _ngcontent-ng-c908810386="" class="tp-buylayer-majorprice-value ng-star-inserted"
                                                      >¥0.10<!----><!----><!----><!----></span
                                                    ><span _ngcontent-ng-c908810386="" class="tp-buylayer-price-measureUnit ng-star-inserted"
                                                      >/小时</span
                                                    ><!----><!----></span
                                                  ><!----><!----><!----><!----></span
                                                ><!----></span
                                              ><!----><!---->
                                            </div>
                                            <div _ngcontent-ng-c908810386="" style="display: inline-block" class="ng-star-inserted">
                                              <!----><!---->
                                            </div>
                                            <!----><!----><!----><!----><!----><!---->
                                          </div>
                                          <!----><!----><!----><!---->
                                          <div _ngcontent-ng-c908810386="" class="tp-buylayer-disclaimer-container ng-star-inserted">
                                            <span _ngcontent-ng-c908810386="" class="tp-buylayer-main-disclaimer ng-star-inserted">
                                              实际扣费以账单为准。<!----><!----></span
                                            ><!----><span _ngcontent-ng-c908810386="" class="tp-buylayer-minor-disclaimer ng-star-inserted"
                                              ><!----><!----><!----><!----></span
                                            ><!----><!----><!---->
                                          </div>
                                          <!---->
                                        </div>
                                        <!---->
                                      </div>
                                      <div _ngcontent-ng-c908810386="" class="tp-buyLayer-price-cal" style="display: none">
                                        <!----><!----><!----><!---->
                                      </div>
                                    </div>
                                    <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----> </tp-buylayer-left
                                  ><tp-buylayer-right _ngcontent-ng-c4018966349="" _nghost-ng-c2831934619="" class="tp-buylayer-right"
                                    ><span _ngcontent-ng-c2831934619="" class="ng-star-inserted">
                                      <button
                                        _ngcontent-ng-c2831934619=""
                                        tibutton=""
                                        class="tp-buylayer-button ti3-btn-large ng-star-inserted"
                                        type="button"
                                        id="btn3"
                                        tiny3version="12.3.210"
                                        ref="prevStepRef"
                                        @click="prevStep"
                                      >
                                        <!---->上一步
                                      </button>
                                      <button
                                        _ngcontent-ng-c2831934619=""
                                        tibutton=""
                                        class="tp-buylayer-button ti3-btn-danger ti3-btn-large ng-star-inserted"
                                        type="button"
                                        id="modifyEcsSpecificationsNextButton"
                                        tiny3version="12.3.210"
                                        ref="nextStepRef"
                                        @click="nextStep"
                                      >
                                        下一步
                                      </button>
                                      <!----></span
                                    ><span _ngcontent-ng-c2831934619="" class="ng-star-inserted"><!----></span
                                    ><span _ngcontent-ng-c2831934619="" class="ng-star-inserted"><!----></span
                                    ><span _ngcontent-ng-c2831934619="" class="ng-star-inserted"><!----></span
                                    ><!----><!----><!----></tp-buylayer-right
                                  >
                                </div> </tp-buylayer
                              ><!----><!---->
                            </div>
                          </ti-app-layout-main-footer>
                        </div>
                      </div>
                      <div _ngcontent-ng-c3415584491="" class="ti-app-layout-main-body-right"></div>
                    </div> </ti-app-layout-main></ibiza-ecs-vm-upgrade-spec
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
</template>

<style>
@import './ecs-upgrade-spec.css';
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Modal } from '@opentiny/vue';
// import { useNextServer } from '@opentiny/next-vue'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ServerCapabilities } from '../../utils';
import { addSwitchRouterTool } from '../../utils';

const server = new McpServer(
  {
    name: 'console-poc-ecs-server',
    version: '1.0.0'
  },
  { capabilities: ServerCapabilities }
);

const selectedSpec = ref(window.parent.selectedSpec);

addSwitchRouterTool(server);

window.addEventListener('message', async (event) => {
  if (event.data.type === 'change-tab' && event.data.page === 'ecs-upgrade-spec-confirm') {
    await server.connect(window.parent.$serverTransport);
    window.parent.postMessage({ type: 'loaded', page: 'ecs-upgrade-spec-confirm' }, '*');
  }
});

onMounted(async () => {
  await server.connect(window.parent.$serverTransport);
  window.parent.postMessage({ type: 'loaded', page: 'ecs-upgrade-spec-confirm' }, '*');
});

const submitUpgradeSpecRef = ref();
const prevStepRef = ref();

const submitUpgradeSpec = () => {
  Modal.message({
    status: 'success',
    message: '规格变更成功！'
  });
};

// const nextServer = useNextServer({
//   serverInfo: { name: 'ecs-upgrade-spec-confirm-server', version: '1.0.0' }
// })

// const server = nextServer?.server
// console.log('ecs-upgrade-spec-confirm server=====', server);

server?.registerTool(
  'confirm-upgrade-spec',
  {
    description: `
    用于规格变更确认后，点击确认提交。
    点击确认提交时变更规格的最后一步，该步骤应该由人手动点击和确认。
    `
  },
  async () => {
    window.parent.postMessage({ type: 'tool-notify', title: '确认提交' }, '*');
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // 延时1秒
    window.parent.postMessage({ type: 'tool-notify-close' }, '*');
    submitUpgradeSpecRef.value?.click();
    return {
      content: [{ type: 'text', text: 'success' }]
    };
  }
);

server?.registerTool(
  'agree-upgrade-spec',
  {
    description: `
    用于点击授权同意“我已经阅读并同意《镜像免责声明》”。
    点击确认提交之前，需要先调用该工具，同意免责声明。
    `
  },
  async () => {
    window.parent.postMessage({ type: 'tool-notify', title: '点击同意' }, '*');
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // 延时1秒
    window.parent.postMessage({ type: 'tool-notify-close' }, '*');
    document.getElementById('upgrade_confirm_check_checkbox')?.click();
    return {
      content: [{ type: 'text', text: 'success' }]
    };
  }
);

server?.registerTool(
  'prev-step',
  {
    description: '用于回到上一步 ，重新选择规格后'
  },
  async () => {
    window.parent.postMessage({ type: 'tool-notify', title: '回到上一步' }, '*');
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000)); // 延时1秒
    window.parent.postMessage({ type: 'tool-notify-close' }, '*');

    prevStepRef.value.click();
    return {
      content: [{ type: 'text', text: 'success' }]
    };
  }
);

onMounted(async () => {
  await server.connect(window.parent.$serverTransport);
  window.parent.postMessage({ type: 'loaded', page: 'ecs-list' }, '*');
});

const prevStep = () => {
  window.parent.switchRouter('/console-home/ecs-upgrade-spec.html');
};
</script>

<template>
  <div id="J_container" style="padding-left: 0px; padding-top: 0; margin-right: 36px; width: calc(100% - 36px)">
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
                            <div _ngcontent-ng-c596763178="" id="upgrade_vm">
                              <tp-layout-content _ngcontent-ng-c596763178="" _nghost-ng-c1285424354="" class="tp-layout-content"
                                ><tp-layout-content-body
                                  _ngcontent-ng-c596763178=""
                                  id="upgrade_vm_containter"
                                  class="tp-no-steps"
                                  _nghost-ng-c597071219=""
                                >
                                  <div _ngcontent-ng-c596763178="" class="cti-header">云服务器变更规格</div>
                                  <!---->
                                  <div _ngcontent-ng-c596763178="" class="hide">
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
                                                          <span _ngcontent-ng-c596763178="">通用入门型 | t6.small.1 | 1vCPUs | 1GiB</span
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
                                                    class="ti3-btn-item-container ng-star-inserted"
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
                                                    class="ti3-btn-item-container ng-star-inserted ti3-active"
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
                                                        ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">t6</span
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
                                                  <table _ngcontent-ng-c1549886349="" style="width: 100%">
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
                                                          style="width: 234.6px"
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
                                                </div>
                                                <div
                                                  _ngcontent-ng-c1549886349=""
                                                  id="fixedFlavorTable"
                                                  class="cdk-virtual-scroll-viewport ti3-table-container set-table-height ti3-resize-wrapper reset-table-scrollbar cdk-virtual-scrollable cdk-virtual-scroll-orientation-vertical ti3-table-virtual-scroll-viewport"
                                                  style="height: 572px"
                                                >
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
                                                            width: 234.6px;
                                                          "
                                                          class="ng-star-inserted"
                                                        ></th>
                                                        <!----><!----><!---->
                                                      </tr>
                                                    </thead>
                                                    <tbody _ngcontent-ng-c1549886349="">
                                                      <tr _ngcontent-ng-c1549886349="" class="common-disabled-action ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            disabled=""
                                                            id="flavorValue0"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue0" id="flavorValue0_radio"
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
                                                            >通用入门型t6</span
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.small.1</span
                                                          ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"></span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          1vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          1GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.05 / 0.3 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          6万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.06/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted ti3-selected-tr">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue1"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-valid ng-star-inserted ng-dirty ng-touched"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue1" id="flavorValue1_radio"
                                                            ><span tioutline="" class="ti3-radio-skin" tabindex="0" style=""></span
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_26"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_26_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_26_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.medium.2</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          1vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          2GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.05 / 0.3 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          6万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.10/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue2"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-valid ng-star-inserted ng-dirty ng-touched"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue2" id="flavorValue2_radio"
                                                            ><span tioutline="" class="ti3-radio-skin" tabindex="0" style=""></span
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_27"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_27_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_27_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.large.1</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          2vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          2GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.1 / 0.5 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          10万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.16/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue3"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue3" id="flavorValue3_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_28"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_28_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_28_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.large.2</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          2vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          4GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.1 / 0.5 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          10万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.22/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue4"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue4" id="flavorValue4_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_29"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_29_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_29_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.large.4</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          2vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          8GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.1 / 0.5 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          10万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.34/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue5"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue5" id="flavorValue5_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_30"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_30_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_30_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.xlarge.1</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          4vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          4GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.2 / 1 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          20万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.32/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue6"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue6" id="flavorValue6_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_31"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_31_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_31_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.xlarge.2</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          4vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          8GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.2 / 1 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          20万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.44/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue7"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue7" id="flavorValue7_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_32"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_32_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_32_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.xlarge.4</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          4vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          16GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.2 / 1 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          20万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.68/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue8"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue8" id="flavorValue8_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_33"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_33_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_33_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.2xlarge.1</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          8vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          8GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.4 / 2 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          40万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.66/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue9"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue9" id="flavorValue9_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_34"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_34_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_34_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.2xlarge.2</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          8vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          16GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.4 / 2 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          40万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥0.91/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue10"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue10" id="flavorValue10_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_35"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_35_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_35_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.2xlarge.4</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          8vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          32GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.4 / 2 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          40万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥1.42/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <tr _ngcontent-ng-c1549886349="" class="ng-star-inserted">
                                                        <td _ngcontent-ng-c1549886349="" radio-column="">
                                                          <input
                                                            _ngcontent-ng-c1549886349=""
                                                            type="radio"
                                                            name="flavorValue"
                                                            meta-data-uba="www_v1_ecs.click.ecs_create_flavor_select_value"
                                                            tiradio=""
                                                            id="flavorValue11"
                                                            tiny3version="12.3.210"
                                                            tiform=""
                                                            class="ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                          /><label class="ti3-radio ng-star-inserted" for="flavorValue11" id="flavorValue11_radio"
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
                                                            >通用入门型t6</span
                                                          ><tp-helptip
                                                            _ngcontent-ng-c1549886349=""
                                                            icontipposition="right-top"
                                                            style="vertical-align: middle; height: 16px"
                                                            _nghost-ng-c1505140518=""
                                                            id="ti_auto_id_36"
                                                            tiny3version="12.3.210"
                                                            class="ng-star-inserted"
                                                            ><span
                                                              _ngcontent-ng-c1505140518=""
                                                              class="tp-helptip-label"
                                                              id="ti_auto_id_36_label"
                                                            ></span
                                                            ><!----><!----><tp-icon
                                                              _ngcontent-ng-c1505140518=""
                                                              local=""
                                                              name="cloudx-action-help"
                                                              class="tp-icon-cloudx-action-help ng-star-inserted"
                                                              id="ti_auto_id_36_tipicon"
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
                                                          <!----><span _ngcontent-ng-c1549886349="">t6.4xlarge.1</span
                                                          ><!----><!----><!----><!----><!---->
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          16vCPUs
                                                        </td>
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          16GiB
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          Intel SkyLake 6161 2.2GHz
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          0.8 / 3 Gbit/s
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          60万PPS
                                                        </td>
                                                        <!----><!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          是
                                                        </td>
                                                        <!---->
                                                        <td
                                                          _ngcontent-ng-c1549886349=""
                                                          tioverflow=""
                                                          class="ng-star-inserted"
                                                          style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                        >
                                                          <!----><span _ngcontent-ng-c1549886349="" class="ng-star-inserted"
                                                            ><span _ngcontent-ng-c1549886349="" class="ng-star-inserted">¥1.31/小时</span
                                                            ><!----><!----></span
                                                          ><!---->
                                                        </td>
                                                        <!---->
                                                      </tr>
                                                      <!---->
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
                                                        通用入门型 | t6.xlarge.2 | 4vCPUs | 8GiB
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
                                  <tp-layout-section _ngcontent-ng-c596763178="" _nghost-ng-c2332595846="" class="tp-layout-section ng-star-inserted"
                                    ><ibiza-ecs-ecs-upgrade-confirm _ngcontent-ng-c596763178="" _nghost-ng-c3683435227="">
                                      <div _ngcontent-ng-c3683435227="" class="cti-wizard-content" style="margin-bottom: 50px">
                                        <div _ngcontent-ng-c3683435227="" class="cti-section">
                                          <div _ngcontent-ng-c3683435227="" class="sub-title">详情</div>
                                          <ti-table
                                            _ngcontent-ng-c3683435227=""
                                            ticolsresizable=""
                                            id="upgrade_confirm_table"
                                            tiny3version="12.3.210"
                                            class="ti3-table"
                                          >
                                            <div _ngcontent-ng-c3683435227="" class="ti3-resize-wrapper">
                                              <table _ngcontent-ng-c3683435227="">
                                                <thead _ngcontent-ng-c3683435227="">
                                                  <tr _ngcontent-ng-c3683435227="">
                                                    <th _ngcontent-ng-c3683435227="" width="15%" class="ng-star-inserted">产品</th>
                                                    <!----><!---->
                                                    <th _ngcontent-ng-c3683435227="" width="30%" class="ng-star-inserted">配置</th>
                                                    <!----><!---->
                                                    <th _ngcontent-ng-c3683435227="" width="20%" class="ng-star-inserted">变更前</th>
                                                    <!----><!---->
                                                    <th _ngcontent-ng-c3683435227="" width="20%" style="font-weight: bold" class="ng-star-inserted">
                                                      变更后
                                                    </th>
                                                    <!----><!---->
                                                    <th _ngcontent-ng-c3683435227="" width="15%" style="text-align: right" class="ng-star-inserted">
                                                      价格
                                                    </th>
                                                    <!----><!----><!---->
                                                  </tr>
                                                </thead>
                                                <tbody _ngcontent-ng-c3683435227="">
                                                  <tr _ngcontent-ng-c3683435227="">
                                                    <td
                                                      _ngcontent-ng-c3683435227=""
                                                      tioverflow=""
                                                      style="
                                                        padding-right: 25px;
                                                        text-overflow: ellipsis;
                                                        overflow: hidden;
                                                        display: table-cell;
                                                        white-space: nowrap;
                                                      "
                                                    >
                                                      弹性云服务器
                                                    </td>
                                                    <td _ngcontent-ng-c3683435227="">
                                                      <ti-formfield
                                                        _ngcontent-ng-c3683435227=""
                                                        _nghost-ng-c3220445061=""
                                                        id="ti_auto_id_38"
                                                        tiny3version="12.3.210"
                                                        type="text"
                                                        ><!---->
                                                        <table
                                                          _ngcontent-ng-c3220445061=""
                                                          class="ti3-form ng-star-inserted"
                                                          style="max-width: 100%; vertical-align: top"
                                                          id="ti_auto_id_38_table"
                                                        >
                                                          <tbody _ngcontent-ng-c3220445061="" class="ti3-text-form">
                                                            <tr _ngcontent-ng-c3220445061="" class="ng-star-inserted">
                                                              <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                                <span
                                                                  _ngcontent-ng-c3220445061=""
                                                                  class="ti3-icon ti3-icon-staricon"
                                                                  hidden=""
                                                                ></span>
                                                              </td>
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                                rowspan="1"
                                                                style="line-height: 22px; padding-top: 0px; padding-bottom: 0px"
                                                              >
                                                                <div _ngcontent-ng-c3220445061="">云服务器名称</div>
                                                              </td>
                                                              <!---->
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                                colspan="1"
                                                                rowspan="1"
                                                                style="line-height: 22px; padding-top: 0px; padding-bottom: 0px"
                                                              >
                                                                <ti-item _ngcontent-ng-c3683435227=""
                                                                  ><span _ngcontent-ng-c3683435227="" style="word-break: break-all"
                                                                    >ecs-155a</span
                                                                  ></ti-item
                                                                >
                                                              </td>
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                rowspan="1"
                                                                style="width: 0px"
                                                                class="ng-star-inserted"
                                                              ></td>
                                                              <!----><!----><!---->
                                                            </tr>
                                                            <tr _ngcontent-ng-c3220445061="" class="ng-star-inserted">
                                                              <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                                <span
                                                                  _ngcontent-ng-c3220445061=""
                                                                  class="ti3-icon ti3-icon-staricon"
                                                                  hidden=""
                                                                ></span>
                                                              </td>
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                                rowspan="1"
                                                                style="line-height: 22px; padding-top: 0px; padding-bottom: 0px"
                                                              >
                                                                <div _ngcontent-ng-c3220445061="">ID</div>
                                                              </td>
                                                              <!---->
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                                colspan="1"
                                                                rowspan="1"
                                                                style="line-height: 22px; padding-top: 0px; padding-bottom: 0px"
                                                              >
                                                                <ti-item _ngcontent-ng-c3683435227=""> dd0aaf47-e2d5-415e-a848-127af6fdc34b </ti-item>
                                                              </td>
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                rowspan="1"
                                                                style="width: 0px"
                                                                class="ng-star-inserted"
                                                              ></td>
                                                              <!----><!----><!---->
                                                            </tr>
                                                            <tr _ngcontent-ng-c3220445061="" class="ti3-form-list ng-star-inserted">
                                                              <td _ngcontent-ng-c3220445061="" rowspan="1" class="ng-star-inserted">
                                                                <span
                                                                  _ngcontent-ng-c3220445061=""
                                                                  class="ti3-icon ti3-icon-staricon"
                                                                  hidden=""
                                                                ></span>
                                                              </td>
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                class="ti3-form-label ti3-text-form-label ng-star-inserted"
                                                                rowspan="1"
                                                                style="line-height: 22px; padding-top: 0px; padding-bottom: 0px"
                                                              >
                                                                <div _ngcontent-ng-c3220445061="">计费模式</div>
                                                              </td>
                                                              <!---->
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                class="ti3-form-content ti3-text-form-content ng-star-inserted"
                                                                colspan="1"
                                                                rowspan="1"
                                                                style="line-height: 22px; padding-top: 0px; padding-bottom: 0px"
                                                              >
                                                                <ti-item _ngcontent-ng-c3683435227="">
                                                                  <p _ngcontent-ng-c3683435227="">按需计费</p>
                                                                </ti-item>
                                                              </td>
                                                              <td
                                                                _ngcontent-ng-c3220445061=""
                                                                rowspan="1"
                                                                style="width: 0px"
                                                                class="ng-star-inserted"
                                                              ></td>
                                                              <!----><!----><!---->
                                                            </tr>
                                                            <!----><!---->
                                                          </tbody>
                                                        </table>
                                                        <!----><!----><!----><!----><!----><!----><!---->
                                                      </ti-formfield>
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3683435227=""
                                                      tioverflow=""
                                                      style="text-overflow: ellipsis; overflow: hidden; display: table-cell; white-space: nowrap"
                                                    >
                                                      <span _ngcontent-ng-c3683435227="" class="ng-star-inserted"
                                                        ><span _ngcontent-ng-c3683435227="">通用计算型</span><br _ngcontent-ng-c3683435227="" /><span
                                                          _ngcontent-ng-c3683435227=""
                                                          >s6.small.1 | 1vCPUs | 1GiB</span
                                                        ><!----></span
                                                      ><!---->
                                                    </td>
                                                    <td
                                                      _ngcontent-ng-c3683435227=""
                                                      tioverflow=""
                                                      style="
                                                        font-weight: bold;
                                                        text-overflow: ellipsis;
                                                        overflow: hidden;
                                                        display: table-cell;
                                                        white-space: nowrap;
                                                      "
                                                    >
                                                      <span _ngcontent-ng-c3683435227="" class="ng-star-inserted"
                                                        ><span _ngcontent-ng-c3683435227="">{{ selectedSpec?.type }}</span
                                                        ><br _ngcontent-ng-c3683435227="" /><span _ngcontent-ng-c3683435227=""
                                                          >{{ selectedSpec.name }} | {{ selectedSpec.vcpus }} | {{ selectedSpec.memory }}</span
                                                        ><!----></span
                                                      ><!---->
                                                    </td>
                                                    <td _ngcontent-ng-c3683435227="" class="no-auto-tip ng-star-inserted" style="text-align: right">
                                                      <div _ngcontent-ng-c3683435227="" class="ng-star-inserted">
                                                        <strong _ngcontent-ng-c3683435227="" class="textRight common-color-number">
                                                          {{ selectedSpec.price }}
                                                          <!----></strong
                                                        >
                                                      </div>
                                                      <!----><!---->
                                                    </td>
                                                    <!---->
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div> </ti-table
                                          ><!---->
                                          <div _ngcontent-ng-c3683435227="" class="mt20 ng-star-inserted">
                                            <input
                                              _ngcontent-ng-c3683435227=""
                                              id="upgrade_confirm_check"
                                              type="checkbox"
                                              meta-data-uba="www_v1_ecs.click.ecs_list_modifySpec_confirm_protocol_checkbox"
                                              ticheckbox=""
                                              _nghost-ng-c531329826=""
                                              tiny3version="12.3.210"
                                              tiform=""
                                              class="ng-untouched ng-pristine ng-valid"
                                            /><label
                                              _ngcontent-ng-c531329826=""
                                              class="ti3-checkbox ng-star-inserted"
                                              for="upgrade_confirm_check"
                                              id="upgrade_confirm_check_checkbox"
                                              ><span
                                                _ngcontent-ng-c531329826=""
                                                tioutline=""
                                                class="ti3-checkbox-skin ti3-icon ti3-icon-checkmark"
                                                tabindex="0"
                                              ></span
                                              ><span
                                                _ngcontent-ng-c531329826=""
                                                class="ti3-checkbox-label"
                                                id="upgrade_confirm_check_label"
                                              ></span></label
                                            ><span _ngcontent-ng-c3683435227="" class="lheight_16 protocolLink"
                                              >我已经阅读并同意《<a
                                                href="http://www.huaweicloud.com/declaration/tsa_ims.html"
                                                target="_blank"
                                                class="common-link"
                                                rel="noopener noreferrer"
                                                >镜像免责声明</a
                                              >》</span
                                            >
                                          </div>
                                          <!---->
                                        </div>
                                      </div>
                                      <!---->
                                    </ibiza-ecs-ecs-upgrade-confirm></tp-layout-section
                                  ><!---->
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
                                                    ><span _ngcontent-ng-c908810386="" class="tp-buylayer-majorprice-value ng-star-inserted">{{
                                                      selectedSpec.price
                                                    }}</span></span
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
                                    ><span _ngcontent-ng-c2831934619="" class="ng-star-inserted"><!----></span
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
                                      <!----></span
                                    ><span _ngcontent-ng-c2831934619="" class="ng-star-inserted">
                                      <button
                                        _ngcontent-ng-c2831934619=""
                                        tibutton=""
                                        class="tp-buylayer-button ti3-btn-danger ti3-btn-large ng-star-inserted"
                                        type="button"
                                        id="btn2"
                                        tiny3version="12.3.210"
                                        @click="submitUpgradeSpec"
                                        ref="submitUpgradeSpecRef"
                                      >
                                        提交申请
                                      </button> </span
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
@import './ecs-upgrade-spec-confirm.css';
</style>

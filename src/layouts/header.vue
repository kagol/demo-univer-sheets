<template>
  <div class="header">
    <a
      id="cf_logo"
      class="modules-logo-logo-container"
      href="http://www.huaweicloud.com"
      target="_blank"
      rel="noopener noreferrer"
      cf-uba="logo"
      title="前往官网"
      ><img class="modules-logo-logo" src="https://res.hc-cdn.com/console-ui-common/default/logo.svg"
    /></a>
    <div class="header-right">
      <div title="备案" class="header-item">备案</div>
      <div title="资源" class="header-item">资源</div>
      <div title="费用" class="header-item">费用</div>
      <div title="企业" class="header-item">企业</div>
      <div title="工具" class="header-item">工具</div>
      <div title="工单" class="header-item">工单</div>
      <img src="../assets/header-icon-1.svg" alt="icon1" width="20" height="20" />
      <img src="../assets/header-icon-2.svg" alt="icon2" width="20" height="20" />
      <img src="../assets/header-icon-3.svg" alt="icon3" width="20" height="20" />
      <div class="header-lang">
        <img src="../assets/header-icon-4.svg" alt="lang" width="20" height="20" />
        中文
      </div>
      <tiny-dropdown :title="username">
        <template #dropdown>
          <tiny-dropdown-menu>
            <tiny-dropdown-item @click="handleLogout">注销</tiny-dropdown-item>
          </tiny-dropdown-menu>
        </template>
      </tiny-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem, TinyModal } from '@opentiny/vue';
import axios from 'axios';
// 供 header 用于显示用户名和注销
const username = computed(() => {
  const user = getUserCache();
  return user && user.occupiedUser ? user.occupiedUser : 'test';
});
// 用户缓存相关
async function handleLogout() {
  const user = getUserCache();
  const res = await axios.post(`https://ai.opentiny.design/user/logout?username=${username.value}`);
  if (res.status === 200) {
    clearUserCache();
    window.parent.location.reload();
  } else {
    TinyModal.message({
      message: '注销失败',
      type: 'error'
    });
  }
}
function clearUserCache() {
  sessionStorage.removeItem('currentRole');
  sessionStorage.removeItem('sessionId');
}
function getUserCache() {
  const raw = sessionStorage.getItem('currentRole');
  if (!raw) return null;
  try {
    const obj = JSON.parse(raw);
    if (!obj.occupiedUser) return null;
    return obj;
  } catch {
    return null;
  }
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: #282b33;
  color: white;
  height: 48px;
  background-color: #282b33;
  color: #adb0b8;
  height: calc(4px * 12);
  justify-content: space-between;
  fill: #adb0b8;
  border-bottom: none;
  margin: 0;
  flex-direction: row;
  border-bottom: none;

  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 14px;

    :deep(.tiny-button) {
      color: white;
    }
    :deep(.tiny-dropdown) {
      color: #adb0b8;

      .tiny-dropdown__trigger:not(.tiny-button) .tiny-svg {
        fill: #adb0b8;
      }
    }
  }

  .header-item {
    height: 48px;
    box-sizing: border-box;
    line-height: 48px;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid #fff;
    }
  }

  .header-lang {
    display: flex;
    align-items: center;
    border-right: 0.5px solid #adb0b8;
    padding-right: 20px;
    margin-right: 10px;
    height: 15px;
    gap: 5px;
    font-size: 14px;
  }
}

.username-wrap {
  cursor: pointer;

  .username {
    color: #fff;
    padding: 0 12px;
    border-radius: 4px;
    background: rgba(32, 128, 240, 0.12);
    font-weight: 500;
    transition: background 0.2s;
  }

  .user-menu {
    position: absolute;
    top: 36px;
    right: 0;
    background: #fff;
    color: #333;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
    min-width: 80px;
    z-index: 100;

    .user-menu-item {
      padding: 10px 18px;
      cursor: pointer;

      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>

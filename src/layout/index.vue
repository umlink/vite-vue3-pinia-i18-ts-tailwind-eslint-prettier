<template>
  <a-layout class="base-layout mb-1">
		<a-layout-header>Header</a-layout-header>
		<a-layout-content class="">
			<div class="">
				<router-view v-slot="{ Component, route: { meta } }">
					<keep-alive v-if="meta.keepAlive">
						<component :is="Component" />
					</keep-alive>
					<component v-else :is="Component" />
				</router-view>
			</div>
		</a-layout-content>
  </a-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '@/router/routes'
// import Breadcrumb from './breadcrumb.vue'

const router = useRouter()
const parentPath: string[] = router.currentRoute.value.path.split('/')
const currentPath = parentPath[1] || ''
const selectedKeys = ref([`/${currentPath}`])

const menus = ref(routes)

const collapsed = ref(false)

// BUG:collapseOpen for collapsed, 只有tauri-app(webview) 中有问题
let collapseOpen = true
const onCollapse = (val: boolean) => {
  if (collapseOpen) {
    collapseOpen = false
    return
  }
  collapsed.value = val
}

const onClickMenuItem = (path: string) => router.push(path)
</script>
<style lang="less" scoped>
.base-layout {
  user-select: none;

  :deep(.arco-layout-sider-light) {
    box-shadow: 0 2px 5px 0 rgba(var(--primary-rgb), 0.15);
  }

  :deep(.arco-menu-inner) {
    padding: 0;
    overflow-y: hidden;
  }

  :deep(.arco-menu-collapsed > .arco-menu-inner) {
    height: calc(100vh - 100px);

    .arco-menu-item {
      padding-left: 22px;

      & > span:nth-child(2) {
        display: none;
      }

      .iconfont {
        font-size: 18px !important;
      }
    }
  }

  :deep(.arco-menu-item) {
    @apply bg-white text-gray-500;
    margin-bottom: 0;
    height: 55px;
    font-size: 14px;
    font-weight: bold;
    line-height: 55px;
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 0;

    &:not(.arco-menu-has-icon) {
      overflow: visible;
      white-space: break-spaces;
    }
  }

  :deep(.arco-menu-selected) {
    color: #fff;
    background-color: var(--primary-color);
  }
}

body[arco-theme='dark'] {
  .base-layout {
    :deep(.arco-menu-item) {
      color: #dedede;
      background-color: #232324;
    }

    :deep(.arco-menu-selected) {
      color: #111;
      background-color: var(--primary-color);
    }
  }
}
</style>

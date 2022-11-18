<template>
	<a-config-provider :locale="locale">
		<main class="max-h-screen">
			<div class="text-red-500">
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a href="https://vuejs.org/" target="_blank">
					<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
				</a>
			</div>
			<router-view />
		</main>
	</a-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useConfigStore } from '@/store/config'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import zhCn from '@arco-design/web-vue/es/locale/lang/zh-cn'

const store = useConfigStore()
const locale = computed(() => (store.state.lang === 'zh_CN' ? zhCn : enUS))
</script>

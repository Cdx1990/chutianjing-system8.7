<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useAuthStore } from './stores/auth'

const route = useRoute()
const auth = useAuthStore()
</script>

<template>
  <div v-if="!auth.isAuthenticated || route.path.startsWith('/login')" class="h-full">
    <RouterView />
  </div>
  <div v-else class="h-full grid grid-cols-[240px_1fr]">
    <aside class="h-full border-r border-white/10 p-4">
      <div class="text-xl font-bold mb-6">楚天镜</div>
      <nav class="space-y-2 text-sm">
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/asset">全行资产质量信用风险预警</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/region">区域风险预警</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/industry">行业风险预警</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/group">集团风险预警</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/market">金融市场信用风险预警</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/portfolio">组合风险预警</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/ai-report">生成式风险报告</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/suggestion">意见建议</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/settings">系统设置</RouterLink>
        <RouterLink class="block px-2 py-2 rounded hover:bg-white/10" active-class="nav-active" to="/users">用户管理</RouterLink>
      </nav>
      <div class="mt-6 text-sm">
        <button class="btn-ghost" @click="auth.logout()">退出登录</button>
      </div>
    </aside>
    <main class="h-full overflow-y-auto p-6">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

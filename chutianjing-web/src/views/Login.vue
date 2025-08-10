<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

function submit() {
  const res = auth.login({ username: username.value.trim(), password: password.value })
  if (res.ok) {
    router.replace('/')
  } else {
    error.value = res.message
  }
}
</script>

<template>
  <div class="min-h-full w-full grid place-items-center">
    <div class="w-full max-w-sm card-glass p-6">
      <h1 class="text-lg font-semibold mb-4">登录楚天镜</h1>
      <div class="space-y-3">
        <div>
          <label class="block text-sm mb-1">用户名</label>
          <input v-model="username" type="text" class="w-full rounded bg-white/10 border-white/20" placeholder="请输入用户名" />
        </div>
        <div>
          <label class="block text-sm mb-1">密码</label>
          <input v-model="password" type="password" class="w-full rounded bg-white/10 border-white/20" placeholder="请输入密码" />
        </div>
        <p v-if="error" class="text-sm text-red-400">{{ error }}</p>
        <button class="btn-primary w-full" @click="submit">登录</button>
        <p class="text-xs text-white/60">提示：用户名固定为 <span class="text-sky-300">qazwsx1995</span>，密码默认 <code>changeme</code>，可通过环境变量 <code>VITE_APP_PASSWORD</code> 修改。</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const title = ref('')
const content = ref('')

function submit() {
  alert('已提交（占位）：' + title.value)
  title.value = ''
  content.value = ''
}
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold">意见建议</h1>
    <div class="card-glass p-4 space-y-3">
      <input v-model="title" class="w-full rounded bg-white/10 border-white/20" placeholder="标题" />
      <textarea v-model="content" rows="5" class="w-full rounded bg-white/10 border-white/20" placeholder="建议内容"></textarea>
      <div class="text-right">
        <button class="btn-primary" @click="submit">提交</button>
      </div>
      <p class="text-xs text-white/60">支持文字与截图上传、状态跟踪与统计（后端对接后可用）。</p>
    </div>
  </div>
</template>
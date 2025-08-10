<script setup>
import { ref } from 'vue'
const statDate = ref('')
const inst2 = ref('')
const compareTs = ref('')
</script>

<template>
  <div class="space-y-4">
    <div class="grid grid-cols-5 gap-3">
      <input v-model="statDate" type="date" class="rounded bg-white/10 border-white/20" />
      <select v-model="inst2" class="rounded bg-white/10 border-white/20"><option value="">二级机构</option></select>
      <input v-model="compareTs" type="date" class="rounded bg-white/10 border-white/20" />
      <button class="btn-primary">查询</button>
      <button class="btn-ghost">重置</button>
    </div>

    <div class="card-glass p-4 overflow-auto">
      <table class="min-w-full text-sm">
        <thead class="text-left text-white/70">
          <tr>
            <th class="p-2">行业名称</th>
            <th class="p-2">表内余额</th><th class="p-2">表内余额变动</th>
            <th class="p-2">关注余额</th><th class="p-2">关注余额变动</th>
            <th class="p-2">逾期余额</th><th class="p-2">逾期余额变动</th>
            <th class="p-2">不良余额</th><th class="p-2">不良余额变动</th>
            <th class="p-2">不良率</th><th class="p-2">不良率变动</th>
            <th class="p-2">新发生不良余额</th><th class="p-2">新发生不良余额变动</th>
            <th class="p-2">新发生不良率</th><th class="p-2">新发生不良率变动</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="p-2" colspan="15">数据占位</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
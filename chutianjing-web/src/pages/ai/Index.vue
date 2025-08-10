<script setup>
function generate() {
  alert('将调用 DeepSeek-R1 API 生成风控报告（占位）')
}
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold">生成式风险报告</h1>
    <div class="card-glass p-4 space-y-3">
      <p>基于风险指标与预警信息自动生成报告，并支持 PDF/Excel 导出与电子签章。</p>
      <button class="btn-primary" @click="generate">生成报告</button>
    </div>
  </div>
</template>
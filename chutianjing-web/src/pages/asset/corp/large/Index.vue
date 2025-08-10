<template>
  <div class="grid grid-cols-[220px_1fr] gap-4">
    <aside class="space-y-2">
      <RouterLink class="block btn-ghost" to="/asset/corp/large/org">机构风险预警</RouterLink>
      <RouterLink class="block btn-ghost" to="/asset/corp/large/product">产品风险预警</RouterLink>
      <RouterLink class="block btn-ghost" to="/asset/corp/large/industry">行业风险预警</RouterLink>
      <RouterLink class="block btn-ghost" to="/asset/corp/large/personnel">人员资产质量预警</RouterLink>
    </aside>
    <section>
      <RouterView />
    </section>
  </div>
</template>
<template>
  <div class="grid grid-cols-[220px_1fr] gap-4">
    <aside class="space-y-2">
      <RouterLink class="block btn-ghost" to="/asset/corp/sme/org">机构风险预警</RouterLink>
      <RouterLink class="block btn-ghost" to="/asset/corp/sme/product">产品风险预警</RouterLink>
      <RouterLink class="block btn-ghost" to="/asset/corp/sme/personnel">人员资产质量预警</RouterLink>
    </aside>
    <section>
      <RouterView />
    </section>
  </div>
</template>
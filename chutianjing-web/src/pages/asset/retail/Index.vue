<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">零售信用风险预警</h2>
      <div class="space-x-2">
        <RouterLink class="btn-ghost" to="/asset">返回</RouterLink>
      </div>
    </div>
    <div class="grid-bento auto-rows-[120px]">
      <RouterLink class="card-glass card-md p-4" to="/asset/retail/consumption">消费金融预警</RouterLink>
      <RouterLink class="card-glass card-md p-4" to="/asset/retail/puhui">对私普惠预警</RouterLink>
      <RouterLink class="card-glass card-md p-4" to="/asset/retail/cards">银行卡预警</RouterLink>
    </div>
    <RouterView />
  </div>
</template>
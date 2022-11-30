<template>
  <div class="main-content">
      <div class="container pt-4">
           <div class="text-center"><i class="ri-emotion-normal-line ri-8x color-first"></i>
           <h1>404</h1>
           <h3 class="mb-5">Üzgünüz, sayfa bulunamadı.</h3>
            <a href="javascript:void(0)" @click="goBack" class="brand-color"><i class="ri-arrow-left-s-line align-bottom brand-color"></i> Geri Dön</a>
           </div>
      </div>
  </div>
</template>
<script>
export default {
   name: "errorPage",
   methods: {
       goBack() {
         window.history.back();
       }
   }
   }
</script>

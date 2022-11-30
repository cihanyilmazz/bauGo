<template>
  <div class="main-content">
      <div class="container pt-4">
           <div class="text-center"><i class="ri-server-line ri-8x color-first"></i>
           <h1 class="mb-4">500</h1>
           <h3 class="mb-5">Üzgünüz, sunucuda bir hata gerçekleşti.</h3>
            <a href="javascript:void(0)" @click="goBack" class="brand-color"><i class="ri-arrow-left-s-line align-bottom brand-color"></i>Geri Dön</a>
           </div>
      </div>
  </div>
</template>
<script>
export default {
   name: "error500",
   methods: {
       goBack() {
         window.history.back();
       }
   }
   }
</script>

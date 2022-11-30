<template>
  <div>
    <b-modal id="SuccessModal" centered :hide-footer="true" :hide-header="true">
      <template>
        <div
          type="button"
          aria-label="Close"
          class="close top-plus-2"
        >
          <i class="ri-close-line color-third fa-2x top-plus-2"></i>
        </div>
        <div class="text-success">
         İşleminiz başarıyla gerçekleştirilmiştir.
        </div>
      </template>
    </b-modal>
  </div>
</template>


<script>
export default {
  name: "SuccessModal",
  methods: {
  },
  mounted() {

  },
};
</script>
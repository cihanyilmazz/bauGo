<template>
  <div>
    <b-modal id="DangerModal" centered :hide-footer="true" :hide-header="true">
      <template>
        <button
          type="button"
          aria-label="Close"
          class="close top-plus-2"
          @click="close()"
        >
          <i class="ri-close-line color-third top-plus-2"></i>
        </button>
        <div class="text-danger">
           İşleminiz başarısızdır.
        </div>
      </template>
    </b-modal>
  </div>
</template>


<script>
export default {
  name: "DangerModal",
  methods: {
  },
  mounted() {
  },
};
</script>
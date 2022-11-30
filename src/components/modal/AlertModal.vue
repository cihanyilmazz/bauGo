<template>
  <div>
    <b-modal id="AlertModal" centered :status="status" :hide-footer="true" :hide-header="true">
      <template>
        <button
          type="button"
          aria-label="Close"
          class="close top-plus-2"
          @click="close()"
        >
          <i class="ri-close-line color-third top-plus-2"></i>
        </button>
        <div class="text-success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis
          nisi e.
        </div>
        <div class="text-danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis
          nisi e.
        </div>
        <div class="text-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis
          nisi e.
        </div>
      </template>
    </b-modal>
  </div>
</template>


<script>
export default {
  name: "AlertModal",
  methods: {
  },
  mounted() {
    console.log("status",status)
  },
};
</script>
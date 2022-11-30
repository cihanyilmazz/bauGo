<template>
  <div>
    <b-modal id="SpinnerModal" size="sm" no-close-on-backdrop no-close-on-esc centered :hide-footer="true" :modal-class="ClassVal" :hide-header="true">
      <template>
       <div
          class="spinner over position-relative d-flex"
        >
          <b-spinner label="Spinning" class="brand-color"></b-spinner>
        </div> 
      </template>
    </b-modal>
  </div>
</template>


<script>
export default {
  name: "SpinnerModal",
    data() {
    return {
       ClassVal: ['spinner-modal']
    }
    },
};
</script>
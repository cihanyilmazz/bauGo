<template>
 <div>
    <b-modal id="GeneralModal" :size="size" centered :hide-footer="true" >
      <template #modal-header="{ close }" class="container">
        <slot name="GeneralModalTitle"></slot>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third"></i>
        </button>
      </template>
      <template>
        <slot name="GeneralModalContent"></slot>
        <!-- content -->
      </template>
    </b-modal>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: "GeneralModal",
  props:['size'],
  component: {
    Multiselect,
  },
  data() {
    return {
      options1: ['Seçenek 1', 'Seçenek 2', 'Seçenek 3']
    }
  }
};
</script>
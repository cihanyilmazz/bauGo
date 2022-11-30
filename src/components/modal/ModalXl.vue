<template>
 <div>
        <b-modal id="ModalXl" centered :hide-footer="true" size="lg" no-close-on-backdrop no-close-on-esc>
            <template #modal-header="{ close }" class="container">
                <slot name="ModalXlTitle"></slot>
                <button type="button" aria-label="Close" class="close"  @click="close()"><i class="ri-close-line color-third"></i></button>
            </template>
            <template>
              <slot name="ModalXlContent"></slot>
              <!-- content -->
             

            </template>
         </b-modal>
    </div>
</template>
<script>
export default {
    name: "ModalXl",
};
</script>
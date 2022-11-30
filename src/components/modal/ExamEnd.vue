<template>
  <div>
    <b-modal
      id="ExamEnd"
      entrance-transition="animated fadeIn"
      leave-transition="animated bounceOut"
      centered
      :hide-footer="true"
    >
      <template #modal-header="{ close }" class="container">
        <!-- Emulate built in modal header close button action -->
        <slot name="ExamEndTitle"></slot>
        <!-- <h3>Uyarı</h3> -->
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third"></i>
        </button>
      </template>
      <template>
      <slot name="ExamEndContent"></slot>
        <!-- <div>Sınavı bitirmek istediğinize emin misiniz?</div> -->
        <div class="d-flex justify-content-end mt-4">
          <button type="button" class="btn d-flex btn-link mr-3" @click="$bvModal.hide('ExamEnd')">Hayır</button>
          <button type="button" class="btn d-flex btn-primary">Evet</button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'DeleteModal',
  data() {
    return {
    }
  }
}
</script>

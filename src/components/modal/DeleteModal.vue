<template>
  <div>
    <b-modal
      id="DeleteModal"
      entrance-transition="animated fadeIn"
      leave-transition="animated bounceOut"
      centered
      :hide-footer="true"
    >
      <template #modal-header="{ close }" class="container">
        <!-- Emulate built in modal header close button action -->
        <h3>Uyarı</h3>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third"></i>
        </button>
      </template>
      <template>
      
        <div>Silmek istediğinize emin misiniz?</div>
        <div class="d-flex justify-content-end mt-4">
          <button type="button" class="btn d-flex btn-link mr-3"  @click="$bvModal.hide('DeleteModal')">Kapat</button>
          <button type="button" class="btn d-flex btn-danger" @click="deleteComment">Sil</button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'DeleteModal',
  props: ['commentId'],
  methods: {
    async deleteComment() {
      await this.axios.delete('/course/discussion/delete/' + this.commentId)
        .then(response => {
          console.log(response.data.data)
        })
        .catch(error => {
          console.log(error.data)
        })

      this.$bvModal.hide('DeleteModal')

      this.$emit('deleteComment')
    }
  }
}
</script>

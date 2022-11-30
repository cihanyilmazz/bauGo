<template>
  <div>
    <b-modal
      id="ShareModal"
      centered
      :hide-footer="true"
      @close="reset"
    >
      <template #modal-header="{ close }" class="container">
        <!-- Emulate built in modal header close button action -->
        <h3>Kursu Paylaş</h3>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third"></i>
        </button>
      </template>
      <Facebook id="facebook" :url="courseLink ? courseLink : ''" hidden></Facebook>
      <Twitter id="twitter" :url="courseLink ? courseLink : ''" hidden></Twitter>
      <WhatsApp id="whatsapp" :url="courseLink ? courseLink : ''" hidden></WhatsApp>
      <template>
        <div class="d-flex justify-content-center mb-4 mt-2">
          <a @click="share('facebook')" href="#" class="facebook-bgcolor rounded-circle d-flex justify-content-center wh-48 mx-2">
            <i class="ri-xl ri-facebook-fill d-flex align-items-center mr-0 color-white"></i>
          </a>
          <a  @click="share('twitter')" href="#" class="twitter-bgcolor rounded-circle d-flex justify-content-center wh-48 mx-2">
            <i class="ri-xl ri-twitter-fill d-flex align-items-center mr-0 color-white"></i>
          </a>
          <a @click="share('whatsapp')" href="#" class="whatsapp-bgcolor rounded-circle d-flex justify-content-center wh-48 mx-2">
            <i class="ri-xl ri-whatsapp-fill d-flex align-items-center mr-0 color-white"></i>
          </a>
        </div>
        <b-input-group class="mt-5">
          <b-form-input ref="text" v-model="courseLink"></b-form-input>
          <b-input-group-append>
            <b-button @click="copy">{{ buttonText }}</b-button>
          </b-input-group-append>
        </b-input-group>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { Facebook } from 'vue-socialmedia-share'
import { Twitter } from 'vue-socialmedia-share'
import { WhatsApp } from 'vue-socialmedia-share'

export default {
  name: 'shareModal',
  props: ['courseLink'],
  data() {
    return {
      buttonText: 'Kopyala'
    }
  },
  components: {
    Facebook,
    Twitter,
    WhatsApp
  },
  methods: {
    share(id) {
      document.getElementById(id).click()
    },
    copy() {
      this.$refs.text.select()
      document.execCommand('copy')
      this.buttonText = 'Kopyalandı!'
     },
     reset() {
       this.buttonText = 'Kopyala'
     }
  }
}
</script>

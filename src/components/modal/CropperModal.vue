<template>
  <div>
    <b-modal
      id="cropper-modal"
      entrance-transition="animated fadeIn"
      leave-transition="animated bounceOut"
      centered
      :hide-footer="true"
    >
      <cropper ref="cropper" :src="picture" stencil-component="circle-stencil"/>
      <button @click="crop" type="submit" class="btn btn-primary w-100 mb-4">
        Kaydet
      </button>
    </b-modal>
  </div>
</template>

<script>
import {  Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

export default {
  name: 'CropperModal',
  props: ['picture'],
  components: {
    Cropper
  },
  data() {
    return {
      coordinates: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      }
    }
  },
  methods: {
    change({ coordinates, canvas }) {
			console.log(coordinates, canvas)
    },
    crop() {
      const { coordinates, canvas, } = this.$refs.cropper.getResult()
      this.coordinates = coordinates
      var dataURL = canvas.toDataURL('image/jpeg', 0.5)
      var blob = this.dataURItoBlob(dataURL)
      var data = new FormData(document.forms[0])

      data.append("picture", blob)
      this.savePicture(data)
    },
    async savePicture(data) {
      await this.axios.post('/user/picture', data)
        .then(response => {
          var picture_expire_in = new Date()
          picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4)
          var user_data = JSON.parse(localStorage.getItem('user_data'))
          user_data.user.picture = response.data.data.picture
          user_data.user.picture_expire_in = picture_expire_in.toLocaleString()
          
          localStorage.setItem('user_data', JSON.stringify(user_data))
          this.$store.dispatch('setUserData', user_data)
          this.$bvModal.hide('cropper-modal')
        })
        .catch(error => {
          console.log(error.response.data)
        })
    },
    dataURItoBlob(dataURI) {
        var byteString
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
          byteString = atob(dataURI.split(',')[1])
        }
        else {
          byteString = unescape(dataURI.split(',')[1])
        }

        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        var ia = new Uint8Array(byteString.length)
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i)
        }
        
        return new Blob([ia], {type:mimeString})
    }
  }
}
</script>

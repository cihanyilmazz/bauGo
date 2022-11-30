<template>
  <div class="main-content">
    <div class="container">
      <form @submit.stop.prevent="onSubmit">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="sidebar">
              <div class="text-center">
                <div class="profile-image-wrapper mb-3">
                  <div
                    class="profile-image m-auto position-relative rounded-circle bg-image"  
                    :style="{backgroundImage: 'url(http://ui.ubit.com.tr/profile-picture.jpg)'}"
                  >
                   <!-- Gostermek icin d-flex eklenmeli -->
                   <div :class="loadingProfile ? 'd-flex' : ''" class="spinner over bg-transparent d-none">
                        <b-spinner
                          label="Spinning"
                          class="brand-color">
                        </b-spinner>
                   </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a id="open-cropper" v-b-modal.cropper-modal hidden>Open Cropper Modal</a>
                  <input id="picUpload" type="file" hidden>
                  <button type="button" class="btn outline-primary btn-sm mr-3" @click="choosePicture()">
                    Yükle
                  </button>
                  <button type="button" class="btn btn-link btn-sm" >Sil</button>
                </div>

                <div class="profile-info mb-3">
                  <div
                    class="profile-name text-capitalize text-truncate h4 mb-1"
                  >
                   Cihan Yılmaz
                  </div>
                  <div
                    class="color-second text-capitalize text-truncate font-weight-normal h4 mb-0"
                  >
                   Bilgisayar Mühendisi
                  </div>
                </div>
              <div class="d-flex justify-content-center">
                  <a href="#">
                    <div class="profile-item">
                      <i class="ri-movie-line color-second"></i>
                      <div class="item-number h2 mb-1">91</div>
                      <div class="item-name color-second font-weight-normal h4 mb-0">
                        Ders
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="profile-item">
                      <i class="ri-message-2-line color-second"></i>
                      <div class="item-number h2 mb-1">23</div>
                      <div class="item-name color-second font-weight-normal h4 mb-0">
                        Yorum
                      </div>
                    </div>
                  </a>
                </div>  
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-8 mt-5 mt-lg-0">
            <div class="content">
              <h2 class="gradient-color mb-4">Profil</h2>
              <!--<b-spinner label="Spinning"></b-spinner>-->
             
              <h3 class="mb-4">Kişisel Bilgiler</h3>
              
              <div class="row position-relative">
                <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Ad">
                    <i class="ri-user-3-line"></i>
                    <b-form-input :state="validateState($v.name)" v-model="$v.name.$model"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Soyad">
                    <i class="ri-user-3-line"></i>
                    <b-form-input :state="validateState($v.surname)" v-model="$v.surname.$model"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Ünvan">
                    <i class="ri-star-line"></i>
                    <b-form-input
                      :state="validateState($v.title)"
                      v-model="$v.title.$model"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Telefon">
                    <i class="ri-phone-line"></i>
                    <b-form-input
                      :state="validateState($v.phone)"
                      v-model="$v.phone.$model"
                      v-mask="'0(###) ###-####'"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-12 col-sm-6">
                  <v-date-picker
                    v-model="date"
                    :masks="masks"
                    :max-date="new Date()"
                  >
                    <template v-slot="{ inputValue, inputEvents }">
                      <b-form-group class="input-icon" label="Doğum Tarihi">
                        <i class="ri-calendar-line"></i>
                        <input
                          class="form-control rounded"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </b-form-group>
                    </template>
                  </v-date-picker>
                </div>
                <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="E-Posta" disabled>
                    <i class="ri-mail-line"></i>
                    <b-form-input :state="validateState($v.email)" v-model="$v.email.$model"></b-form-input>
                  </b-form-group>
                </div>
                  <div class="col-12 col-md-12">
                  <b-form-group class="input-icon" label="Şehir">
                    <i class="ri-map-pin-line z-index"></i>
                    <b-form-input
                      :state="validateState($v.address)"
                      v-model="$v.address.$model"
                    ></b-form-input>
                  </b-form-group>
                </div>

                 <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Website">
                    <i class="ri-link-m"></i>
                    <b-form-input></b-form-input>
                  </b-form-group>
                </div>
                 <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Facebook">
                    <i class="ri-facebook-fill"></i>
                    <b-form-input></b-form-input>
                  </b-form-group>
                </div>
                 <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Linkedin">
                    <i class="ri-linkedin-fill"></i>
                    <b-form-input></b-form-input>
                  </b-form-group>
                </div>
                 <div class="col-12 col-sm-6">
                  <b-form-group class="input-icon" label="Twitter">
                    <i class="ri-twitter-fill"></i>
                    <b-form-input></b-form-input>
                  </b-form-group>
                </div>

                
                
                <!--
                <div class="col-12 col-md-6">
                  <b-form-group class="input-icon" label="Üniversite" disabled>
                    <i class="ri-building-4-line z-index"></i>
                    <b-form-input
                      :state="validateState($v.university)"
                      v-model="$v.university.$model"
                    ></b-form-input>
                  </b-form-group>
                </div>-->
                <div class="col-12">
                  <b-form-group label="Hakkımda">
                    <b-form-textarea
                      id="textarea"
                      :state="validateState($v.biography)"
                      v-model="$v.biography.$model"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                </div>
                 <div class="col-12 text-right">
                  <button type="submit" @click="UpdateFunc" class="btn btn-primary"> <b-spinner label="Spinning" class="top-minus-1 align-middle mr-3" small v-show="updated"></b-spinner>Kaydet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <CropperModal :picture="newPicture"></CropperModal>
        <AlertDialogModal :visible="visible">
       <template v-slot:AlertDialogContent>
           <!-- <i class="ri-checkbox-circle-fill text-success mr-4 mr-sm-3 ri-lg"></i>Değişiklikler başarıyla kaydedildi. -->
            <i class="ri-close-circle-fill text-danger mr-4 mr-sm-3 ri-lg"></i>Bir hata oluştu, lütfen tekrar deneyin.
      </template>

    </AlertDialogModal>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect"
import DatePicker from "../components/ui/DatePicker"
import { validationMixin } from "vuelidate"
import { required, minLength, maxLength } from "vuelidate/lib/validators"
import { TheMask } from "vue-the-mask"
import CropperModal from "../components/modal/CropperModal"
import AlertDialogModal from "../components/modal/AlertDialogModal";

export default {
  name: "Profil",
  mixins: [validationMixin],
  component: {
    DatePicker,
    Multiselect,
    TheMask,
  },
  components: {
    CropperModal,
     AlertDialogModal
  },
  data() {
    return {
      timerEnabled: false,
      timeVal: 2,
      timerCount: this.timeVal,
      visible:false,
      updated:false,
      name: null,
      surname: null,
      title: null,
      phone: null,
      date: null,
      email: null,
      address: null,
      university: null,
      biography: null,
      masks: {
       input: "DD-MM-YYYY",
        address: null,
        university: null,
        biography: null,
      },
      success: null,
      errors: null,
      picture: null,
      newPicture: null,
      loadingProfile: false,
      loadingPicture: false
    }
  },
  watch: {
      timerEnabled(value) {
    // saniye sayar
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },
    timerCount: {
      handler(value) {
        if(value > 0 && this.timerEnabled) {
          setTimeout(() => {this.timerCount--;}, 1000);
          this.updated= true // loader goster
        } 
        else {
          this.updated = false; //loader gizle
          this.visible = true //alert goster
          setTimeout(() => this.visible = false, 3000); // alert gizleme suresi

        }
      },
    },
    "getUserData.user.name": function (newVal) {
      this.name = newVal
    },
    "getUserData.user.surname": function (newVal) {
      this.surname = newVal
    },
    "getUserData.user.email": function (newVal) {
      this.email = newVal
    },
    "getUserData.user.biography": function (newVal) {
      this.biography = newVal
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(150),
    },
    surname: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(150),
    },
    email: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(150),
    },
    title: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(150),
    },
    phone: {
      required,
      minLength: minLength(14),
      maxLength: maxLength(60),
    },
    university: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(250),
    },
    address: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(300),
    },
    biography: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
      UpdateFunc(){
      this.timerEnabled = true
      this.updated = true
      this.timerCount = this.timeVal
    },
    validateState(item) {
      const { $dirty, $error } = item
      return $dirty ? !$error : null
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$anyError) return false;
    },
    choosePicture() {
        document.getElementById("picUpload").click()
    },
  },
};
</script>
 <style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
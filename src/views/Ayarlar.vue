<template>
  <div class="main-content">
    <div class="container">
      <h2 class="gradient-color mb-4">Ayarlar</h2>
      <form @submit.prevent="submit">
        <div class="row">
          <h3 class="col-12 mb-4">Şifre Güncelleme</h3>
          <div class="col-12 col-md-4">
            <b-form-group class="input-icon" label="Eski Şifre">
              <i class="ri-lock-line"></i>
              <b-form-input
                @focus="show = false"
                :state="validateState($v.oldPassword)"
                v-model="$v.oldPassword.$model"
                id="old-password"
                :type="oldVisibility2"
                autocomplete="on"
              ></b-form-input>
              <i
                class="ri-eye-off-line"
                @click="showOldPassword()"
                v-if="oldVisibility2 == 'password'"
              ></i>
              <i
                class="ri-eye-line"
                @click="hideOldPassword()"
                v-if="oldVisibility2 == 'text'"
              ></i>
              <ShowError
                v-model="show"
                :text="errorResponse.message ? (errorResponse.message.oldPassword ? errorResponse.message.oldPassword[0] : '') : ''
                "
              ></ShowError>
            </b-form-group>
          </div>
          <div class="col-12 col-md-4">
            <b-form-group class="input-icon" label="Yeni Şifre">
              <i class="ri-lock-line"></i>
              <b-form-input
                @focus="show = false"
                :state="validateState($v.password)"
                v-model="$v.password.$model"
                id="new-password"
                :type="visibility"
                autocomplete="on"
              ></b-form-input>
              <i
                class="ri-eye-off-line"
                @click="showPassword()"
                v-if="visibility == 'password'"
              ></i>
              <i
                class="ri-eye-line"
                @click="hidePassword()"
                v-if="visibility == 'text'"
              ></i>
              <ShowError
                v-model="show"
                :text="
                  errorResponse.message ? (errorResponse.message.password ? errorResponse.message.password[0] : '') :''
                "
              ></ShowError>
            </b-form-group>
          </div>
          <div class="col-12 col-md-4">
            <b-form-group class="input-icon" label="Yeni Şifre Tekrar">
              <i class="ri-lock-line"></i>
              <b-form-input
                @focus="show = false"
                :state="validateState($v.repeatPassword)"
                v-model="$v.repeatPassword.$model"
                id="input-repeatPassword"
                :type="RepeatVisibility"
                autocomplete="on"
              ></b-form-input>
              <i
                class="ri-eye-off-line"
                @click="showRepeatPassword()"
                v-if="RepeatVisibility == 'password'"
              ></i>
              <i
                class="ri-eye-line"
                @click="hideRepeatPassword()"
                v-if="RepeatVisibility == 'text'"
              ></i>
              <ShowError
                v-model="show"
                :text="
                  errorResponse.message ? (errorResponse.message.password ? errorResponse.message.password[0] : ''):''
                "
              ></ShowError>
            </b-form-group>
          </div>
        </div>
        <div class="text-right">
          <button
            type="submit"
            @click="UpdateFunc();"
            class="btn btn-primary"
            :disabled="disabled"
          >
          <b-spinner label="Spinning" class="top-minus-1 align-middle mr-3" small v-show="updated"></b-spinner>
            Şifre Değiştir
          </button>
        </div>
        <div class="row">
          <h3 class="col-12 mb-4">Bölge ve Dil</h3>
          <div class="col-12 col-md-6">
            <b-form-group label="Bölge">
              <template>
                <div>
                  <multiselect
                    v-on:input="validFunc"
                    :class="
                      valid
                        ? {
                            'is-valid': valid == 'valid',
                            'is-invalid': valid == 'invalid',
                          }
                        : ''
                    "
                    placeholder="Seçiniz"
                    v-model="selected"
                    :options="options1"
                    :select-label="''"
                    :selected-label="''"
                    deselect-label=""
                    :allow-empty="false"
                    :searchable="false"
                  >
                    <span slot="noResult"> Sonuç bulunamadı </span>
                  </multiselect>
                </div>
              </template>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6">
            <b-form-group label="Dil">
              <template>
                <div>
                  <multiselect
                    v-on:input="valid2Func"
                    :class="
                      valid2
                        ? {
                            'is-valid': valid2 == 'valid',
                            'is-invalid': valid2 == 'invalid',
                          }
                        : ''
                    "
                    placeholder="Seçiniz"
                    v-model="selected2"
                    :options="options2"
                    :select-label="''"
                    :selected-label="''"
                    deselect-label=""
                    :allow-empty="false"
                    :searchable="false"
                  >
                    <span slot="noResult"> Sonuç bulunamadı </span>
                  </multiselect>
                </div>
              </template>
            </b-form-group>
          </div>
        </div>
        <div class="text-right">
          <button
            type="submit"
            @click="UpdateFunc2();"
            class="btn btn-primary"
            :disabled="disabled2"
          ><b-spinner label="Spinning" class="top-minus-1 align-middle mr-3" small v-show="updated2"></b-spinner>Güncelle</button>
        </div>
        <div class="row">
          <h3 class="col-12 mb-4">Bildirim Ayarları</h3>
          <div class="col-12">
            <div class="row custom-switch-grid">
               <div class="col-12 col-md-6 mb-4 pr-md-5">
                  <h3 class="mb-4">Yorum</h3>
                <div class="form-group custom-control custom-switch pl-0">
                    <label for="customSwitch1" class="mr-3 pt-1 text-label">E-Posta</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch2">Sms</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch2">
                    <label class="custom-control-label" for="customSwitch2"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch3">Bildirim</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch3">
                    <label class="custom-control-label" for="customSwitch3"></label>
                </div>
              </div>
                <div class="col-12 col-md-6 mb-4 pl-md-5">
                  <h3 class="mb-4">Hatırlatma</h3>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch4">E-Posta</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch4">
                    <label class="custom-control-label" for="customSwitch4"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch5">Sms</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch5">
                    <label class="custom-control-label" for="customSwitch5"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch6">Bildirim</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch6">
                    <label class="custom-control-label" for="customSwitch6"></label>
                </div>
              </div>
                <div class="col-12 col-md-6 mb-4 pr-md-5">
                  <h3 class="mb-4">Video</h3>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch7">E-Posta</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch7">
                    <label class="custom-control-label" for="customSwitch7"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch8">Sms</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch8">
                    <label class="custom-control-label" for="customSwitch8"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch9">Bildirim</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch9">
                    <label class="custom-control-label" for="customSwitch9"></label>
                </div>
              </div>
                <div class="col-12 col-md-6 mb-4 pl-md-5">
                  <h3 class="mb-4">Genel</h3>
                <div class="form-group custom-control custom-switch pl-0">
                    <label for="customSwitch10" class="mr-3 pt-1 text-label">E-Posta</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch10">
                    <label class="custom-control-label" for="customSwitch10"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch11">Sms</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch11">
                    <label class="custom-control-label" for="customSwitch11"></label>
                </div>
                <div class="form-group custom-control custom-switch pl-0">
                    <label class="mr-3 pt-1 text-label" for="customSwitch12">Bildirim</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch12">
                    <label class="custom-control-label" for="customSwitch12"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
     <AlertDialogModal :visible="visible">
       <template v-slot:AlertDialogContent>
         <div v-if="alertSuccess"><i class="ri-checkbox-circle-fill text-success mr-4 mr-sm-3  align-middle ri-lg"></i>Değişiklikler başarıyla kaydedildi.</div>
         <div v-if="!alertSuccess"><i class="ri-close-circle-fill text-danger mr-4 mr-sm-3  align-middle ri-lg"></i>Bir hata oluştu, lütfen tekrar deneyin.</div>
            
      </template>
    </AlertDialogModal>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { validationMixin } from "vuelidate";
import { not, required, minLength, sameAs } from "vuelidate/lib/validators";
import AlertDialogModal from "../components/modal/AlertDialogModal";

export default {
  name: "Ayarlar",

  Modalcomponent: {
    Multiselect,
  },
    components:{
    AlertDialogModal
  },
  mixins: [validationMixin],
  data() {
    return {
      disabled2:false,
      disabled:false,
      alertTime: 3,
      alertSuccess:false,
      timerEnabled: false,
      timeVal: 2,
      timerCount: this.timeVal,
      visible:false,
      updated:false,
      updated2:false,
      show: false,
      errorResponse: {},
      valid: "",
      valid2: "",
      valid3: "",
      size: null,
      options1: [],
      options2: [],
      options3: ["Seçenek 1", "Seçenek 2", "Seçenek 3"],
      settings: null,
      fieldNameTr: ["Yorum", "Hatırlatma", "Video", "Genel"],
      password: null,
      repeatPassword: null,
      oldPassword: null,
      type: "password",
      email: null,
      visibility: "password",
      RepeatVisibility: "password",
      oldVisibility2: "password",
      selected: null,
      selected2: null,
      selected3: null,
      inputEvaluated: null,
      inputEvaluated2: null,
      inputEvaluated3: null,
    };
  },
  validations: {
    oldPassword: {
      required,
      minLength: minLength(6),
    },
    password: {
      required,
      minLength: minLength(6),
      sameAsNotPassword: not(sameAs("oldPassword")),
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password"),
      sameAsNotPassword: not(sameAs("oldPassword")),
    },
  },
     watch: {
  timerEnabled(value) {
    // saniye sayar
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
        console.log("ekjsdah")
      }
    },
    timerCount: {
      handler(value) {
        if((value > 0 && this.timerEnabled2)  || (value > 0 && this.timerEnabled) ) {
          setTimeout(() => {this.timerCount--;}, 1000);
          if(this.timerEnabled === true){
              this.updated= true 
              this.visible = false
              this.disabled = true
          }
          else if(this.timerEnabled2 === true){
              this.updated2= true 
               this.visible = false
                this.disabled2 = true
          }
        } 
        else {
            if(this.timerEnabled === true){
              this.updated= false 
              this.visible = true 
              this.timerEnabled = false
              this.disabled = false
              setTimeout(() => this.visible = false, this.alertTime * 1000);
          }
          else if(this.timerEnabled2 === true){
              this.updated2= false 
              this.visible = true 
              this.timerEnabled2 = false
              this.disabled2 = false
              setTimeout(() => this.visible = false, this.alertTime * 1000);
          }

           // alert gizleme suresi

        }
      },
    },
  },
  methods: {
    UpdateFunc(){
        this.timerEnabled = true
        this.updated = true
        this.timerCount = this.timeVal
        this.visible = false
        this.alertSuccess = false
    },
    UpdateFunc2(){
      this.timerEnabled2 = true
      this.updated2 = true
      this.timerCount = this.timeVal
      this.visible = false
      this.alertSuccess = true
    },
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
    showRepeatPassword() {
      this.RepeatVisibility = "text";
    },
    hideRepeatPassword() {
      this.RepeatVisibility = "password";
    },
    showOldPassword() {
      this.oldVisibility2 = "text";
    },
    hideOldPassword() {
      this.oldVisibility2 = "password";
    },
    validFunc: function () {
      if (this.inputEvaluated) {
        this.valid = "invalid";
      } else {
        this.valid = "valid";
      }
    },
    valid2Func: function () {
      if (this.inputEvaluated2) {
        this.valid2 = "invalid";
      } else {
        this.valid2 = "valid";
      }
    },
    valid3Func: function () {
      if (this.inputEvaluated3) {
        this.valid3 = "invalid";
      } else {
        this.valid3 = "valid";
      }
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
      if (this.valid == "valid") {
        this.valid = "valid";
      } else {
        this.valid = "invalid";
      }
      if (this.valid2 == "valid") {
        this.valid2 = "valid";
      } else {
        this.valid2 = "invalid";
      }
      if (this.valid3 == "valid") {
        this.valid3 = "valid";
      } else {
        this.valid3 = "invalid";
      }
      if (this.termCheck == "invalid") {
        this.termCheck = "invalid";
      } else {
        this.termCheck = "valid";
      }
    },
    successModal() {
      this.$bvModal.show("SuccessModal");
      const modalTimeoutSeconds = 3;
      let modalSetTimeout = null;
      clearTimeout(modalSetTimeout);

      modalSetTimeout = setTimeout(() => {
        this.$bvModal.hide("SuccessModal");
      }, modalTimeoutSeconds * 1000);
    },
  },
};
</script>


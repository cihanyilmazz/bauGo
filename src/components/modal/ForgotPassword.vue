<template>
  <div>
    <b-modal 
      id="modal-forgotPassword" 
      entrance-transition="animated fadeIn" 
      leave-transition="animated bounceOut" 
      centered 
      :hide-footer="true"
      @change="change"
    >
      <div v-if="success != null" class="alert alert-success mb-4 float-bottom" role="alert">
        <div class="alert-content w-100 d-inline-block">
          <div class="my-1">
            <strong>
              {{ success.form }}
            </strong>
          </div>
        </div>
      </div>
      <div v-if="error != null" class="alert alert-error mb-4 float-bottom" role="alert">
        <div class="alert-content w-100 d-inline-block">
          <div v-for="error in error" :key="error" class="my-1">
            <strong>
              {{error}}
            </strong>
          </div>
        </div>
      </div>
      <template #modal-header="{ close }" class="container">
        <h3>Şifremi Unuttum</h3>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third"></i>
        </button>
      </template>
      <template>
        <form @submit.stop.prevent="onSubmit">                            
          <b-form-group class="input-icon" label="E-Posta">
            <i class="ri-user-3-line"></i>
            <b-form-input
              :state="validateState($v.email)"
              v-model="$v.email.$model"
              id="input-email"
            ></b-form-input>
      <!--  
            <b-form-invalid-feedback id="input-1-live-feedback">
              Mail Adresinizi Girin
            </b-form-invalid-feedback>
      -->
          </b-form-group>
            <button type="submit" class="btn btn-primary w-100">Gönder</button>
        </form>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required,  email} from "vuelidate/lib/validators";
export default {
  name: "ForgotPassword",
  mixins: [validationMixin],
  data() {
    return {
      email: null,
      success: null,
      error: null
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$anyError) return false;

      const reqData = {
            "language_code": "tr",
            "email": this.email
          }

      this.axios.post('/user/password/reset', reqData)
        .then(response => {
          this.success = response.data.message
          this.error = null
        })
        .catch(error => {
          this.success = null
          this.error = error.response.data.message
        })
    },
    change() {
      this.success = null
      this.error = null
    }
  }
}
</script>
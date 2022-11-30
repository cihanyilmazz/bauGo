<template>
 <div>
        <b-modal id="Questions" ref="Questions"  centered :hide-footer="true">
            <template #modal-header="{ close }" class="container">
                <slot name="optionQuestionsTitle"></slot>
                <button type="button" aria-label="Close" class="close"  @click="close()"><i class="ri-close-line color-third"></i></button>
            </template>
            <template>
              <slot name="curriculumQuestions"></slot>
              <!--selected seçili olana gelicek -->
             <!-- <div class="curriculum-question-wrapper">
               <div class="mb-4">Vue js nedir?</div>
               <div class="py-2 px-3 mb-2 rounded q-option wrong" role="button">A) Kütüphane</div>
               <div class="py-2 px-3 mb-2 rounded q-option correct" role="button">B) Framework</div>
               <div class="py-2 px-3 mb-2 rounded q-option" role="button">C) Veritabanı</div>
               <div class="py-2 px-3 mb-2 rounded q-option" role="button">D) Plugin</div>
               <div class="py-2 px-3 mb-2 rounded q-option" role="button">E) Extension</div>
               
            </div> -->
             <!-- <div class="curriculum-question-wrapper">
               <div class="mb-4">Vue js kullanmanın avantajları nelerdir?</div>
               <b-form-group class="mb-3">
                    <b-form-textarea
                      id="textarea"
                      rows="5"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                   <button type="submit" class="btn btn-primary btn-block">Gönder</button>
            </div> -->
              <!--selected seçili olana gelicek -->
             

            </template>
         </b-modal>
    </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required,  email} from "vuelidate/lib/validators";
export default {
    name: "Questions",
       mixins: [validationMixin],
   data() {
     return {
       email: null
     };
   },
   validations: {
    email: {
      required,
      email
    }
   },
  methods: {
    showModal() {
        this.$refs['Questions'].show()
      },
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$anyError) return false;

    }
  },
   mounted() {
      // this.showModal();
    }
};
</script>
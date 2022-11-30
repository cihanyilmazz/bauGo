<template>
 <div>
    <b-modal id="AlertDialog"  ignore-enforce-focus-selector="*" hide-backdrop :hide-footer="true" :hide-header="true"  :modal-class="ClassVal" :visible="visible" >
      <template>
        <div class="d-flex justify-content-between">
          <div class="pr-1 d-flex align-items-center">
          <slot name="AlertDialogContent"></slot>
        </div>

        <button type="button" aria-label="Close" class="close text-muted font-weight-normal p-2 pl-4" @click="close()"><i class="ri-close-line align-middle top-plus-1"></i></button>
        </div>
        <!-- content -->
      </template>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: "AlertDialogModal",
    props:['visible'],
    data() {
    return {
      show:false,
       timerCount: 1,
       ClassVal: ['alert-dialog-modal']
    }
    },
          watch: {
            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                          if(this.visibleVal == true){
                          document.body.style.overflowY = 'auto'
                        }
                        else{
                          document.body.style.overflowY = 'unset'
                        }
                    }
                    else{
                     this.visibleVal= false
                    }
                },
                immediate: true
            }
        },
        methods: {
          close(){
            this.visible = false
          }
          
        }
};
</script>
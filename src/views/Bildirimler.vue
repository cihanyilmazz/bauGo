<template>
  <div class="main-content">
       <div v-if="notificationDates.length > 0" class="container">
           <div class="d-flex justify-content-between align-items-baseline flex-column flex-md-row">
               <h2 class="gradient-color mb-4">Bildirimler</h2> 
               <div>
                  <a href="bildirim-ayarlari" class="color-second d-block d-md-inline mr-5 mb-2"><i class="ri-settings-fill mr-2 align-bottom color-third"></i>Bildirim ayarları</a>
                  <a href="#" class="color-second d-block d-md-inline mb-4" @click="readAll"><i class="ri-eye-fill mr-2 align-bottom"></i>Tümünü okundu olarak işaretle</a>
               </div>
          </div> 
            <!-- Notification-wrapper -->
            <div class="notification-wrapper mb-5" v-for="date in notificationDates" :key="date">
               <h3 class="mb-4">{{ date }}</h3>
               <template v-for="(noti, index) in notifications[date]">
                  <div 
                     :key="noti.id" 
                     class="notification-content d-flex mb-3" 
                     :class="noti.status == 'read' ? 'read' : ' '"
                     @click="read(date, index, noti.id)"
                  >
                     <i class="ri-checkbox-blank-circle-fill mr-3"></i>
                     <div class="notification-info-wrp">
                        <a href="#"><div class="notification-info">{{ noti.message}}</div>
                        <div class="notification-time">{{noti.time_diff}}</div></a>
                     </div>
                  </div>
               </template>
            </div>
            <!-- -->
      </div>
      <div v-else class="container">
         <div class="d-flex justify-content-between align-items-baseline flex-column flex-md-row">
            <h2 class="gradient-color mb-4">Bildirimler</h2> 
            <div>
               <a href="bildirim-ayarlari" class="color-second d-block d-md-inline mr-5 mb-2"><i class="ri-settings-fill mr-2 align-bottom color-third"></i>Bildirim ayarları</a>
               <a href="#" class="color-second d-block d-md-inline mb-4"><i class="ri-eye-fill mr-2 align-bottom color-third"></i>Tümünü okundu olarak işaretle</a>
            </div>
         </div>
         <div class="my-5 pt-2 text-center color-third">
            <div class="mb-1">
              <i class="ri-notification-line ri-5x color-third"></i>
            </div>
              <div class="text-center h4 mb-0">Hiç bildiriminiz yok.</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
   name: "Bildirim",
   data() {
      return {
         notifications: [],
         notificationDates: []
      }
   },
   created() {
      this.fetchNotifications()
   },
   methods: {
      fetchNotifications() {
         this.axios.get('/notification/1?language_code=tr')
            .then(response => {
               this.notifications = response.data.data
               this.notificationDates = Object.keys(response.data.data)
            })
            .catch(err => {
               console.log(err)
            })
      },
      read(date, index, id) {
         if(this.notifications[date][index].status == "unread") {
            this.axios.put('/notification/' + id + '/read')
               .then(response => {
                  console.log(response)
                  //this.fetchNotifications()
                  this.notifications[date][index].status = "read"
               }
            )
         }
      },
      readAll() {
         this.notificationDates.forEach((index1) => {
            this.notifications[index1].forEach((value, index2) => {
               this.read(index1, index2, value.id)
            })
         })
      }
   }
}
</script>

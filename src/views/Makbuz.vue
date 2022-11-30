<template>
  <div class="main-content">
    <div class="container">
        <h2 class="gradient-color mb-4">Makbuz</h2>
        <div class="d-flex justify-content-between flex-column flex-md-row mb-5">
          <div class="pr-0 pr-md-3 mb-4 mb-md-0">
            <div class="mb-1 h4">BauGo</div>
            <div class="mb-1">600 Harrison Street, 3rd Floor San Francisco, CA 94107, US</div>
            <a href="#">baugo.com</a>
          </div>
          <div class="pl-0 pl-md-3">
            <div class="mb-1"><b>Alıcı:</b> Cihan Yılmaz</div>
            <div class="mb-1"><b>Tarih:</b> 06 Kasım 2019</div>
            <div class="mb-1"><b>Sipariş No:</b> 6383874378247832786</div>
          </div>
        </div>
        <div class="standard-table hide-empty-content no-pagination">
           <DataTable :items="itemsReceipt" :fields="fieldsReceipt">
               
        </DataTable>
        </div>
        <div class="text-small mt-5 pt-5 text-center"><a href="/iletisim" class="color-second">Bu makbuz hakkında sorunuz varsa lütfen destek ekibimizle iletişim kurun</a></div>

    </div>
  </div>
</template>

<script>
import DataTable from '../components/ui/DataTable'

  export default {
    name: 'Makbuz',
    components:{
      DataTable
    },
    data() {
      return {
        itemsReceipt: [
          { name: { courseName: 'Asp.Net Core MVC + Faydalı Özellikler' },  orderedDate: '06 Kasım 2019', couponCode: '7CE572C24C941D8E6A51', amount: '54,99₺'},
          //hep en altta olmalı
          { couponCode: 'Toplam Tutar', amount: '54,99₺'},
          //
        ],
        fieldsReceipt: [
           { key: 'name', label: 'Kurs Adı', sortDirection: 'desc' },
          { key: 'orderedDate', label: 'Tarih'},
          { key: 'couponCode', label: 'Kupon Kodu' , tdClass: "bold-cell" },
          { key: 'amount', label: 'Tutar', tdClass: "bold-cell" },
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 25,
        pageOptions: [25, 50, 100],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>
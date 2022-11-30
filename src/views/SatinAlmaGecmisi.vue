<template>
  <div class="main-content">
    <div class="container">
        <h2 class="gradient-color mb-4">Satın Alma Geçmişi</h2>
        <b-tabs content-class="py-4">
            <b-tab title="Satın Alma" active>
                <DataTable :items="itemsTwo" :fields="fieldsTwo">
              </DataTable>
              
              
            </b-tab>

            <b-tab title="İade">
            <DataTable :items="items" :fields="fields">
              </DataTable>
            </b-tab>

        </b-tabs>

    </div>
  </div>
</template>

<script>
import DataTable from '../components/ui/DataTable'
  export default {
    name: 'SatinAlmaGecmisi',
    components:{
      DataTable
    },
    data() {
      return {
        items: [
          { date: '29 Şub 2020', iconsName: { courseName: 'Asp.Net Core MVC + Faydalı Özellikler' }, price: '49₺', returnedExpense:'49,99₺ - MasterCard ****3495', kind:'Dolu', returnStatus:'Başarılı'},
          { date: '29 Şub 2020', iconsName: { courseName: 'Asp.Net Core MVC + Faydalı Özellikler' }, price: '39₺', returnedExpense:'39,99₺ - MasterCard ****3495', kind:'Dolu', returnStatus:'Başarılı'},
          { date: '29 Şub 2020', iconsName: { courseName: 'Asp.Net Core MVC + Faydalı Özellikler' }, price: '29₺', returnedExpense:'29,99₺ - MasterCard ****3495', kind:'Dolu', returnStatus:'Başarılı'},
          { date: '29 Şub 2020', iconsName: { courseName: 'Asp.Net Core MVC + Faydalı Özellikler' }, price: '19₺', returnedExpense:'19,99₺ - MasterCard ****3495', kind:'Dolu', returnStatus:'Başarılı'},
        ],
         itemsTwo: [
          { date: '6 Kas 2019', name: { courseName: 'İleri C# Uygulamaları' }, price: '49₺', PaymentType: 'Kredi Kartı',  },
          { date: '6 Kas 2020', name: { courseName: 'İleri C# Uygulamaları' }, price: '39₺', PaymentType: 'Kredi Kartı',  },
          { date: '6 Kas 2021', name: { courseName: 'İleri C# Uygulamaları' }, price: '29₺', PaymentType: 'Kredi Kartı',  },
        ],
         itemsReceipt: [
          { date: '6 Kas 2019', name: { courseName: 'İleri C# Uygulamaları' }, price: '49₺', PaymentType: 'Kredi Kartı',  },
          { date: '6 Kas 2020', name: { courseName: 'İleri C# Uygulamaları' }, price: '39₺', PaymentType: 'Kredi Kartı',  },
          { date: '6 Kas 2021', name: { courseName: 'İleri C# Uygulamaları' }, price: '29₺', PaymentType: 'Kredi Kartı',  },
        ],
        fields: [
          { key: 'iconsName', label: 'Kurs Adı', sortable: true },
          { key: 'date', label: 'Tarih', sortable: true },
          { key: 'price', label: 'Tutar', sortable: true },
          { key: 'returnedExpense', label: 'İade Edilen Taraf'},
           { key: 'kind', label: 'Tür' },
           { key: 'returnStatus', label: 'Durum'},
        ],
          fieldsTwo: [
          { key: 'name', label: 'Kurs Adı', sortable: true},
          { key: 'date', label: 'Tarih', sortable: true},
          { key: 'price', label: 'Tutar', sortable: true},
          { key: 'PaymentType', label: 'Ödeme Türü'},
          { key: 'document', label: 'Belgeler'},
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
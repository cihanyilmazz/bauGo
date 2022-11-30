<template>
  <div>
    <!-- User Interface controls -->
    <b-row class="table-property">

     <b-col sm="3" md="2" class="mb-2 mr-auto">
         <b-form-group>
          <template>
             <div>
               <multiselect placeholder="" :searchable="false"  :select-label="''" :selected-label="''" deselect-label="" :allow-empty="false"
                 id="per-page-select"
               v-model="perPage"
               :options="pageOptions">
                 <span slot="noResult">Sonuç bulunamadı</span>
               </multiselect>
             </div>
           </template>
         </b-form-group>
      </b-col>
        <b-col sm="9" md="6" lg="3" class="mb-2">
        <b-form-group>
          <b-input-group>
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Arama..."
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Sıfırla</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      
    </b-row>
    <!-- Main table element -->
    <b-table empty-filtered-text="Sonuç bulunamadı."
      empty-text="Tabloda herhangi bir veri mevcut değil."
      borderless
      striped
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        <a href="#" target="blank">{{ row.value.courseName}}</a>
      </template>
    <!--Onaylandi -->
      <template #cell(iconsName)="row">
          <i class="ri-checkbox-circle-fill color-green mr-2 ri-lg align-middle top-minus-2"></i><a href="#" target="blank">{{ row.value.courseName}}</a>
      </template> 

      <!--Reddedildi-->
      <!-- <template #cell(iconsName)="row">
          <i class="ri-close-circle-fill color-red mr-2 ri-lg align-middle top-minus-2"></i><a href="#" target="blank">{{ row.value.courseName}}</a>
      </template> -->
      
      <!--Onay Asamasinda -->
         <!-- <template #cell(iconsName)="row">
          <i class="ri-indeterminate-circle-fill color-third mr-2 ri-lg align-middle top-minus-2"></i><a href="#" target="blank">{{ row.value.courseName}}</a>
      </template> -->
    

       <template #cell(document)>
        <a href="#" target="blank" class="mr-4 color-second d-inline-block">Makbuz</a>
        <a href="#" target="blank">Fatura</a>  
      </template>
    </b-table>
          <b-col sm="12"  class="mt-5">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="center"
            size="sm"
            class="my-0"
            first-text="" prev-text="" next-text="" last-text=""
          ></b-pagination>
        </b-col>
      </div>
</template>

<script>
  export default {
    name: 'SatinAlmaGecmisi',
    props:['items','fields'],
    data() {
      return {
        // items: [
        //   { date: '6 Kas 2019', name: { courseName: 'İleri C# Uygulamaları' }, price: '49₺', PaymentType: 'Kredi Kartı',  },
        //   { date: '6 Kas 2020', name: { courseName: 'İleri C# Uygulamaları' }, price: '39₺', PaymentType: 'Kredi Kartı',  },
        //   { date: '6 Kas 2021', name: { courseName: 'İleri C# Uygulamaları' }, price: '29₺', PaymentType: 'Kredi Kartı',  },
        // ],
        // fields: [
        //   { key: 'name', label: 'Kurs Adı', sortable: true, sortDirection: 'desc' },
        //   { key: 'date', label: 'Tarih', sortable: true },
        //   { key: 'price', label: 'Fiyat' , sortable: true },
        //   { key: 'PaymentType', label: 'Ödeme Türü' },
        //   { key: 'document', label: 'Belgeler'},
        // ],
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
<template>
  <div>
    <v-date-picker v-model="date" :masks="masks">
  <template v-slot="{ inputValue, inputEvents }">
    <input
      class="bg-white border px-2 py-1 rounded"
      :value="inputValue"
      v-on="inputEvents"
    />
  </template>
</v-date-picker>
    </div>
</template>
<script>

export default {
  name: "DatePicker",
  data() {
  return {
    date: new Date(),
    masks: {
      input: 'YYYY-MM-DD',
    },
  };
},
};
</script>

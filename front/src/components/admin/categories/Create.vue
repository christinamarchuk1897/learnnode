<template>
    <div>
      <base-form :form="form" @formData="formData"></base-form>
    </div>
  </template>
  <script>
  import BaseForm from '@/components/forms/BaseForm.vue';
  export default {
    components: {
      BaseForm
    },

    data() {
      return {
        form: [
          {
            type: 'input',
            id: 'name',
            for: 'text',
            label: 'Category name',
            model: 'categoryName'
          },
          {
            type: 'input',
            for: 'text',
            id: 'descr',
            label: 'Category description',
            model: 'categoryDescr'
          },
        ]
      }
    },
    methods: {
      formData(data) {
        if (data) {
          console.log(this.$store)
        //  this.$store.dispatch('categories/post', data)
        }
      }
    }
  }
  </script>
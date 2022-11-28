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
          label: 'Product name',
          model: 'productName'
        },
        {
          type: 'input',
          for: 'text',
          id: 'descr',
          label: 'Product description',
          model: 'productDescr'
        },
        {
          type: 'number',
          id: 'price',
          label: 'Product Price',
          model: 'productPrice'
        },
        {
          type: 'select',
          options: [
            'one',
            'two'
          ],
          id: 'category',
          label: 'Product Category',
          model: 'productCategory'
        },
        {
          type: 'select',
          options: [
            '$',
          ],
          id: 'currency',
          label: 'Currency',
          model: 'currency'
        }
      ]
    }
  },
  methods: {
    formData(data) {
      console.log(data);
    }
  }
}
</script>
<template>
  <!-- <div class="form">
    <div class="form-group">
      <label for="product">Product name</label>
      <input type="text" class="form-control" id="product" placeholder="Enter product name">
    </div>
    <div class="form-group">
      <label for="productdescr">Product description</label>
      <input type="text" class="form-control" id="productdescr" placeholder="Enter product description">
    </div>
    <div class="form-group">
      <label for="productprice">Product price</label>
      <input type="number" class="form-control" id="productprice" placeholder="Enter product price">
    </div>
    <div class="form-group select">
      <label for="currency">Choose currency</label>
      <select class="custom-select" id="currency">
        <option selected>Open this select menu</option>
        <option value="1">$</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="form-group select">
      <label for="category">Choose category</label>
      <select class="custom-select" id="category">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div> -->
  <div>
    <base-form :form="form" @formData="formData"></base-form>
  </div>
</template>
<script>
import BaseForm from '@/components/forms/BaseForm.vue';
// import BaseForm from '../../forms/BaseForm.vue';
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
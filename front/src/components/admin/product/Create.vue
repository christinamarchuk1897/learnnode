<template>
  <div class="form">
    <div class="form-group">
      <label for="exampleInputEmail1">Product name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter product name">
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
        <!-- <option value="2">Two</option>
        <option value="3">Three</option> -->
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
  </div>
</template>
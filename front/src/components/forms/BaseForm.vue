<template>
    <div class="form">
        <div class="form-group">
        <label for="product">Product name</label>
        <input type="text" class="form-control" id="product" placeholder="Enter product name">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        form: {
            type: Array,
            default: []
        }
    }
}
</script>
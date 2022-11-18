<template>
    <h1>hello ebat</h1>
</template>

<script>
export default {
    async mounted() {
       const res = await this.axios.get('http://localhost:8000/products');
       console.log(res)
    // await fetch('http://localhost:8000/products').then((res) => {
    //     console.log(res);
    // })
    }
}
</script>
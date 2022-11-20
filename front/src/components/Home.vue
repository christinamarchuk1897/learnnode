<template>
    <section>
        <Header/>
    </section>
</template>
<script>
import Header from './base/Header.vue';
export default {
    components: {
        Header
    },
    async mounted() {
        await this.axios.get('/products')
    }
}
</script>
<template>
    <section>
        <Header/>
        <slot/>
        <Sidebar/>
    </section>
</template>
<script>
import Header from '../base/Header.vue';
import Sidebar from '../base/Sidebar.vue';
export default {
    components: {
        Header,
        Sidebar
    },
    async mounted() {
        await this.axios.get('/products')
    }
}
</script>
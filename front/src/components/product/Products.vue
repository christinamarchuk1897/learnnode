<template>
    <h1>Admin Products Table</h1>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async mounted() {
        await this.axios.get('/products')
    },

    computed: {
        ...mapGetters(['getUser']),
        user() {
            return this.$store.getters['getUser'];
        }
    },

    watch: {
        user: {
            hadler(data) {
                console.log(data)
            },
            deep: true
        }
    }
}
</script>
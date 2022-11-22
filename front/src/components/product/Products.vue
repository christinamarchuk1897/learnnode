<template>
    <h1>Admin Products Table</h1>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    mounted() {
       console.log(this.$store.getters['getUser'])
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
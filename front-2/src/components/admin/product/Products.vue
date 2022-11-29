<template>
    <div>
        <router-link :to="'/admin/products/create'">
            <button>Create</button>
        </router-link>
        <div>
            <h1>Admin Products Table</h1>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    async mounted() {
        // await this.$axios.get('/products')
    },

    computed: {
        user() {
            return this.$store.getters['user/getUser'];
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
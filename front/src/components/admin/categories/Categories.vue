<template>
    <div>
        <router-link :to="'/admin/categories/create'">
            <button>Create</button>
        </router-link>
        <div>
            <h1>Admin Categories Table</h1>
        </div>

        <div v-for="(category) in categories" :key="category.id">
            <span>{{category.id}}</span>
            <span>{{category.category_name}}</span>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        categories() {
            console.log(this.$store.getters['categories/getAllCategories'], 'computed')
            return this.$store.getters['categories/getAllCategories']
        }
    },
    beforeMount() {
        this.$store.dispatch('categories/fetch');
    },

    watch: {
        categories: {
            handler(data) {
                console.log(data, 'watch')
            },
            deep: true
        }
    }
}
</script>
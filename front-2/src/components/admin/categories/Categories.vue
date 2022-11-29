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
import user from '@/store/modules/user';


export default {
    computed: {
        categories() {
            return this.$store.getters['categories/getAllCategories'];
        },
        user() {
           return this.$store.getters['user/getUser']
        }
    },
    mounted() {
        this.$store.dispatch('categories/fetch');
    },

    watch: {
        categories: {
            handler(data) {
                console.log(data)
            },
            deep: true
        },
        user: {
            handler(data) {
                console.log(data)
            },
            deep: true
        }
    }
}
</script>
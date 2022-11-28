<template>
    <div>
        <router-link :to="'/admin/categories/create'">
            <button>Create</button>
        </router-link>
        <div>
            <h1>Admin Categories Table</h1>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('categories/fetch')
    }
}
</script>
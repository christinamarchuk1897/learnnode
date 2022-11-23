<template>
    <aside class="sidebar">
        <router-link to="/my-products">My Products</router-link>

        <template v-if="role">
            <router-link to="/admin/products">Products</router-link>
            <router-link to="/admin/categories">Categories</router-link>
        </template>
    </aside>
</template>

<script>
export default {
    computed: {
        role() {
            return JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).default_role === 'ADMIN';
        }
    }
}
</script>
<style lang="scss">
.sidebar {
    position: absolute;
    top: 100px;
    left: 0;
    width: 270px;
    height: 100%;
    padding: 20px;
    background-color: #4e5f95;
    display: flex;
    flex-direction: column;
    a {
        margin-bottom: 25px;
    }
}
</style>
<template>
    <header class="header">
        <div class="items">
            <router-link to="/catalog">Catalog</router-link>
            <router-link to="/categories">Categories</router-link>
            <router-link to="/products">Products</router-link>
        </div>
        <div class="actions">
            <button @click="logout" class="logout">Logout</button>
        </div>
    </header>
</template>

<script>
export default {
    data() {
       return {

       }
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.$router.push('/login');
        }
    }
}
</script>
<style lang="scss" scoped>
@import './../../styles/style.scss';
 .header {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #19203c;
    .items {
        width: 80%;
        a {
            margin-right: 25px;
        }
    }
    .actions {
        width: 20%;
    }
 }

</style>
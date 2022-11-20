<template>
    <header class="header">
        <button @click="logout" class="logout">Logout</button>
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
            this.$router.push('/login');
        }
    }
}
</script>
<style lang="scss" scoped>
 .header {
    min-height: 70px;
    display: flex;
    align-items: center;
    padding: 20px;
 }
 .logout {
    margin-left: auto;
 }
</style>
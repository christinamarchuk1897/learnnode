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
@import './../../styles/style.scss';
 .header {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #19203c;
 }
 .logout {
    margin-left: auto;
 }
</style>
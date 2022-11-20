<template>
    <div class="container">
            <h1>Login</h1>
            <label for="email"><b>Email</b></label>
            <input v-model="form.email" type="text" placeholder="Enter Email" name="email" id="email" required>

            <label for="psw"><b>Password</b></label>
            <input v-model="form.password" type="password" placeholder="Enter Password" name="psw" id="psw" required>

            <button @click="login" class="registerbtn">Login</button>

            <div class="container signin">
            <p><router-link to="/register">Register</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        async login() {
            const res = await this.axios.post('/login', this.form);
            if (res.data.user && res.data.token) {
                localStorage.setItem('token', res.data.token)
                this.$router.push('/home');
            }
        }
    }
}
</script>
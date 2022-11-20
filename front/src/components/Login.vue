<template>
    <div class="container">
            <h1>Login</h1>
            <label for="email"><b>Email</b></label>
            <input v-model="form.email" type="text" placeholder="Enter Email" name="email" id="email" required>

            <label for="psw"><b>Password</b></label>
            <input v-model="form.password" type="password" placeholder="Enter Password" name="psw" id="psw" required>

            <button @click="login" class="registerbtn">Login</button>
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
            await this.axios.get('/products')
        }
    }
}
</script>
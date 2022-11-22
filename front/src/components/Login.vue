<template>
    <div class="container mt-5">
        <h1>Login</h1>

        <div class="input-group">
            <label for="email"><b>Email</b></label>
            <input v-model="form.email" type="text" placeholder="Enter Email" name="email" id="email" required>
        </div>

        <div class="input-group">
            <label for="psw"><b>Password</b></label>
            <input v-model="form.password" type="password" placeholder="Enter Password" name="psw" id="psw" required>
        </div>

        <button @click="login" class="registerbtn">Login</button>

        <div class="container signin">
            <button>
                <router-link to="/register">Register</router-link>
            </button>
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
            await this.$store.dispatch('login', this.form)
        }
    }
}
</script>
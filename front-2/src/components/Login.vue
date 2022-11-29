<template>
    <div class="container mt-5">
        <div class="form">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input  v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <div class="actions d-flex flex-column">
                <button @click="login">Login</button>
                <button >
                    <router-link to="/register">Register</router-link>
                </button>
            </div>
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
    computed: {
        user() {
           return this.$store.getters['user/getUser']
        }
    },
    watch: {
        user: {
            handler(user) {
                console.log(user)
            },
            deep: true
        }
    },
    methods: {
        async login() {
           await this.$store.dispatch('user/login', this.form)
        }
    }
}
</script>
<style lang="scss">
    .actions {
        margin-top: 20px;
    }
    .form {
        max-width: 60%;
        margin: 0 auto;
    }
</style>
<template>
    <div>
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <div class="input-group">
              <label for="firstname"><b>First name</b></label>
              <input v-model="form.firstName" type="text" placeholder="Enter First name" name="firstname" id="firstname" required>
            </div>

            <div class="input-group">
              <label for="lastname"><b>Last name</b></label>
              <input v-model="form.lastName" type="text" placeholder="Enter Last name" name="lastname" id="lastname" required>
            </div>
            
            <div class="input-group">
              <label for="email"><b>Email</b></label>
              <input v-model="form.email" type="text" placeholder="Enter Email" name="email" id="email" required>
            </div>

            <div class="input-group">
  
              <label for="psw"><b>Password</b></label>
              <input v-model="form.password" type="password" placeholder="Enter Password" name="psw" id="psw" required>
            </div>
            <div class="input-group">
              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input v-model="form.passwordConfirmation" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
            </div>

            <button @click="register" class="registerbtn">Register</button>
        </div>
        <div class="error" v-if="errors && errors.length">
          <p v-for="(err, i) in errors" :key="i">
            {{err.msg}} {{err.param}}
          </p>
        </div>

        <div class="container signin">
            <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            },
            errors: null
        }
    },
    methods: {
      async register() {
        await this.axios.post('/register', {
          ...this.form
        }).then((res) => {
          if(res.data.succes) {
            this.$router.push('/login');
          }
        }).catch((err)=> this.errors = err.response.data.errors);
      }
    }
}
</script>
<style lang="scss">
@import './../styles/style.scss';
</style>
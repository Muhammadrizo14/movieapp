<template>
  <div class="upwrap">
    <div class="container">
      <div class="container_wrap">
        <Header/>
        <div class="content">
          <div class="register">
            <div class="col-md-6 login-left">
              <h3>New Customers</h3>
              <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
              <router-link class="acount-btn" to="/register">Create an Account</router-link>
            </div>
            <div class="col-md-6 login-right">
              <h3>Registered Customers</h3>
              <p>If you have an account with us, please log in.</p>
              <form  @submit.prevent="handleSubmit">
                <div>
                  <span>Name<label>*</label></span>
                  <input v-model="username"  type="text">
                </div>
                <div>
                  <span>Password<label>*</label></span>
                  <input  v-model="password"  type="text">
                </div>
                <input type="submit" value="Login">
              </form>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from '@/components/header-users'
    import Footer from '@/components/footer'
    import axios from 'axios'

    export default {
        name: "login",
        components: {
            Header,
            Footer
        },
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            async handleSubmit() {
                await axios({
                    method: "POST",
                    url: 'http://localhost:3033/auth/login',
                    "Content-Type": "application/json",
                    data: {
                        "name": this.username,
                        "password": this.password
                    }
                })
                    .then((response => {
                        console.log(response.data.access_token)
                        localStorage.setItem('token', response.data.access_token)
                        localStorage.setItem('name', this.username)
                        localStorage.setItem('password', this.password)
                        this.$router.push('/')
                    }))
                    .catch((err => {
                        console.log(err)
                    }))


            }
        }
    }
</script>

<style scoped>
  .upwrap {
    font-family: 'Roboto Condensed', sans-serif;
    background:#3f444e;
  }

</style>
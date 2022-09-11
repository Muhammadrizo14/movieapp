<template>
  <div class="upwrap">
    <div class="container">
      <div class="container_wrap">
        <Header />
        <div class="content">
          <div class="register">
            <form>
              <div class="register-top-grid">
                <h3>Personal Information</h3>
                <div>
                  <span>Name<label>*</label></span>
                  <input ref="username" type="text">
                </div>
              </div>
              <div class="register-bottom-grid">
                <div>
                  <span>Password<label>*</label></span>
                  <input ref="password" type="text">
                </div>
                <div class="clearfix"> </div>
              </div>
              <button type="submit" @click="createacc">Submit</button>

            </form>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/header-users";
    import Footer from "@/components/footer";
    import axios from "axios";

    export default {
        name: "register",
        components: {Header, Footer},
        data() {
            return{
            }
        },
        methods: {
            createacc: function (e) {
                e.preventDefault()
                axios({
                    method: "POST",
                    url: 'http://localhost:3033/user/',
                    data: {
                        "name": this.$refs.username.value,
                        "password": this.$refs.password.value,
                    }
                })
                .then((response => {
                    this.$router.push('/login')
                    console.log(response)
                }))
                  .catch((err => {
                    console.log(err)
                }))
            }
        }

    }
</script>

<style scoped>

</style>
<template>
  <div>
    <Header />
    <create />
    <br>
  </div>
</template>

<script>
    import create from '@/admin/create-movie'
    import Header from "@/admin/header-admins";
    import axios from "axios";

    export default {
        name: "admin",
        components: {
            Header,
            create,
        },
        data() {
            return {
                name: localStorage.getItem('name'),
                password: localStorage.getItem('password')
            }
        },
        mounted() {
            axios({
                method: "POST",
                url: 'http://localhost:3033/auth/profile',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then((response => {
                    console.log(response)
                }))
                .catch((err => {
                    console.log(err)
                }))

            if (this.name === 'admin' && this.password) {
                console.log('welcome')
            } else  {
                this.$router.push('/')
            }

        }
    }
</script>

<style scoped>

</style>


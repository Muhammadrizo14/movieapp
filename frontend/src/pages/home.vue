<template>
  <div class="upwrap">
    <div class="container">
      <div class="container_wrap">
        <Header/>
        <Slider />
        <Content />

        <div class="container_wrap">
          <Footer />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    import Header from '@/components/header-users'
    import Slider from '@/components/slider'
    import Content from '@/components/content'
    import Footer from '@/components/footer'
    import axios from "axios";

    export default {
        name: "home",
        components: {
            Header,
            Slider,
            Content,
            Footer,
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
        }
    }
</script>

<style scoped>
  .upwrap {
    font-family: 'Roboto Condensed', sans-serif;
    background:#3f444e;
  }
</style>
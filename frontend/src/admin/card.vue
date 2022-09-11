<template>
  <div>
    <div v-for="(movies, index) in this.movies" :key="index">
      <img :src="movies.image" alt="">
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "card",
        data() {
            return {
                movies: null
            }
        },
        mounted() {
            axios({
                method: "GET",
                url: 'http://localhost:3033/movie/'
            })
                .then((response => {
                    this.movies = response.data
                }))
                .catch((err => {
                    console.log(err)
                }))
        }

    }
</script>

<style scoped>

</style>
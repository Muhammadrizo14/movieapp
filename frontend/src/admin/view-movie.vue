<template>
<div>
  <Header />
  <h3 class="title">{{ $t("view_movies.title") }}</h3>
  <br>
  <section class="cards__items">
    <router-link
      class="card"
      v-for="data in movies"
      :to="'/admin/movie/' + data.id"
      v-bind:key="data.id"
    >
        <div class="movie-card">
          <img :src="data.image" class="poster" />
          <div class="df">
            <h3 class="movie-title">{{data.premuere}}</h3>
            <h3 class="movie-vote">{{data.title}}</h3>
          </div>
        </div>
    </router-link>

  </section>
</div>

</template>

<script>
    import axios from "axios";
    import Header from "@/admin/header-admins";

    export default {
        name: "view-movie",
        components: {
            Header,
        },
        data() {
            return {
                movies: null,
                token: localStorage.getItem('token'),
                name: localStorage.getItem('name'),
                password: localStorage.getItem('password')
            }
        },
        mounted() {
            console.log(localStorage.getItem('token'))
            axios({
                method: "GET",
                url: 'http://localhost:3033/movie/',
                "headers": {
                    Authorization: "Bearer " + this.token
                }
            })
                .then((response => {
                    this.movies = response.data
                }))
                .catch((err => {
                    console.log(err)
                }))
            if (this.name === 'admin' && this.password) {
                console.log('welcome')
            } else  {
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
  .movie-title, movie-vote {
    padding: 0;
    margin: 0;
  }
  .cards__items {
    display: grid;
    grid-template-columns: 0fr 0fr 0fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    justify-content: center;
  }
  .df {
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .movie-vote {
    padding: 0;
    margin: 0;
  }

  .title {
    text-align: center;
  }
  .poster {
    width: 300px;
    height: 450px;
  }
  .movie-title {
    color: #ce9847;
  }
</style>
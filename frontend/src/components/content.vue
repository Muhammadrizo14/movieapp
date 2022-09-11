<template>
  <div class="content">
    <Filters
      :search="search"
    />
    <section class="cards__items">

      <Posts :posts="posts" />

<!--      <router-link-->
<!--        class="card"-->
<!--        v-for="data in movies"-->
<!--        :to="'/movie/' + data.id"-->
<!--        v-bind:key="data.id"-->
<!--      >-->
<!--        <div class="movie-card">-->
<!--          <img :src="data.image" class="poster" />-->
<!--          <div class="df">-->
<!--            <h3 class="movie-title">{{data.premuere}}</h3>-->
<!--            <h3 class="movie-vote">{{data.title}}</h3>-->
<!--          </div>-->
<!--        </div>-->
<!--      </router-link>-->

    </section>
  </div>
</template>

<script>
    import axios from "axios";
    import Filters from "@/admin/Filters";
    import Posts from "@/admin/Posts";

    export default {
        name: "content",
        components: {
            Filters,
            Posts
        },
        data() {
            return {
                posts: [],
                mock: [],
                str: '',
                type: '',
                token: localStorage.getItem('token')
            }
        },
        mounted() {
            axios({
                method: "GET",
                url: 'http://localhost:3033/movie/',
                headers: {
                    Authorization: "Bearer " + this.token
                }
            })
                .then((response => {
                    this.posts = response.data
                    this.mock = response.data
                }))
                .catch((err => {
                    console.log(err)
                }))
        },

        methods: {
            search (term) {
                this.resetPosts()
                this.posts = this.posts.filter((post) => {
                    return post.title.toLowerCase().includes(term.toLowerCase())
                })
            },
            resetPosts () {
                this.posts = this.mock
            }
        }
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
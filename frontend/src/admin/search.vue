<template>
  <div class="container">
    <div class="half">
      <Filters
        :search="search"
      />
    </div>
    <div class="half">
      <Posts :posts="posts" />
    </div>
  </div>
</template>

<script>
    import Filters from './Filters.vue'
    import Posts from './Posts.vue'
    import axios from "axios";

    export default {
        name: 'App',
        components: {
            Filters,
            Posts
        },
        data () {
            return {
                posts: [],
                mock: [],
                str: '',
                type: ''
            }
        },

        mounted() {
            axios({
                method: "GET",
                url: 'http://localhost:3033/movie/',
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
  .container {
    display: flex;
    margin: 20px;
  }
  .half {
    width: 40%;
  }
</style>

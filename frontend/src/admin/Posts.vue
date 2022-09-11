<template>
  <router-link
    class="card"
    v-for="data in posts"
    :to="'/movie/' + data.id"
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

</template>

<script>
    export default {
        props: [
            'posts'
        ]
    }
</script>


<style>
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
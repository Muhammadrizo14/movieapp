<template>
  <div class="header_top">
    <div class="col-sm-3 logo"><a href="/"><img src="@/assets/images/logo.png" alt=""/></a></div>
    <div class="col-sm-6 nav">
      <ul>
        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="comic"><a href=""> </a></span>
        </li>
        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="movie"><a
          href="movie.html"> </a> </span></li>
        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="video"><a href=""> </a></span>
        </li>
        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="game"><a href=""> </a></span>
        </li>
        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="tv"><a href=""> </a></span>
        </li>
        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="more"><a href=""> </a></span>
        </li>
      </ul>
    </div>
    <div class="col-sm-3 header_right">
      <ul class="header_right_box">
          <li v-if="!token"><p><router-link to="/login">Login</router-link></p></li>
          <li v-if="token"><p><router-link v-on:click="clicked()" to="/login">Logout</router-link> || Welcome {{this.name}}</p></li>
        <div class="clearfix"></div>
      </ul>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
    export default {
        name: "header-users",
        data() {
            return {
                token: localStorage.getItem('token'),
                name: localStorage.getItem('name')
            }
        },
        methods: {
            clicked() {
                localStorage.removeItem('token')
                localStorage.removeItem('name')
                localStorage.removeItem('password ')

            }
        }
    }
</script>

<style scoped >
  @import "../assets/css/style.css";
  @import "../assets/css/bootstrap.css";
</style>
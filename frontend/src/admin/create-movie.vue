<template>
  <div>
    <Toast />
    <Toast position="top-left" group="tl" />
    <h3 class="title">{{ $t("create.title") }}</h3>
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input :placeholder="$t('create.add-form.title')" ref="title" type="text"/>
          <input :placeholder="$t('create.add-form.slogan')" ref="slogan" type="text"/>
          <input :placeholder="$t('create.add-form.premiere')" ref="premiere" type="text"/>
          <input :placeholder="$t('create.add-form.genre')" ref="genre" type="text"/>
          <input :placeholder="$t('create.add-form.country')" ref="country" type="text"/>
          <input :placeholder="$t('create.add-form.ageRest')" ref="ageRest" type="text"/>
          <input :placeholder="$t('create.add-form.director')" ref="director" type="text"/>
          <input :placeholder="$t('create.add-form.description')" ref="description" type="text"/>
          <input :placeholder="$t('create.add-form.poster')" ref="poster" type="text"/>
          <input :placeholder="$t('create.add-form.url')" ref="url" type="text"/>
          <Button @click="submitData" :label="$t('create.add-form.add-btn')"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "create-movie",

        data() {
            return {
                token: localStorage.getItem('token')
            }
        },

        methods: {
            submitData: function (e) {
                e.preventDefault()
                axios({
                    method: "POST",
                    url: 'http://localhost:3033/movie/',
                    headers:{
                        Authorization: "Bearer " + this.token
                    },
                    data: {
                        "title": this.$refs.title.value,
                        "slogan": this.$refs.slogan.value,
                        "premuere": this.$refs.premiere.value,
                        "image": this.$refs.poster.value,
                        "genre": this.$refs.genre.value,
                        "country": this.$refs.country.value,
                        "ageRest": this.$refs.ageRest.value,
                        "director": this.$refs.director.value,
                        "description": this.$refs.description.value,
                        "url": this.$refs.url.value,
                    }
                })
                    .then((response => {
                        this.$toast.add({severity:'success', summary: `${this.$t("create.add-form.movieAdded")}`, group: 'tl', life: 3000});
                        console.log(response.data )
                        this.$refs.title.value = ''
                        this.$refs.slogan.value = ''
                        this.$refs.premiere.value = ''
                        this.$refs.poster.value = ''
                        this.$refs.genre.value = ''
                        this.$refs.url.value = ''
                    }))
                    .catch((err => {
                        console.log(err)
                        this.$toast.add({severity:'error', summary: 'Error Message', group: 'tl', detail:'Message Content', life: 3000});
                    }))
            },
        },
    }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  .login-page {
    width: 360px;
    padding: 2% 0 0;
    margin: auto;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,.form button:active,.form button:focus {
    background: #43A047;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before, .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #EF3B3A;
  }
  body {
    background: #76b852; /* fallback for old browsers */
    background: rgb(141,194,111);
    background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .title {
    text-align: center;
  }
</style>
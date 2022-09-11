<template>
  <Header />

  <div class="container">
    <Toast />
    <Toast position="top-left" group="tl" />
    <div class="am">
      <div>
        <img :src="detail.image" class="poster" />
      </div>
      <div class="movie-info">
        <h1 class="title-movie">{{detail.title}}</h1>
        <h3 class="about-mo">{{$t('view_movies.aboutThisFilm')}}</h3>
        <div class="dff"><p class="equsd">{{$t('view_movies.genre')}}: </p><h4 class="eqs">{{detail.genre}}</h4></div>
        <div class="dff"><p class="equsd">{{$t('view_movies.slogan')}}: </p> <h4 class="eqs">{{detail.slogan}}</h4></div>
        <div class="dff"><p class="equsd">{{$t('view_movies.premiere')}}: </p> <h4 class="eqs">{{detail.premuere}}</h4></div>
        <a :href="detail.url" target="_blank">{{$t('view_movies.watchfilm')}}</a>
        <div class="du">
          <!--delete movie-->
          <div class="deletem">
            <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content" :drag="true" :esc-to-close="true">
              <Button @click="showModal = false" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined modal__close" />
              <span class="modal__title">{{$t('view_movies.deleteMovie')}}</span>
              <div  class="modal__action">
                <router-link to="/view-movies" >
                  <Button :label="$t('yes')" @click="deletebtn()"  icon="pi pi-check" style="margin-right: 10px;" />
                </router-link>
                <Button @click="showModal = false" :label="$t('no')" icon="pi pi-times"/>
              </div>
            </vue-final-modal>
            <Button @click="showModal = true" icon="pi pi-trash"  class="p-button-danger" />
          </div>
          <div>

            <!--edit movie-->


          <vue-final-modal v-model="editModal" classes="modal-container"  content-class="modal-content" :esc-to-close="true">
            <Button @click="editModal = false " icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined modal__close"/>
            <span class="modal__title">{{$t('view_movies.editMovie')}}</span>
            <div class="modal__content">
              <div class="form">
                <form class="register-form">
                  <input :value="this.detail.title" :placeholder="$t('create.add-form.title')" ref="title" type="text"/>
                  <input :value="this.detail.slogan" :placeholder="$t('create.add-form.slogan')" ref="slogan" type="text"/>
                  <input :value="this.detail.premuere" :placeholder="$t('create.add-form.premiere')" ref="premiere" type="text"/>
                  <input :value="this.detail.genre" :placeholder="$t('create.add-form.genre')" ref="genre" type="text"/>
                  <input :value="this.detail.image" :placeholder="$t('create.add-form.poster')" ref="poster" type="text"/>
                  <input :value="this.detail.url" :placeholder="$t('create.add-form.url')" ref="url" type="text"/>
                </form>
              </div>
            </div>
            <div  class="modal__action">
              <button class="editbtn" @click="updataBtn()">{{$t('view_movies.editBtn')}}</button>
            </div>
          </vue-final-modal>
          <Button @click="editModal = true" icon="pi pi-pencil"  class="p-button-warning"  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
    import axios from "axios";
    import Header from '@/admin/header-admins'
    import Button from 'primevue/button';

    export default {
        name: "detail-view-movies",
        data() {
            return {
                showModal: false,
                editModal: false,
                detail: [],
                id: this.$route.params['id'],
                token: localStorage.getItem('token')
            }
        },
        components: {
            Header,
            Button
        },
        mounted() {
            axios({
                method: "GET",
                url: 'http://localhost:3033/movie/' + this.id,
                headers:{
                    Authorization: "Bearer " + this.token
                },
            })
                .then((response => {
                    console.log(response.data)
                    this.detail = response.data
                }))
                .catch((err => {
                    console.log(err)
                }))
        },

        methods:{
            deletebtn: function () {
                this.showModal = false
                axios({
                    method: "DELETE",
                    url: 'http://localhost:3033/movie/' + this.id,
                    headers:{
                        Authorization: "Bearer " + this.token
                    },
                })
                    .then((response => {
                        console.log(response.data)
                    }))
                    .catch((err => {
                        console.log(err)
                    }))
            },
            updataBtn: function (e) {
                this.editModal = false
                location.reload()
                axios({
                    method: "PATCH",
                    url: 'http://localhost:3033/movie/' + this.id,
                    headers:{
                        Authorization: "Bearer " + this.token
                    },
                    data: {
                        "title": this.$refs.title.value,
                        "slogan": this.$refs.slogan.value,
                        "premuere": this.$refs.premiere.value,
                        "image": this.$refs.poster.value,
                        "genre": this.$refs.genre.value,
                        "url": this.$refs.url.value,
                    }
                })
                    .then((response => {
                        console.log(response.data)
                    }))
                    .catch((err => {
                        console.log(err)
                    }))
            }
        }

    }
</script>


<style scoped>
  ::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-page {
    width: 360px;
    padding: 2% 0 0;
    margin: auto;
  }
  .form {
    padding-top: 13px;
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
  .editbtn {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
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


  ::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
  }
  .modal__title {
    margin: 0 5rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
  }



  .modal__content {
    flex-grow: 1;
    overflow-y: auto;
  }
  .modal__action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem 0 0;
  }
  .modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
  }

  .container {
    max-width: 63%;
    margin: 0 auto;
    font-family: "Pacifico", sans-serif;
  }

  .movie-info {
    padding-left: 30px;
  }

  .eqs {
    margin: 0;
    padding: 0;
  }

  .am {
    display: flex;
  }

  .du {
    display: flex;
    padding-top: 20px;
  }
  .deletem {
    padding-right: 10px;
  }
  .about-mo {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }

  .title-movie {
    font-size: 40px;
  }

  .equsd {
    color: rgba(0,0,0,.4);
    padding: 0;
    margin: 0;
  }

  .dff {
    padding-bottom: 20px;
  }

  .poster {
    width: 300px;
    height: 444px;
  }

</style>


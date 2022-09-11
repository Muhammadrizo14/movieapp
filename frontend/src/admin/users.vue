<template>
  <Header/>
  <h1>Users</h1>
  <table class="fixed_headers">
    <thead>
    <tr>
      <th>Name</th>
      <th>Password</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(data, index) in users" :key="index">
      <td>{{data.name}}</td>
      <td>{{data.password}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import Header from '@/admin/header-admins'
  import axios from "axios";
  export default {
      name: 'users',
      data() {
          return {
              users: [],
              token: localStorage.getItem('token'),
              name: localStorage.getItem('name'),
              password: localStorage.getItem('password')
          }
      },
      components: {
          Header
      },
      mounted() {
          axios({
              method: "GET",
              url: 'http://localhost:3033/user/',
              headers: {
                  Authorization: "Bearer " + this.token
              }
          })
              .then((response => {
                  console.log(response.data)
                  this.users = response.data
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
  .fixed_headers {
    width: 100%;
    table-layout: fixed;
    /*border-collapse: collapse;*/
  }
  .fixed_headers th, .fixed_headers td {
    padding: 5px;
    text-align: left;
  }
  .fixed_headers td:nth-child(1), .fixed_headers th:nth-child(1) {
    min-width: 300px;
  }
  .fixed_headers td:nth-child(2), .fixed_headers th:nth-child(2) {
    width: 100%;
  }
  .fixed_headers td:nth-child(3), .fixed_headers th:nth-child(3) {
    width: 100%;
  }
  .fixed_headers thead {
    background-color: #333;
    color: #FDFDFD;
  }
  .fixed_headers thead tr {
    display: block;
    position: relative;
  }
  .fixed_headers tbody {
    display: block;
    overflow: auto;
    width: 100%;
  }
  .fixed_headers tbody tr:nth-child(even) {
    background-color: #DDD;
  }
  .old_ie_wrapper {
    height: 300px;
    width: 750px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .old_ie_wrapper tbody {
    height: auto;
  }
</style>
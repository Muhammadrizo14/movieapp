<template>
  <header class="header">
    <router-link class="link" to="/admin"><h2>{{ $t("admin.title") }}</h2></router-link>

    <ul class="header__list">
      <li>
        <router-link class="link" to="/view-movies/"><h4>{{ $t("admin.view-all-movies") }}</h4></router-link>
      </li>
      <li>
        <router-link class="link" to="/"><h4>{{ $t("admin.home-page") }}</h4></router-link>
      </li>
      <li>
        <router-link class="link" to="/users"><h4>Users</h4></router-link>
      </li>
      <li>
        <LocaleSwitcher />
      </li>
    </ul>
  </header>
</template>

<script>

    import LocaleSwitcher from "@/admin/LocaleSwitcher";
    export default {
        name: "Header",
        components: {
            LocaleSwitcher
        },
    }
</script>

<style scoped>
  .link {
    text-decoration: none;
    color: #fff;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    background-color: #2c3e50;
    color: #fff;
    margin-bottom: 20px;
  }
  .header__list {
    display: flex;
  }
  .header__list > li {
    padding-right: 10px;
  }
</style>

<style>
    body {
      padding: 0;
      margin: 0;
    }
</style>
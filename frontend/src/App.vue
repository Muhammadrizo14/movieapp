<template>
  <router-view/>
</template>


<script>

  export  default  {
      name: "app",
      components: {
      }

  }
</script>

<style>
  @font-face {
    font-family: "Pacifaco", sans-serif;
    src: local("Pacifico"),
    url(assets/fonts/Pacifico/Pacifico-Regular.ttf) format("truetype");
  }
</style>

<style lang="scss">
  .upwrap {
    font-family: 'Roboto Condensed', sans-serif;
    background:#3f444e;
  }
  a {
    text-decoration: none !important;
  }

  .dff{
    display: flex;
    align-items: center;
  }
  select {
    color:#000 !important;
  }

  li {
    list-style: none;
  }
  * {
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
</style>

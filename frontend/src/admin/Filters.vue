<template>
  <label for="search">
    Search


    <input
      id="search"
      v-model="term"
      @keypress.enter="search(term)"
    />
  </label>


</template>

<script>


    export default {
        props: [
            'search',
        ],
        data () {
            return {
                term: ''
            }
        }
    }
</script>

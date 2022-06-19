<template>
  <v-footer>
    <v-col cols="12">
      <button v-on:click="home">Home</button>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  methods: {
    home(){
      this.$router.push('/')
    },
  },
}
</script>

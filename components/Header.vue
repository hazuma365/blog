<template>
      <v-container>
       <v-col
        cols="12"
        align="center">
        <v-row style="width: 645px;">
        <button v-on:click="home">hazuma365@blog</button>
        </v-row>
       </v-col>
     </v-container>
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



<template>
      <v-container style="max-width: 645px;">
       <v-col
        cols="12"
        align="center">
          <v-row>
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



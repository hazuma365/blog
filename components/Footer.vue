<template>
  <v-footer>
     <v-container>
        <v-col
          class="text-center"
          cols="12"
        >
          (c){{ new Date().getFullYear() }} hazuma365
        </v-col>
     </v-container>
  </v-footer>
</template>
<style>
  html, body {
    margin: 0;
  }

  .contents {
    text-align: center;
    height: 800px;
    background: green;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: #ccc;
    text-align: center;
  }
</style>

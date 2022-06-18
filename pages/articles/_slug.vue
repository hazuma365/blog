<template>
   <v-container>
     <v-row dense>
       <article>
         <h1>{{article.title}}</h1>
         <p>{{article.date}}</p>
         <nuxt-content :document="article" />
       </article>
      </v-row>
    </v-container>
</template>
<script>
export default {
 async asyncData ({ $content, params }) {
   const article = await $content('articles', params.slug || 'index').fetch()
   return { article }
 }
}
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 20px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .icon.icon-link {
    background-image: url('~assets/svg/icon-hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  }
</style>

<template>
   <v-container>
     <v-row >
        <v-col align="center">
         <v-card width="645">
           <article>
               <v-card-title
                 class="text-h1"
                 v-text="article.title"
               ></v-card-title>
               <v-card-subtitle v-text=formatDate(article.updatedAt)></v-card-subtitle>
             <v-divider></v-divider>
             <v-card-text>
                <nuxt-content :document="article" />
             </v-card-text>
           </article>
        </v-card>
        </v-col>
     </v-row>
  </v-container>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('date', 'asc')
        .surround(params.slug)
        .fetch()
      return {
        article,
        prev,
        next
      }
    },
   methods: {
       formatDate(date) {
         const options = { year: 'numeric', month: 'long', day: 'numeric' }
         return new Date(date).toLocaleDateString('jp', options)
       }
    }
}
</script>

<style>
  .nuxt-content {
      text-align: left;
  }
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 2.0em;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 25px;
    line-height: 1.5em;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.5em;
  }
  .nuxt-content h4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.5em;
  }
  .nuxt-content p {
    margin-bottom: 20px;
    line-height: 1.5em;
  }
</style>

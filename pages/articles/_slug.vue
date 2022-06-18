<template>
   <article>
     <h1>{{article.title}}</h1>
     <p>formatDate(article.date)</p>
     <nuxt-content :document="article" />
     <prev-next :prev="prev" :next="next" />
   </article>
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
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content h4 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>

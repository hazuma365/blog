<template>
 <article>
   <h1>{{blogs.title}}</h1>
   <p>{{blogs.date}}</p>
   <nuxt-content :document="blogs" />
 </article>
</template>
<script>
export default {
 async asyncData ({ $content, params }) {
   const blogs = await $content('blogs', params.slug || 'index').fetch()
   return { blogs }
 }
}
</script>

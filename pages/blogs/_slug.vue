<template>
   <v-container>
     <v-row dense>
       <article>
         <h1>{{blogs.title}}</h1>
         <p>{{blogs.date}}</p>
         <nuxt-content :document="blogs" />
       </article>
      </v-row>
    </v-container>
</template>
<script>
export default {
 async asyncData ({ $content, params }) {
   const blogs = await $content('blogs', params.slug || 'index').fetch()
   return { blogs }
 }
}
</script>

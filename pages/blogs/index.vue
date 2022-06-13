<template>
 <div>
   <div v-for="b in blogs" :key="b.slug">
     <nuxt-link :to="'/blogs/'+ b.slug">{{b.title}} {{b.date}}</nuxt-link>
   </div>
 </div>
</template>
<script>
export default {
 async asyncData ({ $content, params }) {
   const query = await $content('blogs' || 'index').limit(10)
   const blogs = await query.fetch()
   return { blogs }
 }
}
</script>

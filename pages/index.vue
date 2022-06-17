<template>
 <div>
   <div v-for="b in blogs" :key="b.slug">
  <v-card
    class="mx-auto"
    max-width="500"
    tile
  >
       <v-card-title>
         <div>{{b.title}}</div>
       </v-card-title>
      <v-card-subtitle>
        <div>{{b.date}}</div>
      </v-card-subtitle>
       <v-card-text>
         <div>本文</div>
       </v-card-text>
       <v-card-actions>
          <nuxt-link :to="'/blogs/'+ b.slug">more</nuxt-link>
       </v-card-actions>
     </v-card>
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

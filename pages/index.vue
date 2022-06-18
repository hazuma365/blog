<template>
 <div>
   <v-container>
     <v-row>
       <v-col
         v-for="article in articles" :key="article.slug""
         cols="12"
       >
         <v-card>
           <div class="d-flex flex-no-wrap justify-space-between">
             <div>
               <v-card-title
                 class="text-h5"
                 v-text="article.title"
               ></v-card-title>
               <v-card-subtitle v-text=formatDate(article.date)></v-card-subtitle>
                <v-card-text>
                  <div>{{article.description}}</div>
                </v-card-text>
               <v-card-actions>
                  <nuxt-link :to="'/articles/'+ article.slug">more</nuxt-link>
               </v-card-actions>
             </div>
           </div>
         </v-card>
       </v-col>
     </v-row>
   </v-container>
 </div>

</template>
<script>
export default {
   async asyncData ({ $content, params }) {
     const query = await $content('articles' || 'index')
     const articles = await query.sortBy('date', 'desc').fetch()
     return { articles }
   },
  methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('jp', options)
      }
   }
}
</script>

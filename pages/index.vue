<template>
 <div>
   <navbar/>
   <v-container>
     <v-row dense>
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
               <v-card-subtitle v-text="article.date"></v-card-subtitle>
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
   const articles = await query.fetch()
   return { articles }
 }
}
</script>

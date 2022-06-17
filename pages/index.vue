<template>
 <div>
   <v-container>
     <v-row dense>
       <v-col
         v-for="b in blogs" :key="b.slug""
         cols="12"
       >
         <v-card>
           <div class="d-flex flex-no-wrap justify-space-between">
             <div>
               <v-card-title
                 class="text-h5"
                 v-text="b.title"
               ></v-card-title>
               <v-card-subtitle v-text="b.date"></v-card-subtitle>
                <v-card-text>
                  <div>{{b.description}}</div>
                </v-card-text>
               <v-card-actions>
                  <nuxt-link :to="'/blogs/'+ b.slug">more</nuxt-link>
               </v-card-actions>
             </div>
           </div>
         </v-card>
       </v-col>
     </v-row>
   </v-container>
  <v-footer absolute>
    <v-col
      class="text-center"
      cols="12"
    >
    </v-col>
  </v-footer>
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

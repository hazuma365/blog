<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="article in articles" :key="article.slug""
          cols="12"
          align="center">
          <v-card width="645">
                <v-card-title
                  class="text-h5"
                  v-text="article.title"
                >
                </v-card-title>
                <v-card-subtitle>
                    <div style="text-align: left">
                      {{formatDate(article.updatedAt)}}
                    </div>
                </v-card-subtitle>
                <v-card-actions class="test">
                    <div style="text-align: right">
                      <nuxt-link :to="'/articles/'+ article.slug">read ...</nuxt-link>
                    </div>
                </v-card-actions>
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
     const articles = await query.where({ status: 'public' }).sortBy('date', 'desc').fetch()
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
<style>
a {
  color: #6666CC;
  text-decoration: none;
  text-align: right;
}
</style>

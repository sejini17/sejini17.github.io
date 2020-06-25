<template>
      <v-container 
        pa-0 ma-0
        justify-center
      >
      <template>
        <movie-list v-for="item in itemList" :key="item.header"
          :pageSize="pageSize" :items="item.items" :header="item.header" viewMode="1"
          @selected="searchRelate"
        />
      </template>

      </v-container>
</template>


<script>
// @ is an alias to /src
  import MovieList from '@/components/MovieList';

  export default {
    props: {
      searchText: String,
    },
    components: {
      MovieList
    },
    data: () => ({
      pageSize: 10,
      selectedItem: null,

      itemList: [],
      subItems: [],

      header1: "",
    }),
    created () {
      this.$eventBus.$on('searchKeyword', (value) => this.searchKeyword(value))
    },
    mounted() {
      this.resetSearch()
    },
    methods: {
      resetValidation () {
        this.$refs.form.resetValidation()
      },

      resetSearch() {
        this.$axios.get('/test-data/theme_curation.json')
          .then(res => {
            // console.log(res.data)
            this.itemList = res.data
          })
      },

      searchKeyword(searchText) {
        // alert(this.searchText)
        if (!searchText) {
          this.resetSearch()
          return
        }

        this.$axios.get('/test-data/theme_result.json')
          .then(res => {
            this.itemList = res.data
            this.subItems = []

          })
          .catch(err => {
            console.error(err)
          })
      },

      searchRelate(itemId) {
        console.log("searchRelate : ", itemId)
        this.$axios.get('/test-data/relate.json')
          .then(res => {
            this.subItems = res.data.items
            console.log(res.data)
          })
          .catch(err => {
            console.error(err)
          })
      },
    },
  }
</script>
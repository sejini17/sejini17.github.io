<template>
      <v-container 
        pa-0 ma-0
        justify-center
      >
      
        <movie-list :pageSize="pageSize" :items="items" :header="header1" 
          @selected="searchRelate"
        />
        
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

      items: [
      ],
      subItems: [],

      header1: "",
      header2: ""
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
        this.header1 = "테마 큐레이션"
        this.header2 = "Random Pick"

        //top100 list
        this.$axios.get('/test-data/top100.json')
          .then(res => {
            // console.log(res.data)
            this.items = res.data.items
          })
        
        //random list
        this.$axios.get('/test-data/random.json')
          .then(res => {
            // console.log(res.data)
            this.subItems = res.data.items
          })
      },

      searchKeyword(searchText) {
        // alert(this.searchText)
        if (!searchText) {
          this.resetSearch()
          return
        }

        this.$axios.get('/test-data/search_result.json')
          .then(res => {
            this.items = res.data.items
            this.subItems = []

            this.header1 = "검색 결과"
            this.header2 = "유사 영화 콘텐츠"
          })
          .catch(err => {
            console.error(err)
          })
      },

      searchRelate(itemId) {
        console.log("searchRelate : " + itemId)

        this.header2 = "유사 영화 콘텐츠"
        this.$axios.get('/test-data/relate.json')
          .then(res => {
            this.subItems = res.data.items
          })
          .catch(err => {
            console.error(err)
          })
      },
    },
  }
</script>
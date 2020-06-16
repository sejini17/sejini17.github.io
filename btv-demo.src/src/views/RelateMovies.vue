<template>
      <v-container 
        pa-0 ma-0
      >
        <!-- first result list -->
        <movie-list2 :pageSize="pageSize" :items="items" :header="header1" viewMode="1"
          @selected="searchRelate"
        />
        <!-- second result list -->
        <movie-list2 :pageSize="pageSize" :items="subItems" :header="header2"
        />
      </v-container>
</template>


<script>
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getRandomItem(arr, size) {
    //deep copy
    arr = JSON.parse(JSON.stringify( arr ))
    
    let result = []
    for (var i = 0; i < size; i++) {
      let randIdx = getRandomInt(0, arr.length-1)
      result.push(arr[randIdx])
      arr.splice(randIdx, 1)
    }
    return result
  }

  let randomSize = 33

  // @ is an alias to /src
  import MovieList2 from '@/components/MovieList2';

  export default {
    name: 'RelateMovie',
    props: {
      searchText: String,
    },
    components: {
      MovieList2
    },
    data: () => ({
      pageSize: 10,

      items: [],
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
        this.header1 = "Top Pick"
        this.header2 = "Random Pick " + randomSize

        //top100 list
        this.$axios.get('/test-data/top100.json')
          .then(res => {
            this.items = res.data

            this.subItems = getRandomItem(this.items, randomSize)
          })
        
        //random list
        // this.$axios.get('/test-data/top100.json')
        //   .then(res => {
        //     this.subItems = getRandomItem(res.data, randomSize)
        //   })
      },

      searchKeyword(searchText) {
        if (!searchText) {
          this.resetSearch()
          return
        }

        this.$axios.get('/test-data/search_result.json')
          .then(res => {
            this.items = res.data.items
            this.subItems = null

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
        // this.$axios.post('http://localhost:8857/vod/btv/api/v1.0/sim_contents')
        this.$axios.get('https://sejini17.github.io/test-data/test_result.json')
          .then(res => {
            this.subItems = res.data.response.sim_contents
          })
          .catch(err => {
            console.error(err)
          })
      },
    },
  }
</script>
<template>
      <v-container 
        pa-0 ma-0
      >
        <v-layout column>
          <v-flex >
            <!-- first result list -->
            <movie-list2 :items="topItems" :header="headerTop"
              @selected="searchRelate"
            />
            <!-- second result list -->
            <movie-list2 :items="randItems" :header="headerRand"
              @selected="searchRelate"
            />
            
            <!-- 연관 영화 목록
             -->
            <movie-grid  v-if="relateItems.length"
              :items="relateItems" :header="headerReleate"
            />
          </v-flex>
        </v-layout>
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

  let randomSize = 10

  // @ is an alias to /src
  import MovieList2 from '@/components/MovieList2';
  import MovieGrid from '@/components/MovieGrid';

  export default {
    name: 'RelateMovie',
    props: {
      searchText: String,
    },
    components: {
      MovieList2,
      MovieGrid
    },
    data: () => ({
      topItems: [],
      randItems: [],
      relateItems: [],

      headerTop: "Top Pick",
      headerRand: "Random Pick",
      headerReleate: "유사 영화 콘텐츠"
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
        //top100 list
        this.$axios.get('/test-data/top100.json')
          .then(res => {
            this.topItems = res.data
            //random list
            this.randItems = getRandomItem(this.topItems, randomSize)
          })
        this.relateItems = []
      },

      searchKeyword(searchText) {
        if (!searchText) {
          this.resetSearch()
          return
        }

        this.$axios.get('/test-data/search_result.json')
          .then(res => {
            this.topItems = res.data.items
            this.relateItems = []

            this.headerTop = "검색 결과"
          })
          .catch(err => {
            console.error(err)
          })
      },

      searchRelate(item) {
        // this.$refs.secList.reset()

// console.log(item)
        let size = 12 * 10
        this.$axios.post(
          // 'http://localhost:8857'+
          // 'http://172.27.98.159:8857'+
          '/vod/btv/api/v1.0/sim_content', 
          {
            "s_id" : item.series_id,
            "topn" : size
          }
        )
        // this.$axios.get('https://sejini17.github.io/test-data/test_result.json')

          .then(res => {
            this.relateItems = res.data.response.sim_contents.sort(
              (a, b) => a.dist - b.dist // 오름차순
            );
          })
          .catch(err => {
            console.error(err)
          })
      },
    },
  }
</script>
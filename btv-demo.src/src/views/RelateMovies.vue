<template>
      <v-container pa-0 ma-0
      >
        <v-row>
          <v-col>
            <!-- first result list -->
            <movie-list2 :items="topItems" :header="headerTop" ref="topList"
              @selected="searchRelate"
            />
            
            <!-- second result list -->
            <movie-list2 :items="randItems" :header="headerRand" ref="secList"
              @selected="searchRelate"
            />
            
            <!-- 연관 영화 목록
             -->
            <movie-grid  v-if="relateItems.length"
              :items="relateItems" :header="headerReleate"
            />
          </v-col>
        </v-row>
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
  let realateSize = 12 * 5  //grid로 표현되므로 12의 배수가 적당

  // @ is an alias to /src
  import MovieList2 from '@/components/MovieList2';
  import MovieGrid from '@/components/MovieGrid';

  export default {
    name: 'RelateMovie',
    components: {
      MovieList2,
      MovieGrid
    },

    props: {
      searchText: String,
    },
    data: () => ({
      topItems: [],
      randItems: [],
      relateItems: [],

      headerTop: '',
      headerRand: '',
      headerReleate: ''
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

        this.headerTop = 'Top Pick'
        this.headerRand = 'Random Pick'
        this.headerReleate = '유사 영화 콘텐츠'
      },

      searchKeyword(searchText) {
        this.$refs.topList.reset()
        this.$refs.secList.reset()

        if (!searchText) {
          this.resetSearch()
          return
        }

        this.$axios.post(
          '/vod/btv/api/v1.0/meta-text-search', 
          {
            'query' : searchText,
            'topn' : realateSize
          }
        )
        // this.$axios.get('/test-data/search_result.json')
          .then(res => {
            this.topItems = res.data.response.documents
            this.headerTop = '검색 결과'
          })
          .catch(err => {
            console.error(err)
          })
      },

      searchRelate(item) {

// console.log(item)

        this.$axios.post(
          // 'http://localhost:8857'+
          // 'http://172.27.98.159:8857'+
          '/vod/btv/api/v1.0/sim_content', 
          {
            's_id' : item.series_id,
            'topn' : realateSize
          }
        )
        
        // this.$axios.get('https://sejini17.github.io/test-data/test_result.json')

          .then(res => {
            this.relateItems = res.data.response.sim_contents
            // .sort( //정렬순서는 서버에서 하는걸로. 2020-0619
            //   (a, b) => a.dist - b.dist // 오름차순
            // );
            this.headerReleate = '유사 영화 콘텐츠'
          })
          .catch(err => {
            console.error(err)
          })
      },
    },
  }
</script>
<template>
  <v-container pa-0 ma-0
  >
    <v-layout >
      <v-flex >
        <!-- first result list -->
        <movie-list ref="topList"
          :items="topItems" :header="headerTop" 
          @selected="searchRelate"
          @reqRefresh="refreshRand" @reqReInit="resetSearch"
        />
        
        <!-- 연관 영화 목록 -->
        <movie-grid  v-if="selectedPickItem"
          :pickItem="selectedPickItem" :itemSize="relateSize"
          @searchThis="searchKeyword"
        />

        <BtnScrollToTop />

        <v-snackbar
          v-model="snackBar"
          top
          color="error"
          :timeout="3000"
        >
          {{errMsg}}
          <template v-slot:action="{ attrs }">
            <v-btn
              dark
              text
              v-bind="attrs"
              @click="snackBar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>

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
    let randSize = !size || size > arr.length ? arr.length: size
    for (var i = 0; i < randSize; i++) {
      let randIdx = getRandomInt(0, arr.length-1)
      result.push(arr[randIdx])
      arr.splice(randIdx, 1)
    }
    return result
  }
  function filterCatchon(arr) {
    return arr instanceof Array ? 
      arr.filter(item => {
        if (item.catchon_flag == '99') 
          console.debug("item.catchon_flag == '99' : ", item.series_id)
        return item.catchon_flag != '99'
      })
      : []
  }

  // @ is an alias to /src
  import MovieList from '@/components/MovieList';
  import MovieGrid from '@/components/MovieGrid';

  export default {
    name: 'RelateMovie',
    components: {
      MovieList,
      MovieGrid,
    },

    props: {
    },
    data: () => ({
      topItems: [],
      headerTop: '',

      selectedPickItem: null,
      relateSize: 12 * 5,  //grid로 표현되므로 12의 배수가 적당

      snackBar: false,
      errMsg: ''
    }),
    computed: {
      // topList() {
      //   return this.$store.state.top100
      // }
    },

    created () {
      this.$eventBus.$on('searchKeyword', 
        (value) => this.searchKeyword(value)
      )
    },
    mounted() {
      this.resetSearch()
    },
    methods: {
      resetSearch() {
        //top100 list
        this.$axios.get('/test-data/top100.json')
          .then(res => {
            this.topItems = filterCatchon(res.data)
          })

        this.headerTop = 'Top Pick'
      },
      refreshRand() {
        this.topItems = getRandomItem(this.topItems)
      },

      searchKeyword(searchText) {
        if (!searchText) {
          this.resetSearch()
          return
        }

        this.$axios.post(
          '/vod/btv/api/v1.0/meta-text-search', 
          {
            'query' : searchText,
            'topn' : this.relateSize
          }
        )
          .then(res => {
            let result = filterCatchon(res.data.response.documents)

            if (!result || result.length < 1){
              this.errMsg = `'${searchText}'의 검색 결과가 없어요.`
              this.snackBar = true
              return
            }
            
            if (this.$refs.topList)
              this.$refs.topList.reset()
            this.headerTop = `'${searchText}'의 검색 결과`
            this.topItems = result
            this.$vuetify.goTo(0)
          })
          .catch(err => {
            console.error(err)
          })
      },

      searchRelate(item) {
        //MovieGrid로 표시
        this.selectedPickItem = item
      },
    },
  }
</script>
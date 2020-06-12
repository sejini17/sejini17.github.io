<template>
  <v-app id="inspire">
    <!-- app-bar -------------------------------------------------------->
    <v-app-bar
      app
      color="#595959"
      dark
    >
      <i class="ico btv_icon" ></i>
      
      <v-toolbar-title class="pr-4">Btv Recommendation Demo</v-toolbar-title>

      <v-btn text >
        유사 영화 검색
      </v-btn>
      <v-btn text >
        테마 큐레이션
      </v-btn>

      <v-spacer></v-spacer>

      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template> -->

      <v-row
        align="center"
        style="max-width: 650px"
      >
      </v-row>

        <v-switch v-model="$vuetify.theme.dark" label="Dark theme"
          ></v-switch>
          
    </v-app-bar>

    <!-- content -------------------------------------------------------->
    <v-content class="pa-0">
      <v-container
        class="fill-height"
        fluid
        pa-0 ma-0
        justify-center
      >

        <!-- 검색창 -->
        <v-img
            src="../assets/search_bg.jpg"
            height="300"
            >
<v-layout column fill-height>
  <v-flex xs12 fill-height>
      <v-layout align-center justify-center row fill-height>
              <v-card
                color="gray"
                class=""
                width="600"
              >
                <v-text-field v-model="searchText" @keyup.enter="searchKeyword"
                  :append-icon-cb="() => {}"
                  placeholder="SEARCH"
                  single-line
                  append-icon="mdi-magnify"
                  color="white"
                  hide-details
                  outlined
                  filled
                  dense
                ></v-text-field>
              </v-card>
              
              <v-card
                color="red"
                class=""
              >
                <v-btn text color="black"
                  @click="searchKeyword"
                >SEARCH</v-btn>
              </v-card>
      </v-layout>
  </v-flex>
</v-layout>

        </v-img>


        <!-- first result list -->
        <movie-list :pageSize="pageSize" :items="items" :header="header1" 
          @selected="searchRelate"
        />

        <!-- second result list -->
        <movie-list :pageSize="pageSize" :items="subItems" :header="header2"
        />

      </v-container>
    </v-content>

    <!-- footer -------------------------------------------------------->
    <v-footer
      color="#595959"
      app
    >
      <span class="white--text">&copy; 2020 SKT</span>
    </v-footer>
  </v-app>
</template>

<script>
  import MovieList from './MovieList';

  export default {
    props: {
      source: String,
    },
    components: {
      MovieList
    },
    data: () => ({
      searchText:"",
      // search_bg: require('@/assets/search_bg.jpg'),
      pageSize: 10,
      selectedItem: null,

      items: [
      ],
      subItems: [],

      header1: "",
      header2: ""
    }),
    created () {
      this.$vuetify.theme.dark = true
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

      searchKeyword() {
        // alert(this.searchText)
        if (!this.searchText) {
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

<style scoped>
.ico {
    display: inline-block;
    overflow: hidden;
    box-sizing: border-box;
    vertical-align: top;
}
.ico.btv_icon {
    background: url(../assets/btv_icon.png) no-repeat left top;
    background-color: #595959;
    background-size: 100%;
    width: 32px;
    height: 32px;
    margin-right: 16px !important;
    margin-left: 16px !important;
}
</style>
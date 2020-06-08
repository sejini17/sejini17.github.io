<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-icon class="mx-4" large >
        mdi-youtube
      </v-icon>
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
<!-- 
        <v-switch v-model="$vuetify.theme.dark" label="Dark theme"
          ></v-switch>
           -->
    </v-app-bar>

    <v-content class="pa-0">
      <v-container
        class="fill-height"
        fluid
      >
        <v-img
            src="../assets/search_bg.jpg"
            height="200"
            >
          <!-- <v-row
            height="300"
            align="center"
          >
            <v-form
              ref="form"
            >
            </v-form>
          </v-row> -->
<v-layout column>
  <v-flex xs12>
      <v-layout align-center justify-center row fill-height>
              <v-card
                color="gray"
                class="ml-10 mt-10"
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
                class="mr-10 mt-10"
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
        <movie-list :pageSize="pageSize" :items="items" :header="header1" @selected="searchRelate"/>

        <!-- second result list -->
        <movie-list :pageSize="pageSize" :items="subItems" :header="header2"/>

      </v-container>
    </v-content>

    <v-footer
      color="indigo"
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
        // { id: 'F_00004', src: 'http://file.koreafilm.or.kr/thm/02/00/02/13/tn_DPF004341.JPG'},
        // { id: 'F_00008', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017211.jpg'},
        // { id: 'F_00017', src: 'http://file.koreafilm.or.kr/thm/02/00/05/05/tn_DPF017259.jpg'},
        // { id: 'F_00021', src: 'http://file.koreafilm.or.kr/thm/02/00/04/95/tn_DPF016393.jpg'},
        // { id: 'F_00025', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011865.jpg'},
        
        // { id: 'F_00028', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017213.jpg'},
        // { id: 'F_00066', src: 'http://file.koreafilm.or.kr/thm/03/00/17/77/tn_LF3000002.jpg'},
        // { id: 'F_00074', src: 'http://file.koreafilm.or.kr/thm/02/00/04/98/tn_DPF016647.jpg'},
        // { id: 'F_00081', src: 'http://file.koreafilm.or.kr/thm/02/00/04/89/tn_DPF015784.jpg'},
        // { id: 'F_00085', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017141.jpg'},

        // { id: 'F_00097', src: 'http://file.koreafilm.or.kr/thm/02/00/05/05/tn_DPF017241.jpg'},
        // { id: 'F_00105', src: 'http://file.koreafilm.or.kr/thm/02/00/05/02/tn_DPF017005.jpg'},
        // { id: 'F_00137', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011888.jpg'},
        // { id: 'F_00149', src: 'http://file.koreafilm.or.kr/thm/02/00/04/29/tn_DPF012857.jpg'},
        // { id: 'F_00157', src: 'http://file.koreafilm.or.kr/thm/02/00/04/17/tn_DPF012242.jpg'},

        // { id: 'F_00181', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011881.jpg'},
        // { id: 'F_00187', src: 'http://file.koreafilm.or.kr/thm/02/00/04/91/tn_DPF015997.jpg'},
        // { id: 'F_00189', src: 'http://file.koreafilm.or.kr/thm/02/00/04/96/tn_DPF016465.jpg'},
        // { id: 'F_00200', src: 'http://file.koreafilm.or.kr/thm/02/00/01/55/tn_DPF002487.JPG'},
        // { id: 'F_00215', src: 'http://file.koreafilm.or.kr/thm/02/00/04/94/tn_DPF016301.jpg'},
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
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

      <v-btn text to="/">
        유사 영화 검색
      </v-btn>
      <v-btn text to="/theme">
        테마 큐레이션
      </v-btn>
<!--       
      <v-btn text to="/relate">
        유사 영화 검색
      </v-btn> 
-->
      <v-spacer></v-spacer>
<!--       
        <v-switch v-model="$vuetify.theme.dark" label="Dark theme" />
           -->
    </v-app-bar>

    <!-- content -------------------------------------------------------->
    <v-main class="pa-0 ma-0">
      <v-container
      fill-height
        fluid
        pa-0 ma-0
        justify-center
        align-content-start
      >

        <!-- 검색창 -->
        <v-img
            src="@/assets/search_bg.jpg"
            height="150"
            >
          <v-layout column fill-height>
            <v-flex fill-height>
              <v-layout align-center justify-center row fill-height>
                <v-card
                  color="gray"
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
                >
                  <v-btn text color="black"
                    @click="searchKeyword"
                  >SEARCH</v-btn>
                </v-card>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-img>

        <router-view/> 

      </v-container>
    </v-main>

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
  export default {
    props: {
    },
    components: {
    },
    data: () => ({
      searchText:"",

    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    mounted() {
    },
    methods: {
      resetValidation () {
        this.$refs.form.resetValidation()
      },

      resetSearch() {
        console.log("resetSearch")
        this.$eventBus.$emit('searchKeyword')
      },

      searchKeyword() {
        if (!this.searchText) {
          this.resetSearch()
          return
        }
        console.log("searchKeyword : " + this.searchText)
        this.$eventBus.$emit('searchKeyword', this.searchText)
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
    background: url(../assets/btv_logo.png) no-repeat left top;
    background-color: #595959;
    background-size: 100%;
    width: 32px;
    height: 32px;
    margin-right: 16px !important;
    margin-left: 16px !important;
}
</style>
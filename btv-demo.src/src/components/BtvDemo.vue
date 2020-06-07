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
        <v-switch v-model="$vuetify.theme.dark" label="Dark theme"
          ></v-switch>
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
          <v-row
            height="300"
            align="center"
          >
            <v-form
              ref="form"
            >
            </v-form>
          </v-row>


            <v-card
              color="gray"
              class="ma-10"
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
              ></v-text-field>
            </v-card>
        </v-img>





        <v-row>
          <v-col>

            <v-subheader >Top Pick</v-subheader>
            <v-flex>
              <v-carousel
                height="300"
                style="box-shadow: 0px 0px"
                >
                <v-carousel-item v-for="i in Math.floor(items.length/pageSize)+1" :key="i" >

                  <v-layout row >
                    <v-flex v-for="item in items.slice((i-1)*pageSize, (i-1)*pageSize+pageSize)" :key="item.src" pl-2 pr-2 >

                      <v-card
                        class="mx-auto"
                        max-width="100"
                        max-height="100"
                      >
                        <v-img
                          class="white--text align-end"
                          :src="item.src"
                          @click="searchRelate(item)"
                        >
                        </v-img>
                      </v-card>

                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-col>

        </v-row>

          <v-row v-if="selectedItem">
            <v-card
              class="mx-auto"
            >
              <v-card-title>{{ selectedItem.id }}</v-card-title>
              <v-card-subtitle class="pb-0">{{ selectedItem.src }}</v-card-subtitle>
            </v-card>
          </v-row>

        <v-subheader >Random Pick</v-subheader>
        <v-row
        >
          <v-col
            v-for="item in items"
            :key="item.src"
            cols="2"
          >

            <v-card
              class="mx-auto"
              max-width="300"
            >
              <v-img
                class="white--text align-end"
                :src="item.src"
              >
              </v-img>

              <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->
              <!-- <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text class="text--primary">
                <div>{{item.src}}</div>
              </v-card-text> -->

              <v-card-actions>
                <v-btn color="orange" text >
                  상세보기
                </v-btn>
                <v-btn color="orange" text >
                  관련영화
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>


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
  export default {
    props: {
      source: String,
    },
    data: () => ({
      searchText:"",
      // search_bg: require('@/assets/search_bg.jpg'),
      pageSize: 10,
      selectedItem: null,
      items: [
        { id: 'F_00004', src: 'http://file.koreafilm.or.kr/thm/02/00/02/13/tn_DPF004341.JPG'},
        { id: 'F_00008', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017211.jpg'},
        { id: 'F_00017', src: 'http://file.koreafilm.or.kr/thm/02/00/05/05/tn_DPF017259.jpg'},
        { id: 'F_00021', src: 'http://file.koreafilm.or.kr/thm/02/00/04/95/tn_DPF016393.jpg'},
        { id: 'F_00025', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011865.jpg'},
        { id: 'F_00028', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017213.jpg'},
        { id: 'F_00066', src: 'http://file.koreafilm.or.kr/thm/03/00/17/77/tn_LF3000002.jpg'},
        { id: 'F_00074', src: 'http://file.koreafilm.or.kr/thm/02/00/04/98/tn_DPF016647.jpg'},
        { id: 'F_00081', src: 'http://file.koreafilm.or.kr/thm/02/00/04/89/tn_DPF015784.jpg'},
        { id: 'F_00085', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017141.jpg'},
        { id: 'F_00097', src: 'http://file.koreafilm.or.kr/thm/02/00/05/05/tn_DPF017241.jpg'},
        { id: 'F_00105', src: 'http://file.koreafilm.or.kr/thm/02/00/05/02/tn_DPF017005.jpg'},
        { id: 'F_00137', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011888.jpg'},
        { id: 'F_00149', src: 'http://file.koreafilm.or.kr/thm/02/00/04/29/tn_DPF012857.jpg'},
        { id: 'F_00157', src: 'http://file.koreafilm.or.kr/thm/02/00/04/17/tn_DPF012242.jpg'},
        // { id: 'F_00181', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011881.jpg'},
        // { id: 'F_00187', src: 'http://file.koreafilm.or.kr/thm/02/00/04/91/tn_DPF015997.jpg'},
        // { id: 'F_00189', src: 'http://file.koreafilm.or.kr/thm/02/00/04/96/tn_DPF016465.jpg'},
        // { id: 'F_00200', src: 'http://file.koreafilm.or.kr/thm/02/00/01/55/tn_DPF002487.JPG'},
        // { id: 'F_00215', src: 'http://file.koreafilm.or.kr/thm/02/00/04/94/tn_DPF016301.jpg'},
      ],
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
      searchRelate(item) {
        this.selectedItem = item
        if (!this.selectedItem)
          return
        console.log("searchRelate" + item.id)

        this.selectedItem = {
          id: item.id,
          src: item.src
        }
      },
      searchKeyword() {
        alert(this.searchText)
      }
    },
  }
</script>
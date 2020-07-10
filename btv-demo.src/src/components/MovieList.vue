<template>
  <v-container pa-0 ma-0>
        
    <v-row no-gutters dense>
      <v-col>
        <v-subheader class="ma-0 pa-0">
          <v-icon class="mr-1" v-if="!(theme)">mdi-movie-search</v-icon>
          {{ header }} 
          <template v-if="theme">
            <div class="ml-1 kwd"
              v-for="kwd in theme.split(',').map(kwd => kwd.trim())"
              :key="kwd"
            >#{{kwd}}
            </div>
          </template>
        <v-spacer />
          <v-btn-toggle class="ml-2"
            v-model="isShuffle"
            borderless
            mandatory
            dense
          >
            <v-btn value="false"
              @click="shuffle()"
            >
              <span class="hidden-sm-and-down">Ordered</span>
              <v-icon right>mdi-shuffle-disabled</v-icon>
            </v-btn>

            <v-btn value="true"
              @click="shuffle(true)"
            >
              <span class="hidden-sm-and-down">Shuffle</span>
              <v-icon right>mdi-shuffle</v-icon>
            </v-btn>
          </v-btn-toggle>
<!--         
        <v-btn color="orange" icon  >
          <v-icon>mdi-cached</v-icon>
        </v-btn> 
-->
        </v-subheader>

        <v-row no-gutters dense>
          <v-col>
            <v-sheet 
            >
              <!-- slide ---------------------------------------------------------
              <MovieSlide ref="slide"
                :items="items"
                :showArrows="showArrows"
                @selected="showDetail"
              />
              -->
              <v-slide-group v-show="items"
                v-model="slideModel"
                class="pa-4" 
                center-active
                :show-arrows="showArrows"
              >
                <v-slide-item
                  v-for="item in items"
                  :key="item.series_id" 
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    :color="active ? 'primary' : 'black'"
                    @click="toggle"
                    height="156"
                    width="115"
                    class="ma-4 pa-1"

                    ripple
                    align-center justify-center
                  >
                    <v-img
                      :src="item.img ? item.img : urlImg + item.thumbnail"
                      @click="showDetail(item)"
                    >
                      <!-- 이미지가 표시되지 않으면 계속 돌고있어서 CPU를 사용하는 문제가 있음
                        <template v-slot:placeholder>
                        
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template> -->
                    </v-img>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
            
          </v-col>
        </v-row>
        <v-row v-if="slideModel != null && selectedItem"
          dense>
          <v-col>

            <v-card ma-0 pa-0>
              <v-expansion-panels>
                <v-expansion-panel
                >
                  <v-expansion-panel-header>상세정보 : {{selectedItem.title_display}}
                  </v-expansion-panel-header>
                  
                  <v-expansion-panel-content>
                    <MovieDetail :item="selectedItem" 
                    />
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import apiBtv from '@/api/vod-btv-api'
  import MovieDetail from '@/components/MovieDetail';

  export default {
    name: 'MovieList',
    components: {
      MovieDetail,
    },

    props: {
      'header' : String,
      'showArrows': {
        default: 'mobile'
      },

      'items' : Array,
      'theme' : String,
    },
    data: () => ({
      isShuffle: false,

      selectedItem: null,

      slideModel: null,
      urlImg: 'http://stimage.hanafostv.com:8080/thumbnails/iip/115_156',
    }),

    methods: {
      async showDetail(item) {
        if (!item) {
          this.selectedItem = null
          return
        }
        //api에서 상세정보 가져오기 추가처리
        this.selectedItem = await apiBtv.getMetaById(item.series_id)

        this.$emit('selected', item)
      },

      resetSelection() {
        this.slideModel = null
        this.selectedItem = null
      },
      reset() {
        this.resetSelection()
        this.isShuffle = false
      },
      shuffle(isShuffle) {
        this.resetSelection()
        if (this.theme)
          this.$store.dispatch('refreshTheme', {theme: this.theme, isShuffle})
        else
          this.$emit(isShuffle ? 'reqShuffle' : 'reqOrdered')
      },
    },
  }
</script>

<style scoped>
.kwd {
  color: cornflowerblue;
}
</style>
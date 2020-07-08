<template>
  <v-container pa-0 ma-0>
        
    <v-row no-gutters dense>
      <v-col>
        <v-subheader >
          <v-icon class="mr-1">mdi-movie-search</v-icon>
          {{ header }}

          <v-btn-toggle class="ml-2"
            v-model="isShuffle"
            borderless
            mandatory
            dense
          >
            <v-btn value="false"
              @click="reInit()"
            >
              <span class="hidden-sm-and-down">Ordered</span>
              <v-icon right>mdi-shuffle-disabled</v-icon>
            </v-btn>

            <v-btn value="true"
              @click="refresh()"
            >
              <span class="hidden-sm-and-down">Shuffle</span>
              <v-icon right>mdi-shuffle</v-icon>
            </v-btn>
          </v-btn-toggle>
<!--
          <v-btn color="green" icon @click="refresh()" v-if="refreshable" >
            <v-icon>mdi-cached</v-icon>
          </v-btn> 
-->
        </v-subheader>

        <v-row no-gutters dense>
          <v-col>
            <v-sheet 
            >
              <!-- slide ----------------------------------------------------------->
              <v-slide-group v-if="items"
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
                <v-expansion-panel-header>상세정보 : {{selectedItem.title_display}}</v-expansion-panel-header>
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
      MovieDetail
    },

    props: {
      'header' : String,
      'items' : {
        required: true
      },

      'showArrows': {
        default: 'mobile'
      },
    },
    data: () => ({
      selectedItem: null,

      urlImg: 'http://stimage.hanafostv.com:8080/thumbnails/iip/115_156',
      slideModel: null,

      isShuffle: false
    }),

    computed: { 
    },
    watch: { 
    },

    created () { 
    },
    mounted() { },

    methods: {
      async showDetail(item) {
        console.log('selected : ', item)

        if (!item) return

        // this.selectedItem = item
        //api에서 상세정보 가져오기 추가처리
        this.selectedItem = await apiBtv.getMetaById(item.series_id)

        this.$emit('selected', item)
      },

      reset() {
        this.slideModel = null
        this.selectedItem = null
        this.isShuffle = false
      },
      refresh() {
        this.slideModel = null
        this.selectedItem = null
        this.$emit('reqRefresh')
      },
      reInit() {
        this.slideModel = null
        this.selectedItem = null
        this.$emit('reqReInit')
      }
    },
  }
</script>
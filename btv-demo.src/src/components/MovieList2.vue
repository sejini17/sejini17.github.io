<template>
  <v-container pa-0 ma-0>
        
    <v-row no-gutters dense>
      <v-col>

        <v-subheader >
          {{ header }}
          <v-btn color="green" icon @click="refresh()" v-if="refreshable" >
            <v-icon>mdi-cached</v-icon>
          </v-btn> 
        </v-subheader>
<!--         
        <v-btn color="orange" icon  >
          <v-icon>mdi-cached</v-icon>
        </v-btn> 
            <v-sheet :max-width="selectedItem ? 900 : ''"
-->
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
                    :raised="!item.blur"
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
<!--             
            <v-card
              height="156"
              width="115"
              class="ma-4"

              align-center justify-center
            >
            </v-card> 
            -->

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
<!-- 

              <v-toolbar >
                <v-toolbar-title>{{selectedItem.title_display}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn color="orange" icon @click="unselect()" >
                  <v-icon>mdi-close</v-icon>
                </v-btn> 
              </v-toolbar>
              <v-card-text>
                <MovieDetail :item="selectedItem" 
                />
              </v-card-text>

              <v-img
                height="156"
                width="115"
                class="ma-4"
                :src="selectedItem.img ? selectedItem.img : urlImg + selectedItem.thumbnail"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template> 
              </v-img> 
-->
              
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import MovieDetail from '@/components/MovieDetail';

  export default {
    name: 'MovieList2',
    components: {
      MovieDetail
    },

    props: {
      'header' : String,
      'items' : {
        required: true
      },

      'refreshable' : Boolean,

      'showArrows': {
        type: Boolean,
        default: true
      },
    },
    data: () => ({
      selectedItem: null,

      urlImg: 'http://stimage.hanafostv.com:8080/thumbnails/iip/115_156',
      slideModel: null
    }),

    computed: { },
    created () { },
    mounted() { },

    methods: {
      reset() {
        this.slideModel = null
        this.selectedItem = null
      },
      showDetail(item) {
        console.log('selected : ')
        console.log(item)

        if (!item) return

        this.selectedItem = item

        this.$emit('selected', item)
      },
      unselect() {
        this.selectedItem = null
      },
      refresh() {
        this.reset()
        this.slideModel = null
        this.$emit('reqRefresh')
      }
    },
  }
</script>
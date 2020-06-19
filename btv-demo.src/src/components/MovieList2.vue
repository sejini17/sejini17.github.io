<template>
  <v-container pa-0 ma-0>
        
    <v-row>
      <v-col>

        <v-subheader >{{ header }}</v-subheader>
<!--         
        <v-btn color="orange" icon  >
          <v-icon>mdi-cached</v-icon>
        </v-btn> 
-->
        <v-row>
          <v-col>
            <v-sheet :max-width="selectedItem ? 600 : ''"
            >
              <!-- slide ----------------------------------------------------------->
              <v-slide-group v-if="items"
                v-model="slideModel"
                class="pa-4" 
                center-active
                show-arrows
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
                    class="ma-4"

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
          <v-col v-if="selectedItem">
            <v-card>
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

    // props: {
    //   pageSize: Number,
    // },
    props: [
      'header',
      'items',

      'viewMode',
    ],
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
        this.slideModel = 0
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
      }

    },
  }
</script>
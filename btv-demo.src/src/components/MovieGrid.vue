<template>
  <v-container pa-0 ma-0>
        
    <!-- slide ----------------------------------------------------------->
    <v-row>
      <v-col>

        <v-subheader class="ma-0 pa-0">
          <v-icon class="mr-1">mdi-thumb-up</v-icon>
          추천 영화 콘텐츠

        <v-spacer />
          <v-btn-toggle class="ml-2"
            v-model="isShuffle"
            borderless
            mandatory
            dense
          >
            <v-btn value="N"
              @click="searchSimContent('N')"
            >
              <span class="hidden-sm-and-down">Ordered</span>
              <v-icon right>mdi-shuffle-disabled</v-icon>
            </v-btn>

            <v-btn value="Y"
              @click="searchSimContent('Y')"
            >
              <span class="hidden-sm-and-down">Shuffle</span>
              <v-icon right>mdi-shuffle</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-subheader>

        <v-sheet 
          class="mx-auto"
        >
          <v-container fluid
            pa-0 ma-0
          >
            <v-row>
                <v-col
                    class="d-flex child-flex"
                    xs-12 md-4 xl-2

                    v-for="(item, i) in items"
                    :key="item.series_id + i" 
                >
<!-- 
  height="156"
  :aspect-ratio="115/156"
  ripple
-->
<v-card
  max-width="115"
  class="ms-4 "
  flat tile
  ripple
  >
  
  <v-container 
    pa-0 ma-0
    justify-start align-start
  >
    <v-img
      :src="item.img ? item.img : urlImg + item.thumbnail"
      @click="showDetail(item)"

      width="115"
      height="156"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <!-- 아래꺼랑 바꿀수도 있음
          <v-skeleton-loader
              type="card"
              class="mx-auto"
              width="115"
              height="156"
            ></v-skeleton-loader>
          -->
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular> 
          {{item.title}}
        </v-row>
      </template>
      
      <v-layout fill-height
        justify-end align-end
      >
        <v-fab-transition>
          <v-btn class="v-btn-search"
            fab small
            right bottom
            @click.stop="searchThis(item.title)"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-layout>

    </v-img>
  </v-container>

  <v-card-text v-if="item.rep_kwd && item.rep_kwd.length > 0"
              class="pa-0 ma-0"
  >
      <v-chip v-for="(tag, i) in item.rep_kwd" :key="tag+i"
              class="pa-1 mt-1 mr-1"
              @click.stop="searchThis(tag)"
      >{{tag}}
      </v-chip>
  </v-card-text> 

  <transition>
  </transition>
<!-- 
  <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> 
  <v-card-title>{{ item.title }}</v-card-title>

  <v-card-text class="text--primary">
      <div>{{item.src}}</div>
  </v-card-text> 

  <v-card-actions>
      <v-btn color="orange" text >
      상세보기
      </v-btn>
      <v-btn color="orange" text >
      관련영화
      </v-btn>
  </v-card-actions>
-->
</v-card>
                </v-col>
            </v-row>
          </v-container>
        </v-sheet>

      </v-col>
    </v-row>

    <!-- 선택된 항목 상세정보 dialog ------------------------------------------->
    <v-dialog
      v-model="showDialog"
      width="500"
    >

      <v-card v-if="selectedItem">
        <v-card-title
          class="headline grey"
          primary-title
        >
          {{selectedItem.title_display}}
        </v-card-title>

        <v-card-text>
            <MovieDetail :item="selectedItem"
            />
          <v-list disabled>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="showDialog = false"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  function filterCatchon(arr) {
    return arr instanceof Array ? 
      arr.filter(item => {
        if (item.catchon_flag == '99') 
          console.debug("item.catchon_flag == '99' : ", item.series_id)
        return item.catchon_flag != '99'
      })
      : []
  }


  import apiBtv from '@/api/vod-btv-api'
  import MovieDetail from '@/components/MovieDetail';

  export default {
    name: 'MovieGrid',
    components: {
      MovieDetail
    },

    props: [
      'pickItem',
      'itemSize',
    ],
    data: () => ({
      items: null,
      selectedItem: null,
      showDialog: false,

      urlImg: 'http://stimage.hanafostv.com:8080/thumbnails/iip/115_156',
      isShuffle: false
    }),

    computed: { },
    watch: { 
      pickItem: function() {
        this.searchSimContent()
      },
    },
    created () { },
    mounted() { 
      this.searchSimContent()
    },

    methods: {
      reset() {
        this.selectedItem = null
      },

      searchSimContent(shuffle) {
        if (shuffle) {
          if (this.isShuffle == shuffle && shuffle == 'N')
            return
          this.isShuffle = shuffle
        }

        console.log("this.isShuffle", this.isShuffle)
        this.items = []

        this.$axios.post(
          '/vod/btv/api/v1.0/sim_content', 
          {
            's_id': this.pickItem.series_id,
            'topn': this.itemSize,
            'rand': this.isShuffle == 'Y'
          }
        )
          .then(res => {
            this.items = filterCatchon(res.data.response.sim_contents)
            // .sort( //정렬순서는 서버에서 하는걸로. 2020-0619
            //   (a, b) => a.dist - b.dist // 오름차순
            // );
          })
          .catch(err => {
            console.error(err)
          })
      },

      async showDetail(item) {
        this.reset()

        this.selectedItem = await apiBtv.getMetaById(item.series_id)
        if (!this.selectedItem)
            return
        console.log('showDetail : ', item.series_id)

        this.showDialog = true
        this.$emit('selected', item)
      },

      searchThis(selected) {
        console.log('searchThis : ', selected)
        this.$eventBus.$emit('searchKeyword', selected)
      }

    },
  }
</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #lateral .v-btn-search {
    bottom: 0;
    position: absolute;
    margin: 0 0 16px 16px;
  }
</style>
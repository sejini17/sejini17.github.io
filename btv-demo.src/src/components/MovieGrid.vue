<template>
  <v-container pa-0 ma-0>
        
    <!-- slide ----------------------------------------------------------->
    <v-row>
      <v-col>

        <v-subheader >{{ header }}</v-subheader>

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
                    align-center
                    justify-center

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
  class="ma-4 "

  align-center justify-center
  flat tile
  >
  
  <v-container 
    pa-0 ma-0
    justify-start align-start
  >
    <v-img
      :src="item.img ? item.img : urlImg + item.thumbnail"
      @click="showDetail(item)"

      max-width="115"
      max-height="156"
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
      
      <v-layout fill-height
        justify-end align-end
      >
        <v-fab-transition>
          <v-btn class="v-btn-search"
            fab small
            right bottom
            @click="searchThis(item)"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-layout>

    </v-img>
  </v-container>

  <v-card-text>
    {{item.kb_kmdb_keyword}} #tag1 #tag2
  </v-card-text> 
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
  import apiBtv from '@/api/vod-btv-api'
  import MovieDetail from '@/components/MovieDetail';

  export default {
    name: 'MovieGrid',
    components: {
      MovieDetail
    },

    props: [
      'header',
      'items',
    ],
    data: () => ({
      selectedItem: null,
      showDialog: false,

      urlImg: 'http://stimage.hanafostv.com:8080/thumbnails/iip/115_156',
    }),

    computed: { },
    watch: { },
    created () { },
    mounted() { },

    methods: {
      reset() {
        this.selectedItem = null
      },
      async showDetail(item) {
        this.reset()

        this.selectedItem = await apiBtv.getMetaById(item.series_id)
        if (!this.selectedItem)
            return
        console.log('showDetail : ', item.series_id)

        // this.highlightItem(item)
        this.showDialog = true
        this.$emit('selected', item)
      },

      highlightItem(selected) {
        for (let item of this.items) 
          item.blur = true

        selected.blur = false
      },

      searchThis(selected) {
        console.log('searchThis : ', selected)
        this.$emit('searchThis', selected.title)
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
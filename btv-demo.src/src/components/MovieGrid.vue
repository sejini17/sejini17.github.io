<template>
  <v-container pa-0 ma-0>
        
    <!-- slide ----------------------------------------------------------->
    <v-row>
      <v-col>

        <v-subheader >{{ header }}</v-subheader>

        <v-sheet 
          class="mx-auto"
        >
            <v-container fluid>
            <v-row>
                <v-col
                    class="d-flex child-flex"
                    xs-12 md-4 xl-2
                    align-start
                    justify-start

                    v-for="item in items"
                    :key="item.series_id" 
                >
                <!-- {{item.img ? item.img : urlImg + item.thumbnail}} 
    height="156"
    width="115"
                -->
<v-card
        :aspect-ratio="115/156"
        width="115"
        height="156"
    class="ma-4 "

    ripple
    align-center justify-center
    flat tile
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
    </v-img>

    <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->
    <!-- 
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
          {{selectedItem.title}}
        </v-card-title>

        <v-card-text>
          <v-list disabled>
            <v-subheader>상세정보</v-subheader>
            
            <v-list-item-group v-model="selectedItem">
              <v-list-item v-for="item in selectedItem.content" :key="item.name">

                <v-list-item-icon v-if="item.icon">
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title >{{item.name}}: </v-list-item-title>
                    {{Array.isArray(item.value) ? "" : item.value}}
                    <template v-if="Array.isArray(item.value)">
                      <v-chip v-for="(value, i) in item.value" :key="value+i"
                        label ma-2
                        text-color="white"
                      >{{value}}
                      </v-chip>
                    </template>
                </v-list-item-content>

              </v-list-item>
            </v-list-item-group>
            
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
  export default {
    name: "MovieGrid",
    // props: {
    //   pageSize: Number,
    // },
    props: [
      'header',
      'items',
    ],
    data: () => ({
      selectedItem: null,
      showDialog: false,

      urlImg: 'http://stimage.hanafostv.com:8080/thumbnails/iip/115_156',
    }),
    computed: {
    },

    created () {
    },
    mounted() {
    },
    methods: {
      reset() {
        this.selectedItem = null
      },
      showDetail(item) {
        this.selectedItem = {
          title : item.title_display ? item.title_display : item.title,
          content : 
            item.kb_id ? [
              { name : "영문제목", value : item.title_english },
              { name : "장르", value : item.sub_genre },
              { name : "kb_kmdb_genre", value : item.kb_kmdb_genre },
              { name : "국가", value : item.country },
              { name : "mood", value : item.mood },

              { name : "kb_distributors", value : item.kb_distributors },
              { name : "kb_producers", value : item.kb_producers },

              { name : "감독", value : item.director, icon : "mdi-account" },
              { name : "배우", value : item.actor, icon : "mdi-account" },
              
              { name : "synonyms", value : item.synonyms, icon : "mdi-tag" },
              { name : "kb_kmdb_keyword", value : item.kb_kmdb_keyword, icon : "mdi-tag" },
            ]
            : [
              { name : "장르", value : item.sub_genre },
              { name : "국가", value : item.country },
              { name : "release", value : item.release },

              { name : "배우", value : item.actor, icon : "mdi-account" },

              { name : "kmdb_kwd", value : item.kmdb_kwd, icon : "mdi-tag" },
            ]
        }
        if (!this.selectedItem)
          return
        console.log("showDetail : " + item.series_id)

        this.highlightItem(item)

        this.showDialog = true

        this.$emit('selected', item)
      },

      highlightItem(selected) {
        for (let item of this.items) 
          item.blur = true

        selected.blur = false
      },

    },
  }
</script>
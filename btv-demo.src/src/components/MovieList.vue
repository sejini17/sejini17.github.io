<template>
    <v-container pa-0 ma-0>
        
        <v-row>
          <v-col>

            <v-subheader >{{ header }}</v-subheader>

            <v-flex>
              <v-carousel
                height="300"
                style="box-shadow: 0px 0px"
                >
                <v-carousel-item v-for="i in pageCount(items.length)" :key="i" >

                  <v-layout row >
                    <v-flex pl-2 pr-2 
                      class="d-flex flex-row">

                      <v-card v-for="item in curPageItems(items, i)" :key="item.src" 
                        class="mx-auto "
                        max-width="100"
                        ripple
                        :raised="!item.blur"
                      >
                        <v-img
                          :src="item.src"
                          @click="showDetail(item)"
                        >
                        </v-img>
                      </v-card>

                      <!-- 공백 채우기용 -->
                      <v-card v-for="i in remainItemCount(items, i)" :key="i" 
                        class="mx-auto"
                        width="100"
                        max-height="100"
                      >
                        <v-img >
                        </v-img>
                      </v-card>

                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-col>

        </v-row>

        <!-- 선택된 항목 상세정보 -->
        <v-row v-if="selectedItem">
          <v-card
            class="mx-auto"
          >
            <v-card-title>{{ selectedItem.id }}</v-card-title>
            <v-card-subtitle class="pb-0">{{ selectedItem.src }}</v-card-subtitle>
          </v-card>
        </v-row>


    <v-dialog
      v-model="showDialog"
      width="500"
    >
<!--     
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title
          class="headline grey"
          primary-title
        >
          {{dTitle}}
        </v-card-title>

        <v-card-text>{{dContent}}
          <br/>
          《정직한 후보》는 장유정 감독의 2020년 대한민국의 코미디 영화이자, 세 번째 장편 연출작이다. 2014년 브라질에서 개봉한 동명의 영화이자 박스오피스 1위를 기록하였던 《O Candidato Honesto》의 리메이크작이다.<br/>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
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
    // props: {
    //   pageSize: Number,
    // },
    props: [
        'header',
        'items', 'pageSize'
    ],
    data: () => ({
      selectedItem: null,

      showDialog: false,
      dTitle: "",
      dContent: ""
    }),
    computed: {
    },

    created () {
    },
    mounted() {
    },
    methods: {
      showDetail(item) {
        this.selectedItem = item
        if (!this.selectedItem)
          return
        console.log("showDetail : " + item.id)

        this.selectedItem = {
          id: item.id,
          src: item.src
        }
        this.highlightItem(item)

        this.dTitle = item.id
        this.dContent = item.src
        this.showDialog = !this.showDialog

        this.$emit('selected', item.id)
      },

      highlightItem(selected) {
        for (let item of this.items) 
        {
          item.blur = true
// console.log("highlightItem : " + item.id)
        }
        selected.blur = false
      },
      
      pageCount(totCount) {
        return Math.floor(totCount /this.pageSize) +1
      },
      curPageItems(items, i) {
        return items.slice((i-1) *this.pageSize, (i-1) *this.pageSize +this.pageSize)
      },
      remainItemCount(items, i) {
        return this.pageSize - this.curPageItems(items, i).length
      }

    },
  }
</script>
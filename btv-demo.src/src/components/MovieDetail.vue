<template>
  <v-container pa-0 ma-0>
    <v-row >
      <v-col :cols="thWidth"
      >series_id
      </v-col>
      <v-col>{{item.series_id}}</v-col>
      <v-col :cols="thWidth"
      >개봉일</v-col>
      <v-col>{{[ item.date, "YYYYMMDD" ] | moment('YYYY-MM-DD')}}</v-col>
    </v-row>

    <v-row >
      <v-col :cols="thWidth"
      >관객동원 수</v-col>
      <v-col>{{item.kb_audience | comma}}</v-col>
      <v-col :cols="thWidth"
      >국가</v-col>
      <v-col>
        <template v-if="Array.isArray(item.country)">
            <v-chip v-for="(value, i) in item.country" :key="value+i"
                  class="pa-2 ma-1"
            >{{value}}
            </v-chip>
        </template>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
      >

        <v-container pa-0 ma-0>
        <v-row >
          <v-col :cols="thWidth*2"
          >감독</v-col>
          <v-col>
            <template v-if="Array.isArray(item.director)">
                <v-chip v-for="(value, i) in item.director" :key="value+i"
                  class="pa-2 ma-1"
                >{{value}}
                </v-chip>
            </template>
          </v-col>
        </v-row>
        <v-row >
          <v-col :cols="thWidth*2"
          >배우<br/>(주연)</v-col>
          <v-col>
                <v-chip v-for="(value, i) in mainActors" :key="value+i"
                  class="pa-2 ma-1"
                >{{value[1]}}
                </v-chip>
          </v-col>
        </v-row>
        </v-container>
      </v-col>

      <v-col :cols="thWidth"
      >키워드</v-col>
      <v-col cols=4
      >

        <template v-if="item.kwd_refine && item.kwd_refine.length">
          <v-chip v-for="(value, i) in item.kwd_refine.slice(0, keywordSize)" :key="value+i"
                  class="pa-2 ma-1"
          >{{value}}
          </v-chip>
        </template>

        <template v-else-if="item.kmdb_kwd && item.kmdb_kwd.length">
          <v-chip  v-for="(value, i) in item.kmdb_kwd.slice(0, keywordSize)" :key="value+i"
                  text-color="warning"
                  class="pa-2 ma-1"
          >{{value}}
          </v-chip>
        </template>
        
        <template v-else-if="item.kb_kmdb_keyword && item.kb_kmdb_keyword.length">
          <v-chip  v-for="(value, i) in item.kb_kmdb_keyword.slice(0, keywordSize)" :key="value+i"
                  text-color="primary" 
                  class="pa-2 ma-1"
          >{{value}}
          </v-chip>
        </template>

      </v-col>
    </v-row>

            <!-- 
            <v-list-item-group v-model="selectedItem">
              <v-list-item v-for="item in contents" :key="item.name">

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
            -->
  </v-container>
</template>


<script>
  export default {
    name: 'MovieDetail',

    props: [
      'item',
    ],
    components: {
    },

    data: () => ({
      keywordSize: 10,
      thWidth : 2
    }),

    computed: { 
        mainActors : function () {
          if (!this.item) return
          return this.item.actor_role_code
            .map((n, index) => [n, this.item.actor[index]])
            .filter( _ => _[0] == '01') //주연만
        }
    },
    watch: {
    },
    filters: {
      comma(val){
        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    created () { 
    },
    mounted() { 
    },

    methods: {
    },
  }
</script>
<style scoped>
</style>
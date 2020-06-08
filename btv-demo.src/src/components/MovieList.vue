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
                <v-carousel-item v-for="i in Math.floor(items.length/pageSize)+1" :key="i" >

                  <v-layout row >
                    <v-flex pl-2 pr-2 
                      class="d-flex flex-row">

                      <v-card v-for="item in items.slice((i-1)*pageSize, (i-1)*pageSize+pageSize)" :key="item.src" 
                        class="mx-auto"
                        max-width="100"
                        max-height="100"
                      >
                        <v-img
                          class="white--text align-end"
                          :src="item.src"
                          @click="showDetail(item)"
                        >
                        </v-img>
                      </v-card>

                      <!-- 공백 채우기용 -->
                      <v-card v-for="i in (pageSize - items.slice((i-1)*pageSize, (i-1)*pageSize+pageSize).length )" :key="i" 
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
    }),
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

        this.$emit('selected', item.id)
      },

    },
  }
</script>
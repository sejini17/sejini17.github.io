<template>
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
          @click="selected(item)"
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
</template>

<script>
  export default {
    name: 'MovieSlide',

    props: {
      'items' : {
        required: true
      },

      'showArrows': {
        default: 'mobile'
      },
    },
    data: () => ({
      urlImg: 'http://stimage.hanafostv.com:8080/thumbnails/iip/115_156',
      slideModel: null,
      selectedItem: null,
    }),

    methods: {
      reset() {
        this.slideModel = null
        this.selectedItem = null
      },
      selected(item) {
        console.log('selected :', item)

        this.selectedItem = this.selectedItem == item ? null : item
        this.$emit('selected', this.selectedItem)
      },
    },
  }
</script>
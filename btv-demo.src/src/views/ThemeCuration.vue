<template>
  <v-container pa-0 ma-0
  >
    <v-layout >
      <v-flex >
        <template v-for="(item) in $store.state.themeList">
          <movie-list2 :key="item.header"
            :theme="item.theme"
            :header="item.header" :items="item.items"
          />
        </template>

        <BtnScrollToTop />

        <v-snackbar
          v-model="snackBar"
          top
          color="error"
          :timeout="3000"
        >
          {{errMsg}}
          <template v-slot:action="{ attrs }">
            <v-btn
              dark
              text
              v-bind="attrs"
              @click="snackBar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>

      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
const themePreset = `
눈을 사로잡는 영상미의 영화
아이들과 함께 보기 좋은 영화
의리의리한 우정을 그린 영화
썸탈 때 보기 좋은 로맨틱 코미디 영화
데이트 할 때 보기 좋은 로맨스영화
첩보 & 스파이 영화
이별후유증 극복 영화
씁쓸한 부조리 사회고발 영화
협객의 활약이 돋보이는 무협 영화
귀가 즐거운 음악영화
가족과 함께 보기 좋은 영화
정주행 하기 좋은 시리즈영화
심신안정 힐링 영화
스트레스 타파! 액티비티 스포츠영화
웃고싶을 때 보기 좋은 코미디영화
눈물샘 자극하는 슬픈 영화
가슴뭉클, 감동을 주는 영화
등골 오싹한 공포영화
시간여행 하고 싶을 때, 타임슬립 영화
반려동물과 함께보기 좋은 영화
미식의 세계, 요리/음식 영화
소년, 소녀들의 이야기 하이틴 영화
히어로 끝판왕 마블 & DC
믿고보는 애니, 디즈니 & 픽사
감성 가득 지브리 스튜디오
손에 땀을 쥐게하는 액션영화
허를 찌르는 반전영화 
비범한 재능의 천재 등장 영화
일촉즉발의 상황! 재난 영화
같은영화, 다른매력! 리메이크 영화
집에서 즐기는 여행, 로드무비 영화
질주본능 자극하는 레이싱 영화
시대를 빛낸 여성들, 우먼파워 영화
명곡의 발견, OST가 좋은 영화
가슴이 뜨거워지는 전쟁 영화
투자가치 200%의 주식 영화
`.split('\n').filter(l => l.length != 0)
// .slice(-3) //debug용

  import MovieList2 from '@/components/MovieList2';

  export default {
    name: 'ThemeCuration',
    components: {
      MovieList2,
    },

    props: {
    },
    data: () => ({
      snackBar: false,
      errMsg: ''
    }),

    created () {
      this.$eventBus.$on('searchKeyword', 
        (value) => this.searchKeyword(value)
      )
      
      this.$store.dispatch('loadThemePreset', themePreset)
    },
    mounted() {
      this.resetSearch()
    },
    methods: {
      resetSearch() {
        this.$store.commit('setThemeDefault')
      },

      searchKeyword(searchText) {
        if (!searchText) {
          this.resetSearch()
          return
        }

        this.$axios.post(
          '/vod/btv/api/v1.0/theme-search', 
          {
            'query' : searchText,
            'topn' : 10
          }
        ).then(res => {
          this.$store.commit('setTheme', {
            theme : searchText,
            header : searchText,
            items : res.data
          })
        })
        .catch(() => {
          this.errMsg = `'${searchText}'의 검색 결과가 없어요.`
          this.snackBar = true
        })
      },
    },
  }
</script>
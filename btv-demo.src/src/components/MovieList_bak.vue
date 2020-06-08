<template>
    <v-container>

        <v-subheader >{{ header1 }}</v-subheader>
        <v-row
        >
          <v-col
            v-for="item in items"
            :key="item.src"
            cols="2"
          >

            <v-card
              class="mx-auto"
              max-width="300"
            >
              <v-img
                class="white--text align-end"
                :src="item.src"
              >
              </v-img>

              <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->
              <!-- <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text class="text--primary">
                <div>{{item.src}}</div>
              </v-card-text> -->

              <v-card-actions>
                <v-btn color="orange" text >
                  상세보기
                </v-btn>
                <v-btn color="orange" text >
                  관련영화
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>

    </v-container>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      searchText:"",
      pageSize: 10,
      selectedItem: null,

      items: [
        { id: 'F_00004', src: 'http://file.koreafilm.or.kr/thm/02/00/02/13/tn_DPF004341.JPG'},
        { id: 'F_00008', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017211.jpg'},
        { id: 'F_00017', src: 'http://file.koreafilm.or.kr/thm/02/00/05/05/tn_DPF017259.jpg'},
        { id: 'F_00021', src: 'http://file.koreafilm.or.kr/thm/02/00/04/95/tn_DPF016393.jpg'},
        { id: 'F_00025', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011865.jpg'},
        
        { id: 'F_00028', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017213.jpg'},
        { id: 'F_00066', src: 'http://file.koreafilm.or.kr/thm/03/00/17/77/tn_LF3000002.jpg'},
        { id: 'F_00074', src: 'http://file.koreafilm.or.kr/thm/02/00/04/98/tn_DPF016647.jpg'},
        { id: 'F_00081', src: 'http://file.koreafilm.or.kr/thm/02/00/04/89/tn_DPF015784.jpg'},
        { id: 'F_00085', src: 'http://file.koreafilm.or.kr/thm/02/00/05/04/tn_DPF017141.jpg'},

        { id: 'F_00097', src: 'http://file.koreafilm.or.kr/thm/02/00/05/05/tn_DPF017241.jpg'},
        { id: 'F_00105', src: 'http://file.koreafilm.or.kr/thm/02/00/05/02/tn_DPF017005.jpg'},
        { id: 'F_00137', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011888.jpg'},
        { id: 'F_00149', src: 'http://file.koreafilm.or.kr/thm/02/00/04/29/tn_DPF012857.jpg'},
        { id: 'F_00157', src: 'http://file.koreafilm.or.kr/thm/02/00/04/17/tn_DPF012242.jpg'},

        { id: 'F_00181', src: 'http://file.koreafilm.or.kr/thm/02/00/04/11/tn_DPF011881.jpg'},
        { id: 'F_00187', src: 'http://file.koreafilm.or.kr/thm/02/00/04/91/tn_DPF015997.jpg'},
        { id: 'F_00189', src: 'http://file.koreafilm.or.kr/thm/02/00/04/96/tn_DPF016465.jpg'},
        { id: 'F_00200', src: 'http://file.koreafilm.or.kr/thm/02/00/01/55/tn_DPF002487.JPG'},
        { id: 'F_00215', src: 'http://file.koreafilm.or.kr/thm/02/00/04/94/tn_DPF016301.jpg'},
      ],
      header1: "Top Pick",
    }),
    created () {
    },
    mounted() {
    },
    methods: {
    },
  }
</script>
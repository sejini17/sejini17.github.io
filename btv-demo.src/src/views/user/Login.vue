<template>
<!-- 
  class="fill-height" 
-->
  <v-container pa-0 ma-0
    fluid
  >
    <MsgBox :msgObj="msgObj" />

<!-- 
    <v-layout >
      <v-flex >
      </v-flex>
    </v-layout>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip> 
-->

    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12" sm="8" md="4"
      >
        <v-card >
          <v-toolbar dense
            color="primary"
            flat
          >
            <v-toolbar-title>로그인</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="아이디"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

              <v-text-field
                id="password"
                label="비밀번호"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/regist">회원가입</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary"
            >로그인하기</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    components: {
    },

    props: {
    },
    data: () => ({
        msgObj: {}
    }),
    computed: {
    },

    created () {
      // this.$eventBus.$on('searchKeyword', 
      //   (msg) => this.msgObj = { msg }
      // )
    },
    mounted() {
    },
    methods: {

    },
  }
</script>
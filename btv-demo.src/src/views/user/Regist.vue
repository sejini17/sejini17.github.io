<template>
<!-- 
  class="fill-height" 
-->
  <v-container pa-0 ma-0
    fluid
  >
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
            <v-toolbar-title>회원가입</v-toolbar-title>
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
              <v-text-field
                id="passwordConfirm"
                label="비밀번호 확인"
                name="passwordConfirm"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
              
              <v-text-field
                label="이름"
                name="userName"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                label="이메일"
                name="userEmail"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/login">로그인</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary"
                @click="regist"
            >회원가입</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
  export default {
    name: 'Regist',

    data: () => ({
    }),

    created () {
    },
    mounted() {
    },
    methods: {
        regist() {
            //TODO form validation

            //TODO api submit
            
        }
    },
  }
</script>
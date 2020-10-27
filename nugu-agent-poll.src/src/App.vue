<template>
  <v-app>
    <!-- app-bar ------------------------------------------------------
      color="#595959"
    -->
    <v-app-bar app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pr-4">nugu-agent-poll</v-toolbar-title>

      <v-spacer />

    </v-app-bar>

    <!-- navigation-drawer ------------------------------------------------------
    -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <v-list-item
          link to="/"
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              홈
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item
          link to="/about"
        >
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              about
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>


    <v-main>
      <router-view/> 
    </v-main>


    <!-- footer ------------------------------------------------------
      color="#595959"
    -->
    <v-footer
      app
    >
      <span >&copy; 2020 SKT</span>
      <v-spacer></v-spacer>
      ver.2020-1021
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
  }),
  created () {
    this.$vuetify.theme.dark = false
  }
};
</script>

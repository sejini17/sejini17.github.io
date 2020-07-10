<template>
  <v-snackbar
    v-model="snackBar"
    top
    :color="color"
    :timeout="timeout"
  >
    {{msgObj.msg}}
    <template v-slot:action="{ attrs }">
      <v-btn
        text
        dark
        v-bind="attrs"
        @click="snackBar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
  export default {
    name: 'MsgBox',

    props: {
      msgObj: {
        required: true,
        type: Object,
      },

      timeout: {
        type: Number,
        default: 3000
      },
      color: {
        default: "error"
      }
    },
    data: () => ({
      snackBar: false
    }),

    watch: {
      msgObj: function () {
        this.snackBar = true
      },
    },  

    created() {
    },
    mounted() {
    },
    methods: {

    },
  }
</script>
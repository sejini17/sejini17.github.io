<template>
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        fixed bottom right
        dark color="primary"
        @click="toTop"
        >
        <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
</template>
<script>
export default {
    name: 'BtnScrollToTop',
    data: () => ({
        fab: false
    }),
    methods: {
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop () {
            this.$vuetify.goTo(0)
        }
    }
}
</script>
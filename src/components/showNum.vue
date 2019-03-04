<template>
  <p class="showNum" v-html="count"></p>
</template>

<script>
    import {mapGetters, mapActions, mapState } from "vuex";
    export default {
        name: "showNum",
        data() {
            return {
            };
        },
        created() {
            // // alert('我进class了')
            // this.$nextTick(() => {
            //     this.num = this.getCount()
            // });
        },
        computed: mapState({
          // 箭头函数可使代码更简练
          count: state => state.count.count
        }),
        // methods: {
        //     ...mapGetters(["getCount"])
        // }
    }
</script>

<style scoped>
    .showNum{
        font-size: 40px;
        text-align: center;
        color: aqua;
    }
</style>

<template>
    <div class="shop" v-loading="loading">
      <div v-for="item in products" class="product clearfix">
        {{item}}
        <b class="add" @click="add(item)">+</b>
        <b class="reduce">-</b>
      </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState } from "vuex";
    import data from './../api/data'
    export default {
        name: "shop",
        data() {
          return {
            products: [],
            loading: true
          };
        },
        created() {
          // alert('我进class了')
          this.$nextTick(() => {
            var that = this
            data.getAllProducts(allProducts => {
              that.products = allProducts,
              that.loading = false
            })
          });
        },
        methods: {
          add(item){

          }
        }
    }
</script>

<style scoped lang="scss">
  .shop{
    position: fixed;
    top: 0;
    width: 100%;
    height: 50vh;
    background: #fff;
    .product{
      width: 100%;
      text-align: center;
      margin: 10px 0;
      height: 30px;
      font:normal 20px/30px 'Microsoft Yahei';
      cursor: pointer;
      &:hover{
        background-color: #18ddff;
      }
      .add,.reduce{
        float: right;
        width: 80px;
        height: 30px;
        background-color: cornflowerblue;
        color: black;
        margin-right: 10px;
        cursor: pointer;
        &:hover{
          background-color: #3477ed;
        }
      }
    }
  }
</style>

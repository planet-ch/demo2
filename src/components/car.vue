<template>
    <div class="car">
      <div v-for="item in products" class="product clearfix">
        {{item}}
        <b class="add">+</b>
        <b class="reduce">-</b>
      </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState } from "vuex";
    export default {
        name: "car",
        data() {
          return {
          };
        },
        computed: mapState({
          // 箭头函数可使代码更简练
          products: state => state.products.products
        }),
        created() {
          // alert('我进class了')
          this.$nextTick(() => {
            this.getProducts()
          });
        },
        methods: {
          ...mapActions(["addProducts","getProducts"])
        }
    }
</script>

<style scoped lang="scss">
  .car{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50vh;
    .product{
      width: 100%;
      text-align: center;
      margin: 10px 0;
      height: 30px;
      font:normal 20px/30px 'Microsoft Yahei';
      cursor: pointer;
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

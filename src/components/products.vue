<template>
    <div class="shop" v-loading="loading">
      <div v-for="item in products" class="product clearfix">
        <span>{{item.title}}&nbsp;&nbsp;</span>
        售价：<span>{{item.price}}&nbsp;&nbsp;</span>
        库存：<span>{{item.inventory}}</span>
        <b class="add" @click="add(item)">+</b>
        <b class="reduce">-</b>
      </div>
    </div>
</template>

<script>
    import {mapActions, mapState } from "vuex";
    export default {
        name: "shop",
        data() {
          return {
            loading: true
          };
        },
        created() {
          // alert('我进class了')
          this.$nextTick(() => {
            this.getProducts().then(()=>{
              this.loading = false
            })
          });
        },
        computed: mapState({
          // 箭头函数可使代码更简练
          products: state => {
            return state.products.products
          }
        }),
        methods: {
          ...mapActions(["getProducts","addProductToCart"]),
          add(item){
            this.addProductToCart(item)
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

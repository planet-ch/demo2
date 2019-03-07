<template>
    <div class="car">
      <div v-for="item in products" class="product clearfix">
        <span>{{item.title}}</span>
        <span>数量：{{item.quantity}}</span>
      </div>
      <div class="total">总价格: {{total.toFixed(2)}}</div>
      <el-button type="primary" @click="toPay()">购买</el-button>
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
        computed: {
          ...mapGetters({
            products: 'get_cart',
            total: 'cartTotalPrice'
          })
        },
        created() {
          // alert('我进class了')
          this.$nextTick(() => {
            // this.getProducts()
          });
        },
        methods: {
          // ...mapActions(["addProducts","getProducts"])
          toPay(){
            console.log(this.total)
            debugger
          }
        }
    }
</script>

<template>
    <div class="shop">
        <car></car>
        <products></products>
    </div>
</template>

<script>
    import car from '@/components/car'
    import products from '@/components/products'
    import fetch from "./../fetch";
    export default {
        name: "shop",
        components:{
          car,
          products
        },
        data() {
          return {
            // products: {}
          };
        },
      created(){
        this.$nextTick(() => {
          let that = this
          fetch.getShop().then(res =>{
            that.params = res.data
          })
        });
      }
    }
</script>

<style scoped>
    .shop{
      width: 100%;
      height: 100vh;
    }
</style>

<template>
    <div class="shop">
        <car></car>
        <products></products>
    </div>
</template>

<script>
    import car from '@/components/car'
    import products from '@/components/products'
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
    }
</script>

<style scoped>
    .shop{
      width: 100%;
      height: 100vh;
    }
</style>

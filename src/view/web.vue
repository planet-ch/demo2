<template>
    <div>
      <num></num>
      <showNum></showNum>
    </div>
</template>

<script>
    import num from '@/components/num'
    import showNum from '@/components/showNum'
    export default {
        name: "web",
        components:{
          num,
          showNum
        }
    }
</script>

<style scoped>

</style>

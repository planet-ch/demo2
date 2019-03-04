<template>
  <div class="box">
    <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="0" :max="100"></el-input-number>
    <button @click="removeAll">点我销毁ALL</button>
  </div>
</template>

<script>
    import {mapGetters, mapActions, mapState } from "vuex";
    export default {
        name: "num",
        data() {
            return {
              num: 0
            };
        },
        created() {
            // alert('我进class了')
            this.$nextTick(() => {
              this.num = this.getCount()
            });
        },
        methods: {
            ...mapGetters(["getCount"]),
            ...mapActions(["setCount","removeCount"]),
            handleChange(value) {
              this.setCount(value)
            },
            removeAll(){
              this.num = 0
              this.removeCount()
            }
        }
    }
</script>

<style scoped>

</style>

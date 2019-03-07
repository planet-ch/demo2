<template>
    <div class="addProduct">
      <el-form :model="product" status-icon :rules="rules2" ref="product" label-width="100px" class="demo-ruleForm" label-position="right">
        <el-form-item label="title" prop="title">
          <el-input type="text" v-model="product.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="price" prop="price">
          <el-input type="text" v-model="product.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="inventory" prop="inventory">
          <el-input v-model.number="product.inventory"></el-input>
        </el-form-item>
        <el-form-item label="ID">
          <el-input v-model.number="product.productId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('product')">提交</el-button>
          <el-button @click="resetForm('product')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import fetch from "./../fetch";
import { log } from 'util';
  export default {
    data() {
      var checkInventory = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('库存数量不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validateText = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入商品名称'));
        }else{
          callback()
        }
      };
      var validateprice = (rule, value, callback) => {
        if (value === '' || value === 0) {
          callback(new Error('请输入有效商品价格'));
        } else if(value > 9999){
          callback(new Error('最高价格不高于9999'));
        }else{
          callback()
        }
      };
      return {
        product: {
          title: '',
          price: '',
          inventory: '',
          productId: 0
        },
        rules2: {
          title: [
            { validator: validateText, trigger: 'blur' }
          ],
          price: [
            { validator: validateprice, trigger: 'blur' }
          ],
          inventory: [
            { validator: checkInventory, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            fetch.addProduct(this.product).then(res =>{
              console.log(res) 
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .addProduct{
    width: 400px;
    margin: 60px auto 0;
  }
</style>

<template>
  <div class="Login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>


        <el-form-item v-if="currentType === 'register'" label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button  v-if="currentType === 'register'" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button v-if="currentType === 'login'" type="primary" @click="login()">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  created(){
console.log(this.$route.query.currentType,"currenttype")
  },
  watch:{
      '$route': {
    handler(val) {
		console.log(val);
	},
	deep: true
	// immediate: true
},
  },
  components: {
    // HelloWorld
  },
   data() {
      return {
        ruleForm: {
          name: '',
          password: '',
          checkPass: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
           { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
          ]
        },
        currentType: 'login'
      };
   },
   methods: {
       login() {

       },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
            alert('submit!');
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
<style scoped lang="scss">
    .Login{
        height: 100%;
        .demo-ruleForm{
            width: 300px;
        }
    }
   
</style>
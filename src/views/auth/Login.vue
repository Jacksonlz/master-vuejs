<template>
  <div class="loginPage">
    <div class="form">
      
      <el-row>
        <el-col :span="24">

          <el-form label="" :label-position="labelPosition" label-width="100px" :model="ruleForm" ref="ruleForm" :rules="rules">
            <el-form-item label="账号" prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入账号"   type="text" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item label="密 码" style="color: #fff;" prop="password">
              <el-input v-model="ruleForm.password" placeholder="请输入密码"   type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code" >
            <el-input v-model="ruleForm.code" placeholder="请输入验证码" type="ruleForm"></el-input>
            
            <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
             <span style="float: left; color: #A9A9AB;" @click="login">记住密码</span> <span style="float: right;color: #A9A9AB">忘记密码？</span>

              </el-form-item>
              <el-form-item label="">
              <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
              <el-button type="info" @click="clearForm('ruleForm')">重 置</el-button> 
              <el-button type="primary" @click="registerForm('ruleForm')">注 册</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import { login } from "../../http/user";

export default {
  name: "Login",
  name:"SIdentify",
  data() {
    return {
   title:'欢迎来到TSD view', 
      ruleForm: {
        username: "",
        password: ""
      },
      isPass: false,
      labelPosition: "right",
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的账号",
            trigger: "blur,change"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapMutations(["LOGIN"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login({
            username: this.ruleForm.username,
            password: this.ruleForm.password
          })
            .then(res => {
              this.LOGIN(res);
              this.$router.push("/main");
            })
            .catch(err => {
              this.$message.error(err.message);
            });
        }
      });
    },
    clearForm(formName) {

      this.$refs[formName].resetFields();

      this.isPass = false;
    }
  }
};

</script>

<style scoped>
.loginPage {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/e.jpg");
  background-size: auto;
}
.form {
  position: absolute;
  width: 450px;
  height: 350px;
  top: 50%;
  left: 50%;
  margin-left: -255px;
  margin-top: -100px;
}
.el-button {
  margin-top: 20px;
}
.el-form-item__label {
  color: #fff;
}

</style>


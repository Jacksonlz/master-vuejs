<template>
    <div class="success">
      <header>安全验证</header>
   
   
       <el-form-item label="账号" prop="username">
            <el-form-item label="短信验证码" prop="code" >
            <el-input v-model="ruleForm.code" placeholder="请输入短信验证码" type="ruleForm"></el-input>
              <el-button type="info" @click="clearForm('ruleForm')">确定 </el-button>

 
       
 </div>
   

</template>>
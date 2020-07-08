<template>
    <div class="findclass">
        <header>找回密码</header>
        <div class="find">
        <el-row> 
        <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入邮箱/手机号"   type="text" @keyup.enter.native="submitForm('ruleForm')">
        </el-input>
          <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
        </el-form-item>
        </el-row>
    </div>



</template>>
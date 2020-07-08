<template>

   <el-form-item label="输入密码" prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码"   type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        <el-form-item label="重复密码" prop="passwordag">

        <el-input v-model="ruleForm.passwordag" placeholder="重复密码"   type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">返回登录<el-button> 
        </el-form-item>

</template>
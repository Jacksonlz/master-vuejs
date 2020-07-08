/*
 * @Author: Jacksonliu
 * 
 */

import * as http from './base'

/**
 * 登陆
 * @param {object} data 
 */
  const login = (data) => {
  return http.post('/users/login', data)
}

/**
 * 获取用户列表
 * @param {object} params 
 */

const getUserList = params => {
  return http.fetch('/users', params)
}

/**
 * 删除用户
 * @param  {object} params
 */
const deleteUserById = id => {
  return http.del(`/users/${id}`)
}
/**
 * 获取用户详情
 * @param  {id} id
 */
const getUserDetail = id => {
  return http.fetch(`/users/${id}`, {})
}

/**
 * 保存用户信息
 * @param {object} user 
 */
const updateUserInfo = user => {
  if (!user.id) {
  return Promise.reject(new Error(`arg id can't be null`)) 
  }
  return http.put(`/users/${user.id}`, user)
}

/**
 * 添加用户
 * @param {user对象} user 
 */
const addUser = user => {
  return http.post('/users', Object.assign({
    password: '123456'
  }, user))
}

/**
 * 退出登陆
 * @param {email} email 
 */
const logout = email => {
  return http.post('/users/logout', {
    email
  })
}
export { login, getUserList, deleteUserById, getUserDetail, updateUserInfo, addUser, logout }     

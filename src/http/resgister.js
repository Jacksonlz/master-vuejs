/*
 * @Author: Jacksonliu
 */

 import * as http from ''
 /**/ 
 const resgister =(data) => {

    return http.post('/users/resgister', data)

}
/**/
const getUserList = username=>{
    
    return http.fetch('/users',Params)
}

const getUserList =tel => {
    
    return http.del(`/users/${id}`)
}
const deleteUserList = password =>{
    
    return http.fetch(`/users/${id}`)

}
const  getUserDetail =sms => {
    
    return http.fetch(`/users/${id}`)
}
const updateUserInfo =user =>{
    
    return http.fetch(`/users/${id}`)
}
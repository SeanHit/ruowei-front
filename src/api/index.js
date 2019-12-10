/*
* 包含应用中所有接口请求函数模块
* 返回值是promise
*  在这里写请求调用的ajax函数
* */
import ajax from './ajax'
const BASE = '' //使用了代理 ，不需要了
export const reqLogin =(username,password) =>ajax(BASE+"/login",{username,password},'POST')



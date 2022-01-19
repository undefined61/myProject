import request from '../../request';
function login(){
    return new Promise((resolve, reject) => {
        request("get",'/admin/login').then(res => {
        resolve (res);
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
    }) 
  }
  
  export {
    login
  }
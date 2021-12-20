import request from '../../request';
function getArticleList(){
    return new Promise((resolve, reject) => {
        request("get",'http://localhost:5000/add').then(res => {
        resolve (res);
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
    }) 
  }
  
  export {
     getArticleList
  }
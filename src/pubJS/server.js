import Vue from 'vue'

// @param {[type]} id [数据id]
// @param {[Function]} callback [回调参数]
// @return {[type]} [返回类型]
//公共路径
let portUrl = "https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/";
//用户登录
// const getuserInfo = (username,password,callback) =>{
//     if(sessionStorage.getItem('username')){
//         var data = JSON.parse(sessionStorage.getItem('userInfo'));
//         callback && callback(data)
//     }else{
//         let url = portUrl+"food/GetFocus";
//         Vue.http.get(url).then(response => response.json()).then(num => {
//             if(num.code==1001){
//                 sessionStorage.setItem('username',JSON.stringify(num.data));
//                 callback && callback(num.data)
//             }else{
//                 alert("查询失败")
//             }
//         })
//     }
// }
//用户登录
const userLogin =  (email,password,callback) =>{
    let url = portUrl + 'aimee/login?email+'+emial+'&password='+password;
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            sessionStorage.setItem('userInfo',JSON.stringify(num.data));
            callback && callback(num.data);
        }else{
            alert("查询失败")
        }
    })
}

import Vue from 'vue'

// @param {[type]} id [数据id]
// @param {[Function]} callback [回调参数]
// @return {[type]} [返回类型]
//公共路径
let portUrl = "http://www.vuebook.com/port/";
//用户注册
const getRegister = (username,password,email,callback) =>{
    let url = portUrl+'login/getRegister?username='+username+'&email='+email+'&password='+password;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num)
    })

}
//用户登录
const UserLogin =  (email,password,callback) =>{
    let url = portUrl + 'login/UserLogin?email='+email+'&password='+password;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}
//文章分类查询
const ArtClassData = (callback) => {
    if(sessionStorage.getItem('classList')){
        var data = JSON.parse(sessionStorage.getItem('classList'));
        callback && callback(data)
    }else{
        let url = portUrl + 'article/ArtClassData';
        Vue.http.get(url).then(response => response.json()).then(num => {
            // console.log(num);
            if(num.code==1001){
                sessionStorage.setItem('classList',JSON.stringify(num.data));
                callback && callback(num.data)
            }else{
                alert("查询失败")
            }
        })
    }
}


//查询文章列表
const ShowArticleAll = (artId,cateId,articleName,callback) =>{
    let url = portUrl + 'article/ShowArticleAll?art_id='+artId+'&cate_id='+cateId+'&article_name='+articleName;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//查询文章详情
const getArticleInfo = (artId,userId,callback) =>{
    let url = portUrl + 'article/getArticleInfo?art_id='+artId+'&user_id='+userId;
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//查询浏览量最多的10篇文章数据
const ShowBrowseCount = (callback) =>{
    let url = portUrl + 'article/ShowBrowseCount';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}

//查询文章评论量最大的10篇文章
const ShowArtCommentCount = (callback) =>{
    let url = portUrl + 'article/ShowArtCommentCount';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//查询文章评论数据
const ArticleComment = (artId,commentId,callback) =>{
    let url = portUrl + 'comment/ArticleComment?art_id='+artId+'&comment_id='+commentId;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//查询其他评论数据
const OtherComment = (leaveId,commentId,callback) =>{//分类类型ID（1：赞赏 2：友情链接 3：留言板 4：关于我）
    let url = portUrl + 'comment/OtherComment?leave_id='+leaveId+'&comment_id='+commentId;
    Vue.http.get(url).then(response => response.json()).then(num => {
        callback && callback(num);
    })
}


//文章评论
const setArticleComment = (content,user_id,article_id,leave_pid,callback) =>{
    let url = portUrl + 'comment/setArticleComment?content='+content+'&user_id='+user_id+'&article_id='+article_id+'&leave_pid='+leave_pid;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//其他评论
const setOuthComment = (content,user_id,article_id,leave_id,callback) =>{
    let url = portUrl + 'comment/setOuthComment?content='+content+'&user_id='+user_id+'&article_id='+article_id+'&leave_id='+leave_id;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//查询网址点赞总数
const showLikeData = (callback) =>{
    let url = portUrl + 'outh/showLikeData';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            // console.log(num.data,parseInt(num.data));
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//点赞功能修改
const GetLike = (like_num,callback) =>{
    let url = portUrl + 'outh/GetLike?like_num='+like_num;
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.msg);
        }else{
            alert("点赞失败");
        }
    })
}


//查询友情链接数据
const FriendUrlData = (callback) =>{
    let url = portUrl + 'outh/FriendUrlData';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//查询关于我
const AboutMeData = (callback) =>{
    let url = portUrl + 'outh/AboutMeData';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}

//文章点击收藏
const getArtCollect = (userId,artId,callback) =>{
    let url = portUrl + 'article/getArtCollect?user_id='+userId+'&art_id='+artId;
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.msg);
        }else{
            alert("查询失败");
        }
    })
}

//文章点击喜欢
const getArtLike = (userId,artId,callback) =>{
    let url = portUrl + 'article/getArtLike?user_id='+userId+'&art_id='+artId;
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.msg);
        }else{
            alert("查询失败");
        }
    })
}

//查询赞赏数据
const AdmireData = (callback) => {
    let url = portUrl + 'outh/AdmireData';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num);
        }else{
            alert("查询失败");
        }
    })
}

const initDate = (oldDate,full) => {
    var odate = new Date(oldDate);
    var year =  odate.getFullYear();
    var month = odate.getMonth()<9? '0' + (odate.getMonth()+1) : odate.getMonth()+1;
    var date = odate.getDate()<10? '0'+odate.getDate() : odate.getDate();
    // console.log(year);
    if(full=='all'){
        return year+'年'+month+'月'+date+'日'
    }else if(full=='year'){
        return year
    }else if(full== 'month'){
        return odate.getMonth()+1
    }else if(full == 'date'){
        return date
    }
}

export {
        getRegister,//注册
        UserLogin,//登录
        ArtClassData,//分类
        ShowArticleAll,//查询文章列表
        getArticleInfo,//文章详情
        ShowBrowseCount,//流量量做多的文章
        ShowArtCommentCount,//评论最多的文章
        ArticleComment,//文章评论列表
        OtherComment,//其他评论列表
        setArticleComment,//设置文章评论
        setOuthComment,//设置其他评论
        showLikeData,//do you like me
        GetLike,//设置 do you like me
        FriendUrlData,//友情链接数据
        AboutMeData,//关于我文章编写
        getArtCollect,//文章收藏
        getArtLike,//文章点赞
        AdmireData,//赞赏数据
        initDate//设置时间
    }

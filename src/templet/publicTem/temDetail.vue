<template>
        <div class="detailBox tcommonBox">
            <span class="s-round-date">
                <span class="month">{{showInitDate(detailObj.create_time,'month')}}月</span>
                <span class="day">{{showInitDate(detailObj.create_time,'date')}}</span>
            </span>
            <header>
                <h1>
                    <a :href="'#/DetailShare?aid='+detailObj.id" target="_blank">
                        {{detailObj.title}}
                    </a>
                </h1>
                <h2>
                    <i class="fa fa-fw fa-user"></i>发表于 {{showInitDate(detailObj.create_time,'all')}} •
                    <i class="fa fa-fw fa-eye"></i>{{detailObj.browse_count}} 次围观 •
                    <i class="fa fa-fw fa-comments"></i>活捉 {{detailObj.comment_count}} 条 •
                    <span class="rateBox">
                        <i class="fa fa-fw fa-heart"></i>{{likeCount}}点赞
                        <i class="fa fa-fw fa-star"></i>{{collectCount}}收藏
                    </span>
                </h2>
                <div class="ui label">
                    <a :href="'#/Share?classId='+detailObj.class_id">{{detailObj.cate_name}}</a>
                </div>
            </header>
            <div class="article-content" v-html="detailObj.content"></div>
            <div class="dshareBox">
                分享到:
                <a href="#" class="ds-weibo"><i class="fa fa-fw fa-weibo"></i></a>
                <a href="#" class="ds-qq"><i class="fa fa-fw fa-qq"></i></a>
                <a href="#" class="ds-wechat">
                    <i class="fa fa-fw fa-wechat"></i>
                    <div class="wechatShare">
                        <h4>微信扫一扫</h4>
                        <div>
                            <img src="src/img/erwm.jpg" alt="">
                        </div>
                        <p>
                            微信扫一扫,右上角分享
                        </p>
                        <i></i>
                    </div>
                </a>
                <div class="dlikeColBox">
                    <div class="dlikeBox" @click="likecollectHandle(0)" >
                        <i :class="likeArt?'fa fa-fw fa-heart':'fa fa-fw fa-heart-o'" ></i>喜欢 | {{likeCount}}
                    </div>
                    <div class="dcollectBox" @click="likecollectHandle(1)" >
                        <i :class="collectArt?'fa fa-fw fa-star':'fa fa-fw fa-star-o'" ></i>收藏 | {{collectCount}}
                    </div>
                </div>
            </div>
            <div class="donate">
                <div class="donate-word">
                    <span @click="pdonate=!pdonate">赞赏</span>
                </div>
                <el-row :class="pdonate?'donate-body':'donate-body donate-body-show'" :gutter="30">
                    <el-col  :span="8" :offset="4"  class="donate-item">
                        <img :src="detailObj.wechat_image" onerror="this.onerror=null;this.src='src/img/tou.jpg'">
                        <div class="donate-tip">
                            微信扫一扫，向我赞赏
                        </div>
                    </el-col>
                    <el-col :span="8"  class="donate-item">
                        <img :src="detailObj.alipay_image" onerror="this.onerror=null;this.src='src/img/tou.jpg'">
                        <div class="donate-tip">
                            支付宝扫一扫，向我赞赏
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
</template>

<script>
import {getArticleInfo,getArtCollect,getArtLike,initDate} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                aid:'',
                pdonate:true,//打开赞赏控制,
                detailObj:'',
                likeArt:false,
                likeCount:400,
                collectCount:500,
                collectArt:false,
                haslogin:false,
                userId:''
            }
        },
        methods: { //事件处理器
            showInitDate:function(date,full){
                    return initDate(date,full)
            },
            likecollectHandle: function(msg){//用户点击喜欢0,用户点击收藏1
                var that = this;
                if(that.haslogin){//判断是否登录
                    if(msg==0){
                        if(!that.likeArt){
                            that.likeCount+=1;
                            that.likeArt = true;
                        }else{
                            that.likeCount-=1;
                            that.likeArt = false;
                        }
                        getArtLike(that.userId,that.aid,function(msg){
                            console.log(msg);
                        })
                    }else{
                        if(!that.collectArt){
                            that.collectCount+=1;
                            that.collectArt = true;
                        }else{
                            that.collectCount-=1;
                            that.collectArt = false;
                        }
                        getArtCollect(that.userId,that.aid,function(msg){
                            console.log(msg);
                        })
                    }
                }else{//未登录 前去登录。
                    that.$confirm('登录后即可点赞和收藏，是否前往登录页面?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                  }).then(() => {//确定，跳转至登录页面
                      //储存当前页面路径，登录成功后跳回来
                      sessionStorage.setItem('logUrl',that.$route.fullPath);
                      that.$router.push({path:'/Login?login=1'});
                    }).catch(() => {

                    });
                }

            },
            routeChange:function(){
                var that = this;
                that.aid = that.$route.query.aid==undefined?1:parseInt(that.$route.query.aid);//获取传参的aid
                //判断用户是否存在
                if(sessionStorage.getItem('userInfo')){
                    that.haslogin = true;
                    that.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                    that.userId = that.userInfo.user_id;
                    console.log(that.userInfo);
                }else{
                    that.haslogin = false;
                }
                //获取详情接口
                getArticleInfo(that.aid,that.userId,function(msg){
                    console.log(msg);
                    that.detailObj = msg;
                    that.likeCount = msg.like_count?msg.like_count:0;
                    that.collectCount = msg.collect_count?msg.collect_count:0;
                    that.likeArt = msg.user_like_start==0?false:true;
                    that.collectArt = msg.user_collect_start==0?false:true;
                })
            }
        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        components: { //定义组件

        },
        created() { //生命周期函数
            var that = this;
            this.routeChange();

        }
    }
</script>

<style>


.detailBox .article-content{
    font-size: 15px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
}
.detailBox .article-content p{
    margin:10px 0;
    line-height:24px;
    word-wrap: break-word;
    word-break: break-all;
}
.detailBox .article-content pre{
    word-wrap: break-word;
    word-break: break-all;
}
.detailBox .viewdetail{
    margin:10px 0 ;
    line-height: 24px;
    text-align: center;
}
/*分享图标*/
.dshareBox {
    margin-top:40px;
    position: relative;
}
.dshareBox a{
    position: relative;
    display: inline-block;
    width: 32px;
    height: 32px;
    font-size: 18px;
    border-radius: 50%;
    line-height: 32px;
    text-align: center;
    vertical-align: middle;
    margin: 4px;
    background: #fff;
    transition: background 0.6s ease-out;
}
.dshareBox .ds-weibo{
    border: 1px solid #ff763b;
    color: #ff763b;
}
.dshareBox .ds-weibo:hover{
    color: #fff;
    background: #ff763b;
}
.dshareBox .ds-qq{
    color: #56b6e7;
    border: 1px solid #56b6e7;
}
.dshareBox .ds-qq:hover{
    color: #fff;
    background: #56b6e7;
}
.dshareBox .ds-wechat{
    color: #7bc549;
    border: 1px solid #7bc549;
}
.dshareBox .ds-wechat:hover{
    color: #fff;
    background: #7bc549;
}
.dshareBox .ds-wechat:hover .wechatShare{
    opacity: 1;
    visibility: visible;
}
/*微信分享弹框*/
.dshareBox .wechatShare{
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top:-205px;
    left:-83px;
    width:200px;
    height:192px;
    color:#666;
    font-size: 12px;
    text-align: center;
    background: #fff;
    box-shadow: 0 2px 10px #aaa;
    transition: all 0.2s ease-in;
}
.dshareBox .wechatShare h4{
    height:26px;
    line-height: 26px;
    background: #f3f3f3;
    color: #777;
}
.dshareBox .wechatShare div{
    width: 105px;
    margin: 10px auto;
}
.dshareBox .wechatShare div img{
    width:100%;
}
.dshareBox .wechatShare p{
    line-height: 16px;
}
.dshareBox .wechatShare i{
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -6px;
    bottom: -13px;
    width: 0;
    height: 0;
    border-width: 8px 6px 6px 6px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
}
/*点赞 收藏*/
.dlikeColBox{
    display: inline-block;
    float:right;
}
.dlikeBox,.dcollectBox{
    display: inline-block;
    padding:0 10px;
    height:35px;
    color: #e26d6d;
    line-height: 35px;
    border-radius: 35px;
    border: 1px solid #e26d6d;
    cursor: pointer;
}

/*赞赏*/
.donate-word{
    margin:40px 0;
    text-align: center;
}
.donate-word span{
    display: inline-block;
    width:80px;
    height:34px;
    line-height: 34px;
    color:#fff;
    background: #e26d6d;
    margin:0 auto;
    border-radius: 4px;
    cursor: pointer;
}
.donate-body{
    display: none;
}
.donate-body-show{
    display: block;
}
.donate-item{
    text-align: center;
}
.donate-item img{
    width:100%;
    height:auto;
}
.donate-item div{
    margin:10px 0;
}
.donate-body .donate-item:first-of-type div{
    color:#44b549;
}
.donate-body .donate-item:nth-of-type(2) div{
    color:#00a0e9;
}
</style>

<template>
        <div class="detailBox tcommonBox">
            <span class="s-round-date">
                <span class="month">10月</span>
                <span class="day">17</span>
            </span>
            <header>
                <h1>
                    <a :href="'#/DetailShare?aid='+detailObj.id" target="_blank">
                        {{detailObj.title}}
                    </a>
                </h1>
                <h2>
                    <i class="fa fa-fw fa-user"></i>发表于 {{detailObj.create_time}} •
                    <i class="fa fa-fw fa-eye"></i>{{detailObj.browse_count}} 次围观 •
                    <i class="fa fa-fw fa-comments"></i>活捉 {{detailObj.comment_count}} 条 •
                    <span class="rateBox"><i class="fa fa-fw fa-heart"></i>{{detailObj.like_count?detailObj.like_count:0}}点赞</span>
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
                <div class="dlikeBox">
                    <i :class="likeArt?'fa fa-fw fa-heart':'fa fa-fw fa-heart-o'" @click="likeHandle"></i>喜欢 | {{likeCount}}
                </div>
            </div>
            <div class="donate">
                <div class="donate-word">
                    <span @click="pdonate=!pdonate">赞赏</span>
                </div>
                <el-row :class="pdonate?'donate-body':'donate-body donate-body-show'" :gutter="30">
                    <el-col  :span="8" :offset="4"  class="donate-item">
                        <img src="https://diygod.b0.upaiyun.com/2016-08-25_wxd.png" alt="">
                        <div class="donate-tip">
                            微信扫一扫，向我赞赏
                        </div>
                    </el-col>
                    <el-col :span="8"  class="donate-item">
                        <img src="https://diygod.b0.upaiyun.com/2016-08-25_wxd.png" alt="">
                        <div class="donate-tip">
                            支付宝扫一扫，向我赞赏
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
</template>

<script>
import {getArticleInfo} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                rateValue:2,
                pdonate:true,//打开赞赏控制,
                detailObj:'',
                likeArt:false,
                likeCount:400,
            }
        },
        methods: { //事件处理器
            likeHandle: function(msg){
                // console.log();
                var that = this;
                if(!that.likeArt){
                    that.likeCount+=1;
                    that.likeArt = true;
                }

            },
            routeChange:function(){
                var that = this;
                that.aid = that.$route.query.aid==undefined?1:parseInt(that.$route.query.aid);//获取传参的aid
                getArticleInfo(that.aid,function(msg){
                    console.log(msg);
                    that.detailObj = msg;
                    that.likeCount = msg.like_count?msg.like_count:0;
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
/*点赞*/
.dlikeBox{
    display: inline-block;
    padding:0 10px;
    height:40px;
    color: #e26d6d;
    line-height: 40px;
    border-radius: 40px;
    border: 1px solid #e26d6d;
    float:right;
}
.dlikeBox i{
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

<template>
    <div class="rightlistBox">
        <section >
            <div class="r1-head">
                <img src="src/img/snjz.jpg" alt="">
                <h1>
                    <span>网红</span>diygod
                </h1>
            </div>
            <div class="r1-body">
                <p>你能抓到我么？</p>
                <div class="catch-me">
                    <div class="">
                        <el-tooltip class="item" effect="dark" content="Github" placement="top">
                            <a href="https://github.com/Aimee1608" target="_blank"><i class="fa fa-fw fa-github"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="QQ" placement="top">
                            <a href="src/img/QQ.jpg" target="_blank"><i class="fa fa-fw fa-qq"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="微博" placement="top">
                            <a href="https://weibo.com/u/2242812941?refer_flag=1001030101_&is_all=1" target="_blank"><i class="fa fa-fw fa-weibo"></i></a>
                        </el-tooltip>
                    </div>
                    <div class="">
                        <el-tooltip class="item" effect="dark" content="微信公众号" placement="top">
                            <a href="src/img/erwm.jpg" target="_blank"><i class="fa fa-fw fa-wechat"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="CSDN" placement="top">
                            <a href="http://blog.csdn.net/Aimee1608" target="_blank"><i class="">C</i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="简历模板" placement="top">
                            <a href="#" target="_blank"><i class="fa fa-fw fa-file-code-o"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="更多" placement="top">
                            <a href="#/Aboutme" ><i class="el-icon-more"></i></a>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </section>
        <section :class="fixDo?'rs2 fixed':'rs2'" @click="lovemeFun">
            <p>
                Do you like me?
            </p>
            <div class="">
                <i :class="loveme?'heart active':'heart'"></i>
                <span>{{likeNum}}</span>
            </div>
        </section>
        <section></section>
        <section class="rs3" >
            <h2 class="ui label">
                这些人都排着队来跟我说话
            </h2>
            <ul class="rs3-textwidget">
                <li class="rs3-item" v-for="(item,index) in artCommentList" key="item">
                    <a :href="'#/DetailShare?aid='+item.id">
                        <div class="rs3-photo">
                            <img :src="item.avatar"  onerror="this.onerror=null;this.src='src/img/tou.jpg'">
                        </div>
                        <div class="rs3-inner">
                            <p class="rs3-author">{{item.nickname}} 在「{{item.title}}」中说:</p>
                            <p class="rs3-text">{{item.content}}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="rs4">
            <h2 class="ui label">
                大家都排队来看这些
            </h2>
            <ul>
                <li v-for="(item,index) in browseList" key="item">
                    <a href="#">{{item.title}}</a> —— {{item.browse_count}} 次围观
                </li>
            </ul>
        </section>
        <div :class="gotoTop?'toTop':'toTop goTop'" @click="toTopfun">
            <img src="src/img/long.png" alt="">
        </div>
    </div>
</template>


<script>
import {ShowBrowseCount,ShowArtCommentCount,showLikeData,GetLike} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                fixDo:false,
                loveme:false,
                gotoTop:false,
                going:false,
                browseList:'',
                artCommentList:'',
                likeNum:0,
                initLikeNum:0,
            }
        },
        methods: { //事件处理器
            //do you love me  点击
            lovemeFun:function(){
                var that = this;
                if(!this.loveme){
                    that.likeNum+=1;
                    GetLike(1,function(){
                    })
                }
                this.loveme = true;
                var timer = setTimeout(function(){
                    that.loveme = false;
                    clearTimeout(timer);
                },3000)
            },
            toTopfun:function(e){
                var that = this;
                this.gotoTop = false;
                this.going = true;
                var timer = setInterval(function(){
                      //获取滚动条距离顶部高度
                      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                      var ispeed = Math.floor(-osTop / 7);
                      document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
                      //到达顶部，清除定时器
                      if (osTop == 0) {
                          that.going = false;
                        clearInterval(timer);
                      };
                },30);
            },
        },
        components: { //定义组件

        },
        created() { //生命周期函数
            var that = this;
            window.onscroll = function(){
                 var t = document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(t);
                if(!that.going){
                    if(t>600){
                        that.gotoTop = true;
                    }else{
                        that.gotoTop = false;
                    }
                }
                if(t>1200){
                    that.fixDo = true;
                }else{
                    that.fixDo = false;
                }

            }
            //查询浏览量最多的10篇文章数据
            ShowBrowseCount(function(data){
                // console.log(data);
                that.browseList = data;
            });
            //查询文章评论量最大的10篇文章
            ShowArtCommentCount(function(data){
                // console.log(data);
                that.artCommentList = data;
            })
            showLikeData(function(data){
                that.likeNum = that.initLikeNum = data;
            })
        }
    }
</script>

<style>
.rightlistBox{
    position: relative;
}
.rightlistBox section {
    transition: all 0.2s linear;
    position: relative;
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
}
.rightlistBox section:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}
.rightlistBox .r1-head{
    text-align: center;
    border-radius: 4px 4px 0 0 ;
    text-align: center;
    position: relative;
    box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);
}
.rightlistBox .r1-head img{
    width:100%;
    min-height: 100px;
}
.rightlistBox .r1-head h1{
    position: absolute;
    bottom:5px;
    margin:0 0 0 -65px;
    font-size: 20px;
    letter-spacing:0.5px;
    color:#fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,.7);
    font-weight: 700;
    width:130px;
    left:50%;
}
.rightlistBox .r1-head h1 span{
    opacity: 0.2;
}
.rightlistBox .r1-body p{
    font-size: 14px;
    margin:5px 0 8px 0;
    font-weight: 700;
    text-align: center;
}
.rightlistBox .r1-body .catch-me{
    text-align: center;
}
.rightlistBox .r1-body .catch-me a{
    display: inline-block;
    margin-bottom: 7px;
    position: relative;
    text-decoration: none;
}
.rightlistBox .r1-body .catch-me a:hover i{
    color:#fff;
    background: #F4692C;
}
.rightlistBox .r1-body .catch-me a i{
    display: inline-block;
    font-size: 18px;
    width:42px;
    height:42px;
    line-height: 42px;
    border-radius: 42px;
    color:rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin:0 3.2px;
}

/*************do you like me*******************/
.rightlistBox .rs2{
    /*padding:10px 0 4px 0;*/
    min-height: 100px;
}
.rightlistBox .rs2.fixed{
    position: fixed;
    top:40px;
    width:22%;
}
.rightlistBox .rs2 p{
    color:#DF2050;
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top:10px;
}
.rightlistBox .rs2 div{
    color:#DF2050;
    cursor: pointer;
    text-align: center;
    font-size: 40px;
    position: absolute;
    width:100%;
    height:100px;
    line-height: 100px;
    left:0;
    top:30px;
}
.rightlistBox .rs2 div i.heart{
    display: inline-block;
    text-align: center;
    width: 100px;
      height: 100px;
     margin-left: -20px;
     margin-top:-5px;
      background: url(../../img/heart.png) no-repeat;
      background-position: 0 0;
      cursor: pointer;
      -webkit-transition: background-position 1s steps(28);
      transition: background-position 1s steps(28);
      -webkit-transition-duration: 0s;
      transition-duration: 0s;
      vertical-align: middle;
}
.rightlistBox .rs2 div i.heart:hover{
    transform: scale(1.15);
    -webkit-transform: scale(1.15);
}
.rightlistBox .rs2 div i.heart.active{
    -webkit-transition-duration: 1s;
        transition-duration: 1s;
        background-position: -2800px 0;
}
.rightlistBox .rs2 div span{
    margin-left: -30px;
}
/**********排队来说*************/
.rightlistBox .rs3 .rs3-item{
    font-size: 13px;
    line-height: 20px;
}
.rightlistBox .rs3 .rs3-item a{
    display:block;
    padding:5px;
    transition: all .3s ease-out;
    border-bottom: 1px solid #ddd;
    margin:5px 0;
}
.rightlistBox .rs3 .rs3-item a:hover{
    background: rgba(230,244,250,.5);
    border-radius: 5px;
}
.rightlistBox .rs3 .rs3-photo{
    float:left;
}
.rightlistBox .rs3 .rs3-photo img{
    border-radius: 50%;
    width:32px;
    height:32px;
}
.rightlistBox .rs3 .rs3-inner{
    margin-left: 40px;
}
.rightlistBox .rs3 .rs3-inner .rs3-author{
    font-weight: 700;
}
.rightlistBox .rs3 .rs3-inner .rs3-text{
    font-size: 12px;
    text-align: justify;
}
.rightlistBox .rs3 .rs3-item:last-child a{
    border-bottom: none;
}
/************排队看这些***************/
.rightlistBox .rs4 li{
    padding:8px 0;
    text-align: justify;
}
.rightlistBox .rs4 li a{
    font-weight: 600;
}
.rightlistBox .rs4 li a:hover{
    color:#64609E;
}


/*回到顶部*/
/*返回到顶部*/
.toTop{
    position: fixed;
    right:40px;
    top:-360px;
    z-index: 99;
    width:100px;
    height:900px;
    transition: all .5s ease-in-out;
    cursor: pointer;
}
.goTop{
    top:-900px;
}
.toTop img{
    width:100%;
    height:100%;
}
</style>

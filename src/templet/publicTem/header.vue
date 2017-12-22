<template>
    <div class="">
        <div class="headBack">
            <el-row class="container">
                <el-col :span="24">
                    <div class="headBox">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
                            <el-menu-item index="/Home">首页</el-menu-item>
                            <el-submenu index="/Share">
                              <template slot="title">分类</template>
                              <el-menu-item v-for="(item,index) in classList" key="item.class_id" :index="'/Share?classId='+item.class_id" >{{item.cate_name}}</el-menu-item>
                              <!-- <el-menu-item index="/Share?classId=2">闲言碎语</el-menu-item>
                              <el-menu-item index="/Share?classId=3">事件簿</el-menu-item>
                              <el-menu-item index="/Share?classId=4">创作集</el-menu-item> -->
                            </el-submenu>
                            <el-submenu index="/Aboutme">
                              <template slot="title">实验室</template>
                              <el-menu-item index="">H5作品集</el-menu-item>
                              <el-menu-item index="">美食美荟网站</el-menu-item>
                              <el-menu-item index="">美食美荟小程序</el-menu-item>
                              <el-menu-item index="">简历模板</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="/Reward">赞赏</el-menu-item>
                            <el-menu-item index="/Friendslink">伙伴</el-menu-item>
                            <el-menu-item index="/Message">留言板</el-menu-item>
                            <el-menu-item index="/Aboutme">关于</el-menu-item>
                            <div index="" class="pcsearchbox">
                                <i class="el-icon-search pcsearchicon"></i>
                                <div class="pcsearchinput">
                                    <el-input
                                      placeholder="搜索"
                                      icon="search"
                                      v-model="input"
                                      :on-icon-click="pchandleIconClick">
                                    </el-input>
                                </div>
                            </div>
                            <div class="userInfo">
                                <div v-show="!haslogin" class="nologin">
                                    <a href="javascript:void(0);" @click="logoinFun(1)">登录&nbsp;</a>|<a href="javascript:void(0);" @click="logoinFun(0)">&nbsp;注册</a>
                                </div>
                                <div v-show="haslogin" class="haslogin">
                                    <i class="fa fa-fw fa-user-circle userImg"></i>
                                    <ul class="haslogin-info">
                                        <li>
                                            <a href="#/UserInfo">个人中心</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" @click="userlogout">退出登录</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </el-menu>
                    </div>
                    <div class="mobileBox">
                        <div class="hideMenu">
                            <i @click="pMenu=!pMenu" class="el-icon-menu"></i>
                            <el-collapse-transition>
                               <el-menu :default-active="activeIndex" class="mlistmenu" v-show="!pMenu"  theme="dark" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true" >
                                     <el-menu-item index="/Home">首页</el-menu-item>
                                     <el-submenu index="/Share" >
                                         <template slot="title">分类</template>
                                         <el-menu-item v-for="(item,index) in classList" :index="'/Share?classId='+item.class_id" >{{item.cate_name}}</el-menu-item>
                                         <!-- <el-menu-item index="/Share?classId=2">闲言碎语</el-menu-item>
                                         <el-menu-item index="/Share?classId=3">事件簿</el-menu-item>
                                         <el-menu-item index="/Share?classId=4">创作集</el-menu-item> -->
                                     </el-submenu>
                                     <el-submenu index="2">
                                       <template slot="title">实验室</template>
                                           <el-menu-item index="/Home">H5作品集</el-menu-item>
                                           <el-menu-item index="/Home">美食美荟网站</el-menu-item>
                                           <el-menu-item index="/Home">美食美荟小程序</el-menu-item>
                                           <el-menu-item index="/Home">简历模板</el-menu-item>
                                     </el-submenu>
                                     <el-menu-item index="/Reward">赞赏</el-menu-item>
                                     <el-menu-item index="/Friendslink">伙伴</el-menu-item>
                                     <el-menu-item index="/Message">留言板</el-menu-item>
                                     <el-menu-item index="/Aboutme">关于</el-menu-item>
                                     <el-menu-item v-show="!haslogin" index="" @click="logoinFun(1)">登录</el-menu-item>
                                     <el-menu-item v-show="!haslogin" index="" @click="logoinFun(0)">注册</el-menu-item>
                                     <el-menu-item v-show="haslogin" index="/UserInfo">个人中心</el-menu-item>
                                     <el-menu-item v-show="haslogin" index="" @click="userlogout">退出登录</el-menu-item>
                                </el-menu>
                            </el-collapse-transition>
                            <div class="searchBox">
                                <el-input
                                  placeholder=""
                                  icon="search"
                                  v-model="input"
                                  :on-icon-click="pchandleIconClick">
                                </el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="headImgBox" :style="{backgroundImage:headBg}">
            <div class="h-information">
                <a href="#">
                    <img src="../../img/head.jpg" alt="">
                </a>
                <h2 class="h-description">
                    <a href="#">
                        Write the Code. Change the World.
                    </a>
                </h2>
            </div>
        </div>
    </div>
</template>
<script>
    import {ArtClassData} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                userInfo:'',
                haslogin:false,
                classList:'',
                activeIndex: '/',
                state: '',//icon点击状态
                pMenu:true,//手机端菜单打开
                // path:'',//当前打开页面的路径
                input:'',//input输入内容
                headBg:'url(src/img/headbg05.jpg)'
            }
        },
        watch:{

        },
        methods: { //事件处理器
            handleOpen(key, keyPath) {//分组菜单打开
               console.log(key, keyPath);
             },
            handleClose(key, keyPath) {//分组菜单关闭
               console.log(key, keyPath);
            },
            pchandleIconClick(ev) {//pc搜索
                if(this.input){
                    this.$router.push({path:'/Share?keywords='+this.input});
                }

            },
            handleSelect(key, keyPath) {//pc菜单选择
                //    console.log(key, keyPath);
            },

            handleIconClick(ev) {//搜索
                    //   console.log(this.state);
                      if(this.state!=""&&this.state!=undefined&&this.state!=null){
                            this.$router.push({path:'/Foodlist?keywords='+this.state});
                      }
            },
            logoinFun: function(msg){//用户登录和注册跳转
                // console.log(msg);
                sessionStorage.setItem('logUrl',this.$route.fullPath);
                // console.log(666,this.$router.currentRoute.fullPath);
                if(msg==0){
                    this.$router.push({path:'/Login?login=0'});
                }else{
                    this.$router.push({path:'/Login?login=1'});
                }
            },
            // 用户退出登录
            userlogout:function(){
                var that = this;
                this.$confirm('是否确认退出?', '退出提示', {
                     confirmButtonText: '确定',
                     cancelButtonText: '取消',
                     type: 'warning'
                   }).then(() => {
                       if(sessionStorage.getItem('userInfo')){
                           sessionStorage.removeItem('userInfo');
                           that.haslogin = false;
                           that.$router.replace({path:that.$route.fullPath});
                           this.$message({
                             type: 'success',
                             message: '退出成功!'
                           });
                       }


                   }).catch(() => {
                    //
                   });

            },
            routeChange :function(){
                var that = this;
                this.activeIndex = this.$route.path=='/'?'/Home':this.$route.path;
                // console.log(this.$router,this.$route);
                if(sessionStorage.getItem('userInfo')){
                    that.haslogin = true;
                    that.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                    console.log(that.userInfo);
                }else{
                    that.haslogin = false;
                }
                ArtClassData(function(msg){
                    // console.log(msg);
                    that.classList = msg;
                })
            }


        },
        mounted() {

        },
        components: { //定义组件

        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        created() { //生命周期函数
            this.routeChange();

        }
    }
</script>

<style>
/*********头部导航栏********/
/*头部导航栏盒子*/
.headBack{
    width:100%;
    background:rgba(40,42,44,0.6);
    /*margin-bottom:30px;*/
    box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
    position: fixed;
    left:0;
    top:0;
    right:0;
    z-index: 100;
}

.headBox li.is-active{
    /*background: #48456C;*/
    background:rgba(73,69,107,0.7);
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom:none;
}
.headBox .el-menu{
    background:transparent;
    border-bottom:none;
}
.headBox .el-menu-demo li.el-menu-item,.headBox .el-menu--horizontal .el-submenu .el-submenu__title{
    height:38px;
    line-height:38px;
    border-bottom: none;

}
.headBox .el-submenu li.el-menu-item{
    height:38px;
    line-height:38px;
}
.headBox ul li.el-menu-item,.headBox ul li.el-menu-item.is-active,.headBox ul li.el-menu-item:hover,.headBox .el-submenu  div.el-submenu__title,.headBox .el-submenu__title i.el-submenu__icon-arrow{
    color:#fff;
}

.headBox .el-menu--horizontal .el-submenu>.el-menu{
    top:38px;
    border:none;
    padding:0;
}


.headBox>ul li.el-menu-item:hover,.headBox>ul li.el-submenu:hover .el-submenu__title{
    background:#48456C;
    border-bottom: none;
}
.headBox>ul .el-submenu .el-menu,.headBox>ul .el-submenu .el-menu .el-menu-item{
    background:#48456C;
}
.headBox>ul .el-submenu .el-menu .el-menu-item{
    min-width:0;
}
.headBox>ul .el-submenu .el-menu .el-menu-item:hover{
    background: #64609E;
}
/*pc搜索框*/
.headBox .pcsearchbox{
    padding: 0;
    max-width: 170px;
    /*min-width: 30px;*/
    height:100%;
    line-height: 38px;
    position: absolute;
    top:0;
    right:0;
}
.headBox .pcsearchbox:hover .pcsearchinput{
    opacity: 1;
    /*transform: scaleX(1);*/
    visibility: visible;
}
.headBox .pcsearchbox i.pcsearchicon{
    color:#fff;
    padding-left: 10px;
}
.headBox .pcsearchbox .pcsearchinput{
    width:180px;
    padding:10px 20px 10px 20px;
    background: rgba(40,42,44,0.6);
    border-radius: 0 0 2px 2px;
    position: absolute;
    right:0;
    top:38px;
    opacity: 0;
    visibility: hidden;
    /*transform: scaleX(0);*/
    transform-origin: right;
    transition: all 0.3s ease-out;
}
.headBox .pcsearchbox .el-input{
    width: 100%;
}
.headBox .el-input__inner{
    height:30px;
    border: none;
    background:#fff;
    /*border: 1px solid #333;*/
    border-radius: 2px;
    padding-right: 10px;
}

.headBox .userInfo{
    height:100%;
    line-height: 38px;
    position: absolute;
    right:30px;
    top:0;
    color:#fff;
}
.headBox .userInfo a{
    color:#fff;
    font-size: 13px;
    transition: all 0.2s ease-out;
}
.headBox .userInfo a:hover{
    color:#48456C;
}
.headBox .nologin{
    text-align: right;
}
.headBox .haslogin {
    text-align: right;
    position: relative;
    min-width: 80px;
}
.headBox .haslogin:hover ul{
    visibility: visible;
    opacity: 1;
}
.headBox .haslogin  ul{
    background: rgba(40,42,44,0.6);
    padding:5px 10px;
    position: absolute;
    right:0;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-out;
}
.headBox .haslogin  ul li:first-child{
    border-bottom: 1px solid #48456C;
}

/*******移动端*******/
.mobileBox{
    position: relative;
    height:38px;
    line-height: 38px;
}
.hideMenu{
    position: relative;
    width:100%;
    height:100%;
    line-height: 38px;
}

.hideMenu ul.mlistmenu{
    width:100%;
    position: absolute;
    left:0;
    top:100%;
    box-sizing: border-box;
    z-index: 999;
    box-shadow:0 2px 6px 0 rgba(0,0,0,.12),0 0 8px 0 rgba(0,0,0,.04);
    background:#48456C;
    color:#fff;
    border-right: none;
}
.hideMenu .el-submenu .el-menu{
    background:#64609E;
}
.hideMenu .el-menu-item, .hideMenu .el-submenu__title{
    color:#fff;
}
.hideMenu>i{
    position: absolute;
    left:10px;top:12px;
    width:30px;
    height:30px;
    font-size: 16px;
    color:#fff;
    cursor: pointer;
}
.hideMenu .el-menu-item, .el-submenu__title{
    height: 40px;
    line-height: 40px;
}
.mobileBox .searchBox{
    padding-left: 40px;
    width: 100%;
    box-sizing: border-box;
}
.mobileBox .searchBox .el-input__inner{
    display: block;
    border-radius: 2px;
    border:none;
    height:25px;
}
.hideMenu ul.mlistmenu.pshow{
    display: block;
}
.hideMenu ul.mlistmenu .el-submenu__icon-arrow{
    color:#fff;
}

.hideMenu>ul li.el-menu-item:hover,.hideMenu>ul li.el-menu-item.is-active{
    background: #48576a;
}



/*头部背景图*/
.headImgBox{
    height:650px;
    position: relative;
    width:100%;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
    margin-bottom:90px;
}
.h-information{
    text-align: center;
    width:70%;
    margin:auto;
    position: relative;
    top:480px;
    padding:40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(230,244,249,0.8);
    border-radius: 5px;
    z-index: 1;
    animation: b 1s ease-out;
    -webkit-animation: b 1s ease-out;
}
@-webkit-keyframes b{
    0%{-webkit-transform:translateY(90px);transform:translateY(90px);}
    80%{-webkit-transform:translateY(5px);transform:translateY(5px)}
    90%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}
    to{-webkit-transform:translateY(0);transform:translateY(0)}
}
@keyframes b{
    0%{-webkit-transform:translateY(90px);transform:translateY(90px);}
    80%{-webkit-transform:translateY(5px);transform:translateY(5px)}
    90%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}
    to{-webkit-transform:translateY(0);transform:translateY(0)}
}

.h-information img{
    width:100px;
    height:100px;
    border-radius: 100%;
}
.h-information h2{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
}


</style>

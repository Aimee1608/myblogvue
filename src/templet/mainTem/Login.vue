<template>
    <div class="container">
        <h1 class="loginTitle"><a href="#/">Aimee 的博客</a></h1>
        <div v-if="login==1" class="loginBox">
            <div class="lr-title">
                <h1>登录</h1>
                <p>
                    新用户<a href="#/Login?login=0" class="tcolors">注册</a>
                </p>
            </div>
            <el-input
                placeholder="邮箱"
                v-model="email">
            </el-input>
            <el-input
                    type="password"
                  placeholder="密码"
                  v-model="password">
            </el-input>
            <h3><a href="#">忘记密码？</a></h3>
            <div class="lr-btn tcolors-bg" @click="gotoHome">登录</div>
            <div class="otherLogin">
                <a href="#"><i class="fa fa-fw fa-wechat"></i></a>
                <a href="#"><i class="fa fa-fw fa-qq"></i></a>
                <a href="#"><i class="fa fa-fw fa-weibo"></i></a>
            </div>
        </div>
        <div v-else class="registerBox">
            <div class="lr-title">
                <h1>注册</h1>
                <p>
                    已有账号<a href="#/Login?login=1" class="tcolors">登录</a>
                </p>
            </div>
            <el-input
                placeholder="用户名"
                v-model="nusername">
            </el-input>
            <el-input
                placeholder="邮箱"
                v-model="nemail">
            </el-input>
            <el-input
                    type="password"
                  placeholder="密码"
                  v-model="npassword">
            </el-input>
            <div class="lr-btn tcolors-bg">注册</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                username:'',
                email:'',
                password:'',
                nusername:'',
                nemail:'',
                npassword:'',
                login:0
            }
        },
        methods: { //事件处理器
            routeChange:function(){
                var that = this;
                that.login = (that.$route.query.login==undefined?1:parseInt(that.$route.query.login));//获取传参的classId
                console.log(that.classId);

            },
            gotoHome:function(){
                var that = this;
                that.$router.push({path:'/'});

            }
        },
        components: { //定义组件

        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        created() { //生命周期函数

            var that = this;
            that.routeChange();
        }
    }
</script>

<style>
.loginTitle{
    text-align: center;
    font-size: 26px;
    margin-top:50px;
    margin-bottom: 20px;
}
.loginBox ,.registerBox{
    background: #fff;
    padding:40px;
    width:320px;
    margin:0 auto;
}
.loginBox{
    padding-bottom:0;
}
.lr-title{
    position: relative;
    height:32px;
    line-height: 32px;
    margin-bottom: 20px;
}
.lr-title h1{
    font-size: 24px;
    color:#666;
    font-weight: bold;
    /*width:50%;*/
}
.lr-title p{
    font-size: 12px;
    color:#999;
    position: absolute;
    right:0;
    top:0;
}
.lr-btn{
    color:#fff;
    text-align: center;
    letter-spacing: 5px;
    padding:8px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
}
.loginBox .el-input,.registerBox .el-input{
    margin-bottom: 20px;
}
.loginBox .el-input input,.registerBox .el-input input{
    border-radius: 4px;
}
.loginBox h3,.registerBox h3{
    text-align: right;
    margin-bottom: 20px;
}
.loginBox h3 a,.registerBox h3 a{
    font-size: 13px;
    color:#999;
}
.loginBox .otherLogin{
    width:320px;
    padding:30px 40px;
    background: #ddd;
    text-align: center;
    margin-left:-40px;
}
.loginBox .otherLogin a i{
    display: inline-block;
    width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 18px;
    border-radius: 50%;
    color:#fff;
    margin: 0 10px;
}
.loginBox .otherLogin a i.fa-wechat{
    background: #7bc549;
}
.loginBox .otherLogin a i.fa-qq{
    background: #56b6e7;
}
.loginBox .otherLogin a i.fa-weibo{
    background: #ff763b;
}
</style>

<template>
    <div class="footBack">
        <div class="footer-img">

        </div>
        <div class="fcontainer">
            <p>
                博客已萌萌哒运行<span>1355天23小时47分57秒</span><span>(●'◡'●)ﾉ♥</span>
            </p>
            <p>
                托管于 <a href="https://github.com/Aimee1608/myblogvue" target="_blank">GitHub</a>. <a href="https://www.aliyun.com/?spm=a2c49.11131515.0.0.5Z9AkR" target="_blank">阿里云</a> 提供静态文件云存储服务. <a href="https://tongji.baidu.com/web/welcome/login" target="_blank">百度统计</a> 提供网站统计服务. <a href="https://www.cloudxns.net/Order/index.html" target="_blank">CloudXNS</a> 提供 DNS 解析服务.
            </p>
            <p>
                © 2018 <a href="#">Mango Ya</a>. 由 <a href="https://cn.vuejs.org/" target="_blank">Vue</a> 强力驱动. Theme By <a href="#">diygod.me</a>. 京ICP备17071595号.
            </p>
            <p>
                <span>Made with</span> <img class="fheart" src="src/img/heart02.png"/>  <span>by Aimee.</span>
            </p>
        </div>
    </div>

</template>

<script>
    export default {
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件

        },
        created() { //生命周期函数

        }
    }
</script>

<style>
.footBack{
    color:#888;
    margin-top: -10px;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    width:100%;
    min-height: 50px;
    margin-top:300px;
    /*position: relative;*/
    position: absolute;
    /*min-height: 368px;*/
}
.footBack .fcontainer{
    width:100%;
    background: #232323;
    /*top:294px;*/
    /*left:0;*/
    /*position: absolute;*/
    padding:15px 0 10px 0;
    /*z-index: 1;*/
    width: 100!important;
}
.footBack .footer-img{
    background:url(../../img/footer01.png) no-repeat 50%;
    height:368px;
    z-index: 1;
    position: absolute;
    width:100%;
    bottom:50px;
    pointer-events:none;
}
.footBack p{
    margin:5px 0;
    z-index: 3;
}
.footBack a{
    color:#795548;
    z-index: 3;
}
.footBack a:hover{
    color:#000;
}
.footBack .fheart{
    width:25px;
    height:25px;
    margin-top:-10px;
    top:5px;
    position: relative;
    /*padding-top:0px;*/
    vertical-align: baseline;
    -webkit-animation: heartScale 1.33s ease-in-out infinite;
    animation: heartScale 1.33s ease-in-out infinite;
}
@keyframes heartScale {
    0%{transform: scale(1)}
    50%{transform: scale(0.8)}
    100%{transform: scale(1)}
}
</style>

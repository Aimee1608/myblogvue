<template>
    <div class="footBack">
        <div class="footer-img">

        </div>
        <div class="fcontainer">
            <p>
                博客已萌萌哒运行<span>1355天23小时47分57秒</span><span>(●'◡'●)ﾉ♥</span>
            </p>
            <p>
                托管于 <a href="#">腾讯云</a>. <a href="#">又拍云</a> 提供静态文件云存储服务. <a href="#">Google Analytics</a> 提供网站统计服务. <a href="#">CloudXNS</a> 提供 DNS 解析服务.
            </p>
            <p>
                © 2017 <a href="#">Anotherhome</a>. 由 <a href="#">Wordpress</a> 强力驱动. Theme By <a href="#">Amativeness</a>. <a href="#">站点地图</a>. 鲁ICP备16000184号.
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
    position: relative;
    min-height: 368px;
}
.footBack .fcontainer{
    width:100%;
    background: #232323;
    top:294px;
    left:0;
    position: absolute;
    padding:15px 0 10px 0;
    z-index: 1;
    width: 100!important;
}
.footBack .footer-img{
    background:url(../../img/footer01.png) no-repeat 50%;
    height:368px;
    z-index: 2;
    position: absolute;
    width:100%;
}
.footBack p{
    margin:5px 0;
}
.footBack a{
    color:#888;
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

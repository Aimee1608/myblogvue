<template>
        <div class="detailBox tcommonBox">
            <span class="s-round-date">
                <span class="month">10月</span>
                <span class="day">17</span>
            </span>
            <header>
                <h1>
                    <a href="#/DetailShare" target="_blank">
                        bilibili2RSS — 使用 RSS 订阅 bilibili up主和番剧
                    </a>
                </h1>
                <h2>
                    <i class="el-icon-star-off"></i>发表于 2017年10月17日 • <i class="el-icon-date"></i>553 次围观 • <i class="el-icon-edit"></i>活捉 11 条 •   <span class="rateBox"><el-rate v-model="rateValue"></el-rate>4.75分（4票）</span>
                </h2>
                <div class="ui label">
                    <a href="#">创作集</a>
                </div>
            </header>
            <div class="article-content">
                <p>
                    作为一种过气技术，提供 RSS 订阅源的网站越来越少，每个网站都想把用户尽可能长时间地绑在自己那里，而 RSS 可能会造成负面效果
                </p>
                <p>
                    但在这个内容爆炸时代，只要意识到了「我被信息所绑架」这个问题后，用户自然会想要一种更高级的聚合信息和动态更新解决方案，比如 RSS
                </p>
                <p>
                    这里提供了使用 RSS 订阅 bilibili up主和番剧的解决方案
                </p>
                <p>
                    订阅up主：<a href="">https://api.prprpr.me/bilibili2rss/user/6997378</a>
                </p>
                <p>
                    订阅番剧：<a href="">https://api.prprpr.me/bilibili2rss/user/6997378</a>
                </p>
                <p>
                    项目名叫 bilibili2RSS，开源在 <a href="#">GitHub</a>
                </p>
                <p>
                    另外可以使用相关项目 <a href="#">Weibo2RSS</a> 订阅喜欢的微博博主
                </p>
                <p>
                    Enjoy!
                </p>
            </div>
            <div class="dshareBox">
                分享到:
                <a href="#" class="ds-weibo"></a>
                <a href="#" class="ds-qq"></a>
                <a href="#" class="ds-wechat"></a>
                <a href="#" class="ds-qzone"></a>
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
                            微信扫一扫，向我赞赏
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                rateValue:2,
                pdonate:true,//打开赞赏控制
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

.tcommonBox  header h2 .el-rate,.rateBox{
    display:inline-block;
}
.tcommonBox  header h2 .el-rate i{
    font-size: 16px;
}
.detailBox .article-content{
    font-size: 15px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
}
.detailBox .article-content p{
    margin:10px 0;
    line-height:24px;
}
.detailBox .viewdetail{
    margin:10px 0 ;
    line-height: 24px;
    text-align: center;
}
/*分享图标*/
.dshareBox {
    margin-top:40px;
}
.dshareBox a{
    position: relative;
    display: inline-block;
    width:32px;
    height:32px;
    font-size: 20px;
    border-radius: 50%;
    line-height: 32px;
    border: 1px solid #666;
    text-align: center;
    vertical-align: middle;
    margin:4px;
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

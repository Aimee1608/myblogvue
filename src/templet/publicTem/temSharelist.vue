<template>
    <el-row class="sharelistBox">
        <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in 10" key="item">
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
                    <i class="el-icon-star-off"></i>发表于<i class="el-icon-time"></i> 2017年10月17日 • <i class="el-icon-date"></i>553 次围观 • <i class="el-icon-edit"></i>活捉 11 条
                </h2>
                <div class="ui label">
                    <a href="#/Share">创作集</a>
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
            <div class="viewdetail">
                <a href="#/DetailShare" target="_blank">
                    阅读全文>>
                </a>
            </div>
        </el-col>
        <el-col class="viewmore">
            <a href="#/Share">点击加载更多</a>
        </el-col>
    </el-row>
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
    .sharelistBox{
        transition: all 0.5s ease-out;
        font-size: 15px;
    }
    .s-item .article-coontent{
        font-size: 15px;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
    }
    .s-item .article-content p{
        margin:10px 0;
        line-height:24px;
    }
    .s-item .viewdetail{
        margin:10px 0 ;
        line-height: 24px;
        text-align: center;
    }
    .s-item .viewdetail a{
        background-color: #97dffd;
        color:#fff;
        font-size: 12px;
        padding:5px 10px;
        border-radius: 5px;
    }
    .sharelistBox .viewmore{
        text-align: center;
        width:100%;
    }
    .sharelistBox .viewmore a{
        background:  #97dffd;
        /*padding:6px 0;*/
        border-radius: 5px;
        text-align: center;
        font-size: 14px;
        color:#fff;
        height:30px;
        line-height: 30px;
        display: block;
    }
    .sharelistBox .viewmore a:hover,.s-item .viewdetail a:hover{
        background: #48456C;
    }
</style>

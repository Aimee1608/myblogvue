<template>
    <div class="tMSGbox tcommonBox">
        <header>
            <h1>
                <a href="#/DetailShare" target="_blank">
                    留言板
                </a>
            </h1>

        </header>
        <section>
            <h2>走过路过不要错过！交流、咨询、吐槽、感叹、勾搭都在这里，尽情畅谈！</h2>
            <div class="">
                <img src="src/img/timg.jpg"  alt="">
            </div>
        </section>
    </div>
</template>

<script>
import {ArticleComment} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                rateValue:2,
                aid:'',
                comid:0,
            }
        },
        methods: { //事件处理器
            routeChange:function(){
                var that = this;
                that.aid = that.$route.query.aid==undefined?1:parseInt(that.$route.query.aid);//获取传参的aid
                ArticleComment(that.aid,that.comid,function(msg){
                    console.log(msg);
                    that.detailObj = msg;
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
    .tMSGbox section h2{
        font-weight: bold;
        line-height: 24px;
    }
    .tMSGbox section div{
        margin:15px 0;
    }
</style>

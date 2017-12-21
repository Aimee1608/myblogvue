<template>
    <div class="tMSGbox tcommonBox">
        <header>
            <h1>
                <a href="#/DetailShare" target="_blank">
                    留言板
                </a>
            </h1>
            <h2>
                <i class="el-icon-star-off"></i>发表于 2017年10月17日 • <i class="el-icon-date"></i>553 次围观 • <i class="el-icon-edit"></i>活捉 11 条•   <span class="rateBox"><el-rate v-model="rateValue"></el-rate>4.75分（4票）</span>
            </h2>
        </header>
        <section>
            <h2>有什么话要对我说吗？这里是你畅所欲言的地方，可以咨询，可以交流，可以感叹，可以发飙，但不可以订外卖。</h2>
            <div class="">
                <img src="src/img/message0.jpg" alt="">
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

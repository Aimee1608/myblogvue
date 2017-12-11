<template>

    <el-row class="sharelistBox">
        <div v-if="this.$route.name=='Share'" class="shareTitle">
            <div class="ui label" >
                <a  :href="'#/Share?classId='+classId">{{className}}</a>
            </div>
            <ul v-if="className=='技术分享'" class="shareclassTwo" >
                <li v-for="(citem,index) in shareClass[0].detshare">
                    <a :href="'#/Share?classId='+classId+'&classtwoId='+citem.classId" :class="citem.classId==classtwoId?'active':''">{{citem.name}}</a>
                </li>
            </ul>
        </div>
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
                <a class="tcolors-bg" href="#/DetailShare" target="_blank">
                    阅读全文>>
                </a>
            </div>
        </el-col>
        <el-col class="viewmore">
            <a class="tcolors-bg" href="#/Share">点击加载更多</a>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name:'Share',
        data() { //选项 / 数据
            return {
                classId:1,
                className:'',
                classtwoId:5,
                keywords:'',
                shareClass:[
                    {classId:1,name:'技术分享',detshare:[
                        {classId:5,name:'移动端H5',pid:1},
                        {classId:6,name:'pc端web',pid:1},
                        {classId:7,name:'小程序',pid:1},
                        {classId:8,name:'php',pid:1},
                        {classId:9,name:'nodejs',pid:1},
                        {classId:10,name:'软件',pid:1},
                        {classId:11,name:'其他',pid:1}
                    ]},
                    {classId:2,name:'闲言碎语'},
                    {classId:3,name:'事件簿'},
                    {classId:4,name:'创作集'}
                ],
                queryClass:1
            }
        },
        methods: { //事件处理器
            // showSearchShowList:function(initpage){//展示数据
            //     this.classId = (this.$route.query.classId==undefined?'':parseInt(this.$route.query.classId));//获取传参的classId
            //     this.keywords = this.$route.query.keywords==undefined?'':this.$route.query.keywords;//获取传参的keywords
            //     // console.log(this.$route.query,this.classId,this.keywords,this.pageId,initpage);
            //     if(initpage){
            //         this.pageId=0;
            //         this.temCardList = [];
            //     }
            //     searchShowList(this.pageId,this.keywords,this.classId,(result)=>{
            //         if(result.code==1001){
            //             var msg = result.data;
            //             // console.log(result.data);
            //             if(msg.length>0&&msg.length<8){
            //                 this.hasMore = false
            //             }else{
            //                 this.hasMore = true;
            //             }
            //             if(initpage==0){
            //                 this.temCardList = this.temCardList.concat(msg);
            //             }else{
            //                 this.temCardList = msg;
            //             }
            //             this.pageId = msg[msg.length-1].id;
            //             // console.log(this.temCardList);
            //         }else if(result.code==1003){
            //             this.hasMore = false;
            //         }
            //     })
            // },
            // addMoreFun:function(){//查看更多
            //     this.showSearchShowList(false);
            // },
            // routeChange:function(ifif){
            //     this.showSearchShowList(true);
            // }
            routeChange:function(){
                var that = this;
                that.classId = that.$route.query.classId==undefined?'':parseInt(that.$route.query.classId);//获取传参的classId
                that.keywords = that.$route.query.keywords==undefined?'':that.$route.query.keywords;//获取传参的keywords
                that.classtwoId = that.$route.query.classtwoId==undefined?'':parseInt(that.$route.query.classtwoId);
                console.log(that.classId);
                for(var i=0;i<that.shareClass.length;i++){
                    if(that.classId==that.shareClass[i].classId){
                        that.className = that.shareClass[i].name;
                    }
                }
            }
        },
        components: { //定义组件

        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        created() { //生命周期函数
            this.classId = (this.$route.query.classId==undefined?'':parseInt(this.$route.query.classId));//获取传参的classId
            this.keywords = this.$route.query.keywords==undefined?'':this.$route.query.keywords;//获取传参的keywords
            // classList((msg)=>{//分类列表
            //     this.classList = msg;
            //     // console.log(msg);
            // });
            // this.showSearchShowList(true);
            console.log(this.$route);
            var that = this;
            that.routeChange();
        }
    }
</script>

<style>
/*分享标题*/
.shareTitle{
    margin-bottom: 40px;
    position: relative;
    border-radius: 5px;
    background: #fff;
    padding:15px;
}
.shareclassTwo{
    width:100%;
}
.shareclassTwo li{
    display: inline-block;
}
.shareclassTwo li a{
    display: inline-block;
    padding:3px 7px;
    margin:5px 10px;
    color:#fff;
    border-radius: 4px;
    background: #64609E;
    border: 1px solid #64609E;
    transition: transform 0.2s linear;
    -webkit-transition: transform 0.2s linear;
}
.shareclassTwo li a:hover{
    transform: translate(0,-3px);
    -webkit-transform: translate(0,-3px);
}
.shareclassTwo li a.active{
    background: #fff;
    color:#64609E;

}
/*文章列表*/
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
        /*background-color: #97dffd;*/
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
        /*background:  #97dffd;*/
        /*padding:6px 0;*/
        border-radius: 5px;
        text-align: center;
        font-size: 14px;
        color:#fff;
        height:30px;
        line-height: 30px;
        display: block;
    }
    /*.sharelistBox .viewmore a:hover,.s-item .viewdetail a:hover{
        background: #48456C;
    }*/
</style>

<template>
    <div>
        <div class="container">
            <el-row>
                <div class="likeBoxTitle">
                    <h1 v-show="like==1"><i class="fa fa-wa fa-heart"></i>喜欢的文章</h1>
                    <h1 v-show="like!=1"><i class="fa fa-wa fa-star"></i>收藏的文章</h1>
                </div>
                <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in articleList" key="item">
                    <span class="s-round-date">
                        <span class="month">{{showInitDate(item.create_time,'month')}}月</span>
                        <span class="day">{{showInitDate(item.create_time,'date')}}</span>
                    </span>
                    <header>
                        <h1>
                            <a :href="'#/DetailShare?aid='+item.id" target="_blank">
                                {{item.title}}
                            </a>
                        </h1>
                        <h2>
                            <i class="fa fa-fw fa-user"></i>发表于
                            <i class="fa fa-fw fa-clock-o"></i>{{showInitDate(item.create_time,'all')}} •
                            <i class="fa fa-fw fa-eye"></i>{{item.browse_count}} 次围观 •
                            <i class="fa fa-fw fa-comments"></i>活捉 {{item.comment_count}} 条 •
                            <span class="rateBox">
                                <i class="fa fa-fw fa-heart"></i>{{item.like_count?item.like_count:0}}点赞 •
                                <i class="fa fa-fw fa-star"></i>{{item.collect_count?item.collect_count:0}}收藏
                            </span>
                        </h2>
                        <!-- <div class="ui label">
                            <a :href="'#/Share?classId='+item.class_id">{{item.cate_name}}</a>
                        </div> -->
                    </header>
                    <div class="article-content">
                        <p>
                            {{item.description}}
                        </p>
                        <p>
                            <img :src="'http://'+item.image" alt="" class="fitImg">
                        </p>
                    </div>
                    <div class="viewdetail">
                        <a class="tcolors-bg" href="javascript:void(0);" @click="cancelLikeCollect(item.id)">取消{{like==1?'喜欢':'收藏'}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a class="tcolors-bg" :href="'#/DetailShare?aid='+item.id" target="_blank">
                            阅读全文>>
                        </a>
                    </div>
                </el-col>
                <el-col class="viewmore">
                    <a v-show="hasMore" class="tcolors-bg" href="javascript:void(0);" @click="addMoreFun">点击加载更多</a>
                    <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);">暂无更多数据</a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {ShowArticleAll,initDate,getLikeCollectList,getArtLikeCollect} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                artId:0,
                hasMore:true,
                articleList:'',
                like:1,
                articleName:'',
                userId:''
            }
        },
        methods: { //事件处理器
            showInitDate: function(oldDate,full){
                return initDate(oldDate,full)
            },
            cancelLikeCollect: function(id){
                var that = this;
                // console.log(id);
                getArtLikeCollect(that.userId,id,that.like,function(msg){
                    console.log(msg);
                    that.routeChange();
                })
            },
            showLikeCollectList: function(initpage){//展示数据
                var that = this;
                if(sessionStorage.getItem('userInfo')){
                    that.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                    that.userId = that.userInfo.user_id;
                    console.log(that.userInfo);
                }
                that.like = that.$route.query.like ==undefined?1:parseInt(that.$route.query.like);
                // console.log(that.classId);
                if(initpage){//初始化 文章id为0开始
                    that.artId=0;
                    that.articleList = [];
                }
                getLikeCollectList(that.userId,that.artId,that.articleName,that.like,(result)=>{
                    if(result.code==1001){
                        var msg = result.data;
                        console.log(result.data);
                        if(msg.length>0&&msg.length<8){
                            that.hasMore = false
                        }else{
                            that.hasMore = true;
                        }
                        that.articleList = that.articleList.concat(msg);
                        that.artId = msg[msg.length-1].id;
                        console.log(that.artId);
                    }else if(result.code==1003){
                        that.hasMore = false;
                    }
                })
            },
            addMoreFun:function(){//查看更多
                this.showLikeCollectList(false);
            },
            routeChange:function(){
                var that = this;
                this.showLikeCollectList(true);
            }
        },
        components: { //定义组件

        },
        watch: {
           // 如果路由有变化，会再次执行该方法

           '$route':'routeChange'

         },
        created() { //生命周期函数
            // console.log(this.$route);
            var that = this;
            that.routeChange();
        }
    }
</script>

<style>
.likeBoxTitle{
    text-align: center;
    padding:40px 0;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 40px;
    background: #fff;
    border-radius: 5px;
}
.likeBoxTitle h1{
    font-weight: 700;
}
.likeBoxTitle h1 i{
    color:#DF2050;
    margin-right: 10px;
    font-size: 30px;
}
</style>

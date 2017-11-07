<template>
    <div class="rightlistBox">
        <section >
            <div class="r1-head">
                <img src="https://diygod.b0.upaiyun.com/snjz.jpg" alt="">
                <h1>
                    <span>网红</span>diygod
                </h1>
            </div>
            <div class="r1-body">
                <p>你能抓到我么？</p>
                <div class="catch-me">
                    <div class="">
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <a href="#"><i class="el-icon-share"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <a href="#"><i class="el-icon-share"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <a href="#"><i class="el-icon-share"></i></a>
                        </el-tooltip>
                    </div>
                    <div class="">
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <a href="#"><i class="el-icon-share"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <a href="#"><i class="el-icon-share"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <a href="#"><i class="el-icon-share"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <a href="#"><i class="el-icon-share"></i></a>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </section>
        <section class="rs2" >
            <p>
                Do you like me?
            </p>
            <div class="">
                <i class="el-icon-star-on"></i>
                <span>9999999</span>
            </div>
        </section>
        <section></section>
        <section class="rs3" >
            <h2 class="ui label">
                这些人都排着队来跟我说话
            </h2>
            <ul class="rs3-textwidget">
                <li class="rs3-item" v-for="(item,index) in 6" key="item">
                    <a href="#">
                        <div class="rs3-photo">
                            <img src="https://www.anotherhome.net/wp-content/uploads/2016/09/head.jpg" alt="">
                        </div>
                        <div class="rs3-inner">
                            <p class="rs3-author">忆山南 在「留言板」中说:</p>
                            <p class="rs3-text">大佬|´・ω・)ノ 想知道这个主题怎么用 刚搭建wordpress 想借用大佬的主题φ(￣∇￣o)</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="rs4">
            <h2 class="ui label">
                大家都排队来看这些
            </h2>
            <ul>
                <li v-for="(item,index) in 6" key="item">
                    <a href="#">女朋友的微博情绪监控</a> —— 29,152 次围观
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                fixDo:false
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
.rightlistBox{
    position: relative;
}
.rightlistBox section {
    transition: all 0.2s linear;
    position: relative;
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
}
.rightlistBox section:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}
.rightlistBox .r1-head{
    text-align: center;
    border-radius: 4px 4px 0 0 ;
    text-align: center;
    position: relative;
    box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);
}
.rightlistBox .r1-head img{
    width:100%;
    min-height: 100px;
}
.rightlistBox .r1-head h1{
    position: absolute;
    bottom:5px;
    margin:0 0 0 -65px;
    font-size: 20px;
    letter-spacing:0.5px;
    color:#fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,.7);
    font-weight: 700;
    width:130px;
    left:50%;
}
.rightlistBox .r1-head h1 span{
    opacity: 0.2;
}
.rightlistBox .r1-body p{
    font-size: 14px;
    margin:5px 0 8px 0;
    font-weight: 700;
    text-align: center;
}
.rightlistBox .r1-body .catch-me{
    text-align: center;
}
.rightlistBox .r1-body .catch-me a{
    display: inline-block;
    margin-bottom: 7px;
    position: relative;
    text-decoration: none;
}
.rightlistBox .r1-body .catch-me a:hover i{
    color:#fff;
    background: #F4692C;
}
.rightlistBox .r1-body .catch-me a i{
    display: inline-block;
    font-size: 16px;
    width:42px;
    height:42px;
    line-height: 42px;
    border-radius: 42px;
    color:rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin:0 3.2px;
}

/*************do you like me*******************/
.rightlistBox .rs2{
    /*padding:10px 0 4px 0;*/
}
.rightlistBox .rs2 p{
    color:#e51c23;
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top:10px;
}
.rightlistBox .rs2 div{
    color:#e51c23;
    cursor: pointer;
    text-align: center;
    font-size: 40px;
}
.rightlistBox .rs2 div i{
    display: inline-block;
    text-align: center;
}
/**********排队来说*************/
.rightlistBox .rs3 .rs3-item{
    font-size: 13px;
    line-height: 20px;
}
.rightlistBox .rs3 .rs3-item a{
    display:block;
    padding:5px;
    transition: all .3s ease-out;
    border-bottom: 1px solid #ddd;
    margin:5px 0;
}
.rightlistBox .rs3 .rs3-item a:hover{
    background: rgba(230,244,250,.5);
    border-radius: 5px;
}
.rightlistBox .rs3 .rs3-photo{
    float:left;
}
.rightlistBox .rs3 .rs3-photo img{
    border-radius: 50%;
    width:32px;
    height:32px;
}
.rightlistBox .rs3 .rs3-inner{
    margin-left: 40px;
}
.rightlistBox .rs3 .rs3-inner .rs3-author{
    font-weight: 700;
}
.rightlistBox .rs3 .rs3-inner .rs3-text{
    font-size: 12px;
    text-align: justify;
}
.rightlistBox .rs3 .rs3-item:last-child a{
    border-bottom: none;
}
/************排队看这些***************/
.rightlistBox .rs4 li{
    padding:8px 0;
    text-align: justify;
}
.rightlistBox .rs4 li a{
    font-weight: 600;
}
.rightlistBox .rs4 li a:hover{
    color:#64609E;
}
</style>

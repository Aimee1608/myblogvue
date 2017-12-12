<template>
    <div class="tmsgBox">
        <div class="tmsg-respond">
            <h3>发表评论 <small class="tcolorm">取消回复</small></h3>
            <form class="" >
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="说点什么呢``"
                  v-model="textarea">
                </el-input>
                <div :class="pBody?'OwO':'OwO OwO-open'">
                    <div class="OwO-logo" @click="pBody=!pBody">
                        <span>OwO表情</span>
                    </div>
                    <div class="OwO-body">
                        <ul class="OwO-items OwO-items-show">
                            <li class="OwO-item" v-for="(oitem,index) in OwOlist" key="oitem" @click="choseEmoji(oitem)">{{oitem}}</li>
                        </ul>
                        <div class="OwO-bar">
                            <ul class="OwO-packages">
                                <li class="OwO-package-active">Emoji</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <el-row class="tmsg-r-info" :gutter="15">
                    <el-col :span="8">
                        <el-input v-model="name" placeholder="昵称*"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-input v-model="mail" placeholder="邮箱*"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-input v-model="web" placeholder="网址"></el-input>
                    </el-col>
                    <el-col :span="24" class="info-submit">
                        <p class="tcolors-bg" @click="sendMsg">发送~</p>
                    </el-col>
                </el-row>
            </form>
        </div>
        <div class="tmsg-comments">
            <a href="#" class="tmsg-comments-tip">活捉 14 条</a>
            <div class="tmsg-commentshow">
                <ul class="tmsg-commentlist">
                    <li class="tmsg-c-item" v-for="item in 10" key="item">
                        <article class="">
                            <header>
                                <img src="src/img/tou.jpg" alt="">

                                    <div class="i-name">
                                        小花花
                                    </div>
                                    <div class="i-class">
                                        天然呆
                                    </div>
                                    <div class="i-time">
                                        <time>2017年11月4日 10:45</time>
                                    </div>
                            </header>
                            <section>
                                <p>留言留言硫酸钾点击的</p>
                                <div class="tmsg-replay">
                                    <a href="javascript:void(0);" @click="respondMsg">回复</a>
                                </div>
                            </section>
                        </article>
                        <ul class="tmsg-commentlist" style="padding-left:60px;">
                            <li class="tmsg-c-item" v-for="item in 3" key="item">
                                <article class="">
                                    <header>
                                        <img src="src/img/tou.jpg" alt="">

                                            <div class="i-name">
                                                小花花
                                            </div>
                                            <div class="i-class">
                                                天然呆
                                            </div>
                                            <div class="i-time">
                                                <time>2017年11月4日 10:45</time>
                                            </div>
                                    </header>
                                    <section>
                                        <p>留言留言硫酸钾点击的</p>
                                        <div class="tmsg-replay">
                                            <a href="javascript:void(0);" @click="respondMsg">回复</a>
                                        </div>
                                    </section>
                                </article>
                            </li>
                        </ul>
                    </li>

                </ul>
                <div class="paginationBox">
                    <el-pagination
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     :page-size="100"
                     layout="total, prev, pager, next"
                     :total="1000">
                   </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                textarea: '',//文本框输入内容
                name:'',//用户姓名
                mail:'',//用户邮箱
                web:'',//用户网址
                pBody:true,//表情打开控制
                currentPage:1,//分页
                OwOlist:[
                    '😂',
                    '😀',
                    '😅',
                    '😊',
                    '🙂',
                    '🙃',
                    '😌',
                    '😍',
                    '😘',
                    '😜',
                    '😝',
                    '😏',
                    '😒',
                    '🙄',
                    '😳',
                    '😡',
                    '😔',
                    '😫',
                    '😱',
                    '😭',
                    '💩',
                    '👻',
                    '🙌',
                    '🖕',
                    '👍',
                    '👫',
                    '👭',
                    '🌚',
                    '🌝',
                    '🙈',
                    '💊',
                    '😶',
                    '🙏',
                    '🍦',
                    '🍉',
                    '😣'
                ]
            }
        },
        methods: { //事件处理器
            handleSizeChange(val) {//分页处理
              console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {//当前页
              console.log(`当前页: ${val}`);
          },
          //选择表情包
          choseEmoji:function(inner){
              this.textarea += inner;
          },
          //发送图片
          sendMsg:function(){
              var that = this;
              var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
              if(that.name&&reg.test(that.mail)&&that.web){

              }
          },
          respondMsg:function(){

          }
        },
        components: { //定义组件

        },
        created() { //生命周期函数

        }
    }
</script>

<style>
.tmsgBox{
    position: relative;
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
}
.tmsg-respond h3{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}
.tmsg-respond h3 small{
    font-size: smaller;
    cursor: pointer;
}
.tmsg-respond textarea{
    background:#f4f6f7;
    height:100px;
    margin-bottom: 10px;
}
.OwO{
    position: relative;
    z-index: 1;
}
.OwO .OwO-logo{
    position: relative;
    border-radius: 4px;
    color:#444;
    display: inline-block;
    background: #fff;
    border:1px solid #ddd;
    font-size: 13px;
    padding:0 6px;
    cursor: pointer;
    height:30px;
    box-sizing: border-box;
    z-index: 2;
    line-height: 30px;
}
.OwO .OwO-logo:hover{
    animation:a 5s infinite ease-in-out;
    -webkit-animation:a 5s infinite ease-in-out;
}
.OwO .OwO-body{
    position: absolute;
    background: #fff;
    border:1px solid #ddd;
    z-index: 1;
    top:29px;
    border-radius: 0 4px 4px 4px;
    display: none;
}
.OwO-open .OwO-body{
    display: block;
}
.OwO-open .OwO-logo{
    border-radius: 4px 4px 0 0;
    border-bottom: none;
}
.OwO-open .OwO-logo:hover{
    animation:none;
    -webkit-animation:none;
}
.OwO .OwO-items {
    max-height: 197px;
    overflow: scroll;
    font-size: 0;
    padding:10px;
    z-index: 1
}
.OwO .OwO-items .OwO-item{
    background: #f7f7f7;
    padding:5px 10px;
    border-radius: 5px;
    display: inline-block;
    margin: 0 10px 12px 0;
    transition: 0.3s;
    line-height: 19px;
    font-size: 20px;
    cursor: pointer;
}
.OwO .OwO-items .OwO-item:hover{
    background: #eee;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
                0 3px 1px -2px rgba(0,0,0,.2),
                0 1px 5px 0 rgba(0,0,0,.12);
    animation:a 5s infinite ease-in-out;
    -webkit-animation:a 5s infinite ease-in-out;
}
.OwO .OwO-body .OwO-bar{
    width:100%;
    height:30px;
    border-top: 1px solid #ddd;
    background: #fff;
    border-radius: 0 0 4px 4px;
    color: #444;
}
.OwO .OwO-body .OwO-bar .OwO-packages li{
    display: inline-block;
    line-height: 30px;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    margin-right: 3px;
    text-align: center;
}
.OwO .OwO-body .OwO-bar .OwO-packages li:first-of-type{
    border-radius: 0 0 0 3px;
}
@-webkit-keyframes a{
    2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}
    8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}
    10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}
    12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}
    16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}
    18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}
    20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}
    24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}
    28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}
    30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    32%,34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}
    36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}
    40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}
    44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}
    46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}
    52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}
    56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}
    60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}
    68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}
    72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}
    74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}
    86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}
    88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}
    92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}
    94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}
    96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}
}
/*用户输入表单*/
.tmsg-r-info{
    margin:10px 0;
}
.tmsg-r-info input{
    height:30px;
    border-radius: 4px;
    background: #f4f6f7;
}
.tmsg-r-info .info-submit{
    margin: 10px 0;
    text-align: center;
}
.tmsg-r-info .info-submit p{
    /*background: #97dffd;*/
    color:#fff;
    border-radius: 5px;
    cursor: pointer;
    /*transition: all .3s ease-in-out;*/
    height:30px;
    line-height: 30px;
}
/*.tmsg-r-info .info-submit p:hover{
    background: #47456d;
}*/
/*评论列表*/
.tmsg-comments .tmsg-comments-tip{
    display: block;
    border-left: 2px solid #363d4c;
    padding: 0 10px;
    margin: 40px 0;
    font-size: 20px;
}
.tmsg-commentlist {
    margin-bottom:20px;

}
.tmsg-commentshow>.tmsg-commentlist{
    border-bottom: 1px solid #e5eaed;
}
.tmsg-c-item{
    border-top: 1px solid #e5eaed;
}
.tmsg-c-item article{
    margin:20px 0;
}
.tmsg-c-item article header{
    margin-bottom:10px;
}
.tmsg-c-item article header img{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    float: left;
    transition: all .4s ease-in-out;
    margin-right: 15px;
}
.tmsg-c-item article header img:hover{
    transform: rotate(360deg);
}
.tmsg-c-item article header .i-name{
    font-size: 14px;
    margin:5px 8px 7px 0;
    color:#444;
    font-weight: bold;
    display: inline-block;
}
.tmsg-c-item article header .i-class{
    display: inline-block;
    margin-left:10px;
    background: #dff0d8;
    color:#3c763d;
    border-radius: 5px;
    padding: 3px 6px;
    font-size: 12px;
    font-weight: 400;
}
.tmsg-c-item article header .i-time{
    color:#aaa;
    font-size: 12px;
}
.tmsg-c-item article section{
    margin-left: 80px;
}
.tmsg-c-item article section .tmsg-replay{
    margin:10px 0;

}
.tmsg-c-item article section .tmsg-replay a{
    font-size: 12px;
    color:#64609E;
}
/*分页*/
.paginationBox{
    text-align: center;
    height:45px;
    line-height: 45px;
    margin:10px 0;
}
.paginationBox .el-pagination{
    padding:0;
    height:45px;
    line-height: 45px;
}
.paginationBox .el-pagination span,.paginationBox .el-pagination button{
    height:45px;
    line-height: 45px;
    border: none;
}
.paginationBox .el-pager li{
    padding:0 10px;
    height:45px;
    height:auto;
    line-height: 45px;
    border:none;
}
.paginationBox li.active{
    color:#fff;
    border-radius: 50%;
    width:45px;
    height:45px;
    line-height: 45px;
    margin:0 5px;
    padding:0;
}
</style>

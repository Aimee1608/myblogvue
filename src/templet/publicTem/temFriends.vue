<template>
<div class="tFriendsBox">
    <h1>棒棒哒</h1>
    <el-row>
        <el-col :span="12" class="tf-item" v-for="item in friendslink" key="item">
            <a :href="item.url" target="_blank">
                <img :src="item.image"  onerror="this.onerror=null;this.src='src/img/tou.jpg'">
                <h4>{{item.name}}</h4>
                <p>{{item.description}}</p>
            </a>
        </el-col>
    </el-row>
</div>
</template>

<script>
import {FriendUrlData} from '../../pubJS/server.js'
export default {
    data() { //选项 / 数据
        return {
            friendslink:''
        }
    },
    methods: { //事件处理器

    },
    components: { //定义组件

    },
    created() { //生命周期函数
        var that = this;
        FriendUrlData(function(msg){
            console.log(msg);
            that.friendslink = msg;
        })
    }
}
</script>

<style>
.tFriendsBox{
    background: #fff;
    padding:15px;
    border-radius: 5px;
    margin-bottom: 40px;
}
.tFriendsBox h1{
    padding:15px 0;
    font-size: 25px;
    font-weight: bold;
}
.tFriendsBox .tf-item{
    transition: all 0.3s ease-out;
    border-radius: 5px;
    position: relative;
}
.tFriendsBox .tf-item:hover{
    background: rgba(230,244,250,.5);
}
.tFriendsBox .tf-item a{
    display: block;
    padding:0 10px 0 90px;
    height:90px;
}
.tFriendsBox .tf-item a img{
    width:60px;
    height:60px;
    border-radius: 50%;
    position: absolute;
    top:15px;
    left:15px;
    cursor: pointer;
}
.tFriendsBox .tf-item a h4{
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 20px;
    padding-top:15px;
    font-weight: bold;
}
.tFriendsBox .tf-item a p{
    margin:10px 0;
    font-size: 12px;
    line-height: 24px;
    color:#999;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>

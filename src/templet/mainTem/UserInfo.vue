<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <div v-show="isEdit" class="tcommonBox">
                <header>
                    <h1>
                        <a href="#/DetailShare" target="_blank">
                            编辑个人资料
                        </a>
                    </h1>
                </header>
                <section>
                    <ul class="userInfoBox">
                        <li class="avatarlist">
                            <span class="leftTitle">头像</span>
                            <el-upload
                              class="avatar-uploader"
                              action="http://www.vuebook.com/port/Userinfo/UploadImg"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="userInfoObj.avatar" :src="userInfoObj.avatar"   onerror="this.onerror=null;this.src='src/img/tou.jpg'" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              <div slot="tip" class="el-upload__tip">点击上传头像，只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </li>
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <el-input v-model="userInfoObj.username" placeholder="昵称"></el-input> <i v-show="state" class="fa fa-wa fa-asterisk"></i>
                        </li>
                        <li>
                            <span class="leftTitle">电子邮件</span>
                            <span>{{userInfoObj.email}}</span>
                        </li>
                        <li>
                            <span class="leftTitle">性别</span>
                            <template>
                              <el-radio class="radio" v-model="userInfoObj.sex" label="0">男</el-radio>
                              <el-radio class="radio" v-model="userInfoObj.sex" label="1">女</el-radio>
                            </template>
                        </li>
                        <li>
                            <span class="leftTitle">是否展示友链</span>
                            <el-switch
                              v-model="state"
                              on-color="#13ce66"
                              off-color="#aaa">
                            </el-switch>
                        </li>
                        <li >
                            <span class="leftTitle">网站名称</span>
                            <el-input v-model="userInfoObj.name" placeholder="网站名称"></el-input>
                        </li>
                        <li >
                            <span class="leftTitle">网站地址</span>
                            <el-input v-model="userInfoObj.url" placeholder="网站" value="userWeb"></el-input> <i v-show="state" class="fa fa-wa fa-asterisk"></i>
                        </li>
                        <li >
                            <span class="leftTitle">网站简介</span>
                            <el-input
                              type="textarea"
                              :rows="3"
                              placeholder="请输入内容"
                              v-model="userInfoObj.description" >
                            </el-input>
                        </li>
                        <li  class="avatarlist">
                            <span class="leftTitle">网站logo</span>
                            <el-upload
                              class="avatar-uploader"
                              action="http://www.vuebook.com/port/Userinfo/UploadImg"
                              :show-file-list="false"
                              :on-success="handleLogoSuccess"
                              :before-upload="beforeLogoUpload">
                              <img v-if="userInfoObj.image" :src="userInfoObj.image"  onerror="this.onerror=null;this.src='src/img/tou.jpg'"  class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              <div slot="tip" class="el-upload__tip">点击上传头像，只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </li>
                    </ul>
                    <div class=" saveInfobtn">
                        <a class="tcolors-bg"  href="javascript:void(0);" @click="isEdit=!isEdit">返 回</a>
                        <a class="tcolors-bg" href="javascript:void(0);" @click="saveInfoFun">保 存</a>
                    </div>
                </section>
            </div>
            <div v-show="!isEdit" class="tcommonBox">
                <header>
                    <h1>
                        <a href="#/DetailShare" target="_blank">
                            个人中心
                        </a>
                        <span class="gotoEdit" @click="isEdit=!isEdit"><i class="fa fa-wa fa-edit"></i>编辑</span>
                    </h1>

                </header>
                <section>
                    <ul class="userInfoBox">
                        <li class="avatarlist">
                            <span class="leftTitle">头像</span>
                            <div class="avatar-uploader">
                                <img  :src="userInfoObj.avatar"   onerror="this.onerror=null;this.src='src/img/tou.jpg'" class="avatar">
                            </div>
                        </li>
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <span>{{userInfoObj.username}}</span>

                        </li>
                        <li>
                            <span class="leftTitle">电子邮件</span>
                            <span>{{userInfoObj.email}}</span>
                        </li>
                        <li>
                            <span class="leftTitle">性别</span>
                            <span>{{userInfoObj.sex==0?'男':'女'}}</span>
                        </li>
                        <!-- <li></li> -->
                        <li>
                            <span class="leftTitle">是否展示友链</span>
                            <el-switch
                              v-model="state"
                              disabled>
                            </el-switch>
                        </li>
                        <li >
                            <span class="leftTitle">网站名称</span>
                            <span>{{userInfoObj.name}}</span>
                        </li>
                        <li >
                            <span class="leftTitle">网站地址</span>
                            <p class="rightInner">{{userInfoObj.url}}</p>
                        </li>
                        <li >
                            <span class="leftTitle">网站简介</span>
                            <p class="rightInner">{{userInfoObj.description}}</p>
                        </li>
                        <li  class="avatarlist">
                            <span class="leftTitle">网站logo</span>
                            <div class="avatar-uploader">
                                <img  :src="userInfoObj.image"  onerror="this.onerror=null;this.src='src/img/tou.jpg'"  class="avatar">
                            </div>
                        </li>
                    </ul>

                </section>
            </div>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '../publicTem/header.vue'
import footer from '../publicTem/footer.vue'
import {getUserInfo,UserInfoSave} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                isEdit: false,
                userInfo:'',//本地存储的用户信
                userInfoObj:'',//用户的信息
                state:true
            }
        },
        methods: { //事件处理器
            handleAvatarSuccess(res, file) {
                // console.log(res,file);
                this.userInfoObj.avatar = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                  this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                  this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleLogoSuccess(res, file) {
                this.userInfoObj.image = URL.createObjectURL(file.raw);
            },
            beforeLogoUpload(file) {
                const isJPG = file.type === 'image/jpeg/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                  this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                  this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            saveInfoFun: function(){
                var that = this;
                if(!that.userInfoObj.username){
                     that.$message.error('昵称为必填项，请填写昵称');
                }
                if(that.state){
                    if(!that.userInfoObj.url){
                         that.$message.error('请正确填写网址');
                    }

                }
                if(that.userInfoObj.username&&that.userInfoObj.url){
                    that.userInfoObj.state = Number(that.state);
                    UserInfoSave(that.userInfoObj,function(result){
                        that.$message.success( '恭喜你，这是一条成功消息');
                    })
                }

            },
            routeChange: function(){
                var that = this;

                // console.log(this.$router,this.$route);
                if(sessionStorage.getItem('userInfo')){
                    that.haslogin = true;
                    that.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                    that.userId = that.userInfo.user_id;
                    getUserInfo(that.userId,function(msg){
                        console.log(msg);
                        that.userInfoObj = msg.data;
                        if(msg.data.state==1){
                            that.state==true;
                        }else{
                            that.state==false;
                        }
                    })
                    console.log(that.userInfo);
                }else{
                    that.haslogin = false;
                }

            }
        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-footer':footer
        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        created() { //生命周期函数
            this.routeChange();
        }
    }
</script>

<style>
.userInfoBox .avatarlist{
    position: relative;
}

.avatar-uploader {
    display: inline-block;
    vertical-align: top;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 120px;
    height: 120px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    position: absolute;
    top:0;
    left:0;
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
  }
.gotoEdit{
    font-size: 15px;
    float:right;
    cursor: pointer;
    color:#999;
}
.gotoEdit:hover {
    color:#333;
}
/*个人设置*/
.userInfoBox .leftTitle{
    display: inline-block;
    width:100px;
    padding: 10px 0;
}
.userInfoBox .rightInner{
    display: inline-block;
    max-width: calc(100% - 140px);
    vertical-align: top;
}
.userInfoBox li{
    padding:20px;
    border-bottom: 1px solid #ddd;
}
.userInfoBox li:last-child{
    border-bottom: 1px solid transparent;
}
.userInfoBox  .el-input,.userInfoBox  .el-textarea{
    max-width:300px;
    min-width: 100px;
}

.userInfoBox .el-input__inner{
    border-radius: 4px;
}
.userInfoBox  .el-textarea{
    vertical-align: top;
}
.saveInfobtn{
    margin: 20px 0;
    text-align: center;
}
.saveInfobtn a{
    color:#fff;
    padding:6px 20px;
    margin:5px 10px;
    border-radius: 5px;
    font-size: 14px;
}
.userInfoBox .fa-asterisk{
    color: #DF2050;
}
</style>

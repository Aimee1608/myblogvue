import Home from './templet/mainTem/Home.vue'
import Share from './templet/mainTem/Share.vue'
import DetailShare from './templet/mainTem/DetailShare.vue'
import Reward from './templet/mainTem/Reward.vue'
import FriendsLink from './templet/mainTem/FriendsLink.vue'
import Message from './templet/mainTem/Message.vue'
import Aboutme from './templet/mainTem/Aboutme.vue'
import Login from './templet/mainTem/Login.vue'
import UserInfo from './templet/mainTem/UserInfo.vue'

const routes =[
    {path: '/',component: Home,name:'Home'},//默认首页
    {path:'/Home',component:Home,name:'Home'},//首页
    {path:'/Share',component:Share,name:'Share'},//分类
    {path:'/DetailShare',component:DetailShare,name:'DetailShare'},//分享详情
    {path:'/Reward',component:Reward,name:'Reward'},//赞赏
    {path:'/FriendsLink',component:FriendsLink,name:'FriendsLink'},//伙伴
    {path:'/Message',component:Message,name:'Message'},//留言板
    {path:'/Aboutme',component: Aboutme,name:'Aboutme'},//关于
    {path:'/Login',component: Login,name:'Login'},//注册登录
    {path:'/UserInfo',component :UserInfo,name:'UserInfo'}//用户个人中心
]

export default routes

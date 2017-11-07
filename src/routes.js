import Home from './templet/mainTem/Home.vue'
import Share from './templet/mainTem/Share.vue'
import DetailShare from './templet/mainTem/DetailShare.vue'
import Reward from './templet/mainTem/Reward.vue'
import FriendsLink from './templet/mainTem/FriendsLink.vue'
import Message from './templet/mainTem/Message.vue'
import Aboutme from './templet/mainTem/Aboutme.vue'

const routes =[
    {path: '/',component: Home},//默认首页
    {path:'/Home',component:Home},//首页
    {path:'/Share',component:Share},//分类
    {path:'/DetailShare',component:DetailShare},//分享详情
    {path:'/Reward',component:Reward},//赞赏
    {path:'/FriendsLink',component:FriendsLink},//伙伴
    {path:'/Message',component:Message},//留言板
    {path:'/Aboutme',component: Aboutme},//关于
]

export default routes

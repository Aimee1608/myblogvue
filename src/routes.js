// import Home from './templet/mainTem/Home.vue'
// import Share from './templet/mainTem/Share.vue'
// import DetailShare from './templet/mainTem/DetailShare.vue'
// import Reward from './templet/mainTem/Reward.vue'
// import FriendsLink from './templet/mainTem/FriendsLink.vue'
// import Message from './templet/mainTem/Message.vue'
// import Aboutme from './templet/mainTem/Aboutme.vue'
// import Login from './templet/mainTem/Login.vue'
// import UserInfo from './templet/mainTem/UserInfo.vue'
//
// const routes =[
//     {path: '/',component: Home,name:'Home' },//默认首页
//     {path:'/Home',component:Home,name:'Home'},//首页
//     {path:'/Share',component:Share,name:'Share'},//分类
//     {path:'/DetailShare',component:DetailShare,name:'DetailShare'},//分享详情
//     {path:'/Reward',component:Reward,name:'Reward'},//赞赏
//     {path:'/FriendsLink',component:FriendsLink,name:'FriendsLink'},//伙伴
//     {path:'/Message',component:Message,name:'Message'},//留言板
//     {path:'/Aboutme',component: Aboutme,name:'Aboutme'},//关于
//     {path:'/Login',component: Login,name:'Login'},//注册登录
//     {path:'/UserInfo',component :UserInfo,name:'UserInfo'}//用户个人中心
// ]
//
// export default routes
// //懒加载

// 
// const routes =[
//     {
//         path: '/',
//         component: resolve => require(['./templet/mainTem/Home.vue'],resolve),
//
//         name:'Home'
//     },//默认首页
//     {
//         path:'/Home',
//         component: resolve => require(['./templet/mainTem/Home.vue'],resolve),
//         name:'Home'
//     },//首页
//     {
//         path:'/Share',
//         component: resolve => require(['./templet/mainTem/Share.vue'],resolve),
//         name:'Share'
//     },//分类
//     {
//         path:'/DetailShare',
//         component: resolve => require(['./templet/mainTem/DetailShare.vue'],resolve),
//         name:'DetailShare'
//     },//分享详情
//     {
//         path:'/Reward',
//         component: resolve => require(['./templet/mainTem/Reward.vue'],resolve),
//         name:'Reward'
//     },//赞赏
//     {
//         path:'/FriendsLink',
//         component: resolve => require(['./templet/mainTem/FriendsLink.vue'],resolve),
//         name:'FriendsLink'
//     },//伙伴
//     {
//         path:'/Message',
//         component: resolve => require(['./templet/mainTem/Message.vue'],resolve),
//         name:'Message'
//     },//留言板
//     {
//         path:'/Aboutme',
//         component: resolve => require(['./templet/mainTem/Aboutme.vue'],resolve),
//         name:'Aboutme'
//     },//关于
//     {
//         path:'/Login',
//         component: resolve => require(['./templet/mainTem/Login.vue'],resolve),
//         name:'Login'
//     },//注册登录
//     {
//         path:'/UserInfo',
//         component: resolve => require(['./templet/mainTem/UserInfo.vue'],resolve),
//         name:'UserInfo'
//     },//用户个人中心
//     {
//         path:'/LikeCollect',
//         component: resolve => require(['./templet/mainTem/LikeCollect.vue'],resolve),
//         name:'LikeCollect'
//     }//用户个人中心
// ]

const routes =[
    {
        path:'/',
        component: resolve => require(['./templet/mainTem/Home.vue'],resolve),
        meta:{auth:true},
        name:'Home'
    },//首页
    {
        path:'/Home',
        component: resolve => require(['./templet/mainTem/Home.vue'],resolve),
        meta:{auth:true},
        name:'Home'
    },//首页
    {
        path:'/Share',
        component: resolve => require(['./templet/mainTem/Share.vue'],resolve),
        meta:{auth:true},
        name:'Share'
    },//分类
    {
        path:'/DetailShare',
        component: resolve => require(['./templet/mainTem/DetailShare.vue'],resolve),
        meta:{auth:true},
        name:'DetailShare'
    },//分享详情
    {
        path:'/Reward',
        component: resolve => require(['./templet/mainTem/Reward.vue'],resolve),
        meta:{auth:true},
        name:'Reward'
    },//赞赏
    {
        path:'/FriendsLink',
        component: resolve => require(['./templet/mainTem/FriendsLink.vue'],resolve),
        meta:{auth:true},
        name:'FriendsLink'
    },//伙伴
    {
        path:'/Message',
        component: resolve => require(['./templet/mainTem/Message.vue'],resolve),
        meta:{auth:true},
        name:'Message'
    },//留言板
    {
        path:'/Aboutme',
        component: resolve => require(['./templet/mainTem/Aboutme.vue'],resolve),
        meta:{auth:true},
        name:'Aboutme'
    },//关于
    {
        path:'/Login',
        component: resolve => require(['./templet/mainTem/Login.vue'],resolve),
        meta:{auth:false},
        name:'Login'
    },//注册登录
    {
        path:'/UserInfo',
        component: resolve => require(['./templet/mainTem/UserInfo.vue'],resolve),
        meta:{auth:true},
        name:'UserInfo'
    },//用户个人中心
    {
        path:'/LikeCollect',
        component: resolve => require(['./templet/mainTem/LikeCollect.vue'],resolve),
        meta:{auth:true},
        name:'LikeCollect'
    }//用户个人中心
]

export default routes

<!-- 用户喜欢和收藏列表 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <wbc-like></wbc-like>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import like  from '../components/temLikeList.vue'
    export default {
        name: 'LikeCollect',
        data() { //选项 / 数据
            return {

            }
        },

        methods: { //事件处理器

        },
        components: { //定义组件
             'wbc-nav':header,
             'wbc-footer':footer,
             'wbc-like':like
        },
        watch: {
           // 如果路由有变化，会再次执行该方法

         },
        created() { //生命周期函数

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
}.likeBoxTitle h1 i{
    color:#DF2050;
    margin-right: 10px;
    font-size: 30px;
}
</style>

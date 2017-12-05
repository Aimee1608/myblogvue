<template>
    <div class="tRewardBox tcommonBox">
        <header>
            <h1>
                <a href="#/DetailShare" target="_blank">
                    赞赏
                </a>
            </h1>
            <h2>
                <i class="el-icon-star-off"></i>发表于 2017年10月17日 • <i class="el-icon-date"></i>553 次围观 • <i class="el-icon-edit"></i>活捉 11 条•   <span class="rateBox"><el-rate v-model="rateValue"></el-rate>4.75分（4票）</span>
            </h2>
        </header>
        <section>
            <div class="">
                <img src="https://diygod.b0.upaiyun.com/donate.jpg" alt="">
            </div>
            <h1>@赞赏说明：</h1>
            <p>
                若无特殊说明，赞赏之款项用于给我和酸奶改善饮食（*/∇＼*）
            </p>
            <p>如果我给你带来过欢乐，或者对你有所帮助，欢迎赞赏支持:)</p>
            <p>有任何疑问请在下面留言。</p>
            <hr>
            <h1>@赞赏方式：</h1>
            <el-row   :gutter="30">
                <el-col  :span="8" :offset="4"  class="donate-item">
                    <img src="https://diygod.b0.upaiyun.com/2016-08-25_wxd.png" alt="">
                    <div class="donate-tip">
                        微信扫一扫，向我赞赏
                    </div>
                </el-col>
                <el-col :span="8"  class="donate-item">
                    <img src="https://diygod.b0.upaiyun.com/2016-08-25_wxd.png" alt="">
                    <div class="donate-tip">
                        微信扫一扫，向我赞赏
                    </div>
                </el-col>
            </el-row>
            <h1>@赞赏记录：</h1>
            <el-table :data="tableData" border style="width: 100%" >
                <el-table-column prop="date" label="日期" align="center" ></el-table-column>
                <el-table-column prop="name" label="赞赏人"  align="center"></el-table-column>
                <el-table-column prop="address" label="金额" align="center"></el-table-column>
          </el-table>
        </section>
    </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                rateValue:2,
                tableData: [{
                     date: '2016-05-02',
                     name: '王小虎',
                     address: '555'
                   }, {
                     date: '2016-05-04',
                     name: '王小虎',
                     address: '666'
                   }, {
                     date: '2016-05-01',
                     name: '王小虎',
                     address: '777'
                   }, {
                     date: '2016-05-03',
                     name: '王小虎',
                     address: '888'
                   }]
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
.tRewardBox section{
    padding-bottom:20px;
}
.tRewardBox section h1{
    margin: 10px 0;
    font-size: 25px;
    font-weight: 700;
    /*text-align: center;*/
    line-height: 30px;
}
.tRewardBox section p{
    margin:10px 0;
    line-height:24px;
}
.tRewardBox section hr{
    background: #ccc;
    margin-bottom: 30px;
}

.tRewardBox .donate-item{
    text-align: center;
    margin-top:30px;
    margin-bottom:30px;
}
.tRewardBox .donate-item img{
    width:100%;
    height:auto;
}
.tRewardBox .donate-item div{
    margin:10px 0;
}
.tRewardBox  .donate-item:first-of-type div{
    color:#44b549;
}
.tRewardBox .donate-item:nth-of-type(2) div{
    color:#00a0e9;
}
.tRewardBox .el-table__body-wrapper{
    overflow: hidden;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
    background: transparent;
}
</style>

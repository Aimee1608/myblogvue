<!-- 留言板 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<div class="container">
		<el-row :gutter="30">
			<el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
				<wbc-msg></wbc-msg>
				<wbc-message></wbc-message>
			</el-col>
			<el-col :sm="24" :md="8">
				<wbc-rightlist></wbc-rightlist>
			</el-col>
		</el-row>
	</div>
	<wbc-footer></wbc-footer>
</div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import temRightlist from '../components/temRightlist.vue'
import temMessage from '../components/temMessage.vue'
import temMSG from '../components/temMSG.vue'

export default {
	name: 'Message',
	data() { //选项 / 数据
		return {

		}
	},
	methods: { //事件处理器

	},
	components: { //定义组件
		'wbc-nav': header,
		'wbc-message': temMessage,
		'wbc-msg': temMSG,
		'wbc-rightlist': temRightlist,
		'wbc-footer': footer
	},
	created() { //生命周期函数

	}
}
</script>

<style>

</style>

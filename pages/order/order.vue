<template>
	<view class="container">
		<v-tabs class="tabs" v-model="activeTab" :scroll="false" :tabs="['客户预约', '已接单', '今日行程']" @change='changeTab'>
		</v-tabs>
		<orderItem :activeTab='activeTab'></orderItem>
	</view>
</template>

<script>
	import orderItem from "@/components/order-item/order-item.vue"
	export default {
		data() {
			return {
				activeTab:0,
				orderList:[]
			}
		},
		components:{
			orderItem
		},
		mounted() {
			// this.loadOderList()
		},
		methods: {
			changeTab(index) {
				this.activeTab = index
			},
			loadOderList(){
				let userInfo = {
					driverId: 'DC0002',
					}
				
				this.$api.getReservationOrderList(userInfo).then(res => {
				   // 获得数据 
				   console.log("login",res) 
				   if(res.code == 200){
						this.orderList = res.data.orderList
						console.log("loadOderList",this.orderList)
				   }else{
						uni.showToast({
							title:'订单获取失败'
						})
				   }
				}).catch(res => {
					this.errorMsg = '登录失败，帐户或密码错误'
				　　// 失败进行的操作
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tabs{
	
	}
	.tab-content{
		padding: 60rpx 10rpx;
	}
</style>

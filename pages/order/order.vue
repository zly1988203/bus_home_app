<template>
	<view class="container">
		<v-tabs class="tabs" v-model="activeTab" :scroll="false" :tabs="['客户预约', '已接单', '今日行程']" @change='changeTab'></v-tabs>
		<view class="tab-content" v-show="tabOne">
			<orderItem></orderItem>
		</view>
		<view class="tab-content" v-show="tabTwo">
			
		</view>
		<view class="tab-content" v-show="tabThree">
			
		</view>
	</view>
</template>

<script>
	import orderItem from "@/components/order-item/order-item.vue"
	export default {
		data() {
			return {
				 activeTab: 0,
				 tabOne:true,
				 tabTwo:false,
				 tabThree:false
			}
		},
		components:{
			orderItem
		},
		methods: {
			    changeTab(index) {
			      if(index == 0){
					  this.tabOne = true
					   this.tabTwo == false
					  this.tabThree == false
					}
				 else if(index == 1){
					  this.tabOne = false
					  this.tabTwo == true
					  this.tabThree == false
					}
				  else if(index == 2){
						this.tabOne = false
					    this.tabTwo == false
						this.tabThree == true
					}
			    }
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

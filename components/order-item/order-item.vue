<template>
	<view class="container">
		<view class="order-item" v-for="(order,index) in orderList" :key='order.order_no'>
			<view class="header">
				<view class="address">
					<view class="start">
						<image src="/static/images/icon-start.png" mode="aspectFill"></image>
						<view> {{order.orderStartPoint}}</view>

					</view>
					<view class="arrow">
						<image src="/static/images/icon-arrow.png" mode="aspectFill"></image>
					</view>
					<view class="end">
						<image src="/static/images/icon-end.png" mode="aspectFill"></image>
						<view> {{order.orderEndPoint}}</view>
					</view>
				</view>
				<view class="time">
					已过4:32分钟
				</view>
			</view>
			<view class="body">
				<view class="b-row">
					<view class="b-col-title">乘客：</view>
					<view class="b-col-val">{{order.userName}}</view>
				</view>
				<view class="b-row">
					<view class="b-col-other">
						<view class="btn-tel">呼叫乘客</view>
					</view>
				</view>
				<view class="b-row">
					<view class="b-col-title">人数：</view>
					<view class="b-col-val">{{order.numberOfPassengers}}人</view>
				</view>
				<view class="b-row">
					<view class="b-col-title">上车地点：</view>
					<view class="b-col-val">{{order.pickUpLocation}}</view>
				</view>
				<view class="b-row">
					<view class="b-col-title">上车时间：</view>
					<view class="b-col-val">{{order.pickDownLocation | formatDate}}</view>
				</view>
			</view>
			<view class="footer">
				<view class="btn-go" v-if="activeTab==1" @click="cancelOrder(order)">取消订单</view>
				<view class="btn-go" @click="transferOrder(order)">转单</view>
				<view class="btn-go" v-if="activeTab==0" @click="accOrder(order)">立即接单</view>
				<view class="btn-go" v-if="activeTab==1" @click="accOrder(order)">现在出发</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		formatDate
	} from '@/common/api/formatDate.js'
	export default {
		props: {
			activeTab: Number
		},
		data() {
			return {
				orderList: [],
			}
		},
		watch: {
			activeTab(val, order) {
				this.loadOderList(val)
			}
		},
		mounted() {
			debugger
			this.loadOderList(this.activeTab)
		},
		filters: {
			formatDate(time) {
				var date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd mm:ss');
			}
		},
		methods: {
			getReservationOrderList() {
				let userInfo = {
					driverId: 'DC0001',
				}
				this.$api.getReservationOrderList(userInfo).then(res => {
					// 获得数据 
					console.log("login", res)
					if (res.code == 200) {
						this.orderList = res.data.orderList
						console.log("loadOderList", this.orderList)
					} else {
						uni.showToast({
							title: '订单获取失败'
						})
					}
				}).catch(res => {
					uni.showToast({
						title: '接单失败'
					})
				})
			},
			getOrderReceivedList() {
				let userInfo = {
					driverId: 'DC0001',
				}
				this.$api.getOrderReceivedList(userInfo).then(res => {
					// 获得数据 
					console.log("login", res)
					if (res.code == 200) {
						this.orderList = res.data.orderList
						console.log("loadOderList", this.orderList)
					} else {
						uni.showToast({
							title: '订单获取失败'
						})
					}
				}).catch(res => {
					uni.showToast({
						title: '订单获取失败'
					})
				})
			},
			getTodayItineraryList() {
				let userInfo = {
					driverId: 'DC0001',
				}
				this.$api.getTodayItineraryList(userInfo).then(res => {
					// 获得数据 
					console.log("login", res)
					if (res.code == 200) {
						let data = res.data

					} else {
						uni.showToast({
							title: '行程获取失败'
						})
					}
				}).catch(res => {
					uni.showToast({
						title: '订单获取失败'
					})
				})
			},
			loadOderList(activeTab) {
				console.log("activeTab", activeTab)
				if (activeTab == 0) {
					this.getReservationOrderList()
				} else if (activeTab == 1) {
					this.getOrderReceivedList()
				} else {
					this.getTodayItineraryList()
				}
			},
			accOrder(order) {
				let param = {
					driverId: 'DC0001',
					orderId: order.orderId
				}
				this.$api.receiveOrder(param).then(res => {
					console.log("login", res)
					if (res.code == 200) {
						uni.showToast({
							title: '接单成功'
						})
					} else {
						uni.showToast({
							title: '接单失败'
						})
					}
				}).catch(res => {
					uni.showToast({
						title: '接单失败'
					})
				})
			},
			transferOrder(order) {
				let param = {
					driverId: 'DC0001',
					orderId: order.orderId
				}
				this.$api.transferOrder(param).then(res => {
					console.log("login", res)
					if (res.code == 200) {
						uni.showToast({
							title: '转单成功'
						})
					} else {
						uni.showToast({
							title: '转单失败'
						})
					}
				}).catch(res => {
					uni.showToast({
						title: '接单失败'
					})
				})
			},
			cancelOrder(order) {
				let param = {
					driverId: 'DC0001',
					orderId: order.orderId
				}
				this.$api.cancelOrder(param).then(res => {
					console.log("login", res)
					if (res.code == 200) {
						uni.showToast({
							title: '订单成功取消'
						})
					} else {
						uni.showToast({
							title: '订单取消失败'
						})
					}
				}).catch(res => {
					uni.showToast({
						title: '订单取消失败'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 60rpx 10rpx;

		.order-item {
			border-radius: 20rpx;
			overflow: hidden;
			position: relative;
			-webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
			box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
			margin: 15rpx 20rpx;

			.header {
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 32rpx;
				display: inline-flex;
				border-bottom: 1rpx solid #f1f1f1;

				.address {
					display: inline-flex;
					flex: 1;
					margin: 0 15rpx;

					.start {
						display: inline-flex;
						margin: 2rpx;
						-webkit-box-align: center;
						-webkit-align-items: center;
						align-items: center;

						image {
							width: 50rpx;
							height: 50rpx;
							color: #09BB07;
						}
					}

					.arrow {
						image {
							width: 100rpx;
							height: 100%;
						}
					}

					.end {
						display: inline-flex;
						margin: 2rpx;
						-webkit-box-align: center;
						-webkit-align-items: center;
						align-items: center;

						image {
							width: 50rpx;
							height: 50rpx;
							color: #F56C6C;
						}
					}
				}

				.time {
					color: #DD524D;
					margin: 0 15rpx;
				}
			}

			.body {
				width: 100%;
				height: auto;
				margin: 10rpx 20rpx;

				.b-row {
					width: 100%;
					height: 70rpx;
					line-height: 70rpx;
					display: inline-flex;

					.b-col-title {
						width: 25%;
					}

					.b-col-val {
						width: 50%;
					}

					.b-col-other {
						width: 25%;

						.btn-tel {
							width: 150rpx;
							height: 60rpx;
							line-height: 60rpx;
							background: #ffffff;
							color: #000000;
							font-size: 28rpx;
							border-radius: 30rpx;
							text-align: center;
							border: 1rpx solid #999999;
						}
					}
				}
			}

			.footer {
                display: flex;
				margin: 15rpx 20rpx;
  				.btn-go {
					width: 220rpx;
					height: 70rpx;
					line-height: 70rpx;
					background: #4CD964;
					color: #FFFFFF;
					font-size: 32rpx;
					border-radius: 40rpx;
					text-align: center;
				}
			}
		}
	}
</style>

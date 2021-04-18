<template>
<view class="container">
	<view class="order-item">
		<view class="header">
			<view class="address">
				<view class="start">
					<image src="/static/images/icon-start.png" mode="aspectFill"></image>
					<view>	平江</view>
					</view>
					<view class="arrow">
						<image src="/static/images/icon-arrow.png" mode="aspectFill"></image>
					</view>
				<view class="end">
					<image src="/static/images/icon-end.png" mode="aspectFill"></image>
					<view> 南江片区</view>
					</view>
			</view>
			<view class="time">
				已过5分钟
			</view>
		</view>
		<view class="body">
			<view class="b-row">
				<view class="b-col-title">乘客：</view>
				<view class="b-col-val">韩梅梅</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">电话：</view>
				<view class="b-col-val">18520365428</view>
				<view class="b-col-other">
					<view class="btn-tel">呼叫乘客</view>
				</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">人数：</view>
				<view class="b-col-val">2人</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">上车地点：</view>
				<view class="b-col-val">长沙高新区人民路87号</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">上车时间：</view>
				<view class="b-col-val">2020-10-14 14:30</view>
			</view>
		</view>
		<view class="footer">
			<view class="btn-go">立即接单</view>
		</view>
	</view>

</view>

</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				name:'约车',
				childName:''
			}
		},
		components:{
		},
		created() {
			
		},
		mounted() {
			this.loadOderList()
		},
		methods: {
			loadOderList(){
				let userInfo = {
					driverId: 'DC0001',
					}
				
				this.$api.orderList(userInfo).then(res => {
				   // 获得数据 
				   console.log("login",res) 
				   if(res.code == 200){
						let orderHallList = res.data.orderHallList
						console.log("loadOderList",orderHallList)
				   }
				   
				}).catch(res => {
					this.errorMsg = '登录失败，帐户或密码错误'
				　　// 失败进行的操作
				})
			},
			childStr(data){
				this.childName = data.name;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		.order-item{
			border-radius: 20rpx;
			overflow: hidden;
			position: relative;
			-webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
			box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
			margin: 15rpx 20rpx;
			.header{
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 32rpx;
				display: inline-flex;
				border-bottom: 1rpx solid #f1f1f1;
				.address{
					display: inline-flex;
					flex: 1;
					margin: 0 15rpx;
					.start{
						display: inline-flex;
						margin: 2rpx;
						-webkit-box-align: center;
						-webkit-align-items: center;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
							color:#09BB07;
						}
					}
					.arrow{
						image{
							width: 100rpx;
							height: 100%;
						}
					}
					.end{
						display: inline-flex;
						margin: 2rpx;
						-webkit-box-align: center;
						-webkit-align-items: center;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
							color:#F56C6C;
						}
					}
				}
				.time{
					color:#DD524D;
					margin: 0 15rpx;
				}
			}
			.body{
				width: 100%;
				height: auto;
				margin: 10rpx 20rpx;
				.b-row{
					width: 100%;
					height: 70rpx;
					line-height: 70rpx;
					display: inline-flex;
					.b-col-title{
						width: 25%;
					}
					.b-col-val{
						width: 50%;
					}
					.b-col-other{
						width: 25%;
						.btn-tel{
							width: 150rpx;
							height: 60rpx;
							line-height: 60rpx;
							background: #ffffff;
							color: #0190FF;
							font-size: 28rpx;
							border-radius: 30rpx;
							text-align: center;
							border: 1rpx solid #0190FF;
						}
					}
				}
			}

			.footer{
				margin: 15rpx 20rpx;
				.btn-go{
					width: 220rpx;
					height: 70rpx;
					line-height: 70rpx;
					background: #FFD101;
					color: #FFFFFF;
					font-size: 32rpx;
					border-radius: 40rpx;
					text-align: center;
					margin-left: 65%;
				}
			}
		}
	}
</style>

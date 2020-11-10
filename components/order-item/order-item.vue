<template>
<view class="container">
	<view class="order-item" v-for="(order,index) in orderList" :key='order.order_no'>
		<view class="header">
			<view class="address">
				<view class="start">
					<image src="/static/images/icon-start.png" mode="aspectFill"></image>
					<view>	{{order.depart_title}}</view>

					</view>
					<view class="arrow">
						<image src="/static/images/icon-arrow.png" mode="aspectFill"></image>
					</view>
				<view class="end">
					<image src="/static/images/icon-end.png" mode="aspectFill"></image>
					<view> {{order.arrive_title}}</view>
					</view>
			</view>
			<view class="time">
				已过4:32分钟
			</view>
		</view>
		<view class="body">
			<view class="b-row">
				<view class="b-col-title">乘客：</view>
				<view class="b-col-val">{{order.user_name}}</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">电话：</view>
				<view class="b-col-val">{{order.user_mobile}}</view>
				<view class="b-col-other">
					<view class="btn-tel">呼叫乘客</view>
				</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">人数：</view>
				<view class="b-col-val">{{order.numbers}}人</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">上车地点：</view>
				<view class="b-col-val">{{order.depart_address}}</view>
			</view>
			<view class="b-row">
				<view class="b-col-title">上车时间：</view>
				<view class="b-col-val">{{order.depart_time}}</view>
			</view>
		</view>
		<view class="footer">
			<view class="btn-go" @click="accOrder(order)">立即接单</view>
		</view>
	</view>

</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[
					{order_no:'0099',depart_title:'长沙',arrive_title:'南江片区',
					 depart_address:'高铁南站',depart_time:'2020-11-01 15:10',
					 numbers:'1',user_mobile:'13652012586',user_name:'李小姐'},
					 {order_no:'0023',depart_title:'长沙',arrive_title:'南江片区',
					  depart_address:'火车站',depart_time:'2020-11-01 13:50',
					  numbers:'1',user_mobile:'15863210258',user_name:'木子子'},
					  {order_no:'0234',depart_title:'长沙',arrive_title:'南江片区',
					   depart_address:'天心区中信广场',depart_time:'2020-11-01 13:10',
					   numbers:'1',user_mobile:'18520326584',user_name:'黄大哥'},
					   {order_no:'0678',depart_title:'长沙',arrive_title:'南江片区',
					    depart_address:'雨花区山水豪庭',depart_time:'2020-11-01 14:20',
					    numbers:'2',user_mobile:'18963201457',user_name:'易先生'},
						{order_no:'0111',depart_title:'长沙',arrive_title:'南江片区',
						 depart_address:'岳麓区步步高',depart_time:'2020-11-01 12:30',
						 numbers:'1',user_mobile:'17762014589',user_name:'刘先生'},
					]
			}
		},
		methods: {
			accOrder(order){
				this.orderList = this.orderList.filter(t=>t.order_no != order.order_no)
			}
		}
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
							color: #000000;
							font-size: 28rpx;
							border-radius: 30rpx;
							text-align: center;
							border: 1rpx solid #999999;
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
					background: #4CD964;
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

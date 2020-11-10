<template>
	<view class="user">
		<!-- 头部 -->
		<view class="user-wrap">
			<image class="user-bg" mode="aspectFill" :src="userInfo.userBg"></image>
			<view class="info">
				<image class="avatar" mode="aspectFill" :src="userInfo.headPicUrl"></image>
				<view class="name-phone">
					<view class="nickname">{{ userInfo.nickName }}</view>
					<view class="phone">{{ userInfo.phone }}</view>
				</view>
			</view>
			<view class="setting iconfont icon31shezhi"></view>
		</view>

		<!-- 用户功能 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in userList" :key="index">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>

		<!-- 用户服务 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in serverList" :key="index">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	components: {

	},
	data() {
		return {
			userInfo: {
				headPicUrl: '/static/images/user/person-header.jpg',
				nickName: '老狗咯',
				phone:'18620256487',
				userBg:'/static/images/user/user-bg2.png'
			},
			currentIndex: 0,
			userList: [
				// {
				// 	title: '收货地址',
				// 	icon: '/static/images/user/icon-address.png',
				// 	path: 'address-list'
				// },
				{
					title: '我的转单',	
					icon: '/static/images/user/icon-collect.png',
					path: 'collect-list'
				},
				{
					title: '我的账单',
					icon: '/static/images/user/icon-foot.png',
					path: 'browse-list'
				}
			],
			serverList: [
				{
					title: '客服中心',
					icon: '/static/images/user/icon-kefu.png',
					path: 'kefu'
				},
				{
					title: '帮助中心',
					icon: '/static/images/user/icon-help.png',
					path: 'help'
				},
				{
					title: '版本',
					icon: '/static/images/user/icon-about.png',
					text: '1.0.0'
				}
			]
		};
	}
};
</script>

<style lang="scss">
page {
	background: #f2f2f2;
}
.btn-hover {
	background: #f2f2f2 !important;
}
.user {
	.user-wrap {
		display: flex;
		// justify-content: center;
		align-items: center;
		height: 50vw;
		z-index: 9;
		// border-radius: 0 0 20% 20%;
		// background: url('/static/images/user/user-bg.png') no-repeat;
		// background-size: cover;
		.user-bg{
			width: 100%;
			height: 50vw;
			border-radius: 0 0 20% 20%;
			background-size: cover;
		}
		.setting {
			color: #fff;
			position: absolute;
			top: 60rpx;
			right: 60rpx;
			font-size: 50rpx;
		}
		.info {
			position: absolute;
			text-align: center;
			display: inline-flex;
			left: 60rpx;
			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}
			.name-phone{
				color: #fff;
				font-size: 28rpx;
				text-align: left;
				margin: auto 0 auto 10rpx;

				.nickname {
					color: #fff;
					font-size: 28rpx;
				}
				.phone {
					color: #fff;
					font-size: 28rpx;
				}
			}

		}
	}
	
	.com-item {
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 20rpx;
		.com-wrap {
			border-radius: 25rpx;
			overflow: hidden;
		}
	}
	.cell {
		height: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #f8f8f8;
		&:active {
			background: #f2f2f2;
		}
		&:last-child {
			border-bottom: none !important;
		}
		.cell-left {
			display: flex;
			align-items: center;
			.cell-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.cell-text {
				color: #666;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.iconfont {
			font-size: 40rpx;
			color: #999;
		}
	}
}
</style>

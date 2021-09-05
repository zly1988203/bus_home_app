<template>
	<view class="page_login">
		<!-- 头部logo -->
		<view class="head">
			<view class="head_bg">
				欢迎
			</view>
		</view>
		<!-- 登录form -->
		<view class="login_form">
			<view class="input">
				<view class="img">
					<image style="width:27px;height: 27px;" :src="imgInfo.icon_user" />
				</view>
				<input type="number" maxlength="11" v-model="mobile" placeholder="请输入用户手机号码">
				<view class="img">
					<image @tap="delUser" class="img_del" :src="imgInfo.icon_del" />
				</view>
			</view>
			<view class="line" />
			<view class="input">
				<view class="img">
					<image style="width:20px;height: 25px;" :src="imgInfo.icon_pwd" />
				</view>
				<input :type="pwdType" :value="password" @input="inputPwd" placeholder="请输入密码">
				<view class="img" @tap="switchPwd">
					<image class="img_pwd_switch" :src="imgInfo.icon_pwd_switch" />
				</view>
			</view>
			<view class="line" />
		</view>
		<!-- 登录提交 -->
		<view class="error-msg">{{errorMsg}}</view>
		<button class="submit" type="primary" @tap="login">登录</button>
		<view class="opts">
			<!-- <text @tap="goReg" class="text">立即注册</text> -->
			<text @tap="findPwd" class="text">忘记密码？</text>
		</view>
<!-- 		<view class="quick_login_line">
			<view class="line" />
			<text class="text">快速登录</text>
			<view class="line" />
		</view> -->
<!-- 		<view class="quick_login_list">
			<image @tap="thirdLogin('qq')" class="item" :src="imgInfo.qq" />
			<image @tap="thirdLogin('wechat')" class="item" :src="imgInfo.wechat" />
			<image @tap="thirdLogin('weibo')" class="item" :src="imgInfo.weibo" />
		</view> -->
	</view>
</template>
<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				mobile: '18688746195',
				password: '',
				pwdType: 'password',
				imgInfo: {
					icon_user: isUni ? '/static/images/login/icon_user.png' : require('./images/icon_user.png'),
					icon_del: isUni ? '/static/images/login/icon_del.png' : require('./images/icon_del.png'),
					icon_pwd: isUni ? '/static/images/login/icon_pwd.png' : require('./images/icon_pwd.png'),
					icon_pwd_switch: isUni ? '/static/images/login/icon_pwd_switch.png' : require('./images/icon_pwd_switch.png'),
				},
				errorMsg:''
			}
		},
		methods: {
			inputUsername(e) {
				this.mobile = e.target.value
			},
			inputPwd(e) {
				this.password = e.target.value
			},
			delUser() {
				this.mobile = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			login() {
				let userInfo = {
					account: this.mobile,
					password: this.password,
					}
				
				this.$api.login(userInfo).then(res => {
					debugger
				   // 获得数据 
				   console.log("login",res) 
				   if(res.code == 200){
					   let driverInfo = res.data.driverInfo
					   console.log("driverInfo",driverInfo) 
					    uni.setStorageSync('driverInfo', JSON.stringify(driverInfo));
					   uni.switchTab({
					   	url:'/pages/index/index'
					   })
				   }else{
					   this.errorMsg = res.msg
				   }
				}).catch(res => {
					
					this.errorMsg = '登录错误 请稍后重试...'
				　　// 失败进行的操作
				})
		
			},
			findPwd() {
				uni.navigateTo({
					url:'/pages/find-pwd/find-pwd'
				})
			},
			goReg() {
				uni.navigateTo({
					url:'/pages/reg/reg'
				})
			},
			thirdLogin(type) {
				console.log(type)
			}
		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #f5f6f8;
	}
</style>
<style lang="scss" scoped>
	$logo-padding: 40px;
	$form-border-color: rgba(214, 214, 214, 1);
	$text-color: #B6B6B6;

	.page_login {
		padding: 10px;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;

		.head_bg {
			width: 100px;
			height: 100px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bolder;
			font-size: 80rpx;
		}
	}

	.login_form {
		display: flex;
		margin: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// border: 1px solid $form-border-color;
		// border-radius: 10px;

		.line {
			width: 100%;
			height: 1px;
			background-color: $form-border-color;
		}

		.input {
			width: 100%;
			max-height: 45px;
			display: flex;
			padding: 3px;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.img {
				min-width: 40px;
				min-height: 40px;
				margin: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.img_del {
				width: 21px;
				height: 21px;
			}

			.img_pwd_switch {
				width: 28px;
				height: 12px;
			}

			input {
				outline: none;
				height: 30px;
				width: 100%;

				&:focus {
					outline: none;
				}
			}
		}
	}
	
	.error-msg{
		text-align: center;
		color: red;
		font-size: 24rpx;
	}
		

	.submit {
		margin-top: 30rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		color: white;
		border-radius: 40rpx;
		background-color: #FFD101;
		-webkit-tap-highlight-color: #FFD101;

		&:active {
			color: #B6B6B6;
			background-color: #FFD101;
		}
	}

	.opts {
		margin-top: 5px;
		margin-left: 25px;
		margin-right: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.text {
			font-size: 13px;
			color: $text-color;
		}
	}

	.quick_login_line {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.line {
			height: 1px;
			width: 38%;
			background-color: rgba(211, 211, 213, 1);
		}

		.text {
			font-size: 13px;
			color: rgba(200, 200, 200, 1);
			margin: 2px;
		}
	}

	.quick_login_list {
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.item {
			width: 50px;
			height: 50px;
			margin: 20px;
		}
	}
</style>

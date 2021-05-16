<template>
	<view class="page_login">
		<!-- 头部logo -->
		<view class="head">
			<view class="head_bg">
				重置密码
			</view>
		</view>
		<!-- form -->
		<view class="form">
			<view class="input">
				<input type="text" v-model="phoneNo" placeholder="请输入手机号" />
				<view class="img">
					<image @tap="delUser" class="img_del" :src="imgInfo.icon_del" />
				</view>
			</view>
			<view class="line" />
			<view class="code">
				<input type="text" :value="code" placeholder="请输入验证码" />
				<button style="border-radius: 30rpx;" size="mini" type="primary" plain="">获取验证码</button>
			</view>
			<view class="line" />
			<view class="input">
				<input :type="pwdType" :value="userpwd" @input="inputPwd" placeholder="密码长度8-20位">
				<view class="img" @tap="switchPwd">
					<image class="img_pwd_switch" :src="imgInfo.icon_pwd_switch" />
				</view>
			</view>
			<view class="line" />
		</view>
		<!-- 登录提交 -->
		<button class="submit" type="primary" @tap="modifyPwd">修改密码</button>
	</view>
</template>

<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				phoneNo: '',
				userpwd: '',
				code: '',
				pwdType: 'password',
				imgInfo: {
					head: '/static/head.png',
					icon_del: '/static/icon_del.png',
					icon_pwd_switch: '/static/icon_pwd_switch.png'
				}
			};
		},
		methods: {
			delUser() {
				this.phoneNo = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			modifyPwd() {

			}
		},
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
	$logo-padding: 30px;
	$form-border-color: rgba(214, 214, 214, 1);

	.page_login {
		padding: 10px;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		// padding-bottom: $logo-padding;

		.head_bg {
			width: 100px;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 40rpx;
			font-weight: bolder;

		}
	}

	.form {
		display: flex;
		margin: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.line {
			width: 100%;
			height: 1px;
			background-color: $form-border-color;
		}

		.code {
			width: 102%;
			min-height: 50px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			input {
				border: none;
				outline: none;
				height: 50px;
				// border: 1px solid $form-border-color;
				// border-radius: 5px;
				padding-left: 10px;
				margin-right: 20px;

				&:focus {
					outline: none;
				}
			}
		}

		.input {
			width: 100%;
			min-height: 50px;
			margin: 10px;
			display: flex;
			padding: 3px;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			// border: 1px solid $form-border-color;
			// border-radius: 5px;

			input {
				outline: none;
				margin-left: 10px;
				height: 30px;
				width: 100%;

				&:focus {
					outline: none;
				}
			}

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

		}
	}

	.submit {
		margin-top: 30px;
		margin-left: 20px;
		margin-right: 20px;
		color: white;
		border-radius: 40rpx;
		background-color: #FFD101;
		-webkit-tap-highlight-color: #FFD101;

		&:active {
			color: #B6B6B6;
			background-color: #FFD101;
		}
	}
</style>

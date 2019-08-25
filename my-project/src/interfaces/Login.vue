<template>
	<div class="v-container">
		<div class="sign"></div>
		<div class="login-part">
			<a href="https://www.vivo.com.cn/" target="_blank"><div class="sign2"></div></a>
			<p class="account">帐号登录</p>
			<form class="form-group">
				<v-inputUsername :msg="user" v-on:update:name="getMsg"></v-inputUsername>
				<p class="invalid-msg" v-bind:style="styleObject1">
					<small v-bind:style="styleObject">{{ invalid_msg }}</small>
				</p>
				<v-inputPassword :msg2="pass" v-on:update:word="getPassword"></v-inputPassword>
				<p class="invalid-msg" v-bind:style="styleObject2">
					<small v-bind:style="styleObject">{{ invalid_msg2 }}</small>
				</p>
				<div class="row justify-content-end">
					<input type="checkbox" class="" id="auto_login">
					<label for="auto_login" class="form-label-group ml-1">两周内自动登录</label>
				</div>
			</form>			
			<button type="submit" class="btn btn-primary" @click="submit">登录</button>
			<button class="btn sign-up" v-on:click='sign_up_page'>注册vivo账号</button>
			<p class="find">忘记密码？</p>
			<div class="row diff-ways align-items-center">
				<hr />
				<span>其它方式登录</span>
				<hr />
			</div>
			<v-wayOfLogin v-bind:imgArray="imgArray" @lightPic="light" @fadePic="fade"></v-wayOfLogin>
		</div>
	</div>
</template>

<script>
	import InputUsername from '@/components/InputUsername'
	import InputPassword from '@/components/InputPassword'
	import WaysOfLogin from '@/components/WaysOfLogin'
	
	import qq from '../assets/login/qq.png'
	import wechat from '../assets/login/wechat.jpg'
	import alipay from '../assets/login/alipay.jpg'
	import weibo from '../assets/login/weibo.jpg'
	import qq_hover from '../assets/login/qq_hover.png'
	import wechat_hover from '../assets/login/wechat_hover.jpg'
	import alipay_hover from '../assets/login/alipay_hover.png'
	import weibo_hover from '../assets/login/weibo_hover.jpg'
	
	export default {
		data() {
			return {
				user: '请输入用户名',
				pass: '请输入密码',
				username: '',
				password: '',
				message: '',
				invalid_msg: '',
				invalid_msg2: '',
				styleObject: {
					color: 'red'
				},
				styleObject1: {
					display: 'none'
				},
				styleObject2: {
					display: 'none'
				},
				imgArray: []
			}
		},
		mounted() {
			this.imgArray = [
				{
					index: 0,
					url_img: qq,
					url: qq,
					url_update: qq_hover,
				},
				{
					index: 1,
					url_img: wechat,
					url: wechat,
					url_update: wechat_hover,
				},
				{
					index: 2,
					url_img: alipay,
					url: alipay,
					url_update: alipay_hover,
				},
				{
					index: 3,
					url_img: weibo,
					url: weibo,
					url_update: weibo_hover,
				}
			]
		},
		components: {
			'v-inputUsername': InputUsername,
			'v-inputPassword': InputPassword,
			'v-wayOfLogin': WaysOfLogin
		},
		methods: {
			getMsg: function(user) {
				this.username = user
			},
			getPassword: function(inputPassword) {
				this.password = inputPassword
			},
			light: function(index) {
				this.imgArray[index].url_img = this.imgArray[index].url_update
			},
			fade: function(index) {
				this.imgArray[index].url_img = this.imgArray[index].url
			},
			submit: function() {
				if (this.username == '') {
					this.styleObject1 = {
						display: 'block'
					}
					this.invalid_msg = '请输入用户名'
				} else {
					this.styleObject1 = {
						display: 'none'
					}
				}
				if (this.password == '') {
					this.styleObject2 = {
						display: 'block'
					}
					this.invalid_msg2 = '请输入密码'
				} else {
					this.styleObject2 = {
						display: 'none'
					}
				}
			},
			sign_up_page: function() {
				this.$router.push('/sign-up')
			}
		}
	}
</script>

<style scoped="scoped">
	.v-container {
		background: url(../assets/login/bg_img_of_login.png);
		background-repeat: no-repeat;
		width: 100%;
		height: 780px;
		margin: 0;
		padding: 0;
		position: relative;
	}
	@media screen and (min-width: 1265px) {
		/* since the width of img is 1264px, we need to enlarge the width if the screen's width is greater than 1264px */
		.v-container {
			background-size: 100%;
		}
	}
	.v-container>.sign {
		background: url(../assets/login/logo-1.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 145px;
		height: 50px;
		position: absolute;
		left: 275px;
	}
	.login-part {
		width: 420px;
		height: 620px;
		background: rgb(255, 255, 255);
		position: absolute;
		top: 75px;
		right: 35px;
	}
	a>.sign2 {
		background: url(https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.1f42884.png.webp);
		background-size: 100%;
		background-repeat: no-repeat;
		width: 160px;
		height: 42px;
		margin: 30px auto 0;
	}
	.login-part p.account {
		text-align: center;
		margin: 15px auto 0;
		line-height: 35px;
		font-size: 22px;
	}
	.v-container form {
		width: 360px;
		margin: 60px auto 0;
	}
	p.invalid-msg {
		margin: 0
	}
	.row {
		margin: 0.25rem auto 0;
		width: 360px;
		height: 22px;
	}
	.row>input {
		width: 18px;
		height: 18px;
	}
	.row>label {
		height: 19px;
		margin: 0;
		font-size: 14px;
	}
	button {
		margin-top: 10px;
		margin-left: 30px;
		width: 360px;
		height: 48px;
	}
	.sign-up {
		border: 1px solid #007bff;
		background: white;
		color: #007bff;
	}
	.sign-up:hover {
		background: #d4dffa;
	}
	p.find {
		margin: 10px auto 0;
		width: 360px;
		height: 22px;
		font-size: 14px;
		text-align: center;
		line-height: 22px;
		cursor: pointer;
	}
	p.find:hover {
		color: #007bff;
	}
	.diff-ways {
		margin-top: 20px;
		height: 20px;
		color: #999;
	}
	hr {
		width: 130px;
		height: 1px;
	}
	span {
		font-size: 12px;
		line-height: 20px;
	}
	
</style>

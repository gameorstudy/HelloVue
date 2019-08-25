<template>
	<div class="v-container justify-content-center">
		<div class="content">
			<a href="https://www.vivo.com.cn/" target="_blank"><div class="logo"></div></a>
			<p class="word">帐号登录</p>
			<form class="form-group">
				<v-inputUsername v-bind:msg="user" v-bind:name="username" v-on:update:name="getMsg"></v-inputUsername>
				<p class="invalid-msg" v-bind:style="styleObject1">
					<small v-bind:style="styleObject">{{ invalid_msg }}</small>
				</p>
				<small class="mb-1 des">包含汉字、数字、字母或下划线，且长度为6-20。</small>
				<v-inputPassword v-bind:msg2="pass" v-bind:word="password" v-on:update:word="getPassword"></v-inputPassword>
				<p class="invalid-msg" v-bind:style="styleObject2">
					<small v-bind:style="styleObject">{{ invalid_msg2 }}</small>
				</p>
				<small class="mb-1 des">以字母开头，长度在6~18之间，只能包含字符、数字和下划线。</small>
				<small class="checked" v-bind:style="styleObject3">请您先勾选接受《vivo服务协议》</small>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" :checked="isChecked" @change="hide" class="custom-control-input" id="customControlValidation" required="required" />
					<label class="custom-control-label" for="customControlValidation">
						我已阅读并接受
						<router-link :to="{ path: '/protocol' }" target="_blank">《vivo服务协议》</router-link>
					</label>
				</div>
			</form>
			<div class="row">
				<input type="submit" class="btn btn-primary col-md-6" value="注册" v-on:click="submit" />
				<input type="reset" class="btn btn-info col-md-6" value="重置" v-on:click="reset" />
			</div>
		</div>
	</div>
</template>

<script>
import InputPassword from '@/components/InputPassword';
import InputUsername from '@/components/InputUsername';

export default {
	components: {
		'v-inputPassword': InputPassword,
		'v-inputUsername': InputUsername
	},
	data() {
		return {
			user: '用户名',
			pass: '密码',
			username: '',
			password: '',
			msg1: '',
			imageSrc: '',
			invalid_msg: '',
			invalid_msg2: '',
			dataPattern: /^[\w\u4e00-\u9fa5]+$/, // 不需要打引号(without qoutes)
			dataPattern2: /^\w+$/,
			dataPattern3: /^[a-zA-Z]+$/, 
			styleObject: {
				color: 'red'
			},
			styleObject1: {
				display: 'none'
			},
			styleObject2: {
				display: 'none'
			},
			styleObject3: {
				display: 'none'
			},
			isChecked: false
		};
	},
	methods: {
		getMsg: function(user) {
			this.username = user
		},
		getPassword: function(inputPassword) {
			this.password = inputPassword
		},
		hide: function() {
			if (!this.isChecked) {
				this.styleObject3 = {
					display: 'none'
				}
			}
			this.isChecked = !this.isChecked
		},
		submit: function() {
			if (this.username == '') {
				this.styleObject1 = {
					display: 'block'
				}
				this.invalid_msg = '请输入用户名'
			} else if (this.username.length <= 5 || this.username.length >= 21) {
				this.styleObject1 = {
					display: 'block'
				}
				this.invalid_msg = '用户名长度不合格'
			} else if (!this.dataPattern.test(this.username)) {
				this.styleObject1 = {
					display: 'block'
				}
				this.invalid_msg = '用户名含有非法字符'
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
			} else if (this.password.length <= 5 || this.password.length >= 17) {
				this.styleObject2 = {
					display: 'block'
				}
				this.invalid_msg2 = '密码长度不合格'
			} else if (!this.dataPattern2.test(this.password)) {
				this.styleObject2 = {
					display: 'block'
				}
				this.invalid_msg2 = '密码包括非法字符'
			} else if (!this.dataPattern3.test(this.password.charAt(0))) {
				this.styleObject2 = {
					display: 'block'
				}
				this.invalid_msg2 = '密码未以字母开头'
			} else {
				this.styleObject2 = {
					display: 'none'
				}
			}
			if (!this.isChecked) {
				this.styleObject3 = {
					display: 'block',
					color: 'red'
				}
			}
		},
		reset: function() {
			this.username = ''
			this.password = ''
		}
	}
}
</script>

<style scoped="scoped">
	.v-container {
		width: 100%;
		height: 863px;
		display: flex;
		justify-content: center;
		position: relative;
		background: rgb(247, 247, 247);
	}
	@media screen and (max-width: 860px) {
		.v-container {
			display: flex;
			justify-content: flex-start;
		}
	}
	.v-container .content {
		background: rgb(255, 255, 255);
		width: 860px;
		height: 670px;
		position: absolute;
		top: 80px;
	}
	.v-container .logo {
		background: url(https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.1f42884.png.webp);
		background-size: 100%;
		background-repeat: no-repeat;
		width: 160px;
		height: 42px;
		margin: 60px auto 0;
	}
	.v-container p.word {
		text-align: center;
		margin: 35px auto 0;
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
	small.des {
		color: #b299a5;
	}
	a {
		text-decoration: none;
	}
	.row {
		width: 360px;
		margin: 0 auto;
	}
	input[type='submit'] {
		height: 48px;
	}
</style>

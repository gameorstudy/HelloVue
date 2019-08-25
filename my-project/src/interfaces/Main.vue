<template>
	<div class="v-container">
		<header>
			<v-headerLabel v-bind:headerLabels="headerLabels"></v-headerLabel>
			<span class="left" v-on:click="sign_up">注册</span>
			<span>|</span>
			<span class="right" v-on:click="login">登录</span>
			<router-link :to="{ path: '/shoppingCart' }"><span class="shoppingCart">购物车</span></router-link>
		</header>
		<div class="center">
			<div class="products" :style="styleObject" @mouseover="show" @mouseleave="hide">
				<v-phoneModel v-bind:phoneModels="phoneModels" :index="index" v-bind:choices="choices"
				 @light="div_hover" @fade="no_hover" :bgColorStyle="bgColorStyle" 
				 :strokeColor="strokeColor" :strokeColor2="strokeColor2" :texts="texts"></v-phoneModel>
			</div>
			<div class="wrap" :style="{background: bg}">
				<div style="display: none;">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<symbol id="vivo-brand-logo" viewBox="0 0 3912 1024">
							<g>
								<path
									v-bind:fill="color"
									d="M3522.471385 853.333333H3186.034872C2996.923077 853.333333 2980.105846 697.462154 2980.105846 649.846154 2980.105846 602.230154 2996.923077 446.358974 3186.034872 446.358974h336.436513C3711.596308 446.358974 3728.413538 602.230154 3728.413538 649.846154 3728.413538 697.462154 3711.596308 853.333333 3522.471385 853.333333m7.31241-577.641025H3191.863795C2840.684308 275.692308 2809.439179 562.281026 2809.439179 649.846154 2809.439179 737.411282 2840.684308 1024 3191.863795 1024h337.92C3880.97641 1024 3912.20841 737.411282 3912.20841 649.846154 3912.20841 562.281026 3880.97641 275.692308 3529.783795 275.692308"
									p-id="661"
								></path>
								<path
									v-bind:fill="color"
									d="M2741.894564 301.948718h-109.554872c-46.920205 0-56.582564 7.890051-74.67323 34.382769-18.116923 26.47959-331.460923 498.372923-331.460924 498.372923-10.003692 14.506667-20.611282 20.374974-33.792 20.374975-13.193846 0-23.788308-5.868308-33.778871-20.374975 0 0-313.370256-471.893333-331.474052-498.372923C1809.069949 309.825641 1799.40759 301.948718 1752.487385 301.948718h-109.554872c-25.206154 0-36.758974 19.442872-20.900103 43.191795l374.258872 560.548102C2054.357333 989.945436 2096.971487 1024 2192.413538 1024s138.056205-34.054564 196.135385-118.311385l374.245744-560.548102c15.858872-23.748923 4.332308-43.191795-20.900103-43.191795M1299.69559 347.726769c0-32.794256 12.8-45.778051 45.108513-45.778051h80.462769c32.295385 0 45.095385 12.996923 45.095384 45.778051v630.482052c0 32.794256-12.8 45.791179-45.095384 45.791179h-80.462769C1312.508718 1024 1299.69559 1011.003077 1299.69559 978.208821V347.726769zM1292.973949 147.954872c-26.046359-26.033231-26.046359-46.683897 0-72.730257l55.676718-55.676718c26.046359-26.059487 46.697026-26.059487 72.743384-0.013128l55.702975 55.676718c26.033231 26.059487 26.033231 46.710154 0 72.756513l-55.702975 55.676718c-26.046359 26.046359-46.697026 26.046359-72.730256 0l-55.689846-55.676718zM1126.534564 301.948718h-109.436718c-46.867692 0-56.530051 7.903179-74.594461 34.382769C924.412718 362.811077 611.383795 834.691282 611.383795 834.691282c-9.977436 14.506667-20.571897 20.374974-33.739487 20.374974-13.193846 0-23.775179-5.868308-33.765744-20.374974 0 0-313.028923-471.893333-331.093333-498.372923C194.720821 309.851897 185.058462 301.948718 138.190769 301.948718H28.754051C0.633436 301.948718-7.965538 321.39159 7.880205 345.140513 23.699692 368.902564 381.718974 905.675487 381.718974 905.675487 439.732513 989.945436 482.32041 1024 577.644308 1024c95.310769 0 137.911795-34.054564 195.912205-118.324513L1147.40841 345.140513c15.832615-23.748923 7.246769-43.191795-20.873846-43.191795"
								></path>
							</g>
						</symbol>
					</svg>
				</div>
				<div class="logo">
					<a href="https://www.vivo.com.cn/" @mouseover="light" @mouseleave="fade">
						<svg viewBox="0 0 3912 1024" class="vivo-brand-logo-small">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vivo-brand-logo"></use>
						</svg>
					</a>
				</div>
				<v-brand v-bind:brands="brands" @sendIndex="getIndex" @show="show" @hide="hide"></v-brand>
				<ul class="brand">
					<li class="mall"><a href="https://shop.vivo.com.cn/">商城</a></li>
					<li class="service"><a href="https://www.vivo.com.cn/service.html">服务</a></li>
				</ul>
				<span class="search-icon">
					<img src="../assets/main/search.png" alt="search">
				</span>
			</div>
			<p class="nav-label"> 
				<span><a href="https://shop.vivo.com.cn/index.html">{{ title }}</a></span>
				<span>&gt;</span>
				<span>{{ variant }}</span>
			</p>
			<div class="choiceTabs">
				
			</div>
					
		</div>
	</div>
</template>

<script>
import HeaderLabel from '@/components/HeaderLabel'
import Brand from '@/components/Brand'
import PhoneModel from '@/components/PhoneModel'

// import pictures
import NEXFingerPrint from '../assets/main/NEX FingerPrint.png'
import NEXUltemate from '../assets/main/NEX Ultemate.png'
import NEXDualScreen from '../assets/main/NEX DualScreen.png'
import IQOO from '../assets/main/IQOO.png'
import IQOONeo from '../assets/main/IQOO Neo.png'
import IQOOPro from '../assets/main/IQOO pro.png'
import X23 from '../assets/main/X23.png'
import X23Amazing from '../assets/main/X23 Amazing.png'
import X278GB from '../assets/main/X27 8GB+128GB.png'
import X27Pro from '../assets/main/X27 Pro.png'
import X27 from '../assets/main/X27.png'
import S1 from '../assets/main/S1.png'
import S1Pro from '../assets/main/S1 Pro.png'
import Z3 from '../assets/main/Z3.png'
import Z3i from '../assets/main/Z3i.png'
import Z3x from '../assets/main/Z3x.png'
import Z5 from '../assets/main/Z5.png'
import Z5x from '../assets/main/Z5x.png'
import Y91 from '../assets/main/Y91.png'
import Y93 from '../assets/main/Y93.png'
import Y3 from '../assets/main/Y3.png'
import Y7s from '../assets/main/Y7s.png'
import U1 from '../assets/main/U1.png'

export default {
	components: {
		'v-headerLabel': HeaderLabel,
		'v-brand': Brand,
		'v-phoneModel': PhoneModel
	},
	data() {
		return {
			headerLabels: [],
			color: 'black',
			brands: [],
			title: '商城首页',
			variant: '智能手机',
			styleObject: {
				display: 'none'
			},
			phoneModels: [],
			choices: [],
			index: 0,
			bgColorStyle: '#f1f1f1',
			strokeColor: 'black',
			strokeColor2: 'black',
			bg: '#f7f7f7',
			texts: [],
			urls: []
		};
	},
	mounted() {
		this.headerLabels = [
			{ title: '品牌', url: 'https://www.vivo.com.cn/brand/home' },
			{ title: 'Funtouch OS', url: 'https://www.vivo.com.cn/funtouchos' },
			{ title: '体验店', url: 'https://www.vivo.com.cn/store' },
			{ title: '政企业务', url: 'https://www.vivo.com.cn/cooperation' },
			{ title: '社区', url: 'https://bbs.vivo.com.cn/' }
		],
		this.brands = [
			{id: 0, title: 'iQOO专区', url: 'https://www.vivo.com.cn/products-iqoo.html'},
			{id: 1, title: 'NEX系列', url: 'https://www.vivo.com.cn/products-nex.html'},
			{id: 2, title: 'X系列', url: 'https://www.vivo.com.cn/products-x.html'},
			{id: 3, title: 'S系列', url: 'https://www.vivo.com.cn/products-s.html'},
			{id: 4, title: 'Z系列', url: 'https://www.vivo.com.cn/products-z.html'},
			{id: 5, title: 'Y系列', url: 'https://www.vivo.com.cn/products-y.html'},
			{id: 6, title: 'U系列', url: 'https://www.vivo.com.cn/products-u.html'}
		],
		this.phoneModels = [
			[
				{id: 0, url: 'https://www.vivo.com.cn/vivo/iqoopro/', url_img: IQOOPro, model: 'IQOO Pro', new: '新款'},
				{id: 1, url: 'https://www.vivo.com.cn/vivo/iqooneo/', url_img: IQOONeo, model: 'IQOO Neo', new: '新款'},
				{id: 2, url: 'https://www.vivo.com.cn/vivo/iqoo', url_img: IQOO, model: 'IQOO', new: ''}
			],
			[
				{id: 0, url: 'https://www.vivo.com.cn/vivo/nex/', url_img: NEXFingerPrint, model: 'NEX&NEX屏幕指纹版', new: ''},
				{id: 1, url: 'https://www.vivo.com.cn/vivo/nexs/', url_img: NEXUltemate, model: 'NEX旗舰版', new: ''},
				{id: 2, url: 'https://www.vivo.com.cn/vivo/nexdualdisplay/', url_img: NEXDualScreen, model: 'NEX双屏版', new: '新款'}
			],
			[
				{id: 0, url: 'https://www.vivo.com.cn/vivo/x27/', url_img: X27, model: 'X27', new: '新款'},
				{id: 1, url: 'https://www.vivo.com.cn/vivo/x27pro/', url_img: X27Pro, model: 'X27 Pro', new: '新款'},
				{id: 2, url: 'https://www.vivo.com.cn/vivo/x27normal/', url_img: X278GB, model: 'X27 8GB+1GB版', new: '新款'},
				{id: 3, url: 'https://www.vivo.com.cn/vivo/x23my/', url_img: X23Amazing, model: 'X23 幻彩版', new: ''},
				{id: 4, url: 'https://www.vivo.com.cn/vivo/x23/', url_img: X23, model: 'X23', new: ''}
			],
			[
				{id: 0, url: 'http://www.vivo.com.cn/vivo/s1pro/', url_img: S1Pro, model: 'S1 Pro', new: '新款'},
				{id: 1, url: 'http://www.vivo.com.cn/vivo/s1/', url_img: S1, model: 'S1', new: '新款'}
			],
			[
				{id: 0, url: 'https://www.vivo.com.cn/vivo/z5/', url_img: Z5, model: 'Z5', new: '新款'},
				{id: 1, url: 'https://www.vivo.com.cn/vivo/z5x/', url_img: Z5x, model: 'Z5x', new: '新款'},
				{id: 2, url: 'https://www.vivo.com.cn/vivo/z3x/', url_img: Z3x, model: 'Z3x', new: ''},
				{id: 3, url: 'https://www.vivo.com.cn/vivo/z3/', url_img: Z3, model: 'Z3', new: ''},
				{id: 4, url: 'https://www.vivo.com.cn/vivo/z3i/', url_img: Z3i, model: 'Z3i 标准版', new: ''}
			],
			[
				{id: 0, url: 'https://www.vivo.com.cn/vivo/y7s/', url_img: Y7s, model: 'Y7s', new: '新款'},
				{id: 1, url: 'https://www.vivo.com.cn/vivo/y3/', url_img: Y3, model: 'Y3', new: '新款'},
				{id: 2, url: 'https://www.vivo.com.cn/vivo/y91/', url_img: Y91, model: 'Y91', new: ''},
				{id: 3, url: 'https://www.vivo.com.cn/vivo/y93/', url_img: Y93, model: 'Y93 标准版', new: ''}
			],
			[
				{id: 0, url: 'https://www.vivo.com.cn/vivo/u1/', url_img: U1, model: 'U1', new: '新款'}
			]	
		],
		this.texts = [
			{text: '全部IQOO机型', text2: '对比IQOO机型'},
			{text: '全部NEX机型', text2: '对比NEX机型'},
			{text: '全部X机型', text2: '对比X机型'},
			{text: '全部S机型', text2: '对比S机型'},
			{text: '全部Z机型', text2: '对比Z机型'},
			{text: '全部Y机型', text2: '对比Y机型'},
			{text: '全部U机型', text2: '对比U机型'}
		],
		this.urls = [
			{url: 'https://www.vivo.com.cn/products-iqoo.html', url2: 'https://www.vivo.com.cn/vivo/product/contrast?series=16'},
			{url: 'https://www.vivo.com.cn/products-nex.html', url2: 'https://www.vivo.com.cn/vivo/product/contrast?series=14'},
			{url: 'https://www.vivo.com.cn/products-x.html', url2: 'https://www.vivo.com.cn/vivo/product/contrast?series=4'},
			{url: 'https://www.vivo.com.cn/products-s.html', url2: 'https://www.vivo.com.cn/vivo/product/contrast?series=17'},
			{url: 'https://www.vivo.com.cn/products-z.html', url2: 'https://www.vivo.com.cn/vivo/product/contrast?series=12'},
			{url: 'https://www.vivo.com.cn/products-y.html', url2: 'https://www.vivo.com.cn/vivo/product/contrast?series=5'},
			{url: 'https://www.vivo.com.cn/products-u.html', url2: 'https://www.vivo.com.cn/vivo/product/contrast?series=15'}
		],
		this.choices = [
			{url: '', id: 0, svg_id: '#vp-head-product-default-wap', text: '', bgColor: '#f1f1f1', strokeColor: 'black'},
			{url: '', id: 1, svg_id: '#vp-head-default-png', text: '', bgColor: '#f1f1f1', strokeColor: 'black'},
		]
	},
	methods: {
		login: function() {
			this.$router.push('/login');
		},
		sign_up: function() {
			this.$router.push('/sign-up');
		},
		light: function() {
			this.color = 'blue'
		},
		fade: function() {
			this.color = 'black'
		},
		getIndex(id) {
			this.index = id,
			this.choices[0].text = this.texts[id].text
			this.choices[1].text = this.texts[id].text2
			this.choices[0].url = this.urls[id].url
			this.choices[1].url = this.urls[id].url2
			this.bg = "rgb(255, 255, 255)"
		},
		show: function() {
			this.styleObject = {
				display: 'block'
			},
			this.bg = "rgb(255, 255, 255)"
		},
		hide: function() {
			this.styleObject = {
				display: 'none'
			},
			this.bg = '#f7f7f7'
		},
		div_hover: function(index) {
			if (index == 1) {
				this.strokeColor2 = "white"
				this.bgColorStyle = 'blue'
			} else {
				this.strokeColor = "white"
			}
			this.choices[index].bgColor = 'blue'
		},
		no_hover: function(index) {
			if (index == 1) {
				this.bgColorStyle = '#f1f1f1'
			}
			this.strokeColor = "black"
			this.strokeColor2 = "black"
			this.choices[index].bgColor = '#f1f1f1'
		}
	}
};
</script>

<style scoped="scoped">
header {
	width: 100%;
	height: 32px;
	background: #000;
}
header span {
	font-size: 12px;
	color: #ccc;
	height: 100%;
	width: auto;
	line-height: 32px;
	cursor: pointer;
	float: right;
}
span.shoppingCart {
	margin-right: 42px;
}
span.right {
	margin-right: 20px;
}
span.left {
	margin-left: 20px;
	margin-right: 40px;
}
.center {
	width: 100%;
	height: 1585px;
	background: #f7f7f5;
	position: relative;
}
.products {
	width: 100%;
	height: 375px;
	background: rgb(255, 255, 255);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
}
.wrap {
	height: 68px;
	width: 1200px;
	margin-left: -600px;
	position: absolute;
	top: 0;
	left: 50%;
	z-index: 8;
}
.logo {
	width: 80px;
	height: 100%;
	padding: 0;
	margin-right: 80px;
	float: left;
}
.logo a {
	width: 80px;
	height: 100%;
}
.vivo-brand-logo-small {
	width: 80px;
	height: 100%;
}
ul.brand {
	display: inline-block;
	height: 100%;
	margin: 0;
	padding: 0;
}
ul.brand li {
	font-size: 16px;
	height: 100%;
	width: auto;
	line-height: 68px;
	list-style-type: none;
	float: left;
}
ul.brand li a {
	text-decoration: none;
	color: black;
	font-family: 'Microsoft YaHei';
	padding: 0 28px;
}
li.mall a {
	text-decoration: none;
	opacity: 0.55;
}
li.service a:hover {
	color: blue
}
.search-icon {
	width: 68px;
	height: 68px;
	display: flex;
	align-items: center;
	justify-content: center;
	float: right;
	cursor: pointer;
}
p.nav-label {
	height: 72px;
	width: 1200px;
	margin: 0 auto;
	font-size: 13px;
	padding-top: 68px;
}
p.nav-label span {
	line-height: 72px;
}
p.nav-label span>a {
	text-decoration: none;
	color: black;
}
p.nav-label span:nth-child(2) {
	width: 8px;
	height: 24px;
	margin: 8px;
	color: #9e9e9e;
}
p.nav-label span:nth-child(3) {
	color: #9e9e9e;
}
.choiceTabs {
	width: 1200px;
	height: 130px;
	margin: 0 auto;
	background: #fff;
	margin-top: 72px;
}
</style>

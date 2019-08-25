<template>
	<div class="item-box">
		<ul v-for="(items, index) in phoneModels">
			<li v-if="index == id" v-for="item in items" v-bind:key="item.id">
				<a :href="item.url">
					<img :src="item.url_img" alt="" />
					<ul>
						<li>{{ item.model }}</li>
						<li>{{ item.new }}</li>
					</ul>
				</a>
			</li>
		</ul>
		<div class="box">
			<div class="child-box" :style="{background: choice.bgColor}" v-for="choice in choices" @mousemove="update(choice.id)" @mouseleave="restore(choice.id)" :key="choice.id">
				<div style="display: none;">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<symbol viewBox="0 0 300 300" id="vp-head-product-default-wap">
							<g><rect x="0" y="0" width="120" height="120" fill="transparent" stroke-width="20" :stroke="strokeColor" /></g>
							<g><rect x="160" y="0" width="120" height="120" fill="transparent" stroke-width="20" :stroke="strokeColor" /></g>
							<g><rect x="0" y="160" width="120" height="120" fill="transparent" stroke-width="20" :stroke="strokeColor" /></g>
							<g><rect x="160" y="160" width="120" height="120" fill="transparent" stroke-width="20" :stroke="strokeColor" /></g>
						</symbol>
						<symbol viewBox="0 0 300 300" id="vp-head-default-png">
							<g><rect x="0" y="0" width="180" height="260" fill="transparent" stroke-width="20" :stroke="strokeColor2" /></g>
							<g><rect x="60" y="220" width="100" height="20" :fill="strokeColor2" /></g>
							<g><rect x="120" y="60" width="140" height="200" :fill="bgColorStyle" stroke-width="20" :stroke="strokeColor2" /></g>
							<g><rect x="180" y="220" width="30" height="10" :fill="strokeColor2" /></g>
							<g><rect x="190" y="210" width="10" height="30" :fill="strokeColor2" /></g>
						</symbol>
					</svg>
				</div>
				<a :href="choice.url">
					<svg viewBox="0 0 300 300" class="logo"><use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="choice.svg_id"></use></svg>
					<span> {{ choice.text }}</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['phoneModels', 'index', 'choices', 'bgColorStyle', 'strokeColor', 'strokeColor2', "texts"],
	data: function() {
		return {
			id: this.index
		}
	},
	watch: {
		index(val) {
			this.id = val;
		}
	},
	methods: {
		update: function(index) {
			this.$emit("light", index)
		},
		restore: function(index) {
			this.$emit("fade", index)
		}
	}
};
</script>

<style scoped="scoped">
.item-box {
	width: auto;
	margin: 68px auto 0;
	display: flex;
	justify-content: center;
	font-family: 'Microsoft YaHei';
}
ul {
	width: auto;
	height: 265px;
	display: inline-block;
	margin: 0;
	padding: 10px 0 0 0;
	cursor: pointer;
}
ul li {
	width: 200px;
	height: 265px;
	margin: 0;
	list-style-type: none;
	float: left;
}
ul li a {
	width: 100px;
	height: 265px;
	padding: 10px 50px 0;
	margin: 0;
	text-decoration: none;
}
img {
	width: 200px;
	height: 140px;
	padding: 0 50px;
	display: flex;
	justify-content: flex-start;
}
ul li ul {
	width: 100%;
	height: 70px;
	padding: 30px 0 0 0;
	margin: 0;
}
ul li ul li {
	width: 100%;
	height: auto;
	padding: 0;
	text-align: center;
}
ul li ul li:nth-child(1) {
	font-size: 18px;
	line-height: 30px;
	color: black;
}
ul li ul li:nth-child(2) {
	font-size: 12px;
	line-height: 18px;
	color: blue;
}
.box {
	width: 200px;
	height: 140px;
	margin: 35px 0 0 0;
}
.child-box {
	width: 100%;
	height: 60px;
	margin: 5px 0;
	border-radius: 25px;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.child-box a {
	color: black;
	text-decoration: none;
}
.logo {
	width: 30px;
	height: 30px;
	margin-left: 30px;
	margin-right: 10px;
}
span {
	font-size: 14px;
	line-height: 30px;
}
.child-box a:hover {
	color: rgb(255, 255, 255)
}
</style>

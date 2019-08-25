<template>
	<ul @mouseout="display" @mouseover="show">
		<li v-for="item in brands" v-bind:key="item.id"
		 @mouseover="recorder(item.id)" > <a v-bind:href="item.url"> {{ item.title }} </a></li>
	</ul>
</template>

<script>
	export default {
		props: ['brands'],
		methods: {
			recorder(id) {
				this.$emit('sendIndex', id)
			},
			display: function() {
				this.$emit("hide")
			},
			show: function() {
				this.$emit("show")
			}
		}
	}
</script>

<style scoped="scoped">
	ul {
		display: inline-block;
		height: 100%;
		margin: 0;
		padding: 0; 
	}
	li {
		font-size: 16px;
		height: 100%;
		width: auto;
		line-height: 68px;
		list-style-type: none;
		float: left;
	}
	li a {
		padding: 0 28px;
		text-decoration: none;
		color: black;
		font-family: 'Microsoft YaHei';
	}
	li a:hover {
		color: blue
	}
</style>

<template>
	<ul>
		<li v-for="item in headerLabels" v-bind:key="item.title"> <a v-bind:href="item.url"> {{ item.title }} </a></li>
	</ul>
</template>

<script>
	export default {
		props: ['headerLabels']
	}
</script>

<style scoped="scoped">
	ul {
		display: inline-block;
		height: 100%;
		margin: 0;
	}
	li {
		font-size: 12px;
		color: #ccc;
		height: 100%;
		width: auto;
		margin-right: 42px;
		line-height: 32px;
		list-style-type: none;
		float: left;
	}
	li a {
		text-decoration: none;
		color: #ccc
	}
	li a:hover {
		color: #848484;
	}
</style>

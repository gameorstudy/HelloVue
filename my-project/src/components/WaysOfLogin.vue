<template>
	<ul>
		<li v-for="item in imgArray" v-bind:key="item.index">
			<img v-bind:src="item.url_img" @mouseover="light(item.index)" @mouseleave="fade(item.index)" />
		</li>
	</ul>
</template>

<script>
export default {
  props: ['imgArray'],
  methods: {
	  light(index) {
		  this.$emit('lightPic', index)
	  },
	  fade(index) {
		  this.$emit('fadePic', index)
	  }
  }
};
</script>

<style scoped="scoped">
ul {
	width: 360px;
	margin: 20px auto 0;
	padding: 0;
	height: 31px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}
li {
	list-style-type: none;
	float: left;
	width: 26px;
	height: 26px;
	margin: 0 10px;
	padding: 0;
	cursor: pointer;
}
li > img {
	width: 100%;
	height: 100%;
}
</style>

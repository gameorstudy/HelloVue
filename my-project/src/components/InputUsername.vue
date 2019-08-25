<template>
	<div class="form-label-group">
		<input type="text" class="form-control mb-1" placeholder="msg" autofocus :placeholder="msg"
			v-model="username" @keyup="update"/>
		<label for="inputUsername">{{ msg }}</label>
	</div>
</template>

<script>
export default {
	props: ['msg', 'name'],
	data: function() {
		return {
			username: this.name
		}
	},
	watch: {
		name(val) {
			this.username = this.name
		}
	},
	methods: {
		update() {
			this.$emit('update:name', this.username)
		}
	}
}
</script>

<style scoped="scoped">
	@import url('../css/form');
</style>

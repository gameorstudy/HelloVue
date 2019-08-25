<template>
	<div class="form-label-group">
		<input v-bind:type="type" id="inputPassword" class="form-control mb-1" :placeholder="msg2"
			v-model="inputPassword" @keyup="update"/>
		<label for="inputPassword"> {{ msg2 }} </label>
		<img v-bind:src='url' v-on:click="showOrHide" alt="seen">
	</div>
</template>

<script>
	// import blank from '../assets/sign_up/blank.png'
	import eye_off from '../assets/sign_up/eyes-off.png'
	import eye_on from '../assets/sign_up/eyes-on.png'
	
	export default {
		props: ['msg2', 'word'],
		data() {
			return {
				type: 'password',
				inputPassword: this.word,
				url: eye_off,
				eye_off_url: eye_off,
				eye_on_url: eye_on,
				seen: false
			}
		},
		watch: {
			word(val) {
				this.inputPassword = this.word
			} 
		},
		methods: {
			update: function() {
				this.$emit('update:word', this.inputPassword)
			},
			showOrHide: function() {
				if (!this.seen) {
					this.url = this.eye_on_url
					this.type = 'text'
				} else {
					this.url = this.eye_off_url
					this.type = 'password'
				}
				this.seen = !this.seen
			}
		}
	}
	
</script>

<style scoped="scoped">
	@import url("../css/form");
</style>
<style scoped="scoped">
	.form-label-group>img {
		position: absolute;
		width: 24px;
		height: 24px;
		top: 12px;
		right: 12px;
		cursor: pointer;
	}
</style>

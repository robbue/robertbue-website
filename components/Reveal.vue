<template>
  <span class="mask" ref="mask">
		<span class="reveal" ref="reveal" :class="{ primaryColor: this.primaryColor === true, dark: this.dark === true }"></span>
		<span class="content" ref="content"><slot /></span>
	</span>
</template>

<script>
export default {
	props: {
		primaryColor: {
			type: Boolean,
			require: false
		},
		dark: {
			type: Boolean,
			require: false
		}
  },

	mounted () {
		TweenMax.set(this.$refs.reveal, { scaleX: 0 });
		TweenMax.set(this.$refs.content, { backfaceVisibility: 'hidden' });
		/*
		console.log('mounted reveal', this.$el, this.$parent, this.$el.parentNode);
		// const position = window.getComputedStyle(this.$parent.$el, null).getPropertyValue('position');
		const position = window.getComputedStyle(this.$el.parentNode, null).getPropertyValue('position');

		console.log('position', position);
		if (position !== 'absolute' && position !== 'fixed') {
			// this.$parent.$el.style.position = 'relative';
			this.$el.parentNode.style.position = 'relative';
		}
		*/
	}
}
</script>

<style scoped>
.mask {
	position: relative;
	top: 0;
	left: 0;
  /*width: 100%;*/
	height: 100%;
	display: inline-block;
	/*display: inline;*/
	/*overflow: hidden;*/

	& .content {
		display: inline-block;
		/*display: inline;*/
	}

	& .reveal {
		position: absolute;
		z-index: 2;
		top: -2.5%;
		left: -2.5%;
	  width: 105%;
		height: 105%;
		transform-origin: 0% 50% 0px;
		background: var(--color-white);
		display: inline-block;

		&.primaryColor {
			background: var(--color-primary);
			background: #e0caca;
		}

		&.dark {
			background: var(--color-dark);
			/*background: black;*/
		}
	}
}
</style>

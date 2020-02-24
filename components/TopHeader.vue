<template>
  <div class="header" data-reveal>
		<!-- <h1 class="text" itemProp="name" v-if="mainHeader">{{ text }}</h1> -->
		<p class="text" itemProp="name" v-if="mainHeader">
			<reveal ref="reveal">{{ text }}</reveal>
		</p>
		<p class="text" v-else>
			<reveal ref="reveal">{{ text }}</reveal>
		</p>
		<div class="line" ref="line"></div>
	</div>
</template>

<script>
// this.$route.name === 'about' : 'name'
// :class="{ active: this.$route.name === 'index' }"
export default {
  props: {
		text: {
			type: String,
			required: true
		},
		mainHeader: {
			type: Boolean,
			required: false
		}
  }
}
</script>

<style scoped>
.header {
	position: absolute;
	top: -60px;
	left: -10px;
	overflow: hidden;

	@media (--medium) {
		top: -80px;
		left: 0;
	}

	@media (--low) {
		top: -60px;
	}

	& .text {
		font-family: var(--font-body);
		font-size: 15px;
		font-weight: var(--font-weight-semibold);
		color: var(--color-white);

		margin: 0 0 8px 0;
	}

	& .line {
		width: 40px;
		height: 2PX;

		background: var(--color-white);
		background: var(--color-primary);

		transform-origin: 0% 50% 0px;
	}
}
</style>

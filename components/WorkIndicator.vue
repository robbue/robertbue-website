<template>
	<div class="item" ref="item" :class="{ active: this.active === this.itemIndex }" @click="goTo">0{{ itemIndex }}</div>
</template>

<script>
export default {
  props: {
		itemIndex: {
			type: Number,
			required: true
		},
		active: {
			type: Number,
			required: true
		}
  },

	methods: {
		goTo () {
			this.$emit('goTo', this.itemIndex);
		}
	}
}
</script>

<style scoped>
.item {
	margin: 15px 0;

	font-family: var(--font-body);
	font-weight: var(--font-weight-bold);
	font-size: 15px;
	color: var(--color-white);

	opacity: 0.3;
	transition: opacity 500ms ease-out;

	cursor: pointer;

	&.active, &:hover {
		opacity: 1;
	}
}
</style>

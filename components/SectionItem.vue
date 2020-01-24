<template>
	<p class="text" v-bind:class="{ inline: inline }">
		<slot />
	</p>
</template>

<script>
export default {
  props: {
    inline: {
			type: Boolean,
			required: false
		}
  }
}
</script>

<style>
.text {
	font-size: 13px;

	&.inline {
		display: inline-block;
		margin-right: 25px;
	}

	& .highlight {
		/*font-size: 12px;*/
		color: var(--color-primary);
	}

	& .sub {
		font-weight: var(--font-weight-normal);
		color: var(--color-grey);
	}
}
</style>

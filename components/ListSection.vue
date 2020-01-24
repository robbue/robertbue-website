<template>
	<section class="section">
		<h2 class="sectionHeading">{{ heading }}</h2>
		<slot />
	</section>
</template>

<script>
export default {
  props: {
    heading: {
			type: String,
			required: true
		}
  }
}
</script>

<style scoped>
.section {
	margin-bottom: 30px;

	font-size: 14px;
	font-weight: var(--font-weight-semibold);

	lost-utility: clearfix;

	@media (--medium) {
		margin-bottom: 40px;
	}

	& p {
		font-size: 14px;
		font-weight: var(--font-weight-semibold);
	}
}
</style>

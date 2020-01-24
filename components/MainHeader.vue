<template>
	<header class="header" role="banner">
		<logo />
		<navigation />
	</header>
</template>

<script>
import Logo from '~/components/Logo';
import Navigation from '~/components/Navigation';

export default {
  components: { Logo, Navigation }
}
</script>

<style scoped>
.header {
	position: absolute;
	z-index: 20;
	top: 27px;
	left: 5%;
	right: 5%;

	@media (--medium) {
		top: 45px;
		left: 50px;
		right: 50px;
	}
}
</style>

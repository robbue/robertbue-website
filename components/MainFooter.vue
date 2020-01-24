<template>
	<footer class="footer" role="contentinfo" :class="{ active: this.$route.name === 'index' || this.$route.name == 'work2' || this.$route.name == 'work-slug' || this.$route.name === 'contact2', hide: this.$route.name === 'contact' }" >
	  <p>Get in touch<br /><a href="mailto:robert@robertbue.no">robert@robertbue.no</a></p>
	</footer>
</template>

<style>
.footer {
	position: relative;
	z-index: 10;
	bottom: 35px;
	left: 5%;
	width: 200px;
	margin-top: 50px;

	@media (--medium) {
		left: 50px;
		bottom: 45px;
	}

	@media screen and (min-width:320px) and (max-width:767px) and (orientation:landscape) {
		display: none;
	}

	&.active {
		position: fixed;

		bottom: 25px;

		@media (--medium) {
			bottom: 45px;
		}


	}

	&.hide {
		/*display: none;*/
	}

	& p {
		margin: 0;

		font-size: 12px;
		font-weight: var(--font-weight-semibold);
		color: var(--color-white);

		@media (--medium) {
			font-size: 13px;
		}
	}

	& a {
		font-weight: var(--font-weight-normal);
		color: var(--color-grey);
	}
}
</style>

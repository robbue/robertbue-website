<template>
	<app-container>
		<main-header />
		<main class="content" ref="main" role="main" data-scroll-container>
			<nuxt :polyfill="this.polyfillLoaded" />
		</main>
		<main-footer :route="$route.name" />
  </app-container>
</template>

<script>
import AppContainer from '~/components/AppContainer.vue';
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';

export default {
	components: {
		AppContainer,
		MainHeader,
		MainFooter
	},

	data: function () {
    return {
			firstLoad: false,
			polyfillLoaded: false
		}
  },

	mounted () {
  }
}
</script>

<style>
</style>

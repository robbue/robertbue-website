<template>
  <app-container>
		<main-header />
    <main class="content" role="main">
			<nuxt :polyfill="this.polyfillLoaded" />
		</main>
		<main-footer :route="$route.name" />
  </app-container>
</template>

<script>
import AppContainer from '~/components/AppContainer.vue';
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';

/*
<transition
@before-enter="beforeEnter"
@enter="enter"
@after-enter="afterEnter"
@enter-cancelled="enterCancelled"
@before-Leave="beforeLeave"
@leave="leave"
@after-leave="afterLeave"
@leave-cancelled="leaveCancelled"
:css="false">
	<nuxt :polyfill="this.polyfillLoaded" />
</transition>
*/

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

	created () {
    // console.log(this.$route);
  },

	mounted () {
		/*
		if (!('IntersectionObserver' in window)) { // remove ! in prod
			this.polyfillLoaded = true;
		} else {
			import('intersection-observer')
		  .then((AsyncComponent) => {
		    //console.log(AsyncComponent.default);
				console.log('Finished loading ntersection-observer polyfill');
				this.polyfillLoaded = true;
		  });
		}
		*/

		// let intersection = require('intersection-observer');
		// console.log('intersection', intersection);
    //
		// const el = document.createElement('script');
	  // el.src = `${name}.js`;
	  // el.async = false; // Keep the execution order
	  // document.head.appendChild(el);

		/*
		scroll () {
			const element = document.getElementById("express-animation");
			observeScroll(element, startAnimation);
		},
		*/
  },

	methods: {

	}
}
</script>

<style>
</style>

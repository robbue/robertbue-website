<template>
  <div class="app">
		<loading ref="loading" />
		<slot></slot>
	</div>
</template>

<script>
import Loading from '~/components/Loading.vue';

import { mapActions, mapGetters } from 'vuex';
import { TweenMax } from 'gsap';

export default {
	components: { Loading },

	computed: {
    ...mapGetters({
      preloader: 'preloaderStatus'
    })
  },

	watch : {
		preloader : function (newValue, oldValue) {
			if (newValue === 'hiding' && oldValue === 'hidden') {
				TweenMax.to(this.$refs.loading.$el, 1, {
					autoAlpha: 0,
					ease: Power2.easeOut,
					onComplete: () => {
						this.hiddenPreloader();
					}
				});
			}
		}
	},

	methods: {
		...mapActions([
			'hiddenPreloader'
	  ])
	},

	mounted () {
		// this.$nextTick(function () {
		// 	console.log('ALL mounted');
		// });
  },
}
</script>

<style>
.app {
	/*& .content {
		position: relative;
    z-index: 10;
    height: 100vh;
	}*/
}
</style>

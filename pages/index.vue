<template>
  <div class="page">
    <div class="content" ref="content">
			<page-header>
				<push-in>
					<h1 class="heading" ref="heading" v-if="$store.state.isMobile !== true">
						<reveal ref="reveal1" primaryColor>Hey, I'm  <strong>Robert Bue</strong>, an award-winning </reveal>
						<reveal ref="reveal2" primaryColor><strong>developer</strong> and <strong>interaction designer</strong>.</reveal>
					</h1>
					<h1 class="heading" ref="heading" v-if="$store.state.isMobile === true">
						<reveal ref="reveal1" primaryColor>Hey, I'm  <strong>Robert Bue</strong>, an </reveal>
						<reveal ref="reveal2" primaryColor>award-winning <strong>developer</strong> </reveal>
						<reveal ref="reveal3" primaryColor>and <strong>interaction designer</strong>.</reveal>
					</h1>
				</push-in>
				<top-header text="Nice to meet you" aria-hidden="true" ref="topHeader" />
			</page-header>
			<push-in>
				<p class="intro" ref="intro">
					<reveal ref="reveal4">I work as Technical Director and developer at Good Morning Naug in Oslo, Norway. <br />I enjoy working on immersive, interactive experiences as much as large scale applications.</reveal>
				</p>

				<btn href="/about" ref="button" class="large">Get to know me</btn>
				<!-- <btn href="/work">Selected work</btn> -->
			</push-in>
		</div>
		<picture class="bg" ref="bg">
			<span role="img" aria-label="Profile picture of Robert Bue"></span>
			<img src="~/static/images/robert-bue-v2.jpg" alt="Robert Bue" aria-hidden="true">
		</picture>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import TopHeader from '~/components/TopHeader.vue';
import PushIn from '~/components/PushIn.vue';
import Btn from '~/components/Btn.vue';

import { mapGetters } from 'vuex';
import { TweenMax } from 'gsap';

let comp;

export default {
	components: {
    PageHeader,
		TopHeader,
		PushIn,
		Btn
  },

	data: function () {
    return {
			doneLoading: false
			//  :active="topHeaderActive"
		}
  },

	computed: {
    ...mapGetters([
      'preloaderStatus'
    ])
  },

	watch : {
		doneLoading : function (value) {
			this.$store.dispatch('hidePreloader');
		},
		preloaderStatus : function (newValue, oldValue) {
			if (newValue === 'hidden' && oldValue === 'hiding') {
				this.complete();
			}
		}
	},

	methods: {
		preloader: function () {
			const images = [...this.$el.querySelectorAll('img')];

	    let assetsLoaded = 0;

	    images.forEach(image => {
	      assetsLoaded++;

				if (image.complete) {
	        if (assetsLoaded === images.length) {
	          this.doneLoading = true;
	        }
	      } else {
	        image.onload = () => {
	          if (assetsLoaded === images.length) {
	            this.doneLoading = true;
	          }
	        }
	      }
	    });
		},

		intro: function() {
			this.fadeElements = [
				// this.$refs.heading,
				// this.$refs.topHeader.$el,
				// this.$refs.intro,
				// this.$refs.topHeader.$refs.reveal.$el,
				this.$refs.reveal4.$el,
				this.$refs.button.$el,
				// this.$refs.bg
			];

			this.revealElements = [];

			if (this.$refs.topHeader.$refs.reveal) {
				this.revealElements.push(this.$refs.topHeader.$refs.reveal);
			}

			if (this.$refs.reveal1) {
				this.revealElements.push(this.$refs.reveal1);
			}

			if (this.$refs.reveal2) {
				this.revealElements.push(this.$refs.reveal2);
			}

			if (this.$refs.reveal3) {
				this.revealElements.push(this.$refs.reveal3);
			}

			const revealTls = this.revealElements.map((el) => {
				return new TimelineMax()
				.set(el.$refs.content, { autoAlpha: 0, immediateRender: true })
				.set(el.$refs.reveal, { scaleX: 0, immediateRender: true })
				.to(el.$refs.reveal, 1, { scaleX: 1, ease: Expo.easeInOut })
				.set(el.$refs.content, { autoAlpha: 1 })
				.to(el.$refs.reveal, 0.6, { scaleX: 0, transformOrigin: '100% 50% 0px', ease: Expo.easeInOut });
			});

			this.introTL = new TimelineMax({ paused: true })
			.set(this.fadeElements, { autoAlpha: 0, y: this.$store.state.isMobile ? -10 : -15, immediateRender: true })
			.set(this.$refs.topHeader.$refs.line, { scaleX: 0, immediateRender: true })
			.to(this.$refs.bg, 3, { autoAlpha: this.$store.state.isMobile ? 0.5 : 1, ease: Power2.easeOut })
			// .set(this.$refs.bg, { scale: 1.05, autoAlpha: 0, transformOrigin: '50% 50%', immediateRender: true })
			.add(revealTls, 0, 'normal', 0.2)
			.staggerTo(this.fadeElements, 1, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, 0.2, 1.6)
			.to(this.$refs.topHeader.$refs.line, 0.6, { scaleX: 1, ease: Expo.easeInOut }, 1.4)
			// .to(this.$refs.bg, 3, { scale: 1, autoAlpha: 1, ease: Power2.easeOut }, 1.8);
		},

		complete: function () {
			this.introTL.play();
		}
	},

	created () {
		// console.log('index is created', this._uid, this.$el);

		comp = this;
  },

	beforeMount() {
		// console.log('before mount', this._uid, this.$el);
	},

	mounted () {
		this.intro();

		if (!comp.transition) {
			this.$nextTick(function () {
				this.preloader();
		  });
		}
  },

	transition: {
		beforeEnter: function (el) {
			comp.transition = true;
	    // console.log('beforeEnter', this._uid, this.$el);
	  },

		enter: function (el, done) {
	    // console.log('enter2', this._uid, this.$el);
	    done();
	  },

		afterEnter: function (el) {
			// console.log('afterEnter', this._uid, this);

			// this.preloader();

			comp.preloader();
		},

		leave: function (el, done) {
			TweenMax.to([comp.$refs.content, comp.$refs.bg], 0.25, {
				autoAlpha: 0,
				ease: Power2.easeOut,
				onComplete: () => {
					done();
				}
			});
	  }
	}
}
</script>

<style scoped>
.page {
	display: flex;
	width: 100%;
	height: 100vh;
	overflow: hidden;

	& .content {
		position: relative;
		z-index: 2;

		align-self: center;
		margin-left: 6.5%;
		margin-left: 5%;
		padding-bottom: 80px;

		@media (--medium) {
			margin-left: 5%;
			padding-bottom: 40px;
			/*max-width: 550px;*/
		}

		@media (--xlarge) {
			margin-left: 10%;
			padding-bottom: 40px;
		}

		@media (--low) {
			padding-bottom: 0px;
		}

		@media screen and (min-width:320px) and (max-width:767px) and (orientation:landscape) {
			padding-bottom: 0;
			padding-top: 30px;

			&.content .heading {
				max-width: 500px;
			}

			&.content .intro {
				max-width: 420px;
			}

			&.content .button {
				margin-bottom: 0;
			}
		}

		& .pageHeader .header {
			display: none;

			@media (--medium) {
				display: block;
			}
		}

		& .heading {
			font-family: var(--font-body);
			font-size: 21px;
			font-size: 22px;
			font-weight: var(--font-weight-normal);
			line-height: 1.3;

			max-width: 270px;
			max-width: 290px;
			margin-bottom: 10px;

			@media (--medium) {
				font-size: 34px;

				max-width: 650px;
				margin-bottom: 25px;
			}

			@media (--large) {
				font-size: 44px;
				max-width: 980px;
			}


			/*& .mask:nth-child(2) {
				font-size: 23px;
			}

			& .mask:nth-child(3) {
				font-size: 23px;
			}*/

			@media (--medium) {
				& .mask:nth-child(2) {
					font-size: 34px;
				}

				& .mask:nth-child(3) {
					font-size: 34px;
				}
			}

			@media (--large) {
				& .mask:nth-child(2) {
					font-size: 44px;
				}

				& .mask:nth-child(3) {
					font-size: 44px;
				}
			}


			& br {
				display: none;

				@media (--medium) {
					display: block;
				}
			}

			& strong {
				font-weight: var(--font-weight-semibold);
			}
		}

		/*
		& .intro {
			max-width: 400px;
			margin-bottom: 40px;

			font-size: 16px;
			font-weight: var(--font-weight-medium);

			font-size: 20px;
			font-weight: var(--font-weight-normal);
			max-width: 680px;
			max-width: 980px;

			max-width: 280px;
			color: var(--color-primary);

			margin-bottom: 10px;

			@media (--medium) {
				font-size: 44px;

				max-width: 980px;
				margin-bottom: 25px;
			}

			& br {
				display: none;

				@media (--medium) {
					display: block;
				}
			}

			& strong {
				font-weight: var(--font-weight-semibold);
			}
		}
		*/

		& .intro {
			margin-bottom: 30px;
			max-width: 280px;

			font-size: 13px;
			font-size: 15px;
			line-height: 1.7;
			font-weight: var(--font-weight-medium);
			color: var(--color-white);
			opacity: 0.5;
			opacity: 1;

			@media (--medium) {
				margin-bottom: 50px;
				max-width: 420px;
				/*max-width: 420px;*/

				font-size: 20px;
			}

			@media (--large) {
				max-width: 820px;
			}

			/*@media screen and (min-width: 1280px) and (min-height: 700px) {
				max-width: 820px;
			}*/

			& br {
				display: none;
				@media (--medium) {
					display: inline-block;
				}
			}
		}
	}

	& .button {
		margin-bottom: 10px;

		@media (--medium) {
			margin-bottom: 0;
		}
	}

	& .bg {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100vh;

		overflow: hidden;

		background: url('~/static/images/robert-bue-v2-bw.jpg');
		background-size: cover;
		background-position: 60%;
		background-repeat: no-repeat;

		visibility: hidden;

		@media (--medium) {
			background-image: url('~/static/images/robert-bue-v2-hq.jpg');
			background-position: top center;
			background-position: 0 40%;
			background-position: center;
		}

		@media (--large) {
			background-position: top center;
		}

		@media (--low) {
			background-position: center center;
		}

		/*@media screen and (min-width:320px) and (max-width:767px) and (orientation:landscape) {
			background-position: 0 30%;
		}*/

		& img {
			visibility: hidden;
		}
	}
}

.red {
	font-size: var(--sizes-medium);
  color: var(--yo);

	@media (--small) {
		font-size: 30px;
	}

	@media (--medium) {
		font-size: 50px;
	}
}
</style>

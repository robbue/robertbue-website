<template>
  <div class="page">
    <div class="row content" ref="content">
			<page-header>
				<push-in>
					<h1 class="heading" ref="heading">
						<reveal ref="reveal1" primaryColor>Get in </reveal><br />
						<reveal ref="reveal2" primaryColor>touch</reveal>
					</h1>
				</push-in>
				<top-header text="Say hi or stalk me" :active="topHeaderActive" ref="topHeader" />
			</page-header>

			<push-in>
				<p class="intro" ref="text"><reveal ref="reveal3">Whatever it is, you can talk to me.</reveal></p>

				<div class="contactItems" ref="items">
					<div class="left">
						<list-section heading="Email">
							<section-item><a href="mailto:robert@robertbue.no">robert@robertbue.no</a></section-item>
						</list-section>

						<list-section heading="Instagram" class="last">
							<section-item><a href="https://www.instagram.com/robbue/" target="_blank">instagram.com/robbue</a></section-item>
						</list-section>
					</div>
					<div class="right">
						<list-section heading="Twitter">
							<section-item><a href="https://twitter.com/robert_bue" target="_blank">twitter.com/robert_bue</a></section-item>
						</list-section>

						<list-section heading="LinkedIn" class="last">
							<section-item><a href="https://www.linkedin.com/in/robert-bue/" target="_blank">linkedin.com/in/robert-bue</a></section-item>
						</list-section>
					</div>
				</div>
			</push-in>
		</div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import TopHeader from '~/components/TopHeader.vue';
import PushIn from '~/components/PushIn.vue';
import Btn from '~/components/Btn.vue';
import SectionDetail from '~/components/SectionDetail.vue';
import ListSection from '~/components/ListSection.vue';
import SectionItem from '~/components/SectionItem.vue';
import revealMixin from '~/utilities/revealMixin.js';

import { mapGetters } from 'vuex';
import { TweenMax } from 'gsap';
let comp;

export default {
	components: {
    PageHeader,
		TopHeader,
		PushIn,
		Btn,
		SectionDetail,
		SectionItem,
		ListSection
  },

	data: function () {
    return {
			topHeaderActive: 1
		}
  },

	computed: {
    ...mapGetters([
      'preloaderStatus'
    ])
  },

	watch : {
		preloaderStatus : function (newValue, oldValue) {
			if (newValue === 'hidden' && oldValue === 'hiding') {
				this.complete();
			}
		}
	},

	head () {
    return {
      title: 'Get in touch',
      meta: [
        { name: 'description', content: '' }
      ]
    }
  },

	methods: {
		intro: function() {
			this.fadeElements = [
				this.$refs.text,
				...this.$refs.items.children[0].children,
				...this.$refs.items.children[1].children,
			];

			this.revealElements = [
				this.$refs.topHeader.$refs.reveal,
				this.$refs.reveal1,
				this.$refs.reveal2,
				// this.$refs.reveal3
			];

			const revealTls = this.revealElements.map((el) => {
				return new TimelineMax()
				.set(el.$refs.content, { autoAlpha: 0, immediateRender: true })
				.set(el.$refs.reveal, { scaleX: 0, immediateRender: true })
				.to(el.$refs.reveal, 1, { scaleX: 1, ease: Expo.easeInOut })
				.set(el.$refs.content, { autoAlpha: 1 })
				.to(el.$refs.reveal, 0.6, { scaleX: 0, transformOrigin: '100% 50% 0px', ease: Expo.easeInOut });
			});

			this.introTL = new TimelineMax({ paused: true })
			.set(this.fadeElements, { autoAlpha: 0, y: -15, immediateRender: true })
			.set(this.$refs.topHeader.$refs.line, { scaleX: 0, immediateRender: true })
			.add(revealTls, 0, 'normal', 0.2)
			.staggerTo(this.fadeElements, 0.6, { autoAlpha: 1, y: 0, ease: Circ.easeOut }, 0.2)
			.to(this.$refs.topHeader.$refs.line, 1, { scaleX: 1, ease: Expo.easeInOut });
		},

		complete: function () {
			this.introTL.play();
		}
	},

	created () {
		comp = this;
  },

	mounted () {
		this.intro();

		if (!comp.transition) {
			this.$nextTick(function () {
				this.$store.dispatch('hidePreloader');
		  });
		}
  },

	transition: {
		beforeEnter: function (el) {
			comp.transition = true;
	  },

		enter: function (el, done) {
	    done();
	  },

		afterEnter: function (el) {
			comp.complete();
		},

		leave: function (el, done) {
			TweenMax.to(comp.$refs.content, 0.25, {
				autoAlpha: 0,
				ease: Power2.easeOut,
				onComplete: () => {
					done();
				}
			});
	  }
	},

	scrollToTop: false
}
</script>

<style scoped>
.page {
	display: flex;

	@media (--medium) {
		height: 100vh;
	}

	& .content {
		padding-top: 160px;
		padding-bottom: 40px;
		margin-left: 10%;

		@media (--medium) {
			padding-top: 60px;
			align-self: center;
		}

		@media (--low) {
			padding-bottom: 20px;
		}

		& .intro {
			display: inline-block;
			margin-bottom: 0;
		}

		& .contactItems {
			margin-top: 40px;
			lost-flex-container: row;

			/*@media (--medium) {
				min-width: 460px;
			}*/

			& .left, & .right {
				lost-column: 2/2;

				@media (--medium) {
					lost-column: 1/2 0 50px;
				}
			}

			& .section {
				margin-bottom: 5px;

				white-space: nowrap;

				@media (--medium) {
					&.last {
						margin-bottom: 0;

						& .text {
							margin-bottom: 0;
						}
					}
				}



				@media (--medium) {
					margin-bottom: 20px;
				}
			}
		}
	}
}
</style>

<style>
.footer[role=contentinfo] {
	@media (--medium) {
		position: fixed;
		bottom: 45px;
	}
}
</style>

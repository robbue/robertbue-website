<template>
	<article class="item">
		<div class="inner">
			<div class="content">
				<page-header>
					<push-in>
						<h1 class="heading" ref="heading">
							<reveal ref="reveal1" primaryColor>{{ item.title }}</reveal>
						</h1>
					</push-in>
					<top-header :text="item.client" ref="topHeader" />
				</page-header>

				<push-in>
					<aside class="info" ref="info">
						<ul>
							<li>
								<strong>Role</strong>
								{{ item.role }}
							</li>
							<li>
								<strong>Date</strong>
								{{ item.date }}
							</li>
							<li>
								<strong>Agency</strong>
								{{ item.agency }}
							</li>
						</ul>
					</aside>

					<btn :href="item.path" ref="button2" class="viewproject">View project</btn>
					<a :href="item.url" class="button" ref="button" target="_blank">
						Go to site
						<div class="arrow">
							<svg class="desktop" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90.2 12">
								<path d="M90.2,6l-7.7,6V6.9H0V5.2h82.5V0L90.2,6z"/>
							</svg>

							<svg class="mobile" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.1 12">
								<path d="M20.1,6l-7.7,6V6.9H0V5.2h12.4V0L20.1,6z"/>
							</svg>
						</div>
					</a>
				</push-in>
			</div>
			<picture class="bg" ref="bg">
				<span role="img" :aria-label="item.title"></span>
				<reveal ref="revealBg" dark><div class="image" :style="{ backgroundImage: `url('${item.image}')` }"></div></reveal>
				<img src="~static/images/robert-bue.jpg" alt="Robert Bue" aria-hidden="true">
			</picture>
		</div>
	</article>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue';
import PushIn from '~/components/PushIn.vue';
import PageHeader from '~/components/PageHeader.vue';

import { TimelineMax } from 'gsap';

export default {
  props: {
		itemIndex: {
			type: Number,
			required: true
		},
		item: {
			type: Object,
			required: true
		},
		active: {
			type: Number,
			required: true
		}
  },

	components: {
    PageHeader,
		TopHeader,
		PushIn
  },

	watch: {
    active (val, oldVal) {
			if (this.active === this.itemIndex) {
				this.introTL.play();
			} else {
				this.introTL.pause();
				this.introTL.seek(0);
			}
		}
  },

	methods: {
		intro () {
			this.fadeElements = [
				...this.$refs.info.children[0].children,
				// this.$refs.button.$el
				this.$refs.button
			];

			this.revealElements = [
				this.$refs.topHeader.$refs.reveal,
				this.$refs.reveal1
			];

			const revealBg = this.$refs.revealBg.$refs;
			const line = this.$refs.topHeader.$refs.line;

			const revealTls = this.revealElements.map((el) => {
				return new TimelineMax()
				.fromTo(el.$refs.reveal, 0.6, { scaleX: 0 }, { scaleX: 1, ease: Expo.easeInOut })
				.fromTo(el.$refs.content, 0.001, { visibility: 'hidden', immediateRender: true }, { visibility: 'visible' })
				.to(el.$refs.reveal, 0.6, { scaleX: 0, transformOrigin: '100% 50% 0px', ease: Expo.easeInOut });
			});

			this.introTL = new TimelineMax({ paused: true })
			.set(this.fadeElements, { autoAlpha: 0, y: -15, immediateRender: true })
			.set(line, { scaleX: 0, immediateRender: true })
			.set(revealBg.reveal, { scaleX: 1, transformOrigin: '0% 0% 0px', immediateRender: true })
			.set(revealBg.content, { backfaceVisibility: 'hidden', immediateRender: true })
			.add(revealTls, 0, 'normal', 0.2)
			.to(revealBg.reveal, 1, { scaleY: 0, ease: Expo.easeInOut }, 'bg')
			.staggerTo(this.fadeElements, 1, { autoAlpha: 1, y: 0, ease: Circ.easeOut }, 0.2, 'bg')
			.to(line, 0.6, { scaleX: 1, ease: Expo.easeInOut }, 'bg');
		}
	},

	mounted () {
		this.intro();
	}
}
</script>

<style scoped>
.viewproject {
	display: none;
}

.item {
	position: relative;
	width: 100%;
	overflow: hidden;
	margin-bottom: 50px;

	@media (--medium) {
		height: 100vh;
		margin-bottom: 0;
	}

	& .inner {
		width: 85%;
		margin: auto;

		@media (--medium) {
			position: absolute;
			top: 15%;
			left: 6%;
			right: 6%;
			bottom: 15%;

			lost-flex-container: row;
		}
	}

	& .content {
		position: relative;
		z-index: 5;

		/*height: 100%;*/
		padding-top: 0px;

		align-self: center;

		& .info {
			margin-top: 30px;
			margin-bottom: 30px;

			@media (--medium) {
				margin-top: 50px;
				margin-bottom: 50px;
			}

			& ul {
				margin: 0;
				padding: 0;

				list-style: none;
			}

			& li {
				margin-bottom: 20px;

				font-family: var(--font-body);
				font-weight: var(--font-weight-semibold);
				font-size: 15px;
				color: var(--color-white);

				@media (--medium) {
					margin-bottom: 30px;
				}
			}

			& li strong {
				display: block;

				margin-bottom: 12px;

				font-family: var(--font-body);
				font-weight: var(--font-weight-bold);
				font-size: 14px;
				color: var(--color-grey);
			}
		}
	}

	& .bg {
		width: 100%;
		height: 170px;
		display: block;
		margin-top: 40px;

		overflow: hidden;

		@media (--medium) {
			position: absolute;
			z-index: 1;
			top: 0;
			right: 0;

			width: 80%;
			height: 100%;
			margin-top: 0;
		}

		& .image {
			position: absolute;
			width: 100%;
			height: 100%;
			/*background: url('~static/portfolio/arctic-rally.png');
			background: url('~static/images/robert-bue.jpg');*/
			background-size: cover;
			background-position: center center;
		}

		& img {
			width: 100%;
			visibility: hidden;
		}

		& .mask {
			position: absolute;
			width: 100%;
		}
	}
}
</style>

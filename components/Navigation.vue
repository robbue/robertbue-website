<template>
  <nav class="mainNav">
		<hamburger ref="hamburger" @opening="openNav" @closing="closeNav" />

		<div role="menu" id="nav" class="nav" ref="nav">
			<div class="center" ref="links">
				<nuxt-link v-for="link in links" :to="{ path: link.path }" :key="link.name" role="menuitem" @click.native="linkClicked">{{ link.label }}</nuxt-link>
			</div>

			<!-- <div class="circle" ref="circle"></div> -->
		</div>

		<div class="transition" ref="transition"></div>
  </nav>
</template>

<script>
import { TweenMax } from 'gsap';
import Hamburger from '~/components/Hamburger';
const variables = require('assets/variables');

export default {
	components: { Hamburger },

	data () {
    return {
      links: [
      	{ label: 'Home', path: '/', name: 'index' },
				{ label: 'About me', path: '/about', name: 'about' }, // Get to know me
				// { label: 'Selected work', path: '/work', name: 'work' },
				{ label: 'Contact', path: '/contact', name: 'contact' } // Get in touch
      ],
      activePath: this.$route.name,
			open: false
    }
  },

	methods: {
    openNav () {
			if (!this.mq.matches) TweenMax.to(this.$refs.transition, 0.5, { y: '0%', ease: Expo.easeInOut });
			// if (!this.mq.matches) TweenMax.fromTo(this.$refs.circle, 0.7, { autoAlpha: 1, scale: 0 }, { delay: 0.7, scale: 1, ease: Back.easeInOut });
			TweenMax.to(this.$refs.nav, 0.7, { delay: 0, y: '0%', ease: Expo.easeInOut });

			if (!this.mq.matches) TweenMax.staggerFromTo([...this.$refs.links.children], 0.8, { autoAlpha: 0, y: -10 }, { delay: 0.7, autoAlpha: 1, y: 0, ease: Circ.easeOut }, 0.2);
			this.open = true;
    },

    closeNav () {
			if (!this.mq.matches) {
				if (!this.mq.matches) TweenMax.to(this.$refs.transition, 0.8, { y: '-100%', ease: Expo.easeInOut });
				TweenMax.to(this.$refs.nav, 0.7, { y: '-100%', ease: Expo.easeInOut });
			}
			this.open = false;
    },

		linkClicked (e) {
			this.closeNav();
			this.$refs.hamburger.toggleNav();
    },

		mediaQ() {
			if (!process.browser || !matchMedia) return;

			this.mq = window.matchMedia(variables.mediaRanges['--medium']);
			this.mq.addListener(this.resize);
			this.resize(this.mq);
		},

		resize() {
			if (this.mq.matches) {
		    TweenMax.set(this.$refs.nav, { y: '0%' });
		  } else {
		    TweenMax.set([this.$refs.nav, this.$refs.transition], { y: '-100%' });
		  }
		}
  },

	mounted () {
		this.mediaQ();
	}
}
</script>

<style>
.mainNav {
	position: absolute;
	top: 0;
	right: 0;

	& .nav {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/*display: none;*/
		background: var(--color-white);
		background: var(--color-dark);

		text-align: left;

		display: flex;
	  justify-content: center;
		flex-direction: column;

		@media (--medium) {
			display: block;

			position: relative;
			background: none;
			width: auto;
			height: auto;
		}
	}

	& .transition {
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-primary);

		@media (--medium) {
			display: none;
		}
	}

	& .circle {
		position: fixed;
		z-index: 3;
		bottom: -100px;
		right: -100px;

		width: 300px;
		height: 300px;

		visibility: hidden;
		background: var(--color-primary);
		border-radius: 50%;
	}

	& a {
		position: relative;
		padding: 15px 15px;
		margin: 0 20%;
		display: inline-block;
		overflow: hidden;

		/*font-family: var(--font-header);*/
		/*letter-spacing: -0.5px;*/
		font-size: 28px;
		/*font-weight: var(--font-weight-bold);*/
		color: var(--color-dark);
		color: var(--color-white);

		/*opacity: 0.2;*/

		transition: opacity 250ms ease-out, color 250ms ease-out;
		/*transition-delay: 300ms;*/

		@media (--medium) {
			display: inline-block;
			padding: 5px 15px;
			margin: 0;

			font-size: 13px;
			font-weight: var(--font-weight-bold);
			color: var(--color-white);
			opacity: 0.4;
		}

		/*&:before {
			content: '';
			position: absolute;
			z-index: -1;
			top: 50%;
			left: 5%;

			width: 90%;
			height: 12px;
			margin-top: -6px;

			background: var(--color-primary);
			background: #333;
			opacity: 0.6;
			transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
			transform: translateX(-106%);

			@media (--medium) {
				display: none;
			}
		}*/

		&:after {
			content: '.';
			width: 10px;
			height: 10px;

			font-weight: var(--font-weight-bold);
			color: var(--color-white);
			display: inline;

			opacity: 0;

			transition: opacity 400ms ease-out;

			@media (--medium) {
				display: none;
			}
		}

		&:hover {
			opacity: 1;
			/*opacity: 1;*/
			/*color: var(--color-dark);*/

			&:before {
				transform: translateX(0%);
			}
		}

		&.nuxt-link-exact-active {
			opacity: 1;
			/*color: var(--color-primary);*/
			/*opacity: 1;*/
			/*color: var(--color-dark);*/

			&:before {
				transform: translateX(0%);
			}

			&:after {
				opacity: 1;
				color: var(--color-primary);
			}
		}
	}
}
</style>

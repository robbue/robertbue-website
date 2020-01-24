<template>
	<div role="button" class="hamburger" aria-controls="nav" aria-expanded="false" aria-label="Open navigation" ref="button" @click="toggleNav">
		<div class="line -line1"></div>
		<div class="line -line2"></div>
		<div class="line -line3"></div>
	</div>
</template>

<script>
export default {
	methods: {
		toggleNav () {
			let expanded = this.$refs.button.getAttribute('aria-expanded') === 'true' || false;
		  this.$refs.button.setAttribute('aria-expanded', !expanded);

			this.$emit(expanded ? 'closing': 'opening');

			if (expanded) {
				this.$refs.button.classList.remove('-open');
			} else {
				this.$refs.button.classList.add('-open');
			}
		}
	},
	data () {
		return {
			open: false
		}
	},
	mounted () {
		// const { top, middle, bottom } = this.$refs
		// this.tl = new TimelineMax({ paused: true })
		// this.tl.to(top, 0.2, { y: 6 }, 0)
		// this.tl.to(middle, 0.2, { opacity: 0 }, 0)
		// this.tl.to(bottom, 0.2, { y: -8 }, 0)
    //
		// this.tl.to(top, 0.2, { ease: Back.easeOut, rotation: 45 }, 0.2)
		// this.tl.to(bottom, 0.2, { ease: Back.easeOut, rotation: -45 }, 0.2)
	}
}
</script>

<style>
.hamburger {
	position: absolute;
  z-index: 30;
  top: 3px;
  right: 2px;

  width: 25px;
  height: 16px;

  cursor: pointer;
	appearance: none;

  transition: opacity 250ms ease-out;

	@media (--medium) {
		display: none;
	}

  & .line {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 100%;
    height: 1PX;

    background: var(--color-white);

    transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
    /*transition: all 200ms ease-out;*/

    &.-line1 {
      transform: translate(-50%, -520%);
    }

    &.-line2 {
      width: 80%;
      transform: translate(-37.5%, 0%);
    }

    &.-line3 {
      width: 80%;
      transform: translate(-37.5%, 520%);
    }
  }

  &:hover {
    opacity: 0.8;
  }

  /*&:hover .line {
    &.-line2 {
      width: 100%;
      transform: translate(-50%, 0%);
    }

    &.-line3 {
      width: 100%;
      transform: translate(-50%, 350%);
    }
  }*/

  &.-open .line {
    /*background: var(--color-primary);
		background: var(--color-dark);*/


    &.-line1 {
      width: 0%;
      transform: translate(-50%, 350%);
    }

    &.-line2 {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &.-line3 {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>

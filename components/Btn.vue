<template>
	<nuxt-link :to="this.href" class="button" :class="{ stroke: this.stroke === true }">
		<slot>Button</slot>
		<div class="arrow">
			<svg class="desktop" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90.2 12">
				<path d="M90.2,6l-7.7,6V6.9H0V5.2h82.5V0L90.2,6z"/>
			</svg>

			<svg class="mobile" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.1 12">
				<path d="M20.1,6l-7.7,6V6.9H0V5.2h12.4V0L20.1,6z"/>
			</svg>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		onClick: {
      type: Function,
      required: false
    },
		href: {
      type: String,
      required: false
    },
		stroke: {
			type: Boolean,
			require: false
		}
  }
}
</script>

<style>
.button {
	display: inline-block;
	padding: 13px 15px;
	/*padding-left: 0;*/
	margin-right: 10px;

	font-size: 11px;
	font-weight: var(--font-weight-semibold);
	color: var(--color-white);
	border: 1px solid var(--color-grey);
	border: 1px solid rgba(255, 255, 255, 0.1);
	/*background: var(--color-primary);
	border: 0;
	color: var(--color-dark);*/

	transition: border 250ms ease-out, opacity 250ms ease-out;

	@media (--small) {
		padding: 19px 14px;

		font-size: 12px;
	}

	@media (--medium) {
		padding: 24px 22px;
		margin-right: 20px;

		font-size: 13px;

		/*border: 1px solid rgba(255, 255, 255, 0.1);*/
	}

	& .arrow {
		width: 13px;
		display: inline-block;
		margin-left: 12px;

		transform: scaleX(1.0000001);
		backface-visibility: hidden;

		transition: transform 150ms ease-out;

		@media (--medium) {
			width: 70px;
			margin-left: 20px;
		}

		& .desktop {
			display: none;
			@media (--medium) {
				display: inline-block;
			}
		}

		& .mobile {
			display: inline-block;
			@media (--medium) {
				display: none;
			}
		}

		& svg {
			width: 100%;
			height: auto;
		}

		& path {
			fill: var(--color-primary);
		}
	}

	&.large {
		& .arrow {
			width: 50px;
			margin-left: 15px;

			@media (--medium) {
				width: 70px;
				margin-left: 20px;
			}

			& .desktop {
				display: inline-block;
			}

			& .mobile {
				display: none;
			}
		}
	}

	&.stroke {
		background: none;
		border: 0;
		color: var(--color-white);

		& .arrow {
			/*display: none;

			@media (--medium) {
				display: inline-block;
			}*/
		}

		&:hover {
			border: 0;

			opacity: 0.6;
		}
	}

	&:hover {
		color: var(--color-white);
		border: 1px solid rgba(255, 255, 255, 1);

		& .arrow path {
			fill: var(--color-white);
			/*opacity: 0.6;
			transform: scaleX(1.08);*/
		}
	}
}
</style>

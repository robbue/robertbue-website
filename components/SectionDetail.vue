<template>
	<details class="details" open>
		<summary class="summary left">
			<slot name="left"></slot>
		</summary>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</details>
</template>

<style scoped>
.details {
	margin-bottom: 25px;
	/*max-width: 500px;*/
	overflow: hidden;

	font-size: 13px;

	text-transform: uppercase;

	/*& .left {
		width: 50%;
		float: left;
	}*/

	& .left, & .right {
		line-height: 1.4;

		width: 45%;
		float: left;
	}

	& .left {
		max-width: 40%;
		max-width: 215px;
		border-right: 1px solid rgba(255, 255, 255, 0.1);

		color: var(--color-grey);
		text-transform: none;

		& strong {
			text-transform: uppercase;
			color: var(--color-white);
		}

		& a {
			font-weight: var(--font-weight-normal);
			color: var(--color-grey);
		}
	}

	& .right {
		width: 55%;
		padding-left: 10%;
	}

	& time {
		display: block;

		font-weight: var(--font-weight-bold);
		color: var(--color-primary);
	}

	& .desc {
		font-weight: var(--font-weight-normal);
		text-transform: none;
		color: var(--color-grey);
	}

	& .summary::-webkit-details-marker, & .summary::marker {
		display: none;
		content: '';
	}
}
</style>

<template>
  <header class="pageHeader">
		<slot></slot>
	</header>
</template>

<style>
.pageHeader {
	position: relative;
	z-index: 5;

	& .heading {
		font-family: var(--font-header);
		font-size: 45px;
		color: var(--color-primary);

		@media (--medium) {
			font-size: 82px;
		}

		@media (--low) {
			font-size: 72px;
		}
	}
}
</style>

<template>
  <div class="push">
		<slot></slot>
	</div>
</template>

<style>
.push {
	/*padding-left: 20px;*/

	@media (--medium) {
		padding-left: 40px;
	}
}
</style>

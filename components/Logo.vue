<template>
	<nuxt-link to="/" class="logo" role="presentation">robert<span class="dot">.</span></nuxt-link>
</template>

<style>
.logo {
  position: absolute;
	top: 0;
	left: 0;

	font-family: var(--font-header);
	font-size: 22px;
	letter-spacing: -0.5px;

	/*&:hover {
		& .dot {
			color: currentColor;
		}
	}*/
}

.dot {
	color: var(--color-primary);
	/*opacity: 0;

  animation: blink 0.5s linear forwards 3.5s;
	animation: blink 2s infinite;*/
}

@keyframes blink {
  100% {
    opacity: 1;
  }
}
</style>

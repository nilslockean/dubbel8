<script lang="ts">
	import { slide } from 'svelte/transition';
	import Logo from './logo/index.svelte';
	import Nav from './nav/index.svelte';
	import MobileNav from './nav/mobile.svelte';
	import NavButton from './nav/button.svelte';
	import SocialNav from './nav/social.svelte';

	export let isNavDrawerVisible = false;
	export const handleClick = () => {
		isNavDrawerVisible = !isNavDrawerVisible;
	};
</script>

<div class="flex lg:flex-col lg:mb-8">
	<a href="/" class="p-2 lg:my-8 w-16 h-16 md:w-28 md:h-28 lg:w-44 lg:h-44 m-auto rounded-lg">
		<Logo class="flex-shrink-0" />
	</a>

	<div class="flex-grow flex justify-end lg:justify-center">
		<NavButton {handleClick} active={isNavDrawerVisible} />
		<Nav />
	</div>

	<div class="hidden lg:block mt-8">
		<SocialNav />
	</div>
</div>

{#if isNavDrawerVisible}
	<div transition:slide>
		<MobileNav onMouseUp={handleClick} />
	</div>
{/if}

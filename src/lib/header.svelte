<script lang="ts">
	import { slide } from 'svelte/transition';
	import Logo from './logo.svelte';
	import Nav from './nav/index.svelte';
	import MobileNav from './nav/mobile.svelte';
	import NavButton from './nav/button.svelte';

	export let isNavDrawerVisible = false;
	export const handleClick = () => {
		isNavDrawerVisible = !isNavDrawerVisible;
	};
</script>

<div class="flex lg:flex-col">
	<a href="/" class="p-2 lg:my-8">
		<Logo class="flex-shrink-0 w-16 md:w-28 lg:w-44 m-auto" />
	</a>

	<div class="flex-grow flex justify-end lg:justify-center">
		<NavButton {handleClick} active={isNavDrawerVisible} />
		<Nav />
	</div>
</div>

{#if isNavDrawerVisible}
	<div transition:slide>
		<MobileNav onMouseUp={handleClick} />
	</div>
{/if}

<script lang="ts">
	import { page } from '$app/stores';
	import { mode } from '$app/env';
	import { navigation } from '../store';
	import Logo from './logo.svelte';
</script>

<header class="bg-yellow-300 py-2 lg:py-4">
	<div
		class="container pr-0 flex flex-row flex-nowrap items-stretch justify-between lg:flex-col lg:items-center relative after:absolute after:top-0 after:right-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-yellow-300"
	>
		<a href="/"><Logo /> </a>

		<nav
			class={`flex text-lg overflow-x-auto ml-4 lg:ml-0 flex-row flex-nowrap
			items-center content-center lg:flex-col lg:py-4 divide-x
			divide-yellow-500 pr-4`}
		>
			{mode}
			{#each $navigation as { title, path }}
				<a
					class:active={$page.path === path}
					href={path}
					class="whitespace-nowrap font-bold md:uppercase lg:py-1 px-4">{title}</a
				>
			{/each}
		</nav>
	</div>
</header>

<style>
</style>

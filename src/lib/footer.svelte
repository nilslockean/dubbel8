<script lang="ts">
	import { page } from '$app/stores';
	import { footerNavigation } from '../store';
	import SocialNav from './nav/social.svelte';
	const year = new Date().getFullYear();
</script>

<div class="px-4 py-2 text-center md:grid md:grid-cols-2">
	<nav class="my-2 md:text-left">
		{#each $footerNavigation as { title, path }, i}
			<a
				class:text-yellow-100={$page.url.pathname === path}
				href={path}
				class="underline hover:text-yellow-100">{title}</a
			>
			{#if i !== $footerNavigation.length - 1}
				<span class="ml-1 mr-2">&bull;</span>
			{/if}
		{/each}
	</nav>
	<div class="my-2 md:text-right">
		&copy; Dubbel8 {year}
	</div>
	<div class="lg:hidden md:col-span-2">
		<SocialNav fill="#fff" />
	</div>
</div>

<style>
	/* nav a:not(:last-child):after {
		content: '\2022';
		margin: 0 0.5rem;
		text-decoration: none;
	} */
</style>

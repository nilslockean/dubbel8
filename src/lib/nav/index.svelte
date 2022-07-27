<script lang="ts">
	import { page } from '$app/stores';
	import { navigation } from '../../store';
</script>

<nav class="text-lg hidden md:flex flex-row flex-nowrap items-center lg:flex-col lg:space-y-1">
	{#each $navigation as { title, path }}
		<a
			class:active={$page.url.pathname === path}
			class:bg-yellow-200={$page.url.pathname === path}
			href={path}
			class="flex whitespace-nowrap font-bold uppercase lg:py-2 px-4 self-stretch sm:flex items-center lg:justify-center lg:rounded-lg hover:bg-yellow-200 transition-colors"
			>{title}</a
		>
	{/each}
</nav>

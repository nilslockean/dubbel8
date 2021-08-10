<script lang="ts">
	import { page } from '$app/stores';
	import { navigation } from '../store';
	import Logo from './logo.svelte';
</script>

<header
	class="bg-yellow-300 lg:py-4 sticky top-0 divide-x divide-yellow-400 flex flex-row flex-nowrap items-stretch border-b border-yellow-400 lg:flex-col lg:divide-x-0 lg:pt-20"
>
	<a href="/" class="">
		<Logo className="flex-shrink-0 w-16 md:w-28 lg:w-44 m-auto" />
	</a>

	<nav
		class="text-lg overflow-x-auto lg:ml-0 lg:py-4 flex flex-row flex-nowrap items-center divide-x lg:divide-x-0 lg:divide-y divide-yellow-400 lg:flex-col"
	>
		{#each $navigation as { title, path, hideOnMobile }}
			<a
				class:active={$page.path === path}
				href={path}
				class="whitespace-nowrap font-bold md:uppercase lg:py-2 px-4 self-stretch sm:flex items-center lg:justify-center"
				class:flex={!hideOnMobile}
				class:hidden={hideOnMobile}>{title}</a
			>
		{/each}
	</nav>
</header>

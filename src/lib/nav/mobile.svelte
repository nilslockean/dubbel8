<script lang="ts">
	import { page } from '$app/stores';
	import { navigation } from '../../store';

	export let onMouseUp: () => void;
</script>

<nav class="bg-yellow-100 p-4 flex flex-col divide-y divide-yellow-200 md:hidden">
	{#each $navigation as { title, path }}
		<a
			on:mouseup={onMouseUp}
			class:active={$page.path === path}
			href={path}
			class="whitespace-nowrap font-bold uppercase p-2 items-center">{title}</a
		>
	{/each}
</nav>

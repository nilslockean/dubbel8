<script lang="ts">
	import Icon from './icon/index.svelte';
	export let title: string;
	export let href = '';
	export let btnText = '';
	export let h2 = false;
	export let icon = '';
</script>

<div class:mb-8={!h2}>
	{#if h2}
		<h2>{title}</h2>
	{:else}
		<h1 class="pb-3">{title}</h1>
	{/if}
	{#if href}
		<div class="md:flex flex-row items-start md:space-x-4 mt-4">
			<div class="md:w-2/3">
				<div class:intro={!h2}>
					<slot />
				</div>
			</div>

			<a class="md:w-1/3 button w-full text-center mt-6 md:mt-0" {href}>
				{#if icon}
					<Icon name={icon} baseline class="mr-1" />
				{/if}
				{btnText || title}
			</a>
		</div>
	{:else}
		<div class:intro={!h2} class="mt-4">
			<slot />
		</div>
	{/if}
</div>

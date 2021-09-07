<script lang="ts">
	import Icon from '$lib/icon/index.svelte';

	type IconListItem = {
		icon: string;
		text: string;
	};

	export let items: IconListItem[];
</script>

<ul class="list-none ml-0">
	{#each items as { icon, text }}
		<li class="py-2 flex flex-row flex-nowrap items-center">
			<span class="text-2xl mr-2"><Icon name={icon} baseline /></span>
			<span>{@html text}</span>
		</li>
	{/each}
</ul>

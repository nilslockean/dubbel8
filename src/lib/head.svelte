<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	{#if title === 'Dubbel8'}
		<title>{title} &bull; Reko klätterupplevelser på Skånes klippor</title>
	{:else}
		<title>{title} &bull; Dubbel8</title>
	{/if}
</svelte:head>

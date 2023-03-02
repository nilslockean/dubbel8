<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	{#if title === 'Dubbelåtta'}
		<title>{title} &bull; Klättra först, jobba sen</title>
	{:else}
		<title>{title} &bull; Dubbelåtta</title>
	{/if}
</svelte:head>

<script lang="ts">
	export let src: string;
	export let alt: string;
	export let webp = '';
	export let avif = '';

	let clazz = '';
	export { clazz as class };
</script>

<picture class={clazz}>
	{#if avif}
		<source srcset={avif} type="image/avif" />
	{/if}
	{#if webp}
		<source srcset={webp} type="image/webp" />
	{/if}
	<img {src} {alt} class="rounded-xl object-cover h-full" />
</picture>

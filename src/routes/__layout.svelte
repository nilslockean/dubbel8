<script lang="ts">
	import '../tailwind.css';
	import Header from '$lib/header.svelte';
	import NoScript from '$lib/noscript.svelte';
	const year = new Date().getFullYear();
</script>

<a href="#content" class="sr-only focus:not-sr-only ">Hoppa till innehåll</a>

<div class="lg:grid min-h-screen">
	<Header />

	<main id="content" class="container py-4">
		<div class="max-w-screen-md my-4 md:my-20 mx-auto md:px-8">
			<NoScript />
			<slot />
		</div>
	</main>

	<footer class="lg:col-span-2 bg-black text-white text-sm">
		<div class="px-4 py-2">
			&copy; Nils Lockean {year}
		</div>
	</footer>
</div>

<style>
	.lg\:grid {
		grid-template-columns: 260px 1fr;
		grid-template-rows: 1fr auto;
	}
</style>

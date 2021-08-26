<script lang="ts">
	import '../tailwind.css';
	import Header from '$lib/header.svelte';
	import NoScript from '$lib/noscript.svelte';
	const year = new Date().getFullYear();
</script>

<a href="#content" class="sr-only focus:not-sr-only">Hoppa till innehåll</a>

<div class="lg:grid bg-white lg:min-h-screen lg:max-h-screen">
	<header class="bg-yellow-300 lg:overflow-y-auto">
		<Header />
	</header>

	<main id="content" class="container py-4 lg:overflow-y-auto">
		<div class="max-w-5xl my-4 md:my-20 mx-auto md:px-8">
			<NoScript />
			<slot />
		</div>
	</main>

	<footer class="bg-black text-white text-sm">
		<div class="px-4 py-2">
			&copy; Dubbel8 {year}
		</div>
	</footer>
</div>

<style>
	.lg\:grid {
		grid-template-columns: 260px 1fr 1fr;
		grid-template-rows: 2fr auto;
		grid-template-areas:
			'sidebar content content'
			'sidebar footer footer';
	}
	header {
		grid-area: sidebar;
	}
	main {
		grid-area: content;
	}
	footer {
		grid-area: footer;
	}
</style>

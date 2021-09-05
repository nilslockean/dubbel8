<script lang="ts">
	import '../tailwind.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import NoScript from '$lib/noscript.svelte';
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
		<Footer />
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

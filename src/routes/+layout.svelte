<script lang="ts">
	import '../tailwind.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import NoScript from '$lib/noscript.svelte';
	import Symbols from '$lib/icon/symbols.svelte';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { PosthogClient } from '$lib/utils/PosthogClient';

	if (browser) {
		beforeNavigate(() => PosthogClient.capturePageLeave());
		afterNavigate(() => PosthogClient.capturePageView());
	}
</script>

<Symbols />

<div class="lg:grid bg-white lg:min-h-screen lg:max-h-screen">
	<header class="bg-yellow-300 lg:overflow-y-auto">
		<a href="#content" class="button sr-only focus:not-sr-only p-8 m-8 block text-center"
			>Hoppa till innehåll</a
		>
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

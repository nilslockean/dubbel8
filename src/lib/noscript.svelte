<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.remove('no-js');
	});
</script>

<noscript class="block">
	<div class="bg-gray-100 p-4 py-3 rounded-lg mb-6 ring-1 ring-gray-200 shadow">
		<p>
			Vår hemsida fungerar bättre om du <a href="https://www.enablejavascript.io/se"
				>aktiverar JavaScript i din webbläsare</a
			>.
		</p>
	</div>
</noscript>

<style>
	:global(body:not(.no-js) .no-js-only) {
		display: none;
	}
</style>

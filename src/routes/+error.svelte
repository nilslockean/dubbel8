<script context="module">
	export function load({ error: { message }, status }) {
		return {
			props: {
				status,
				message
			}
		};
	}
</script>

<script>
	import Head from '$lib/head.svelte';

	export let status;
	export let message;
</script>

<Head title="Sidan hittades inte" />

<h1>{status}</h1>

<p class="intro">{message}</p>

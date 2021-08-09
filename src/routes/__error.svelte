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
	export let status;
	export let message;
</script>

<svelte:head>
	<title>Sidan hittades inte &bull; Dubbel8</title>
</svelte:head>

<h1>{status}</h1>

<p>{message}</p>

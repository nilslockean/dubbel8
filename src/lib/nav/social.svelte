<script>
	import InstagramSquare from '../icon/instagram-square.svelte';
	import FacebookSquare from '../icon/facebook-square.svelte';

	export let fill = '';
</script>

<nav class="text-center">
	<a href="https://instagram.com/dubbel8" title="Följ oss på Instagram">
		<InstagramSquare {fill} />
	</a>
	<a href="https://facebook.com/dubbel8" title="Följ oss på Facebook">
		<FacebookSquare {fill} />
	</a>
</nav>

<style>
	nav a {
		width: 2rem;
		height: 2rem;
		display: inline-block;
		padding: 0.25rem;
	}
</style>

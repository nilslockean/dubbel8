<script lang="ts">
	import Icon from '../icon/index.svelte';
	export let fill: string | undefined;
</script>

<nav class="text-center">
	<a href="https://instagram.com/dubbel8" title="Följ oss på Instagram">
		<Icon name="instagram-square" {fill} />
	</a>
	<a href="https://facebook.com/dubbel8" title="Följ oss på Facebook">
		<Icon name="facebook-square" {fill} />
	</a>
</nav>

<style>
	nav a {
		font-size: 2rem;
	}
</style>

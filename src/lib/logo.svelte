<script lang="ts">
	import { draw } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let clazz = '';
	export { clazz as class };

	const isHome = $page.path === '/';
	let visible = !isHome;

	onMount(() => {
		visible = true;
	});

	const paths = [
		'm57.2 95.7s5.2 3 6.4 3c0 0 2 12.7 4.1 17.7.4 1 0 2-1 2.4l-4.1 1.7c0-.1-5.4-21.2-5.4-24.8z',
		'm65.3 98.6s2.5 0 4.9-1.2c0 0 .7 10.4 3.8 15.8.4.7.1 1.6-.5 2l-4.3 2.7s.5-1.5.2-2.3c-1.4-3.3-5.1-12.1-4.1-17z',
		'm52.2 84.2s1.2 13.1 12.6 13.1c8.5 0 12.3-12.2 12.3-12.2s-6.4 4.7-13.1 4.9c-8.6 1-11.8-5.8-11.8-5.8z',
		'm56.6 71.1s-4.8 12.1 8.5 9.7c12.2-2.2 8.2-5.8 8.2-5.8l4.4-11s5.6 3.5 3.2 13.3-13 11.4-18.1 11.8c-4.8.4-10.2-2.7-11.4-8.7s1.6-14.1 1.6-14.1z',
		'm72.3 39.5s1.2 5.5-.7 8.6c-2.2 3.8-10.1 13.3-12.6 19.4-2.5 6-1.7 9.7-1.7 9.7s1.5 2.7 5.9 2.7c0 0 .6-13.5 7.9-19.7s17-12.2 1.2-27.9z',
		'm64.3 79.9s5.8-.9 7-2.1c0 0 3.5-10.4 5.8-16.4 2.5-6 1.2-6 1.2-6s-7.9 6.3-9.1 8.7c-1.1 2.4-6.1 12.2-4.9 15.8z',
		'm65 55.3-3.7 6s-9.7-7.3-9.7-17 6-12.2 6-12.2v9.7c.2.2 1.4 11.1 7.4 13.5z',
		'm60.2 62.6s-2.5 3.7-3.7 7.3c0 0-7.3-9.7-7.3-14.5s2.5-7.3 2.5-7.3-1.2 6 8.5 14.5z',
		'm57.8 14s1.2 17 1.2 21.8 0 15.8 6 18.2c0 0 1.2-32.7-1.2-37.7-2.3-4.6-6-2.3-6-2.3z',
		'm66.3 54.1s1.2-36.4-2.5-40 4.8-2.5 4.8-2.5 2.5 7.3 2.5 21.8v13.6c0 .5-.2.9-.5 1.2-1 1.3-3.4 4-4.3 5.9z'
	];

	export let solid = !isHome;
	const handleDrawEnd = () => {
		solid = true;
	};
</script>

{#if visible}
	<svg
		class={clazz}
		class:solid
		viewBox="0 0 128 128"
		role="img"
		aria-labelledby="logo-title logo-description"
	>
		<title id="logo-title">Dubbel8</title>
		<desc id="logo-description"
			>Dubbel8s logotyp - en teckning av knuten som en klättrare använder för att knyta in sig i sin
			sele</desc
		>
		{#each paths as d, i}
			<path
				{d}
				fill="#fc0"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1"
				stroke-miterlimit="4"
				stroke-dasharray="none"
				paint-order="stroke fill markers"
				in:draw={{ duration: i * 200 }}
				on:introend={() => {
					if (i === paths.length - 2) {
						handleDrawEnd();
					}
				}}
			/>
		{/each}
	</svg>
{/if}

<style>
	svg path {
		transition: fill 2s;
	}
	svg.solid path {
		fill: #000;
		stroke: none;
	}
</style>

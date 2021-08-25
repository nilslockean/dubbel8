<script lang="ts">
	export let handleClick: () => void;
	export let active: boolean;
</script>

<button
	on:click={handleClick}
	class="md:hidden m-4 px-4 py-2 font-bold uppercase bg-yellow-100 rounded w-28"
>
	<span>
		{#if active}
			&cross;
		{/if}
	</span>
	Meny
</button>

<script lang="ts">
	import { MAX, getNumInstructors, getPrice } from './price';
	const max = MAX + 1;

	let nParticipants = 4;
	$: nInstructors = getNumInstructors(nParticipants);
	$: price = getPrice(nInstructors, nParticipants);
</script>

<div class="px-6 py-8 bg-slate-800 text-slate-200 rounded-lg mt-8">
	<h3 class="mb-3">Prisuträknare</h3>

	<label for="minmax-range" class="block mb-2 text-sm font-medium"
		>Antal deltagare: {nParticipants}{#if nParticipants >= max}+{/if}</label
	>
	<input
		id="minmax-range"
		type="range"
		min="1"
		{max}
		bind:value={nParticipants}
		class="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-yellow-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full  [&::-webkit-slider-thumb]:bg-yellow-300"
	/>

	<div class="mt-3">
		<!-- <p>Antal instruktörer: {nInstructors} st</p> -->
		<p><strong>Pris:</strong> {price.errorMessage || price.display}</p>
		{#if price.perPersonDisplay}
			<p><small>{price.perPersonDisplay}</small></p>
		{/if}
	</div>
</div>

<script type="ts">
	import { getPrice } from './price';

	const list = [
		{
			label: '1-4 personer',
			price: getPrice(1).display
		},
		{
			label: '5-8 personer',
			price: getPrice(2).display
		},
		{
			label: '9-12 personer',
			price: getPrice(3).display
		}
	];
</script>

<h3 class="text-base mt-4">Pris /dag inkl. moms:</h3>
<ul>
	{#each list as { label, price }}
		<li>
			{label} - <strong>{price}</strong>
		</li>
	{/each}
</ul>

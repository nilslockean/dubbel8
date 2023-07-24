<script lang="ts">
	import Head from '$lib/head.svelte';
	import CTA from '$lib/cta.svelte';
	import Price from '$lib/price.svelte';
	import Calculator from '$lib/calculator.svelte';
</script>

<Head title="Bokning" />

<CTA title="Bokning">
	<p>
		Boka en egen klätterdag och anpassa den helt efter er grupp. Möhippor, teambuilding, familjer,
		svensexor och glada kompisgäng är utmärka klätterpartners. Hos oss är klättringen natur- och
		upplevelsebaserad och styrs efter nivå och önskemål. Hör av er så skapar vi ett paket som passar
		er.
	</p>
</CTA>

<Calculator />

<div class="px-6 py-8 bg-gray-100 rounded-lg mt-8">
	<CTA
		h2
		title="Bokningsförfrågan"
		href="mailto:hej@dubbel8.se"
		btnText="hej@dubbel8.se"
		icon="rope"
	>
		<p>
			<strong>Anpassa dagen efter era önskemål.</strong> Ni väljer själva hur dags ni vill börja, hur
			länge ni vill vara ute och vad ni vill ska ingå i er klätterdag.
		</p>

		<Price />

		<p class="mt-4">
			Boka genom att skicka ett mail till <a href="mailto:hej@dubbel8.se">hej@dubbel8.se</a>.
		</p>
	</CTA>
</div>

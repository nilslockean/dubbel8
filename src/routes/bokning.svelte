<script lang="ts">
	import Head from '$lib/head.svelte';
	import CTA from '$lib/cta.svelte';
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

		<h3 class="text-base mt-4">Pris /dag inkl. moms:</h3>
		<ul>
			<li>
				2 personer - <strong>1 600 kr</strong> (800 kr /person)
			</li>
			<li>3-4 personer - <strong>2 400 kr</strong> (600-800 kr /person)</li>
			<li>5-6 personer - <strong>3 000 kr</strong> (500-600 kr /person)</li>
		</ul>

		<p class="mt-4">
			Boka genom att skicka ett mail till <a href="mailto:hej@dubbel8.se">hej@dubbel8.se</a>.
		</p>
	</CTA>
</div>

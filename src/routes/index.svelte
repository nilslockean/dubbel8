<script>
	import Head from '$lib/head.svelte';
	import Img from '$lib/img.svelte';
	import CTA from '$lib/cta.svelte';
</script>

<Head title="Dubbel8" />

<CTA title="Dubbel8" href="/prova-pa" btnText="Prova på">
	<p>
		Upplev Skåne på höjden med Dubbel8! Vi erbjuder prova på-klättringar vid Snuvestuan för både
		nybörjare och mer avancerade deltagare. <a href="/prova-pa">Läs mer om vad som ingår</a>
		eller <a href="/bokning">boka ditt eget klätterpaket</a>. Perfekt för dig som är vertikalt
		nyfiken och söker en engagerande naturupplevelse utöver det vanliga!
	</p>
</CTA>

<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
	<Img
		src="/img/FU1A3970.jpg"
		alt="Man klättrar på klippvägg"
		webp="/img/FU1A3970.webp"
		avif="/img/FU1A3970.avif"
		class="md:w-3/5"
	/>
	<Img
		src="/img/FU1A4030.jpg"
		alt="Kvinna hänger i ett klätterrep"
		webp="/img/FU1A4030.webp"
		avif="/img/FU1A4030.avif"
		class="md:w-2/5"
	/>
</div>

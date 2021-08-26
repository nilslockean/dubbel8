<script>
	import Head from '$lib/head.svelte';
	import Img from '$lib/img.svelte';
</script>

<Head title="Dubbel8" />

<div class="text-center mb-8 md:text-left">
	<h1>Dubbel8</h1>
	<div class="md:flex flex-row items-start md:space-x-4">
		<div class="md:w-2/3">
			<p class="intro">
				Upplev Skåne på höjden med Dubbel8! Vi erbjuder prova på-klättringar vid Snuvestuan för både
				nybörjare och mer avancerade deltagare. <a href="/prova-pa">Läs mer om vad som ingår</a>
				eller <a href="/bokning">boka ditt eget klätterpaket</a>. Perfekt för dig som är vertikalt
				nyfiken och söker en engagerande naturupplevelse utöver det vanliga!
			</p>
		</div>

		<a class="md:w-1/3 button w-full text-center md:mt-6" href="/prova-pa">Prova på</a>
	</div>
</div>

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

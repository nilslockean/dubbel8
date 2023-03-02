<script>
	import Head from '$lib/head.svelte';
	import Img from '$lib/img.svelte';
	import CTA from '$lib/cta.svelte';
</script>

<Head title="Dubbelåtta" />

<CTA title="Dubbelåtta" href="/prova-pa" btnText="Prova på!" icon="toprope-climber">
	<p>
		Upplev Skåne på höjden med Dubbelåtta! Vi erbjuder prova på-klättringar vid Snuvestuan för både
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

<div class="prose mt-8">
	<h2>En naturupplevelse bortom det vanliga</h2>

	<p>
		De flesta av oss mår bra av att vara ute i naturen och klättring är ännu en anledning att söka
		sig ut. Plötsligt står du bland 400 miljoner år gamla klippor i vacker skog med blicken riktad
		uppåt.
	</p>

	<figure>
		<img
			loading="lazy"
			width="1024"
			height="683"
			src="/img/lina-soffabacken-solvaggen-vidvinkel-2005-1024x683.jpeg"
			alt="Lina tittar mot Solväggen vid Soffabacken"
		/>
	</figure>

	<h2>Mat och kaffe smakar bäst ute</h2>

	<p>
		Få saker klår en bra lunch ute. Medan din kamrat är uppe på väggen sitter du vid sidan och
		tittar, fikar och hejar på.
	</p>

	<h2>Olika utmaning för var och en</h2>

	<p>
		Vissa har höjdskräck, andra kämpar med tålamodet. Vissa har svårt att lita på andra, andra
		jobbar med sitt självförtroende. Under säkra förhållanden får du utforska vad du själv gillar,
		tycker mindre om och vill uppleva igen.
	</p>

	<h2>För både kropp och sinne</h2>

	<p>
		På gymmet tränar vi specifika muskelgrupper, en i taget. I klättring hänger allt ihop. Du
		använder bål, ben, armar och pannben som en helhet.
	</p>

	<figure>
		<img
			loading="lazy"
			width="1024"
			height="717"
			src="/img/alice-uvhallsklack-krux-1906-1024x717.jpeg"
			alt="Alice sträcker sig efter handgreppet på Uvhällsklack"
		/>
	</figure>

	<h2>Från lätt till svårare</h2>

	<p>
		På en klippvägg finns vägar upp i en mängd svårighetsgrader, ofta nära varandra. Det betyder att
		både nybörjare och erfarna klättrare kan umgås på samma ställe och ha precis lika kul.
	</p>

	<h2>Det är roligt!</h2>

	<p>
		Vi tycker verkligen det! Klättring inbjuder till många skratt, nya möten och en känsla av
		självförtroende. Det är bara att rekommendera.
	</p>
</div>

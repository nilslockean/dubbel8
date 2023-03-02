<script>
	import Head from '$lib/head.svelte';
	import CTA from '$lib/cta.svelte';
	import CTABokning from '$lib/cta-bokning.svelte';
	import Img from '$lib/img.svelte';
</script>

<Head title="Om" />

<CTA title="Om Dubbelåtta">
	<p>
		Dubbelåtta är en klätterföretag med fokus på reko naturupplevelser i Skåne. Vi håller till på
		Söderåsen där lummiga skogar möter kala klippor. Skåne är inte så platt som du tror och vi vill
		visa att den lokala klättringen är en grym kombo av friluftsliv, gött häng och äventyr. Vårt mål
		är att göra insteget till klippklättring roligt och säkert för såväl nybörjare som den mer
		erfarna.
	</p>
</CTA>

<div class="max-w-prose">
	<h2>Våra klätterledare</h2>
	<p class="mt-4">
		Dubbelåtta drivs av Lina och Nils Lockean som båda är examinerade <a href="#klatterledare"
			>klätterledare</a
		>. Vi har varit tillsammans sedan 2012 och drivit företag ihop sedan 2016.
	</p>
	<p class="mt-4">
		Som ett led på vägen mot att bli auktoriserad klippklätterinstruktör är Nils utöver
		klätterledare både topprepsinstruktör inomhus och hjälpinstruktör sport.
	</p>

	<div class="mt-8 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
		<figure class="md:w-1/2">
			<Img src="/img/lina.jpeg" webp="/img/lina.webp" avif="/img/lina.avif" alt="Lina Lockean" />
			<figcaption>Lina Lockean</figcaption>
		</figure>
		<figure class="md:w-1/2">
			<Img src="/img/nils.jpeg" webp="/img/nils.webp" avif="/img/nils.avif" alt="Nils Lockean" />
			<figcaption>Nils Lockean</figcaption>
		</figure>
	</div>

	<h2 class="mt-8" id="klatterledare">Vad är en klätterledare?</h2>
	<p class="mt-4">
		Klätterledare är en utbildningsnorm som Svenska Klätterförbundet införde år 2015 för att ge de
		lokala klätterklubbarna självförtroende och kunskap att bedriva klätterverksamhet utomhus. Det
		finns inget regelverk som tvingar privata aktörer såsom Dubbelåtta att använda sig av
		klätterledare i sina arrangemang men vi har valt att examineras som klätterledare då vi är måna
		om att hålla en hög nivå på vårt säkerhetsarbete.
	</p>
	<div class="box mt-4">
		OBS! Klätterledare är inte samma sak som instruktör. Vi samarbetar med några av Sveriges mest
		erfarna klippklätterinstruktörer för att erbjuda normerade kurser i klippklättring.
	</div>
	<p class="mt-4">
		Som examinerade klätterledare har en auktoriserad klippklätterinstruktör bland annat intygat att
		vi har följande befogenheter:
	</p>
	<ul>
		<li>Planera och genomföra utfärd till lokala klippor i icke alpin terräng.</li>
		<li>Upprätta och underhålla en risk- &amp; krisplan för klipporna som vi rör oss vid.</li>
		<li>Säkra oss själva under riggning på ett sådant sätt att fallolyckor undviks helt.</li>
		<li>
			Rigga topprep i fasta formationer och fasta förankringar så som träd och olika typer av
			borr/lim bultade ankare.
		</li>
		<li>
			I samband med riggning av topprep själv kunna fira oss ned från fasta formationer eller fasta
			förankringar till bultat sportklätterankare under klippkant.
		</li>
		<li>Hjälpa nybörjare och barn att knyta in sig och ta på sig selen korrekt.</li>
		<li>Säkra nybörjare vid topprepsklättring utomhus.</li>
		<li>
			Hantera och förebygga incidenter med barn och vuxna som inte vill bli nedfirade<br />
			under topprepsklättring.
		</li>
	</ul>
</div>

<CTABokning />

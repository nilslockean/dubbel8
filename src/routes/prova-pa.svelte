<script>
	import CTA from '$lib/cta.svelte';
	import CTABokning from '$lib/cta-bokning.svelte';
	import Head from '$lib/head.svelte';
	import IconList from '$lib/iconList.svelte';
</script>

<Head title="Prova på" />

<CTA title="Prova på-klättring">
	<p>
		Kom och klättra vid Snuvestuan i Söderåsens vackra skogar! Här har klipporna formats under 400
		miljoner år och och bjuder på naturupplevelser bortom det vanliga. På en prova på-klättring
		kommer du att klättra flera turer anpassade efter din nivå. Vi kommer prata om säkerhet, hur
		klippklättring faktiskt går till och gå igenom grundläggande teknik för att du ska få ut så
		mycket som möjligt av upplevelsen.
	</p>
</CTA>

<p>
	Känslan är viktigast! Klippklättring handlar om upplevelse - inte prestation. Vi gillar att
	klättra med såväl nyfikna nybörjare som mer avancerade deltagaren som vill ut på riktig sten under
	säkra förhållanden. Givetvis är vi utbildade klätterledare enligt Svenska klätterförbundets norm,
	tror stenhårt på målgruppsanpassning och värnar om naturen vi rör oss i.
</p>

<CTABokning />

<div class="md:grid md:grid-cols-2 md:space-x-4 my-8">
	<div class="mb-4 md:mb-0">
		<h3 class="mb-2">Detta ingår</h3>
		<IconList
			items={[
				{
					text: `<a href="/om#ledare">Klätterledare</a> utbildade enligt Svenska klätterförbundets norm`,
					icon: 'torsos-female-male'
				},
				{ text: 'Utrustning (klättersele, hjälm och skor)', icon: 'harness' },
				{ text: 'Flera klätterturer i olika svårighetsgrader med rep', icon: 'toprope-climber' },
				{ text: 'Säkerhetsgenomgång och kommandon', icon: 'helmet' },
				{ text: 'Grundläggande utrustningskunskap', icon: 'carabiner' },
				{ text: 'Genomgång av grundläggande klätterteknik', icon: 'shoe' }
			]}
		/>
	</div>
	<div>
		<h3 class="mb-2">Du står själv för</h3>
		<IconList
			items={[
				{ text: 'Transport till och från parkeringen', icon: 'marker' },
				{ text: 'Mat och fika till dig själv', icon: 'trees' },
				{ text: 'Kläder efter väder', icon: 'cloud' }
			]}
		/>
		<div class="bg-gray-100 px-4 py-2 mt-4 rounded">
			<p>
				Har du egen utrustning såsom klätterskor eller sele uppmuntrar vi dig att ta med dina egna
				grejer. Annars har vi, med framförhållning, utrustning du kan låna!
			</p>
		</div>
	</div>
</div>

<script lang="ts">
	import CTA from './cta.svelte';
	import { getMinPrice } from './price';
</script>

<div class="px-6 py-8 bg-gray-100 rounded-lg mt-8">
	<CTA h2 title="Bokning" href="/bokning" btnText="Till bokningen" icon="rope">
		<p>
			Kompisgäng eller hela familjen? Möhippa, svensexa, familj, kompisar eller kanske
			företagsevent? Boka er egen klätterdag och anpassa den efter era önskemål.
		</p>
		<p class="mt-4">Priser från {getMinPrice()} kr /person.</p>
	</CTA>
</div>

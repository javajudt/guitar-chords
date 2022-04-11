<script>
	import ChordLookup from '../components/ChordLookup.svelte';
	import ChordDisplay from '../components/ChordDisplay.svelte';

	let chordDisplay;

	function chordSelected(e) {
		chordDisplay.display(e.detail.chord);
	}

	async function adminLogin(e) {}
</script>

<ChordLookup on:chord-selected={chordSelected} />
<ChordDisplay bind:this={chordDisplay} />

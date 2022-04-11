<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let invalid = false;
	async function getChord(e) {
		const chordName = e.target.chordInput.value;

		let chords = await fetch('/chords.json');
		chords = await chords.json();

		const theChord = chords.find(k => k.chordShorthand === chordName);
		if (!theChord) {
			invalid = true;
			dispatch('chord-selected', { chord: null });
		} else {
			invalid = false;
			dispatch('chord-selected', { chord: theChord });
		}
	}
</script>

<form on:submit|preventDefault={getChord}>
	<input id="chord-input" name="chordInput" placeholder="Chord" />
	<button id="chord-submit" type="submit">Go</button>
</form>

{#if invalid}
	<p>Chord does not exist</p>
{/if}

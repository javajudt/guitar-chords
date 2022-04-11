<script>
	import { onMount } from 'svelte';
	import ChordDisplay from '../components/ChordDisplay.svelte';
	import ChordEdit from '../components/ChordEdit.svelte';

	let existingChords = [];
	let chordDisplay;
	let chordEdit;

	onMount(getChords);

	async function getChords() {
		let chords = await fetch('/chords.json');
		existingChords = await chords.json();
	}

	function selectedChordChanged(e) {
        chordEdit.edit(existingChords[e.target.value])
		chordDisplay.display(existingChords[e.target.value]);
	}
</script>

<form>
	<label id="existing-chords-label" for="existingChords">Chords</label>
	<select id="existing-chords-select" name="existingChords" on:change={selectedChordChanged}>
		<option value="DEFAULT">-----</option>
		{#each existingChords as chord, i}
			<option value={i}>{chord.title}</option>
		{/each}
	</select>
	<button id="add-chord-button" type="submit">Add</button>
</form>

<ChordEdit bind:this={chordEdit} />
<ChordDisplay bind:this={chordDisplay} />

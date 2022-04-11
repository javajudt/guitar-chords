<script>
	let theChord;
	export function edit(chord) {
		theChord = chord;
	}

	async function save(e) {
		console.log(e.target.chordShorthand.value);
		let data = new FormData(e.target);
		await fetch(`/chords.json`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: {
				chordPatch: {
					id: e.target.chordId.value,
					chordShorthand: e.target.chordShorthand.value,
					title: e.target.title.value
				}
			}
		});
	}
</script>

{#if theChord}
	<form on:submit|preventDefault={save}>
		<div>
			<input
				name="chordId"
				value={theChord.id}
				disabled
				readonly
				hidden
				style="display:none"
				aria-hidden="true" />
		</div>
		<div>
			<label for="chordShorthand">Shorthand</label>
			<input name="chordShorthand" value={theChord.chordShorthand} />
		</div>
		<div>
			<label for="title">Chord Name</label>
			<input name="title" value={theChord.title} />
		</div>

		<button type="submit">Save</button>
	</form>
{/if}

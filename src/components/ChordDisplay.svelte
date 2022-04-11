<script>
	import { SVGuitarChord } from 'svguitar';

	const chart = new SVGuitarChord('#chart');

	export function display(chord) {
		if (!chord) {
			chart.clear();
		} else {
			chart.chord(chord).draw();
		}
	}
</script>

<div id="chart" />

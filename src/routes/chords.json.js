export function get() {
    return {
        status: 200,
        headers: { 'Content-Type': "application/json" },
        body: chords
    }
}

export async function patch(e){
    const body = e.request.body.chordPatch
    console.log(e.request)
    const ch = chords.find(c=>c.chordId===body.chordId)
    const idx = chords.indexOf(ch)
    chords[idx] = {...chords[idx],...body}
}

// const chords = {
//     "Am6": [["X"], ["O"], [[2, 2]], [[2, 3]], [[1, 1]], [[2, 4]]]
// }

const chords = [
    {
        chordId: 1,
        chordShorthand: 'Am6',
        title: 'Am6',
        fingers: [
            [1, 2, '4'],
            [2, 1, '1'],
            [3, 2, '3'],
            [4, 2, '2'],
            [5, 0],
            [6, 'x']
        ],
        barres: []
    }
]
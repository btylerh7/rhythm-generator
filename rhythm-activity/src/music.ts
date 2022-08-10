import * as Tone from 'tone'
export interface Note {
    rhythm: string,
    name: string,
    value: number
}
export const notes: Note[] = [
    {rhythm: '♫',name: 'Ta-di', value: .25},
    {rhythm: '♩', name:'Ta',value: .5},
]
export const getRandomRhythm = (): Note => {
    const randomElement = notes[Math.floor(Math.random() * notes.length)]
    return randomElement
}

export const getRhythms = ():Note[] => {
    const rhythm1 = getRandomRhythm()    
    const rhythm2 = getRandomRhythm()    
    const rhythm3 = getRandomRhythm()    
    const rhythm4 = getRandomRhythm()
    return [rhythm1, rhythm2, rhythm3, rhythm4]
}
export const playSound = async (rhythm1:Note, rhythm2:Note, rhythm3:Note, rhythm4: Note) => {
    //create a synth and connect it to the main output (your speakers)
    await Tone.start()
    const lowPass = new Tone.Filter({
        frequency: 8000,
    }).toDestination()

    const snareDrum = new Tone.NoiseSynth({
        volume: 5,
        noise: {
            type: 'white',
            playbackRate: 3,
        },
        envelope: {
            attack: 0.001,
            decay: 0.2,
            sustain: 0.15,
            release: 0.03,
        },
    }).connect(lowPass)
    //play a middle 'C' for the duration of an 8th note
    let noteTime = 0
    const now = Tone.now()
    //Note one
    snareDrum.triggerAttackRelease('8n', now)

    //Note two
    noteTime = noteTime + rhythm1.value
    if (rhythm1.value === .25){
        snareDrum.triggerAttackRelease('8n', now + noteTime)
        noteTime = noteTime + .25
    }
    snareDrum.triggerAttackRelease('8n', now + noteTime)

    //Note three
    noteTime = noteTime + rhythm2.value
    if (rhythm2.value === .25){
        snareDrum.triggerAttackRelease('8n', now + noteTime)
        noteTime = noteTime + .25
    }
    snareDrum.triggerAttackRelease('8n', now + noteTime)

    // Note four
    noteTime = noteTime + rhythm3.value
    if (rhythm3.value === .25){
        snareDrum.triggerAttackRelease('8n', now + noteTime)
        noteTime = noteTime + .25
    }
    snareDrum.triggerAttackRelease('8n', now + noteTime)

    if (rhythm4.value == .25) {
        noteTime = noteTime + .25
        snareDrum.triggerAttackRelease('8n', now + noteTime)
        
    }
}
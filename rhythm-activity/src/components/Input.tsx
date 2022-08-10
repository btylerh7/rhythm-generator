import { useState } from "react"
import { getRhythms, playSound, Note } from '../music'
import '../styles/input.css'


function Input() {
    const [studentName, setStudentName] = useState('No one')
    const [rhythm1, setRhythm1] = useState<Note>()
    const [rhythm2, setRhythm2] = useState<Note>()
    const [rhythm3, setRhythm3] = useState<Note>()
    const [rhythm4, setRhythm4] = useState<Note>()
    const handleChange = (event: any) => {
        setStudentName(event.target.value)
    }
    const handleClick = (event: any) => {
        const [rhythm1, rhythm2, rhythm3, rhythm4] = getRhythms()
        setRhythm1(rhythm1)
        setRhythm2(rhythm2)
        setRhythm3(rhythm3)
        setRhythm4(rhythm4)
        return
    }
    const play = () => {
        if(rhythm1 && rhythm2 && rhythm3 && rhythm4) {
            playSound(rhythm1,rhythm2,rhythm3, rhythm4)
        }
        
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me to Generate a Rhythm!</button><br />
        <input onChange={handleChange} placeholder="Enter a name..." type="text" />
        <h3>{studentName === '' ? 'No one' : studentName}'s Rhythm:</h3>
        <div className="results">
            <div>
                <p className='rhythm'>{rhythm1?.rhythm}</p>
                <p className='name'>{rhythm1?.name}</p>
            </div>
            <div>
                <p className='rhythm'>{rhythm2?.rhythm}</p>
                <p className='name'>{rhythm2?.name}</p>
            </div>
            <div>
                <p className='rhythm'>{rhythm3?.rhythm}</p>
                <p className='name'>{rhythm3?.name}</p>
            </div>
            <div>
                <p className='rhythm'>{rhythm4?.rhythm}</p>
                <p className='name'>{rhythm4?.name}</p>
            </div>
            
        </div>
        <button onClick={play}>Play Rhythm</button>
    </div>
  )
}

export default Input
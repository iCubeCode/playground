import React, { useState, useMemo } from 'react'

function Memo1() {

    const [selectDate, setSelectDate] = useState(new Date())
    const [text, setText] = useState("")

    let value = useMemo(() => {
        return AgeCalculator(selectDate)
    }, [selectDate])

    console.log(value)

    return (
        <div>
            <input
                type='date'
                value={selectDate}
                onChange={(e) => {
                    setSelectDate(e.target.value)
                }}
            />
            <input
                type='text'
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
        </div>
    )
}

export default Memo1;


function AgeCalculator(selectedDate) {
    console.log('Start')
    const currentDate = new Date()

    const dt = new Date(selectedDate)

    let age = currentDate.getFullYear() - dt.getFullYear()
    console.log('End')
    return age

}
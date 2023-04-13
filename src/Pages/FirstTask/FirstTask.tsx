import { Button } from '@mui/material'
import './FirstTask.scss'
import { useState } from 'react'

const FirstTask = () => {
    const counterButtonsArray = [
        {
            id: 1,
            value: 0,
        },
        {
            id: 2,
            value: 0,
        },
        {
            id: 3,
            value: 0,
        },
    ]

    const [counter, setCounter] = useState(counterButtonsArray)
    const increment = (id: number) => {
        const newCounter = counter.map((e) =>
            e.id === id ? { ...e, value: e.value + 1 } : e
        )
        setCounter(newCounter)
    }

    return (
        <div className="first_task_container">
            <div className="first_task">
                {counter.map((e) => (
                    <Button
                        key={e.id}
                        variant="contained"
                        onClick={() => {
                            increment(e.id)
                        }}
                    >
                        Change Count ({e.value})
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default FirstTask

import { Button } from '@mui/material'
import './FirstTask.scss'
import React, { useState } from 'react'

type Props = {}

const FirstTask = (props: Props) => {
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
        const newCounter = counter.map((index) =>
            index.id === id ? { ...index, value: index.value + 1 } : index
        )
        setCounter(newCounter)
    }

    return (
        <div className="first_task_container">
            <div className="first_task">
                {counter.map((index) => (
                    <Button
                        variant="contained"
                        onClick={() => {
                            increment(index.id)
                        }}
                    >
                        Change Count ({index.value})
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default FirstTask

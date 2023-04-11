import { Button } from '@mui/material'
import './FirstTask.scss'

type Props = {}

const FirstTask = (props: Props) => {
    return (
        <div className="first_task">
            <Button variant="outlined" className="change_count">
                Change Count (0)
            </Button>
            <Button variant="outlined" className="change_count">
                Change Count (0)
            </Button>
            <Button variant="outlined" className="change_count">
                Change Count (0)
            </Button>
        </div>
    )
}

export default FirstTask

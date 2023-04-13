import { Button, Grid } from '@mui/material'
import './SecondTask.scss'
import CardItem from 'Components/Card/CardItem'
import buttonArray from 'Utils/buttonArray'
import cardArray from 'Utils/cardArray'
import TotalCount from 'Components/TotalCount/TotalCount'

const SecondTask = () => {
    return (
        <div>
            <div className="buttons_container">
                <div className="buttons">
                    {buttonArray.map(({ id, currency }) => (
                        <Button key={id} variant="contained">
                            {currency}
                        </Button>
                    ))}
                </div>
            </div>
            <div>
                <Grid container className="card_container" spacing={4}>
                    {cardArray.map(({ id, item, type, price }) => (
                        <Grid item className="grid_item" md={3} key={id}>
                            <CardItem item={item} type={type} price={price} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <TotalCount />
        </div>
    )
}

export default SecondTask

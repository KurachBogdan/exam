import { Button, Grid } from '@mui/material'
import './SecondTask.scss'
import CardItem from 'Components/Card/CardItem'

type Card = {
    id: number
    item: string
    type: string
    price: number
}

const cardArray: Card[] = [
    {
        id: 1,
        item: 'iPhone 8',
        type: 'This is iPhone 8',
        price: 400,
    },
    {
        id: 2,
        item: 'iPhone X',
        type: 'This is iPhone X',
        price: 500,
    },
    {
        id: 3,
        item: 'iPhone 14 Pro Max',
        type: 'This is iPhone 14 Pro Max',
        price: 1350,
    },
]

const SecondTask = () => {
    return (
        <>
            <div className="buttons">
                <Button variant="outlined">Usd</Button>
                <Button variant="outlined">Eur</Button>
                <Button variant="outlined">Uah</Button>
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
            <div className='total'>Total: 0 $</div>
        </>
    )
}

export default SecondTask

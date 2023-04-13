import { Button, Grid } from '@mui/material'
import './SecondTask.scss'
import CardItem from 'Components/Card/CardItem'
import buttonArray from 'Utils/buttonArray'
import cardArray from 'Utils/cardArray'
import TotalCount from 'Components/TotalCount/TotalCount'
import { useState } from 'react'

type CartDataProps = {
    totalPrice: number
}

const SecondTask = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalPrice: 0,
    })

    const addProductToTotalCount = (price: number) => {
        setCartData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

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
                            <CardItem
                                addProductToTotalCount={addProductToTotalCount}
                                cartData={cartData}
                                item={item}
                                type={type}
                                price={price}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <TotalCount cartData={cartData} />
        </div>
    )
}

export default SecondTask

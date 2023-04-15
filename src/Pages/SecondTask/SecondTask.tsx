import { Button, Grid } from '@mui/material'
import './SecondTask.scss'
import CardItem from 'Components/Card/CardItem'
import buttonArray, { CurrencyButton, Currencies } from 'Utils/buttonArray'
import cardArray from 'Utils/cardArray'
import TotalCount from 'Components/TotalCount/TotalCount'
import { useState } from 'react'

const SecondTask = () => {
    const [curr, setCurr] = useState<CurrencyButton>(buttonArray[1])
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const handleCurrency = (c: Currencies) => {
        const current = buttonArray.filter(({ currency }) => c === currency)[0]
        setCurr(current)
    }

    const addProductToTotalCount = (price: number) => {
        setTotalPrice((prevState) => prevState + price)
    }

    const calcCurrency = (price: number) => {
        return Number((price * curr.coefficient).toFixed(2))
    }

    return (
        <div>
            <div className="buttons_container">
                <div className="buttons">
                    {buttonArray.map(({ id, currency }) => (
                        <Button
                            key={id}
                            variant="contained"
                            onClick={() => handleCurrency(currency)}
                        >
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
                                addProductToTotalCount={() => addProductToTotalCount(price)}
                                item={item}
                                type={type}
                                currencySymbol={curr.currencySymbol}
                                price={calcCurrency(price)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <TotalCount
                totalPrice={calcCurrency(totalPrice)}
                currencySymbol={curr.currencySymbol}
            />
        </div>
    )
}

export default SecondTask
import { Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import './CardItem.scss'

type Props = {
    item: string
    type: string
    price: number
    currencySymbol: string
    addProductToTotalCount: (price: number) => void
}

const CardItem = ({ item, type, price, currencySymbol, addProductToTotalCount }: Props) => {
    return (
        <>
            <Card variant="outlined" className="card" sx={{ width: '240px' }}>
                <CardContent>
                    <Typography
                        sx={{ textAlign: 'center' }}
                        variant="h5"
                        component="div"
                    >
                        {item}
                    </Typography>
                    <Typography
                        sx={{ textAlign: 'center', mb: 2 }}
                        color="text.secondary"
                    >
                        {type}
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2">
                        {price} {currencySymbol}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => addProductToTotalCount(price)}
                        sx={{ margin: '0 auto', color: '#1565c0' }}
                        variant="outlined"
                        size="small"
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardItem
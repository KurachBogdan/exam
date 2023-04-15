import './TotalCount.scss'

type Props = {
    totalPrice: number
    currencySymbol: string
}

const TotalCount = ({ totalPrice, currencySymbol }: Props) => {
    return <div className="total">Total: {totalPrice} {currencySymbol}</div>
}

export default TotalCount
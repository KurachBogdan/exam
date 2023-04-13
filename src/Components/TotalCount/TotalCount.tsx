import './TotalCount.scss'

type Props = {
    cartData: { totalPrice: number }
}

const TotalCount = ({ cartData }: Props) => {
    return <div className="total">Total: {cartData.totalPrice} $</div>
}

export default TotalCount

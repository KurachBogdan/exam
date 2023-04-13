export type CurrencyButton = {
    id: number
    currency: string
    currencySymbol: string
    coefficient: number
}

const buttonArray: CurrencyButton[] = [
    {
        id: 1,
        currency: 'Uah',
        currencySymbol: '₴',
        coefficient: 36.95,
    },
    {
        id: 2,
        currency: 'Usd',
        currencySymbol: '$',
        coefficient: 1,
    },
    {
        id: 3,
        currency: 'Eur',
        currencySymbol: '€',
        coefficient: 0.9,
    },
]

export default buttonArray
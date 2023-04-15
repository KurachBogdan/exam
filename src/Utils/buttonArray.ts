export type Currencies = 'usd' | 'uah' | 'eur'

export type CurrencyButton = {
    id: number
    currency: Currencies
    currencySymbol: string
    coefficient: number
}

const buttonArray: CurrencyButton[] = [
    {
        id: 1,
        currency: 'uah',
        currencySymbol: '₴',
        coefficient: 36.95,
    },
    {
        id: 2,
        currency: 'usd',
        currencySymbol: '$',
        coefficient: 1,
    },
    {
        id: 3,
        currency: 'eur',
        currencySymbol: '€',
        coefficient: 0.9,
    },
]

export default buttonArray
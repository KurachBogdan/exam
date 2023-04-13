export type CardItem = {
    id: number
    item: string
    type: string
    price: number
}

const cardArray: CardItem[] = [
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

export const getThisObject = (array: CardItem[]) => {
    array.reduce(
        (object, card) => ({
            ...object,
            [card.id]: card,
        }),
        {}
    )
}

export default cardArray
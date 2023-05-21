type Brand = {
    id: number
    name: string
}

const brands: Brand[] = [
    {
        id: 1,
        name: 'Chery',
    },
    {
        id: 2,
        name: 'Haval',
    },
    {
        id: 3,
        name: 'Geely',
    },
    {
        id: 4,
        name: 'Exeed',
    },
    {
        id: 5,
        name: 'Audi',
    },
    {
        id: 6,
        name: 'Kia',
    },
    {
        id: 7,
        name: 'Hyundai',
    },
]

const getDefaultBrands = (): Brand[] => {
    return brands
}

export default getDefaultBrands

const getData = async (brand: string) => {
    const response = await fetch(
        `https://maximum.expert/api/stock-test?brand=${brand}`,
        {
            next: {
                revalidate: 15,
            },
        },
    )

    return response.json()
}

export default getData

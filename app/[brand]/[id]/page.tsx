import { Metadata } from 'next'
import { FC } from 'react'
// import { getCarByBrand, getRunningQueriesThunk } from '@/lib/carApi'
// import { wrapper } from '@/lib/store'

type CarPageProps = {
    params: {
        id: string
    }
}

export const generateMetadata = async (
    props: CarPageProps,
): Promise<Metadata> => {
    const {
        params: { id },
    } = props
    return { title: 'Car detail' }
}

// export const getServerSideProps = wrapper.getServerSideProps(
//     store => async context => {
//         const name = context.params?.name
//         if (typeof name === 'string') {
//             store.dispatch(getCarByBrand.initiate(name))
//         }

//         await Promise.all(store.dispatch(getRunningQueriesThunk()))

//         return {
//             props: {},
//         }
//     },
// )

const CarPage: FC<CarPageProps> = props => {
    console.log(props)
    const {
        params: { id },
    } = props

    return <div>page</div>
}

export default CarPage

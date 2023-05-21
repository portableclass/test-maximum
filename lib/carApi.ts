import { ICar } from '@/models/ICar'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

type ServerResWrapper = {
    list: ICar[]
}

export const carApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://maximum.expert/api/stock-test',
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }

        return undefined
    },
    tagTypes: [],
    endpoints: builder => ({
        getCarList: builder.query<
            { results: Array<{ name: string }> },
            undefined
        >({
            query: () => '',
        }),
        getCarByBrand: builder.query<ServerResWrapper, string>({
            query: name => `?brand=${name}`,
        }),
    }),
})

// Export hooks for usage in functional components
export const {
    useGetCarByBrandQuery,
    useGetCarListQuery,
    util: { getRunningQueriesThunk },
} = carApi

// export endpoints for use in SSR
export const { getCarByBrand, getCarList } = carApi.endpoints

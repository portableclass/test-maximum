import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { carApi } from './carApi'

export const makeStore = () =>
    configureStore({
        reducer: {
            [carApi.reducerPath]: carApi.reducer,
        },
        middleware: gDM => gDM().concat(carApi.middleware),
    })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })

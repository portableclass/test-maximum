// 'use client'

import { Metadata } from 'next'
import { FC, useEffect, useState } from 'react'
import getDefaultBrands from '@/helpers/getDefaultBrands'
import getOptionsByArray, { SelectOptions } from '@/helpers/getOptionsByArray'
import getData from '@/helpers/getData'
import CarList from '@/components/CarList'
import Filter from '@/components/Filter'
import Title from '@/components/Title'
import { ICar } from '@/models/ICar'
import styles from '../../assets/scss/pages/homePage.module.scss'
import stylesDef from '../../assets/scss/default.module.scss'

type BrandPageProps = {
    params: {
        brand: string
    }
}

// export const generateMetadata = async (
//     props: BrandPageProps,
// ): Promise<Metadata> => {
//     const {
//         params: { brand },
//     } = props

//     return { title: `Cars | ${brand}` }
// }

const BrandPage = async (props: BrandPageProps) => {
    const {
        params: { brand },
    } = props
    // console.log(props)
    // const brands = getOptionsByArray(getDefaultBrands(), 'id', 'name')
    // const [currentBrand, setCurrentBrand] = useState<SelectOptions>(
    //     brands.filter(item => item.label === brand)[0],
    // )
    // const [data, setData] = useState<any[]>([])

    // useEffect(() => {
    //     getData(currentBrand.label).then(res => {
    //         setData(res.list)
    //         console.log(res)
    //     })
    // }, [currentBrand])

    const brands = getOptionsByArray(getDefaultBrands(), 'id', 'name')
    const currentBrand = brands.filter(item => item.label === brand)[0]
    const res = await getData(brand)

    return (
        <main className={styles.main}>
            <div
                className={[
                    stylesDef.wrapper,
                    // stylesDef['wrapper-row'],
                    styles['home-title-wrapper'],
                ].join(' ')}
            >
                <Title title={`Автомобили ${brand} в СПб`} />
            </div>
            <div
                className={[
                    stylesDef.wrapper,
                    // stylesDef['wrapper-row'],
                    styles['home-wrapper'],
                ].join(' ')}
            >
                <Filter
                    title='Бренд'
                    values={brands}
                    currentValue={currentBrand?.value ?? ''}
                    // handleClick={val => setCurrentBrand(val)}
                    useBtn={false}
                />
                {res.list.length === 0 ? (
                    <Title title='Ничего не найдено' />
                ) : (
                    <CarList list={res.list} />
                )}
            </div>
        </main>
    )
}

export default BrandPage

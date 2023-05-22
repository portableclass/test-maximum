import { Metadata } from 'next'
import Link from 'next/link'
import getDefaultBrands from '@/helpers/getDefaultBrands'
import getOptionsByArray from '@/helpers/getOptionsByArray'
import getData from '@/helpers/getData'
import CarList from '@/components/CarList'
import Filter from '@/components/Filter'
import Title from '@/components/Title'
import { ICar } from '@/models/ICar'
import styles from '../../assets/scss/pages/homePage.module.scss'
import stylesDef from '../../assets/scss/default.module.scss'
import stylesFilter from '../../assets/scss/components/filter.module.scss'
import stylesButton from '../../assets/scss/components/button.module.scss'

type BrandPageProps = {
    params: {
        brand: string
    }
}

export const generateMetadata = async (
    props: BrandPageProps,
): Promise<Metadata> => {
    const {
        params: { brand },
    } = props

    return { title: `Cars | ${brand}` }
}

const BrandPage = async (props: BrandPageProps) => {
    const {
        params: { brand },
    } = props

    const brands = getOptionsByArray(getDefaultBrands(), 'id', 'name')
    const currentBrand = brands.filter(item => item.label === brand)[0]
    const res = await getData(brand)
    const eqs = getOptionsByArray(
        Array.from(
            new Set(
                res.list.map((item: ICar) => item?.feedData?.equipmentName),
            ),
        ).map((item, index) => {
            return { id: index + 1, name: item }
        }),
        'id',
        'name',
    )
    const engineCaps = getOptionsByArray(
        Array.from(
            new Set(
                res.list.map(
                    (item: ICar) => item?.feedData?.engine?.engineCapacity,
                ),
            ),
        ).map((item, index) => {
            return { id: index + 1, name: item }
        }),
        'id',
        'name',
    )

    return (
        <main className={styles.main}>
            <div
                className={[
                    stylesDef.wrapper,
                    styles['home-title-wrapper'],
                ].join(' ')}
            >
                <Title title={`Автомобили ${brand} в СПб`} />
            </div>
            <div
                className={[
                    stylesDef.wrapper,
                    styles['home-wrapper'],
                ].join(' ')}
            >
                <div
                    className={[
                        styles['home-wrapper-inside'],
                    ].join(' ')}
                >
                    <div
                        className={[
                            stylesDef['wrapper-column'],
                            stylesFilter['outside-filter'],
                        ].join(' ')}
                    >
                        <Filter
                            title='Бренд'
                            values={brands}
                            currentValue={currentBrand?.value ?? ''}
                        />
                        <Filter
                            title='Объем двигателя'
                            values={engineCaps}
                            currentValue=''
                            useBtn
                            remove
                        />
                        <Filter
                            title='Комплектация'
                            values={eqs}
                            currentValue=''
                            useBtn
                            remove
                        />
                        <Link
                            href='/'
                            className={[
                                stylesButton['button-transparent'],
                                stylesFilter['clear-filter'],
                            ].join(' ')}
                        >
                            Сбросить фильтры
                        </Link>
                    </div>
                    {res.list.length === 0 ? (
                        <Title title='Ничего не найдено' />
                    ) : (
                        <CarList list={res.list} />
                    )}
                </div>
            </div>
        </main>
    )
}

export default BrandPage

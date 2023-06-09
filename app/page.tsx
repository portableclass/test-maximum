import getOptionsByArray from '@/helpers/getOptionsByArray'
import getDefaultBrands from '@/helpers/getDefaultBrands'
import getData from '@/helpers/getData'
import Filter from '@/components/Filter'
import CarList from '@/components/CarList'
import Title from '@/components/Title'
import styles from '../assets/scss/pages/homePage.module.scss'
import stylesDef from '../assets/scss/default.module.scss'

const Home = async () => {
    const brand = 'Chery'
    const brands = getOptionsByArray(getDefaultBrands(), 'id', 'name')
    const res = await getData(brand)

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
                className={[stylesDef.wrapper, styles['home-wrapper']].join(
                    ' ',
                )}
            >
                <div className={[styles['home-wrapper-inside']].join(' ')}>
                    <Filter title='Бренд' values={brands} currentValue='' />
                    <CarList list={res.list} />
                </div>
            </div>
        </main>
    )
}

export default Home

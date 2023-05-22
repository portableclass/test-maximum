import { Metadata } from 'next'
import Image from 'next/image'
import getData from '@/helpers/getData'
import { ICar } from '@/models/ICar'
import Title from '@/components/Title'
import Slider from '@/components/Slider'
import CarAd from '@/components/CarAd'
import styles from '../../../assets/scss/pages/carPage.module.scss'
import stylesDef from '../../../assets/scss/default.module.scss'
import Warranty from '../../../public/img/carCard/warranty.svg'
import Transmission from '../../../public/img/carCard/transmission.svg'
import Engine from '../../../public/img/carCard/engine.svg'
import ModelYear from '../../../public/img/carCard/release-year.svg'

type CarPageProps = {
    params: {
        id: string
        brand: string
    }
}

export const generateMetadata = async (
    props: CarPageProps,
): Promise<Metadata> => {
    const {
        params: { id, brand },
    } = props

    const res = await getData(brand)
    const car: ICar = res.list.filter((item: ICar) => item._id === id)[0]

    return {
        title: `${car.feedData.brandName} ${car.feedData.modelName} ${car.feedData.modelYear}`,
    }
}

const CarPage = async (props: CarPageProps) => {
    const {
        params: { id, brand },
    } = props

    const res = await getData(brand)
    const car: ICar = res.list.filter((item: ICar) => item._id === id)[0]

    return (
        <main className={styles.main}>
            <div
                className={[
                    stylesDef.wrapper,
                    styles['carPage-title-wrapper'],
                ].join(' ')}
            >
                <Title
                    title={`${car.feedData.brandName} ${car.feedData.modelName} ${car.feedData.modelYear} года`}
                />
            </div>
            <div
                className={[stylesDef.wrapper, styles['carPage-vin']].join(' ')}
            >
                VIN {car.feedData.vin}
            </div>
            <div
                className={[stylesDef.wrapper, styles['carPage-wrapper']].join(
                    ' ',
                )}
            >
                <div className={[styles['carPage-wrapper-inside']].join(' ')}>
                    <div className={[styles['specs-wrapper']].join(' ')}>
                        <div
                            className={[styles['specs-price-wrapper']].join(
                                ' ',
                            )}
                        >
                            <div className={[styles['specs-price']].join(' ')}>
                                {`${car.feedData.autoPrice} ₽`}
                            </div>
                        </div>
                        <div
                            className={[styles['specs-warranty-wrapper']].join(
                                ' ',
                            )}
                        >
                            <Image
                                src={Warranty}
                                alt='warranty'
                                className={[styles['specs-warranty-icon']].join(
                                    ' ',
                                )}
                            />
                            <div
                                className={[styles['specs-warranty-desc']].join(
                                    ' ',
                                )}
                            >
                                Гарантия юридической чистоты
                            </div>
                        </div>
                        <div
                            className={[styles['specs-title-wrapper']].join(
                                ' ',
                            )}
                        >
                            <Title title='Характеристики' />
                        </div>
                        <div
                            className={[styles['specs-shorts-wrapper']].join(
                                ' ',
                            )}
                        >
                            <div
                                className={[styles['specs-shorts-item']].join(
                                    ' ',
                                )}
                            >
                                <Image
                                    src={ModelYear}
                                    alt='model-year'
                                    className={[
                                        styles['specs-shorts-item-icon'],
                                    ].join(' ')}
                                />
                                <div
                                    className={[
                                        styles['specs-shorts-item-desc'],
                                    ].join(' ')}
                                >
                                    {`${car.feedData.modelYear} год выпуска`}
                                </div>
                            </div>
                            <div
                                className={[styles['specs-shorts-item']].join(
                                    ' ',
                                )}
                            >
                                <Image
                                    src={Engine}
                                    alt='engine'
                                    className={[
                                        styles['specs-shorts-item-icon'],
                                    ].join(' ')}
                                />
                                <div
                                    className={[
                                        styles['specs-shorts-item-desc'],
                                    ].join(' ')}
                                >
                                    {`${car.feedData.engine.engineCapacity} / ${car.feedData.engine.enginePower} Л.C. / ${car.feedData.equipmentVariantFuelType}`}
                                </div>
                            </div>
                            <div
                                className={[styles['specs-shorts-item']].join(
                                    ' ',
                                )}
                            >
                                <Image
                                    src={Transmission}
                                    alt='transmission'
                                    className={[
                                        styles['specs-shorts-item-icon'],
                                    ].join(' ')}
                                />
                                <div
                                    className={[
                                        styles['specs-shorts-item-desc'],
                                    ].join(' ')}
                                >
                                    {`КП - ${car.feedData.equipmentVariantTransmissionType}`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <Slider
                            img={car.photobank.imgs
                                .map(item => item.url)
                                .filter((item, index) => index < 10)}
                        />
                    </div>
                </div>
            </div>
            <CarAd />
        </main>
    )
}

export default CarPage

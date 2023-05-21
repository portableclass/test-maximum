'use client'

import { FC } from 'react'
import { ICar } from '@/models/ICar'
import stylesDef from '../../assets/scss/default.module.scss'
import styles from '../../assets/scss/components/carList.module.scss'
import CarCard from '../CarCard'

type CarListProps = {
    list: ICar[]
}

const CarList: FC<CarListProps> = props => {
    const { list } = props
    return (
        <div
            className={[
                // stylesDef.wrapper,
                stylesDef['wrapper-column'],
                // styles['carList-wrapper'],
            ].join(' ')}
        >
            <div
                className={[
                    // stylesDef.wrapper,
                    stylesDef['wrapper-row'],
                    styles['carList-wrapper'],
                ].join(' ')}
            >
                {list.map(car => (
                    <CarCard
                        id={car._id}
                        title={`${car.feedData.brandName} ${car.feedData.modelName} ${car.feedData.equipmentName}`}
                        desc={`${car.feedData.engine.engineCapacity} / ${car.feedData.engine.enginePower} Л.C. / ${car.feedData.equipmentVariantTransmissionType}`}
                        img={car.photobank.imgs[0].url}
                        key={car._id}
                    />
                ))}
            </div>
        </div>
    )
}

export default CarList

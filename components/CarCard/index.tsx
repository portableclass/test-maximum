import { FC } from 'react'
import Link from 'next/link'
import stylesDef from '../../assets/scss/default.module.scss'
import stylesButton from '../../assets/scss/components/button.module.scss'
import styles from '../../assets/scss/components/carCard.module.scss'

type CarCardProps = {
    id: string
    title: string
    img: string
    desc: string
    brand: string
}

const CarCard: FC<CarCardProps> = props => {
    const {
        id, title, img, desc, brand,
    } = props

    return (
        <div
            className={[
                stylesDef['wrapper-row'],
                styles['carCard-wrapper'],
            ].join(' ')}
        >
            <div
                className={[
                    stylesDef['wrapper-column'],
                    styles['carCard-wrapper-inside'],
                ].join(' ')}
            >
                <img
                    src={img}
                    alt={title}
                    className={[styles['carCard-img']].join(' ')}
                />
                <h2 className={[styles['carCard-title']].join(' ')}>{title}</h2>
                <p className={[styles['carCard-desc']].join(' ')}>{desc}</p>
                <Link
                    href={`/${brand}/${id}`}
                    className={[
                        stylesButton['button-red'],
                        styles['carCard-button'],
                    ].join(' ')}
                >
                    Подробнее
                </Link>
            </div>
        </div>
    )
}

export default CarCard

import { FC } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import stylesDef from '../../assets/scss/default.module.scss'
import stylesButton from '../../assets/scss/components/button.module.scss'
import styles from '../../assets/scss/components/carCard.module.scss'
// import PhotoPreload from '../PhotoPreload'
// import carPreload from '../../public/img/carCard/preload.svg'
// import Img from '../../public/img/logo.svg'

type CarCardProps = {
    id: string
    title: string
    img: string
    desc: string
}

const CarCard: FC<CarCardProps> = props => {
    const { id, title, img, desc } = props

    // console.log(carPreload)

    return (
        <div
            className={[
                stylesDef['wrapper-row'],
                // stylesDef['wrapper-ai-center']
                styles['carCard-wrapper'],
            ].join(' ')}
        >
            <div
                className={[
                    stylesDef['wrapper-column'],
                    // stylesDef['wrapper-ai-center'],
                    styles['carCard-wrapper-inside'],
                ].join(' ')}
            >
                <img
                    src={img}
                    alt={title}
                    // width={440}
                    // height={292}
                    className={[styles['carCard-img']].join(' ')}
                />
                {/* <div
                    className={[styles['carCard-img']].join(' ')}
                >
                    <Image
                        src={img}
                        alt={title}
                        // width={'100%' as unknown as number}
                        // height='100%'
                        fill
                    />
                </div> */}
                {/* <PhotoPreload
                    image={img}
                    preload={carPreload}
                    alt={title}
                    className={[styles['carCard-img']].join(' ')}
                /> */}
                <h2 className={[styles['carCard-title']].join(' ')}>{title}</h2>
                <p className={[styles['carCard-desc']].join(' ')}>{desc}</p>
                <Link
                    href={`/${id}`}
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

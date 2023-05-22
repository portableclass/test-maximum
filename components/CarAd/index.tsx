import React, { FC } from 'react'
import Title from '../Title'
import styles from '../../assets/scss/components/carAd.module.scss'
import stylesDef from '../../assets/scss/default.module.scss'
import stylesButton from '../../assets/scss/components/button.module.scss'

const CarAd: FC = () => {
    return (
        <div
            className={[
                styles['carAd-wrapper'],
            ].join(' ')}
        >
            <div
                className={[
                    stylesDef.wrapper,
                ].join(' ')}
            >
                <div
                    className={[
                        styles['carAd-wrapper-inside'],
                    ].join(' ')}
                    style={{ backgroundImage: 'url(/img/carAd.svg)' }}
                >
                    <Title
                        title='Кредит на новый Chery Tiggo'
                        className={[styles['carAd-title']]}
                    />
                    <div
                        className={[
                            styles['carAd-desc'],
                        ].join(' ')}
                    >
                        Оформите кредит на любой автомобиль ассортимента
                        дилерского центра «Максимум»
                    </div>
                    <div className={[stylesButton['button-red-big'], styles['carAd-button']].join(' ')}>
                        Оформить
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarAd

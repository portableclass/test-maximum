import { FC } from 'react'
import Image from 'next/image'
import stylesDef from '../../assets/scss/default.module.scss'
import styles from '../../assets/scss/components/header.module.scss'
import img from '../../public/img/logo.svg'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div
                className={[
                    stylesDef.wrapper,
                    stylesDef['wrapper-ai-center'],
                ].join(' ')}
            >
                <Image src={img} alt='logo' className={styles.logo} priority />
                <span className={styles.separator} />
                <div className='d-flex w-100'>
                    <h2 className={styles.desc}>
                        Официальный дилер Максимум
                    </h2>
                </div>
            </div>
        </header>
    )
}

export default Header

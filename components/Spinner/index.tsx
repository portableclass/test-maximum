import { FC } from 'react'
import styles from '../../assets/scss/components/spinner.module.scss'

const Spinner: FC = () => {
    return (
        <div className={styles['spinner-wrapper']}>
            <div className={styles.spinner} />
        </div>
    )
}

export default Spinner

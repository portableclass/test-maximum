import { FC } from 'react'
import styles from '../../assets/scss/components/title.module.scss'

type TitleProps = {
    title: string
    className?: string[]
}

const Title: FC<TitleProps> = props => {
    const { title, className = [] } = props
    return <h1 className={[styles.title, ...className].join(' ')}>{title}</h1>
}
export default Title

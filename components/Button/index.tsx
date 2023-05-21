import { FC, MouseEvent } from 'react'
import styles from '../../assets/scss/components/button.module.scss'

type ButtonProps = {
    title: string
    type?: 'button' | 'submit' | 'reset'
    className?: string[]
    handleClick: (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) => void
}

const Button: FC<ButtonProps> = props => {
    const { title, type = 'button', className = [], handleClick } = props
    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={e => handleClick(e)}
            className={[styles.button, ...className].join(' ')}
        >
            {title}
        </button>
    )
}

export default Button

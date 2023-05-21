import { FC } from 'react'
import { SelectOptions } from '@/helpers/getOptionsByArray'
import stylesDef from '../../assets/scss/default.module.scss'
import stylesButton from '../../assets/scss/components/button.module.scss'
import styles from '../../assets/scss/components/filter.module.scss'
import Button from '../Button'
import Link from 'next/link'

type FilterProps = {
    title: string
    values: SelectOptions[]
    currentValue: number | string
    handleClick?: (opt: SelectOptions) => void
    useBtn: boolean
}

const Filter: FC<FilterProps> = props => {
    const { title, values, currentValue, handleClick, useBtn } = props

    const checkCurrentValue = (val: string | number): string[] => {
        return val === currentValue
            ? [stylesButton['button-transparent-active']]
            : []
    }

    return (
        <div
            className={[
                stylesDef['wrapper-column'],
                // stylesDef['wrapper-ai-center']
                styles['filter-wrapper'],
            ].join(' ')}
        >
            <div
                className={[
                    stylesDef['wrapper-row'],
                    // stylesDef['wrapper-ai-center']
                    styles['filter-wrapper-inside'],
                ].join(' ')}
            >
                <h3 className={[styles['filter-title']].join(' ')}>{title}</h3>
                <div
                    className={[
                        stylesDef['wrapper-row'],
                        styles['options-wrapper'],
                    ].join(' ')}
                >
                    {values.map((value, index) => {
                        return useBtn ? (
                            <Button
                                title={value.label}
                                handleClick={
                                    handleClick
                                        ? () => handleClick(value)
                                        : () => undefined
                                }
                                className={[
                                    stylesButton['button-transparent'],
                                    styles['options-button'],
                                    ...checkCurrentValue(value.value),
                                ]}
                                key={index}
                            />
                        ) : (
                            <Link
                                href={`${value.label}`}
                                className={[
                                    stylesButton['button-transparent'],
                                    styles['options-button'],
                                    ...checkCurrentValue(value.value),
                                ].join(' ')}
                                key={index}
                            >
                                {value.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Filter

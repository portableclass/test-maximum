'use client'

import { FC } from 'react'
import Title from '@/components/Title'

type ErrorProps = {
    error: Error
}

const Error: FC<ErrorProps> = props => {
    const { error } = props
    return <Title title={`something went wrong. error: ${error.message}`} />
}

export default Error

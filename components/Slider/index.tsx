'use client'

import React, { FC } from 'react'
import Carousel from 'react-bootstrap/Carousel'

type SliderProps = {
    img: string[]
}

const Slider: FC<SliderProps> = props => {
    const { img } = props
    return (
        <Carousel
            className='d-flex w-100 align-items-center'
            controls={false}
            fade
            interval={1000}
        >
            {img.map((item, index) => {
                return (
                    <Carousel.Item
                        className='d-flex w-100'
                        key={index}
                        style={{ height: '719px' }}
                    >
                        <img
                            className='d-flex w-100 h-100'
                            src={item}
                            alt={`slide-${index}`}
                            style={{ objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Slider

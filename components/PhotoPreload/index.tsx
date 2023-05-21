'use client'

import React, { FC, useState } from 'react'

interface PhotoPreloadProps {
    image: string | null
    preload: string
    alt: string
    className?: string
}

const PhotoPreload: FC<PhotoPreloadProps> = props => {
    const { image, preload, alt, className = '' } = props
    const [imageLoaded, setImageLoaded] = useState(false)

    const handleImageLoaded = () => {
        setImageLoaded(true)
    }

    return (
        <>
            {image && (
                <img
                    src={image}
                    alt={alt}
                    onLoad={handleImageLoaded}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                    className={className}
                />
            )}
            {!imageLoaded && (
                <img src={preload} alt='preload' className={className} />
            )}
        </>
    )
}

export default PhotoPreload

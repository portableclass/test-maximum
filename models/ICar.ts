interface IImage {
    _id: string
    url: string
    urlThumb: string
}

export interface ICar {
    _id: string
    feedData: {
        brandName: string
        modelName: string
        brandByClassifierName: string
        modelByClassifierName: string
        modelYear: string
        equipmentName: string
        equipmentVariantTransmissionType: string
        engine: {
            engineCapacity: number
            enginePower: number
        }
    }
    photobank: {
        imgs: IImage[]
    }
}
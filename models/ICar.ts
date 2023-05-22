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
        equipmentVariantFuelType: string
        engine: {
            engineCapacity: number
            enginePower: number
        }
        vin: string
        autoPrice: number
    }
    photobank: {
        imgs: IImage[]
    }
}

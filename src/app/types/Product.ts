export type ProductType = {
    _id: string, //dùng nodejs thì thay = string
    name: string,
    status: number,
    img: string,
    sale_price: number
}

export type ProductCreate = {
    name?: string,
    status?: number,
    
}

export type ProductCart = {
    _id: string,
    name: string,
    value: number
}
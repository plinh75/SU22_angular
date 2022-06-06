export type ProductType = {
    _id: string, //dùng nodejs thì thay = string
    name: string,
    status: number
}

export type ProductCreate = {
    name?: string,
    status?: number
}